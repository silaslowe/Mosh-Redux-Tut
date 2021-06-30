function bugAdded(desc) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            desc: "Bug1"
        }
    }
}