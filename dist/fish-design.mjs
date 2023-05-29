import { defineComponent, createVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: String
};
const FButton = defineComponent({
  name: "FButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
    py-2 
    px-4 
    font-semibold 
    rounded-lg 
    shadow-md 
    text-white 
    bg-${props2.color}-500 
    hover:bg-${props2.color}-700 
    border-none 
    cursor-pointer 
    `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(FButton.name, FButton);
  }
};
export {
  FButton,
  entry as default
};
