import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client

    // omit second parameter with double underscore
    // destructure the contextValue parameter
    // -> to access its child object: dataSources
    tracksForHome: (_, __, { dataSources }) => {
      // from dataSources we'll gain access to the track-api (REST)
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
