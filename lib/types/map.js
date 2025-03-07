import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import Tiers from "./tiers";
import ZoneTypeEnum from "./zone_type_enum";
import ZoneType from "./zone";
import RecordType from "./record";
import PlayerType from "./player";
import ClassTypeEnum from "./class_type_enum";

const Author = new GraphQLObjectType({
  name: "Author",
  description: "An author of a map",

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The ID of the author",
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the author",
    },
    mapCount: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The number of maps this author has created",
      resolve: (author) => author.map_count,
    },
    player: {
      type: PlayerType,
      description:
        "The author's Player, if the author is a registered Tempus player",
    },
  }),
});

const MapVideos = new GraphQLObjectType({
  name: "MapVideos",
  description: "The videos with playthroughs of a map",

  fields: () => ({
    soldier: {
      type: GraphQLString,
      description: "The URL for the video of a soldier playthrough of a map",
      resolve: (videos) =>
        videos.soldier && `https://youtube.com/watch?v=${videos.soldier}`,
    },
    demoman: {
      type: GraphQLString,
      description: "The URL for the video of a demoman playthrough of a map",
      resolve: (videos) =>
        videos.demoman && `https://youtube.com/watch?v=${videos.demoman}`,
    },
  }),
});

const Zones = new GraphQLObjectType({
  name: "Zones",
  description: "The zones for a map",

  fields: () => ({
    bonus: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The bonus zones for a map",
    },
    bonusEnd: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The bonus end zones for a map",
    },
    checkpoint: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The checkpoint zones for a map",
    },
    course: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The course zones for a map",
    },
    courseEnd: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The course end zones for a map",
    },
    linear: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The linear zones for a map",
    },
    map: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The map zones for a map",
    },
    mapEnd: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The end zones for a map",
    },
    misc: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The miscellaneous zones for a map",
    },
    trick: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ZoneType))),
      description: "The trick zones for a map",
    },
  }),
});

export default new GraphQLObjectType({
  name: "Map",
  description: "A jump map",

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The ID of the map",
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the map",
    },
    authors: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Author))),
      description: "The authors of this map",
    },
    videos: {
      type: new GraphQLNonNull(MapVideos),
      description: "Videos showing playthroughs of this map",
    },
    tiers: {
      type: new GraphQLNonNull(Tiers),
      description: "The tiers of this map",
    },
    zones: {
      type: new GraphQLNonNull(Zones),
      description: "The zones of this map",
    },
    records: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(RecordType))),
      description:
        "Player records on this map, filterable by class and zone. Later records can be fetched with a non-empty start argument",
      args: {
        zoneType: { type: ZoneTypeEnum },
        zoneId: { type: GraphQLInt },
        start: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        class: { type: new GraphQLNonNull(ClassTypeEnum) },
      },
    },
    record: {
      type: RecordType,
      description:
        "Fetch a single record on this map by providing the player and class, and optionally a zone. Without a zone, the player's map record will be fetched",
      args: {
        zoneType: { type: ZoneTypeEnum },
        zoneId: { type: GraphQLInt },
        playerId: { type: new GraphQLNonNull(GraphQLInt) },
        class: { type: new GraphQLNonNull(ClassTypeEnum) },
      },
    },
    wr: {
      type: RecordType,
      description: "Fetch the world record on this map by class",
      args: {
        class: { type: new GraphQLNonNull(ClassTypeEnum) },
      },
    },
  }),
});
