import { defineComponent, createVNode } from "vue";
const __uno = "";
const props$1 = {
  icon: String
};
const Icon = defineComponent({
  name: "Icon",
  props: props$1,
  setup(props2, {
    slots
  }) {
    return () => createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null);
  }
});
const props = {
  color: {
    type: String,
    default: "blue"
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: String
};
const size = (size2) => {
  switch (size2) {
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
  disabled
}) => `bg-${color}-${plain ? 100 : disabled ? 300 : 500}`;
const round = (round2) => `rounded-${round2 ? "full" : "lg"}`;
const hoverBg = ({
  color,
  plain
}) => `hover:bg-${color}-${plain ? 500 : 700}`;
const cursor = (disabled) => `cursor-${disabled ? "not-allowed" : "pointer"}`;
const Button = defineComponent({
  name: "Button",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `    
    ${size(props2.size)} 
    ${bgColor(props2)}
    ${hoverBg(props2)}
    ${round(props2.round)}
    ${cursor(props2.disabled)}
    font-semibold 
    shadow-md 
    text-${props2.plain ? props2.color + "-500" : "white"}
    hover:text-white
    border-none
    `,
      "disabled": props2.disabled
    }, [props2.icon && createVNode(Icon, {
      "icon": props2.icon
    }, null), slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
  }
};
export {
  Button,
  entry as default
};
//# sourceMappingURL=fish-design.mjs.map
