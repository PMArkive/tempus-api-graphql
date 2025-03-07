import { GraphQLObjectType, GraphQLInt } from "graphql";

export default new GraphQLObjectType({
  name: "Tiers",
  description:
    "The tier, or difficulty of a map. Tiers range from 1-10, and can be different for each class",

  fields: () => ({
    soldier: {
      type: GraphQLInt,
      description: "The soldier tier of a map",
      resolve: (t) => t.soldier || t[3],
    },
    demoman: {
      type: GraphQLInt,
      description: "The demoman tier of a map",
      resolve: (t) => t.demoman || t[4],
    },
  }),
});
