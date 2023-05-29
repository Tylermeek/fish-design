import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

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
  link: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: String,
};

const getSize = (size: PSize): string => {
  switch (size) {
    case "small":
      return "py-1 px-2";
    case "large":
      return "py-4 px-6";
    default:
      return "py-2 px-4";
  }
};

export default defineComponent({
  name: "FButton",
  props,
  setup(props, { slots }) {
    return () =>
      !props.link ? (
        <button
          class={`    
    ${getSize(props.size)} 
    font-semibold 
    rounded-${props.round ? "full" : "lg"} 
    shadow-md 
    bg-${props.color}-${props.plain ? 100 : props.disabled ? 300 : 500}
    hover:bg-${props.color}-${props.plain ? 500 : 700}
    text-${props.plain ? props.color + "-500" : "white"}
    hover:text-white
    border-none
    cursor-${props.disabled ? 'not-allowed' :'pointer'} 
    `}
    disabled={props.disabled}

        >
          {props.icon && <i class={`i-ic-baseline-${props.icon} p-3`}></i>}
          {slots.default ? slots.default() : ""}
        </button>
      ) : (
        <link
          class={`text-${props.color}-500  hover:text-${props.color}-300 cursor-pointer `}
        ></link>
      );
  },
});
