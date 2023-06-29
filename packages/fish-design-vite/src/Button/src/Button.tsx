import { defineComponent } from "vue";
import Icon from "../components/icon";
import "uno.css";
import { props } from "../type/Button";
import { bgColor, cursor, hoverBg, round, size, textColor } from "./class";
import styles from "../style/index.module.scss";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: "Button",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={
          `    
    ${size(props.size)} 
    ${bgColor(props)}
    ${hoverBg(props)}
    ${round(props.round)}
    ${cursor(props.disabled)}
    ${textColor(props)}
    font-semibold 
    shadow-md 
    hover:text-white
    border-none
    ` + styles.button
        }
        disabled={props.disabled}
      >
        {props.icon && <Icon icon={props.icon}></Icon>}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
