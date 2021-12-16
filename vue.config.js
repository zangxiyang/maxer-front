// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

// vue.config.js
module.exports = {
    // 基本 URL
    publicPath: BASE_URL,

    // 打包生成的生产环境构建文件的目录
    outputDir: 'dist',

    lintOnSave: false,
    devServer: {
        port: 8081, // 启动端口
        open: true  // 启动后是否自动打开网页
    }
}
