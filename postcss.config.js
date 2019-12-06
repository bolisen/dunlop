module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 75,
      propList: ["*"],
      minPixelValue: 2,
      selectorBlackList: ["mint-"]
    }
  }
};
