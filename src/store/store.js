import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../redux/reducers/reducer'

const initialState = {}
const middlewares = [thunk]

const composedEnhancers = compose(applyMiddleware(...middlewares))
const store = createStore(reducer, initialState, composedEnhancers)

export default store
