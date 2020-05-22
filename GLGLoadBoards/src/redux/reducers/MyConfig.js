import MyConfigs from "../../libraries/MyConfigs.js";

const initstate = {
    api_link:MyConfigs.api_link,
    base_link:MyConfigs.base_link,
}

export default function (state = initstate, action) {
    switch (action.type) {
        default:
            return state;
    }
}
