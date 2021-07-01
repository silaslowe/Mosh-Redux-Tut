import storeConfigure from "./store/storeConfigure.js";
import * as actions from './store/bugs'

const store = storeConfigure()

storeConfigure.subscribe(() => {
    console.log("Store changed")
})

storeConfigure.dispatch(actions.bugAdded("Bug1"))
storeConfigure.dispatch(actions.bugAdded("Bug2"))
storeConfigure.dispatch(actions.bugAdded("Bug3"))
storeConfigure.dispatch(actions.bugResolved(1))

console.log(storeConfigure.getState())


