module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.emv.NODE_ENV === "production" ? "/vue-gh-pages/" :"/"
})

