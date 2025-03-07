import { GraphQLEnumType } from "graphql";

export default new GraphQLEnumType({
  name: "Class",
  description:
    "The class, either soldier or demoman. Demoman is often abbreviated as 'demo', which is different from a demo recording",
  values: {
    SOLDIER: { value: "soldier" },
    DEMOMAN: { value: "demoman" },
  },
});
