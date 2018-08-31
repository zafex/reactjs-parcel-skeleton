import { createStore, combineReducers } from 'redux'
import common from '~/common'

const reducer = combineReducers({
  common
})
const store = createStore(reducer)

export default store
