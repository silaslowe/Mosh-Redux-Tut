import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";


//Action Creators

export const bugAdded = createAction("bugAdded")
export const bugResolved = createAction("bugResolved")
export const bugRemoved = createAction("bugRemoved")


//Reducer

let lastId = 0

export default createReducer([], {
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            id: ++lastId,
            description: action.payload.desc,
            resolved: false
        })
    },
    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id)
        bugs[index].resolved = true
    }
})

