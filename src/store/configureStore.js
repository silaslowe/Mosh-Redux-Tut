import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger
    from "./middleware/logger";
import toast from "./middleware/toast";


export default function () {
    return configureStore({
        reducer,
        middleware: [
            //Spreads redux toolkit
            // middleware so that it
            // is no overridden.
            ...getDefaultMiddleware(),
            logger({destination: 'console'}),
            toast

        ]
    })
}

