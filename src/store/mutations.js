import * as types from './type.js'
export default {
  add: (state, payload) => {
    state.num++
  },
  rad: (state, payload) => {
    state.num--
  },
  loginIn: (state, payload) => {
    state.isLogin = 1
  },
  loginOut: (state, payload) => {
    state.isLogin = 0
  },
  blNav: (state, payload) => {
    state.blNav = payload
  },
  blFoo: (state, payload) => {
    state.blFoo = payload
  },
  SANNAV: (state, payload) => {
    state.navArr = payload
  },
  CURRENTPATH: (state, payload) => {
    state.currentpath = payload
  },
  [types.AddTest]: (state) => {
    state.test++
  },
  [types.RadTest]: (state) => {
    state.test--
  }
}
