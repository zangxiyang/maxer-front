

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

// vue.config.js
module.exports = {
    // 基本 URL
    publicPath: BASE_URL,
    outputDir: 'dist', // 打包生成的生产环境构建文件的目录

}