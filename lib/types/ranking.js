import {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import PlayerType from "./player";

export default new GraphQLObjectType({
  name: "Ranking",
  description:
    "A particular player's ranking within the context of other runs on the same map/zone",

  fields: () => ({
    player: {
      type: new GraphQLNonNull(PlayerType),
      description: "The player for this ranking",
    },
    rank: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The rank of the player",
    },
    points: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "The number of points earned for this ranking",
    },
  }),
});
