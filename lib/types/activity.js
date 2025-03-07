import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} from "graphql";
import RecordType from "./record";

export default new GraphQLObjectType({
  name: "Activity",

  fields: () => ({
    bonusWrs: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(RecordType))),
      description: "The recent bonus world records",
      args: {
        start: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
    },
    courseWrs: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(RecordType))),
      description: "The recent course world records",
      args: {
        start: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
    },
    mapWrs: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(RecordType))),
      description: "The recent map world records",
      args: {
        start: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
    },
    mapTops: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(RecordType))),
      description: "The recent map top times",
      args: {
        start: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
    },
  }),
});
