const t = ["primary", "success", "info", "warning", "danger", "text"], i = ["midium", "small", "mini"], o = {
  type: {
    type: String,
    validator(n) {
      return t.includes(n);
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  icon: String,
  iconPosition: String,
  size: {
    type: String,
    validator(n) {
      return i.includes(n);
    }
  }
};
export {
  i as ButtonSize,
  t as ButtonType,
  o as buttonProps
};
