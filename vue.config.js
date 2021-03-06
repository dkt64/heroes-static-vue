// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    devServer: {
      port: 8080,
    },
    configureWebpack: {
      devtool: 'source-map'
    }
  }
