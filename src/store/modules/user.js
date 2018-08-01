// import { login, logout, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'

// const user = {
//   state: {
//     token: getToken(),
//     name: '',
//     avatar: '',
//     roles: []
//   },

//   mutations: {
//     SET_TOKEN: (state, token) => {
//       state.token = token
//     },
//     SET_NAME: (state, name) => {
//       state.name = name
//     },
//     SET_AVATAR: (state, avatar) => {
//       state.avatar = avatar
//     },
//     SET_ROLES: (state, roles) => {
//       state.roles = roles
//     }
//   },

//   actions: {
//     // 登录
//     Login({ commit }, userInfo) {
//       const username = userInfo.username.trim()
//       return new Promise((resolve, reject) => {
//         login(username, userInfo.password).then(response => {
//           const data = response.data
//           setToken(data.token)
//           commit('SET_TOKEN', data.token)
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },

//     // 获取用户信息
//     GetInfo({ commit, state }) {
//       return new Promise((resolve, reject) => {
//         getInfo(state.token).then(response => {
//           const data = response.data
//           if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
//             commit('SET_ROLES', data.roles)
//           } else {
//             reject('getInfo: roles must be a non-null array !')
//           }
//           commit('SET_NAME', data.name)
//           commit('SET_AVATAR', data.avatar)
//           resolve(response)
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },

//     // 登出
//     LogOut({ commit, state }) {
//       return new Promise((resolve, reject) => {
//         logout(state.token).then(() => {
//           commit('SET_TOKEN', '')
//           commit('SET_ROLES', [])
//           removeToken()
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },

//     // 前端 登出
//     FedLogOut({ commit }) {
//       return new Promise(resolve => {
//         commit('SET_TOKEN', '')
//         removeToken()
//         resolve()
//       })
//     }
//   }
// }

// export default user

import { getToken, setToken, removeToken } from '@/utils/auth'
import axios from '@/utils/axios'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: []
}

const getters = {}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 获取token
  getAccessToken({ commit }, param) {
    return new Promise((resolve, reject) => {
      axios({
        url: '/uaa/oauth/token',
        method: 'post',
        data: require('qs').stringify(param),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(({ data }) => {
        console.log(data)
        setToken(data.access_token)
        commit('SET_TOKEN', data.access_token)
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  // 删除token
  delAccessToken({ commit }, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url: `/uaa/oauth/token?access_token=${param}`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then((data) => {
        removeToken()
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  // 认证授权
  certificateAuthority({ commit }, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `/uaa/oauth/user_auth`,
        params: param
      }).then((data) => {
        resolve(data.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  // 查询用户详情
  getUserDetails({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `/crm/admin/api/user/${id}`
      }).then((data) => {
        resolve(data.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
