import configureStore from "./store/configureStore.js";
import * as actions from "./store/bugs"

const store = configureStore()

store.subscribe(() => {
    console.log("Store changed")
})

store.dispatch(actions.bugAdded({desc: "Bug1"}))
store.dispatch(actions.bugAdded({desc: "Bug2"}))
store.dispatch(actions.bugAdded({desc: "Bug3"}))
store.dispatch(actions.bugResolved({id: 1}))

console.log(store.getState())


