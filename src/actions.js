import * as actions from './actionTypes'

export function bugAdded(desc) {
    return {
        type: actions.BUG_ADDED,
        payload: {
           desc
        }
    }
}

export const bugResolved = (id) => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
})