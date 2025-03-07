import {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from "graphql";
import PlayerType from "./player";
import MapType from "./map";
import TiersType from "./tiers";
import DemoType from "./demo";
import ServerType from "./server";
import ZoneType from "./zone";
import ClassTypeEnum from "./class_type_enum";
import SplitType from "./split";

export default new GraphQLObjectType({
  name: "Record",
  description: "A single record on a zone of a map as a specific class",

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The ID of the record",
    },
    player: {
      type: new GraphQLNonNull(PlayerType),
      description: "The player who performed this record",
    },
    duration: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "The duration of the record in seconds",
    },
    rank: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The ranking of this record",
    },
    date: {
      type: new GraphQLNonNull(GraphQLFloat),
      description:
        "The date when this record was performed, as a unix timestamp in seconds",
    },
    tiers: {
      type: new GraphQLNonNull(TiersType),
      description: "The tiers of the zone for this record",
    },
    map: {
      type: new GraphQLNonNull(MapType),
      description: "The map for this record",
    },
    zone: {
      type: new GraphQLNonNull(ZoneType),
      description: "The zone on the map of this record",
    },
    demo: {
      type: DemoType,
      description: "The demo recording for this record, if available",
    },
    class: {
      type: new GraphQLNonNull(ClassTypeEnum),
      description: "The class with which this record was performed",
    },
    demoStartTick: {
      type: GraphQLInt,
      description: "The tick within the demo when this record began",
    },
    demoEndTick: {
      type: GraphQLInt,
      description: "The tick within the demo when this record stopped",
    },
    server: {
      type: new GraphQLNonNull(ServerType),
      description: "The server this record was performed on",
    },
    splits: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(SplitType))),
      description: "The checkpoints splits of this record",
    },
  }),
});
