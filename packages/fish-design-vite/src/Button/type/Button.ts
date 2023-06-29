import { PropType } from "vue";

export type PColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export type PSize = "small" | "default" | "large";

export const props = {
  color: {
    type: String,
    default: "blue",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<PSize>,
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: String,
};
