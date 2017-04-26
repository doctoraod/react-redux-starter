module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "globals": {
    "document": true,
    "localStorage": true,
    "arguments": true,
    "window": true,
  },
  "rules": {
    "no-param-reassign": ["error", { "props": false }],
    "semi": ["error", "never"],
    "no-underscore-dangle": 0,
    "max-len": [2, 500, 4, {"ignoreUrls": true}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};