/**
 * @desc    prod服务配置文件
 * @file    prod.config.js
 * @author  zhangWuQiang
 */

const { baseUrl, diapatchUrl, wssUrl, frameUrl, uploadUrl, listenUrl } = require('./api.config.js')

module.exports = {
  '/order/api': {
    target: baseUrl,
    pathRewrite: { '^/order/api': '/order/api/v1' }
  },
  '/order/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/order/admin/api': '/order/admin/api/v1' }
  },
  '/dialer/api': {
    target: baseUrl,
    pathRewrite: { '^/dialer/api': '/dialer/api/v1' }
  },
  '/sms/api': {
    target: baseUrl,
    pathRewrite: { '^/sms/api': '/sms/api/v1' }
  },
  '/sms/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/sms/admin/api': '/sms/admin/api/v1' }
  },
  '/robot/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/robot/admin/api': '/robot/admin/api/v1' }
  },
  '/robot/api': {
    target: baseUrl,
    pathRewrite: { '^/robot/api': '/robot/api/v1' }
  },
  '/task/api': {
    target: baseUrl,
    pathRewrite: { '^/task/api': '/task/api/v1' }
  },
  '/tasks': {
    target: diapatchUrl,
    pathRewrite: { '^/tasks': '' }
  },
  '/account/api': {
    target: baseUrl,
    pathRewrite: { '^/account/api': '/account/api/v1' }
  },
  '/socket/api': {
    ws: true,
    target: wssUrl,
    pathRewrite: { '^/socket/api': '/api/v1' }
  },
  '/crm/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/crm/admin/api': '/crm/admin/api/v1' }
  },
  '/crm/api': {
    target: baseUrl,
    pathRewrite: { '^/crm/api': '/crm/api/v1' }
  },
  '/zuul/robot/api': {
    target: baseUrl,
    pathRewrite: { '^/zuul/robot/api': '/zuul/robot/api/v1' }
  },
  '/zuul/sms/api': {
    target: baseUrl,
    pathRewrite: { '^/zuul/sms/api': '/zuul/sms/api/v1' }
  },
  '/zuul/task/api': {
    target: baseUrl,
    pathRewrite: { '^/zuul/task/api': '/zuul/task/api/v1' }
  },
  '/uaa/oauth': {
    target: baseUrl,
    pathRewrite: { '^/uaa/oauth': '/uaa/oauth' }
  },
  '/uaa/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/uaa/admin/api': '/uaa/admin/api/v1' }
  },
  '/activiti-explorer': {
    target: frameUrl,
    pathRewrite: { '^/activiti-explorer': '/activiti-explorer' }
  },
  '/api/file': {
    target: uploadUrl,
    pathRewrite: { '^/api/file': '/api/v1/file' }
  },
  '/rbac/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/rbac/admin/api': '/rbac/admin/api/v1' }
  },
  '/rbac/api': {
    target: baseUrl,
    pathRewrite: { '^/rbac/api': '/rbac/api/v1' }
  },
  '/job/file': {
    target: uploadUrl,
    pathRewrite: { '^/job/file': '/job/v1/file' }
  },
  '/api/call/detail': {
    target: 'http://10.0.10.2:25004',
    pathRewrite: { '^/api/call/detail': '/api/v1/call/detail' }
  },
  '/api/tts': {
    target: listenUrl,
    pathRewrite: { '^/api/tts': '/api/v1/tts' }
  },
  '/account/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/account/admin/api': '/account/admin/api/v1' }
  }
}
