import { GraphQLEnumType } from "graphql";

export default new GraphQLEnumType({
  name: "ZoneType",
  description: "The different types of zones",
  values: {
    BONUS: { value: "bonus" },
    BONUS_END: { value: "bonus_end" },
    CHECKPOINT: { value: "checkpoint" },
    COURSE: { value: "course" },
    COURSE_END: { value: "course_end" },
    MAP: { value: "map" },
    MAP_END: { value: "map_end" },
    MISC: { value: "misc" },
    TRICK: { value: "trick" },
  },
});
