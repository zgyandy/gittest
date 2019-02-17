import * as types from './type.js'
export default {
  AddTest: ({commit}) => {
    commit(types.AddTest)
  },
  RadTest: ({commit}) => {
    commit(types.RadTest)
  },
  SANNAV: ({commit}, payload) => {
    commit(types.SANNAV, payload)
  }
}
