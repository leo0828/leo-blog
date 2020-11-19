const isProd = process.env.NODE_ENV === "production"

module.exports = {
    devServer: {
        open: true
    },
    productionSourceMap: false,
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            scss: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/global.scss` 这个文件
                prependData: `@import "@/styles/global.scss";`
            }
        }
    },
}