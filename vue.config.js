const isProd = process.env.NODE_ENV === "production"
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    devServer: {
        open: true
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