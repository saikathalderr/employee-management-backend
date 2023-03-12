import { GraphQLError } from 'graphql';

export const throwError = (message: string) => {
  throw new GraphQLError(message);
};
