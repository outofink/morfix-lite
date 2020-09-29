module.exports = {
  transpileDependencies: ['vuetify'],

  pwa: {
    name: 'Morfix Lite',
    themeColor: '#448AFF',
    msTileColor: '#E5EFFF',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      background_color: '#E5EFFF',
    },
  },

  publicPath: '',
  productionSourceMap: false,
}
