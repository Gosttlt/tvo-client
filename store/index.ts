import {Context, createWrapper} from 'next-redux-wrapper'
import {createStore, Store} from 'redux'
import {hydraReducer, RootState} from './menu/reducers'

// create a makeStore function
const makeStore = (context: Context) => createStore(hydraReducer)

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true})
