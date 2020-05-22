import {api_link,base_link} from "../../libraries/MyConfigs.js";

const initstate = {
    api_link:api_link,
    base_link:base_link,
}

export default function (state = initstate, action) {
    switch (action.type) {
        default:
            return state;
    }
}
