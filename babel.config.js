const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  //生产环境移除控制台输出
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    // 生产环境发布时候的插件数组
    ...prodPlugins
  ]
}