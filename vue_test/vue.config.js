module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        },
    },
    // 关闭语法检查
    lintOnSave: false,
    // 配置代理服务器

    // 配置代理一：
    /* devServer: {
        proxy: 'http://localhost:5000'
    } */

    // 配置代理二：
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/api': ''},

                // 用于支持webscoket
                // ws: true,

                // 用于控制请求头中的host
                changeOrigin: true
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/demo': ''},

                // 用于支持webscoket
                // ws: true,

                // 用于控制请求头中的host
                // changeOrigin: true
            },
            '/gitdemo': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/gitdemo': ''},

                // 用于支持webscoket
                // ws: true,

                // 用于控制请求头中的host
                // changeOrigin: true
            },
        }
    }
}
    