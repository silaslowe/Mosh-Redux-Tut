import configureStore
    from "./store/configureStore.js";
import {
    bugAdded,
    bugResolved,
    getUnresolvedBugs,
    getBugsByTeamMember,
    bugAssignedToUser,
    getBugsByUser
} from "./store/bugs"
import {projectAdded} from "./store/projects"
import {userAdded} from "./store/users";


const store = configureStore()

store.subscribe(() => {
    console.log("Store changed")
})

store.dispatch(bugAdded({
    desc: "Bug1",
    team_member: 2
}))
store.dispatch(bugAdded({
    desc: "Bug2",
    team_member: 1
}))
store.dispatch(bugAdded({
    desc: "Bug3",
    team_member: 2
}))
store.dispatch(userAdded({name: "User1"}))
store.dispatch(userAdded({name: "User2"}))
store.dispatch(bugResolved({id: 1}))
store.dispatch(bugAssignedToUser({
    bugId: 1,
    userId: 1
}))

store.dispatch(bugAssignedToUser({
    bugId: 2,
    userId: 1
}))
store.dispatch(projectAdded({name: "Project1"}))

const unresolvedBugs = getUnresolvedBugs(store.getState())
const bugs = getBugsByUser(1)(store.getState())

console.log("BUGS", bugs)
console.log("UR", unresolvedBugs)
console.log(store.getState())


