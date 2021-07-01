import {createStore} from "redux";
import reducer from "./bugs";
import {devToolsEnhancer} from "redux-devtools-extension";

const storeConfigure = createStore(reducer, devToolsEnhancer({
    trace: true
    })
);

export default function storeConfigure() {
    const storeConfigure = createStore(reducer, devToolsEnhancer({
            trace: true
        })
    );
}
