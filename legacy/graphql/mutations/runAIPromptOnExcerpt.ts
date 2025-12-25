import { graphql } from '@keystone-6/core';
import { type Context } from '../../../.keystone/types';
import { runAIPrompt } from '../../ai';
import { createAIRun } from '../../domain/aiRuns/createAIRun';

/**
 * The main mutation for running an AI prompt against an excerpt.
 * This function orchestrates the AI call and the domain logic for persisting the result.
 */
export const runAIPromptOnExcerpt = graphql.field({
  type: graphql.nonNull(graphql.String),
  args: {
    excerptId: graphql.arg({
      type: graphql.nonNull(graphql.ID),
    }),
    promptVersionId: graphql.arg({
      type: graphql.nonNull(graphql.ID),
    }),
    productionRunId: graphql.arg({
      type: graphql.ID,
    }),
  },
  async resolve(
    _,
    { excerptId, promptVersionId, productionRunId },
    context: Context
  ) {
    // 1. Load data
    const excerpt = await context.db.Excerpt.findOne({
      where: { id: excerptId },
    });
    if (!excerpt?.text) {
      throw new Error('Excerpt not found or has no text');
    }

    const promptVersion = await context.db.AIPromptVersion.findOne({
      where: { id: promptVersionId },
    });
    if (!promptVersion?.promptText) {
      throw new Error('AIPromptVersion not found or has no promptText');
    }

    // 2. Execute AI prompt (delegated to AI layer)
    const outputText = await runAIPrompt(promptVersion.promptText, {
      excerptText: excerpt.text,
    });

    // 3. Persist AIRun (delegated to domain layer)
    await createAIRun(context.db, {
      promptVersionId,
      productionRunId,
      excerptId,
      excerptText: excerpt.text,
      outputText,
    });

    return outputText;
  },
});
