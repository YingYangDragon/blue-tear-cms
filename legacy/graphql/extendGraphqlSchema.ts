import { graphql } from '@keystone-6/core';
import { pingAI } from './mutations/pingAI';
import { runAIPromptOnExcerpt } from './mutations/runAIPromptOnExcerpt';

/**
 * Composess all GraphQL mutations and queries into a single schema extension.
 * This is the primary entry point for the GraphQL layer.
 */
export const extendGraphqlSchema = graphql.extend(() => ({
  mutation: {
    pingAI,
    runAIPromptOnExcerpt,
  },
}));
