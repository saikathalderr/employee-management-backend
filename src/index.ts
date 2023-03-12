import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import { GraphQLSchema } from 'graphql';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import { resolvers } from './resolvers';
import Context from './types/context';

dotenv.config();

async function bootstrap() {
  // Build the schema
  const schema: GraphQLSchema = await buildSchema({
    resolvers,
  });

  // Init express
  const app: Express = express();

  // Create the apollo server
  const server: ApolloServer<Context> = new ApolloServer({
    schema,
    context: (ctx: Context) => {
      const context = ctx;
      return context;
    },
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await server.start();

  // apply middleware to server
  server.applyMiddleware({ app });

  // app.listen on express server
  const port = process.env.PORT || 4000;
  app.listen({ port }, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
}

bootstrap();
