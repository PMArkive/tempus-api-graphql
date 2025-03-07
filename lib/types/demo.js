import {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import PlayerType from "./player";
import MapType from "./map";
import ServerType from "./server";

export default new GraphQLObjectType({
  name: "Demo",
  description:
    "A demo recording. Contains information about a particular server recording. Not the same as the abbreviation for demoman",

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The ID of this demo",
    },
    map: {
      type: new GraphQLNonNull(MapType),
      description: "The map for this demo",
    },
    filename: { type: GraphQLString, description: "The filename of this demo" },
    date: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "The date of this demo in unix seconds",
    },
    url: {
      type: GraphQLString,
      description: "The URL for downloading this demo, if available",
    },
    recording: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "If this demo is currently recording",
    },
    requested: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "If an upload of this demo has been requested",
    },
    expired: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "If the upload of this demo has expired",
    },
    deleted: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "If the upload of this demo has been deleted",
    },
    uploader: {
      type: PlayerType,
      description: "The player who uploaded this demo",
    },
    server: {
      type: new GraphQLNonNull(ServerType),
      description: "The server where this demo was recorded",
    },
  }),
});
