import { defineComponent } from "vue";

export const props = {
  icon: String,
};

export default defineComponent({
  name: "Icon",
  props,
  setup(props, { slots }) {
    return () => <i class={`i-ic-baseline-${props.icon} p-3`}>{slots}</i>;
  },
});
