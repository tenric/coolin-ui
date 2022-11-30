import "./style/index.css";
import { defineComponent as e, computed as n } from "vue";
import { buttonProps as i } from "./types.mjs";
const d = e({
  name: "k-button",
  props: i,
  setup(t) {
    return {
      styleClass: n(() => ({
        [`k-button--${t.type}`]: t.type,
        "is-plain": t.plain,
        "is-round": t.round,
        "is-disabled": t.disabled,
        [`k-button--${t.size}`]: t.size
      }))
    };
  }
});
export {
  d as default
};
