// []

let lastd = 0

function reducer(state = [ ], action) {
    if (action.type === 'bugAdded')
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    else if (action.type === 'bugRemoved')
       return state.filter(bug=> bug.id !== action.payload.id)

    return state
}