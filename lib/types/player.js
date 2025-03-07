import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
} from "graphql";
import RecordType from "./record";
import ClassTypeEnum from "./class_type_enum";
import ZoneTypeEnum from "./zone_type_enum";

const Rank = new GraphQLObjectType({
  name: "Rank",
  description: "The rank of a player, either overall, soldier, or demoman",

  fields: () => ({
    points: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "The player's number of points",
    },
    rank: { type: new GraphQLNonNull(GraphQLInt), description: "The rank" },
    totalRanked: { type: new GraphQLNonNull(GraphQLInt) },
    title: {
      type: GraphQLString,
      description: "The player's title, based on their rank",
    },
  }),
});

const Ranks = new GraphQLObjectType({
  name: "Ranks",
  description: "The ranks of a player",

  fields: () => ({
    overall: {
      type: new GraphQLNonNull(Rank),
      description: "A player's overall rankings",
    },
    soldier: {
      type: new GraphQLNonNull(Rank),
      description: "A player's soldier rankings",
    },
    demoman: {
      type: new GraphQLNonNull(Rank),
      description: "A player's demoman rankings",
    },
  }),
});

const Stat = new GraphQLObjectType({
  name: "Stat",
  description:
    "Overall statistics about a player's points and completions within a single zone category and run type (pr/wr/top time)",

  fields: () => ({
    count: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "A count of the player's completions",
    },
    points: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "A count of the player's points for completions",
    },
  }),
});

const Stats = new GraphQLObjectType({
  name: "Stats",
  description:
    "Overall statistics about a player's points and completions within a single run type (pr/wr/top time)",

  fields: () => ({
    bonus: {
      type: new GraphQLNonNull(Stat),
      description: "Statistics about a player's bonus completions",
    },
    course: {
      type: new GraphQLNonNull(Stat),
      description: "Statistics about a player's course completions",
    },
    map: {
      type: new GraphQLNonNull(Stat),
      description: "Statistics about a player's map completions",
    },
    trick: {
      type: new GraphQLNonNull(Stat),
      description: "Statistics about a player's trick completions",
    },
  }),
});

const StatsCollection = new GraphQLObjectType({
  name: "StatsCollection",
  description: "Overall statistics about a player's points and completions",

  fields: () => ({
    pr: {
      type: new GraphQLNonNull(Stats),
      description: "Statistics about a player's personal records",
    },
    wr: {
      type: new GraphQLNonNull(Stats),
      description: "Statistics about a player's world records",
    },
    top: {
      type: new GraphQLNonNull(Stats),
      description: "Statistics about a player's top times",
    },
  }),
});

export default new GraphQLObjectType({
  name: "Player",

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The ID of the player",
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the player",
    },
    country: {
      type: GraphQLString,
      description:
        "The country of the player. Where they last connected to Tempus from",
    },
    countryCode: {
      type: GraphQLString,
      description: "The abbreviated country code of the player",
    },
    steamId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The Steam ID of the player",
    },
    firstSeen: {
      type: new GraphQLNonNull(GraphQLFloat),
      description:
        "When the player was first seen, as a unix timestamp in seconds",
    },
    lastSeen: {
      type: new GraphQLNonNull(GraphQLFloat),
      description:
        "When the player was last seen, as a unix timestamp in seconds",
    },
    ranks: {
      type: new GraphQLNonNull(Ranks),
      description: "The overall ranks of the player",
    },
    countryRanks: {
      type: new GraphQLNonNull(Ranks),
      description: "The country-specific ranks of the player",
    },
    stats: {
      type: new GraphQLNonNull(StatsCollection),
      description: "The overall statistics of the player",
    },
    record: {
      type: RecordType,
      description:
        "Fetch information about a particular record of this player. Requires either the class, and either the map ID or name. Can optionally be filtered by zone type, defaulting to the overall map zone",
      args: {
        mapId: { type: GraphQLInt },
        mapName: { type: GraphQLString },
        zoneType: { type: ZoneTypeEnum },
        zoneId: { type: GraphQLInt },
        class: { type: new GraphQLNonNull(ClassTypeEnum) },
      },
    },
  }),
});
