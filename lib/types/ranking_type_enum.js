import { GraphQLEnumType } from "graphql";

export default new GraphQLEnumType({
  name: "RankingType",
  description: "The type of ranking",
  values: {
    OVERALL: { value: "overall" },
    SOLDIER: { value: "soldier" },
    DEMOMAN: { value: "demoman" },
  },
});
