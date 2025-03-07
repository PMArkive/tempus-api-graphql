import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull,
} from "graphql";
import PlayerType from "./player";
import MapType from "./map";
import DemoType from "./demo";

export default new GraphQLObjectType({
  name: "Server",
  description: "A single game server on the Tempus network",

  fields: () => ({
    id: { type: GraphQLInt, description: "The ID of the server" },
    currentMap: {
      type: MapType,
      description: "The map the server is currently on",
    },
    freeDisk: {
      type: GraphQLInt,
      description: "The free disk space on the server",
    },
    gameVersion: {
      type: GraphQLInt,
      description: "The game version of the server",
    },
    hostName: {
      type: GraphQLString,
      description: "The hostname of the server",
    },
    maxPlayers: {
      type: GraphQLInt,
      description: "The maximum number of players allowed on the server",
    },
    nextMap: { type: MapType, description: "The next map for the server" },
    playerCount: {
      type: GraphQLInt,
      description: "The number of players currently on the server",
    },
    players: {
      type: new GraphQLList(new GraphQLNonNull(PlayerType)),
      description: "The listing of players currently on the server",
    },
    address: {
      type: GraphQLString,
      description: "The address of the server that players can connect with",
    },
    country: { type: GraphQLString, description: "The country of the server" },
    hidden: {
      type: GraphQLBoolean,
      description: "Whether or not the server is hidden",
    },
    online: {
      type: GraphQLBoolean,
      description: "Whether or not the server is online",
    },
    name: { type: GraphQLString, description: "The name of the server" },
    port: { type: GraphQLInt, description: "The port of the server" },
    shortname: {
      type: GraphQLString,
      description: "The short name of the server",
    },
    demos: {
      type: new GraphQLList(new GraphQLNonNull(DemoType)),
      description: "The recently recorded demos of the server",
    },
  }),
});
