/**
 * @desc    api配置文件
 * @file    api.config.js
 * @author  zhangWuQiang
 */
const isProd = process.env.PROD_ENV === 'production'

console.log('isProd', isProd)

// docker api配置
const NODE_PRO_URL = process.env.NODE_PRO_URL
const NODE_DISPATCH_URL = process.env.NODE_DISPATCH_URL
const NODE_WWS_URL = process.env.NODE_WWS_URL
const NODE_LITE_URL = process.env.NODE_LITE_URL
const NODE_FRAME_URL = process.env.NODE_FRAME_URL
const NODE_UPLOAD_URL = process.env.NODE_UPLOAD_URL
const NODE_LISTEN_URL = process.env.NODE_LISTEN_URL

// host api 配置
const HOST_URL = '192.168.2.221'

// 开发环境URL
const devUrl = 'http://10.0.0.9:9003'

// 生产环境URL
const proUrl = NODE_PRO_URL || `http://${HOST_URL}:8603`

// 调度管理
const diapatchUrl = NODE_DISPATCH_URL || `http://${HOST_URL}:9000`

// socketURL
const wssUrl = NODE_WWS_URL || `http://${HOST_URL}:25009`

// 上传接口
const uploadUrl = NODE_UPLOAD_URL || `http://${HOST_URL}:8609`

// 试听接口
const listenUrl = NODE_LISTEN_URL || `http://${HOST_URL}:25004`

// iframeUrl
const frameUrl = NODE_FRAME_URL || 'http://192.168.2.221:8084'

// lite版设计器
const liteUrl = NODE_LITE_URL || 'http://aicc.lingban.cn/robot/param'

// dev环境引入devUrl打包后引入proUrl
const baseUrl = isProd ? proUrl : devUrl

module.exports = { baseUrl, diapatchUrl, wssUrl, frameUrl, isProd, uploadUrl, liteUrl, listenUrl }
