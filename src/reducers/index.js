import { combineReducers } from 'redux'

const Info = (state = { active: false }, action) => {
  switch (action.type) {
    //获取账号基本信息
    case 'FOO': {
      state = action.payload
      return {
        ...state
      }
    }
    default:
      return state
  }
}
export default combineReducers({
  Info
})
