import store from "./customStore.js";
import * as actions from './actions'

store.subscribe(() => {
    console.log("Store changed")
})

store.dispatch(actions.bugAdded("Bug1"))
console.log(store.getState())


