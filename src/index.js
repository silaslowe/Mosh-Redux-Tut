import store from "./store";
import * as actions from './actionTypes'
import {bugAdded} from './actions'

const unsubscribe = store.subscribe(() =>
console.log("Change", store.getState()))

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'Bug1'
    }
})

unsubscribe()

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
})

console.log(store.getState())


