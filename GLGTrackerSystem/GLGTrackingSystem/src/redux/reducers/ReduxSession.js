const initstate = {
    user_data:{},
    is_logged:false,
}

export default function (state = initstate, action) {
    switch (action.type) {
        case "set_user_data":
            return {
                ...state,
                user_data: action.payload
            }
        case "set_is_logged":
            return {
                ...state,
                is_logged: action.payload
            }
        default:
            return state;
    }
}
