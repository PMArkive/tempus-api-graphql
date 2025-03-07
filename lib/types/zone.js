import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import MapType from "./map";

export default new GraphQLObjectType({
  name: "Zone",
  description: "A zone within a map",

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The ID of the zone",
    },
    map: {
      type: new GraphQLNonNull(MapType),
      description: "The map of the zone",
    },
    type: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The type of the zone",
    },
    zoneindex: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The index of the zone",
    },
    customName: {
      type: GraphQLString,
      description: "The custom name of the zone, if it has one",
    },
  }),
});
