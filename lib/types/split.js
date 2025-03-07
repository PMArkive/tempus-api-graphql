import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
} from "graphql";

export default new GraphQLObjectType({
  name: "Split",
  description: "A checkpoint split within a record on a particular zone/map",

  fields: () => ({
    type: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The type of split",
    },
    zoneindex: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Which zone index of the map the split is for",
    },
    customName: {
      type: GraphQLString,
      description: "The custom name of the zone",
    },
    duration: {
      type: GraphQLFloat,
      description: "When in the run the split was, in seconds",
    },
    comparedDuration: {
      type: GraphQLFloat,
      description:
        "The difference between this split and the previous best for this player",
    },
  }),
});
