module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_TARGETURL,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  publicPath: "./",
  outputDir: undefined,
  assetsDir: "static",
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined
};
