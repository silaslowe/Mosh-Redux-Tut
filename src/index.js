import configureStore from "./store/configureStore.js";
import * as bugActions from "./store/bugs"
import * as projectActions from "./store/projects"

const store = configureStore()

store.subscribe(() => {
    console.log("Store changed")
})

store.dispatch(bugActions.bugAdded({desc: "Bug1"}))
store.dispatch(bugActions.bugAdded({desc: "Bug2"}))
store.dispatch(bugActions.bugAdded({desc: "Bug3"}))
store.dispatch(bugActions.bugResolved({id: 1}))
store.dispatch(projectActions.projectAdded({name: "Project1"}))



console.log(store.getState())


