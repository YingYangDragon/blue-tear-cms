import { graphql } from '@keystone-6/core';

/**
 * A minimal smoke test mutation to confirm the GraphQL API is running.
 */
export const pingAI = graphql.field({
  type: graphql.nonNull(graphql.String),
  async resolve() {
    return 'AI mutations are registered and operational';
  },
});
