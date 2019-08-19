// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    devServer: {
      port: 8090,
    },
    configureWebpack: {
      devtool: 'source-map'
    }
  }
