import { type Context } from '../../../.keystone/types';

type CreateAIRunParams = {
  promptVersionId: string;
  productionRunId?: string | null;
  excerptId: string;
  excerptText: string;
  outputText: string;
};

/**
 * Creates an AIRun record in the database.
 * This is the core domain logic for persisting the result of an AI prompt execution.
 * @param db The Keystone database API from the context.
 * @param params The data needed to create the AIRun.
 */
export async function createAIRun(
  db: Context['db'],
  params: CreateAIRunParams
) {
  const {
    promptVersionId,
    productionRunId,
    excerptId,
    excerptText,
    outputText,
  } = params;

  await db.AIRun.createOne({
    data: {
      promptVersion: {
        connect: { id: promptVersionId },
      },
      productionRun: productionRunId
        ? { connect: { id: productionRunId } }
        : undefined,
      inputData: {
        excerptId,
        excerptText,
      },
      outputText,
      status: 'completed',
    },
  });
}
