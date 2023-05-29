import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  color: {
    type: String as PropType<IColor>,
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
  icon: String,
};

export default defineComponent({
  name: "FButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
    py-2 
    px-4 
    font-semibold 
    rounded-${props.round ? "full" : "lg"} 
    shadow-md 
    bg-${props.color}-${props.plain ? 100 : 500}
    hover:bg-${props.color}-${props.plain ? 500 : 700}
    text-${props.plain ? props.color + "-500" : "white"}
    hover:text-white
    border-none 
    cursor-pointer 
    `}
      >
        {props.icon && <i class={`i-ic-baseline-${props.icon} p-3`}></i>}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
