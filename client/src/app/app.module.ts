import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCheckboxModule
} from '@angular/material';

//GraphQL and mocking library
import {
  makeExecutableSchema,
  addMockFunctionsToSchema, MockList,
} from 'graphql-tools';
import { graphql } from 'graphql';
import  casual  from 'casual-browserify/src/casual_browserify.js';

import { find, filter } from 'lodash';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenSquareComponent } from './green-square/green-square.component';

// Setup GraphQL and a mocking server
const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post] # the list of Posts by this author
  }
  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }
  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }
  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;
// let posts = {}
// const resolvers = {
//   Query: {
//     posts: () => new MockList([1,10]),
//     author: (_, { id }) => find(authors, { id: id }),
//   },
//   Mutation: {
//     upvotePost: (_, { postId }) => {
//       const post = find(posts, { id: postId });
//       if (!post) {
//         throw new Error(`Couldn't find post with id ${postId}`);
//       }
//       post.votes += 1;
//       return post;
//     },
//   },
//   Author: {
//     posts: (author) => filter(posts, { authorId: author.id }),
//   },
//   Post: {
//     author: (post) => find(authors, { id: post.authorId }),
//   },
// };

let mocks = {
  // Int: () => 6,
  //   Float: () => 22.1,
  // String: () => 'Hello',
  Author: () => ({
    id: ()=> casual.integer(1,100),
    firstName: () => casual.first_name,
    lastName: () => casual.last_name,
    posts: ()=> new MockList(3,()=>new MockList(2)),
  }),
  Post: () => ({
    id: ()=> casual.integer(1,100),
    title: () => casual.sentence,
  }),

};
const schema = makeExecutableSchema({ typeDefs: typeDefs});
addMockFunctionsToSchema({ schema, mocks });

const query = `
{
  posts {id, title, author{id, lastName}} 
}
`;
graphql(schema, query).then((result) => console.log('Got result', result));
graphql(schema, query).then((result) => console.log('Got result', result));

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: '/graphql'})
});

export function provideClient(): ApolloClient{
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    GreenSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ApolloModule.forRoot(provideClient),

    MdButtonModule,
    MdCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
