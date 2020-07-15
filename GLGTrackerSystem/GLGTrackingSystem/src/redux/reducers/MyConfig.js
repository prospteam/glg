import {api_link,base_link} from "../../libraries/MyConfigs.js";

const initstate = {
    api_link:api_link,
    base_link:base_link,
}

export default function (state = initstate, action) {
    switch (action.type) {
        case "test":
            console.log('___reduxes_______________________');
            console.log(state);
            console.log(action);
            return {
                ...state,
                user_data: action.payload
            }
        default:
            return state;
    }
}
