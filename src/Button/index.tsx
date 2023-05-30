import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";
import Icon from "./components/icon";

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
    type: String as PropType<PColor>,
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

const size = (size: PSize): string => {
  switch (size) {
    case "small":
      return "py-1 px-2";
    case "large":
      return "py-3 px-4";
    default:
      return "py-2 px-3";
  }
};

const bgColor = ({
  color,
  plain,
  disabled,
}: {
  color: string;
  plain: boolean;
  disabled: boolean;
}): string => `bg-${color}-${plain ? 100 : disabled ? 300 : 500}`;

const round = (round: boolean): string => `rounded-${round ? "full" : "lg"}`;
const hoverBg = ({ color, plain }: { color: string; plain: boolean }): string =>
  `hover:bg-${color}-${plain ? 500 : 700}`;
const cursor = (disabled: boolean) =>
  `cursor-${disabled ? "not-allowed" : "pointer"}`;

export default defineComponent({
  name: "FButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`    
    ${size(props.size)} 
    ${bgColor(props)}
    ${hoverBg(props)}
    ${round(props.round)}
    ${cursor(props.disabled)}
    font-semibold 
    shadow-md 
    text-${props.plain ? props.color + "-500" : "white"}
    hover:text-white
    border-none
    `}
        disabled={props.disabled}
      >
        {props.icon && <Icon icon={props.icon}></Icon>}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
