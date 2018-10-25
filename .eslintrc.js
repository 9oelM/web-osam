const off = 0,
  warn = 1,
  error = 2;

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-expressions": off,
    "no-unused-vars": warn,
    "implicit-arrow-linebreak": off,
    "no-undef": off,
    "no-extra-semi": error,
    semi: off,
    "comma-dangle": off,
    "no-new": warn,
    quotes: ["warn", "double"],
    "no-underscore-dangle": off,
    "operator-linebreak": off,
    "arrow-parens": off,
    "class-methods-use-this": warn,
    "no-multi-assign": warn,
    "arrow-body-style": warn,
    "vue/no-unused-vars": off
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
