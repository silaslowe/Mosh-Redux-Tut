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

store.dispatch((dispatch, getState) => {
    dispatch({type: 'bugsReceived', bugs: [1,2,3]})
    console.log(store)
})


