import reducer from "./bugs";
import {configureStore} from "@reduxjs/toolkit";

export default function storeConfigure() {
    return configureStore({
        reducer
    });
}
