import configureStore
    from "./store/configureStore.js";

const store = configureStore()

store.dispatch({
    type: 'apiCallBegan',
    payload: {
        url: '/bugs',
        onSuccess: 'bugsReceived',
        onError: 'apiRequestFailed'
    }
})




