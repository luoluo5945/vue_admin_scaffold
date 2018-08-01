/**
 * @desc    mock服务配置文件
 * @file    mock.config.js
 * @author  zhangWuQiang
 */

const { baseUrl, wssUrl, frameUrl } = require('./api.config.js')

module.exports = {
  '/order/api': {
    target: baseUrl,
    pathRewrite: { '^/order/api': '/mock/27/order/api/v1' }
  },
  '/order/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/order/admin/api': '/mock/27/order/admin/api/v1' }
  },
  '/dialer/api': {
    target: baseUrl,
    pathRewrite: { '^/dialer/api': '/mock/59/dialer/api/v1' }
  },
  '/sms/api': {
    target: baseUrl,
    pathRewrite: { '^/sms/api': '/mock/35/sms/api/v1' }
  },
  '/sms/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/sms/admin/api': '/mock/35/sms/admin/api/v1' }
  },
  '/robot/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/robot/admin/api': '/mock/155/robot/admin/api/v1' }
  },
  '/robot/api': {
    target: baseUrl,
    pathRewrite: { '^/robot/api': '/mock/11/robot/api/v1' }
  },
  '/task/api': {
    target: baseUrl,
    pathRewrite: { '^/task/api': '/mock/19/task/api/v1' }
  },
  '/task': {
    target: baseUrl,
    pathRewrite: { '^/task': '/mock/19/task' }
  },
  '/account/api': {
    target: baseUrl,
    pathRewrite: { '^/account/api': '/mock/75/account/api/v1' }
  },
  '/socket/api': {
    ws: true,
    target: wssUrl,
    pathRewrite: { '^/socket/api': '/api/socket/v1' }
  },
  '/crm/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/crm/admin/api': '/mock/83/crm/admin/api/v1' }
  },
  '/crm/api': {
    target: baseUrl,
    pathRewrite: { '^/crm/api': '/mock/83/crm/api/v1' }
  },
  '/uaa/oauth': {
    target: baseUrl,
    pathRewrite: { '^/uaa/oauth': '/mock/51/uaa/oauth' }
  },
  '/uaa/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/uaa/admin/api': '/mock/51/uaa/admin/api/v1' }
  },
  '/activiti-explorer': {
    target: frameUrl,
    pathRewrite: { '^/activiti-explorer': '/activiti-explorer' }
  },
  '/rbac/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/rbac/admin/api': '/mock/131/rbac/admin/api/v1' }
  },
  '/rbac/api': {
    target: baseUrl,
    pathRewrite: { '^/rbac/api': '/mock/131/rbac/api/v1' }
  },
  '/account/admin/api': {
    target: baseUrl,
    pathRewrite: { '^/account/admin/api': '/account/mock/75/admin/api/v1' }
  }
}
