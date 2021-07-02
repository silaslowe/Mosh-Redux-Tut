import configureStore from "./store/configureStore.js";
import {bugAdded, bugResolved, getUnresolvedBugs} from "./store/bugs"
import {projectAdded} from "./store/projects"


const store = configureStore()

store.subscribe(() => {
    console.log("Store changed")
})

store.dispatch(bugAdded({desc: "Bug1"}))
store.dispatch(bugAdded({desc: "Bug2"}))
store.dispatch(bugAdded({desc: "Bug3"}))
store.dispatch(bugResolved({id: 1}))
store.dispatch(projectAdded({name: "Project1"}))

const unresolvedBugs = getUnresolvedBugs(store.getState())

console.log("UR", unresolvedBugs)
console.log(store.getState())


