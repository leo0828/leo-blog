const isProd = process.env.NODE_ENV === "production"
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    devServer: {
        open: true
    },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/global.scss` 这个文件
                data: `
                @import "@/styles/reset.scss";
                @import "@/styles/global.scss";
                `
            }
        }
    },
    configureWebpack: {
        //移除生产环境console
        optimization: {
            minimizer: isProd ? [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_console: true
                        },
                    }
                })
            ] : []
        }
    }
}