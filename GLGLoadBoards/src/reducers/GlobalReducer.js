const initstate = {
   isLoggedIn:false
}

export default function (state = initstate, action) {
    switch (action.type) {
        case "SET_TRUE_FALSE__":
            return {
                ...state,
                [action.payload.state]: !state[action.payload.state]
            }
        default:
            return state;
    }
}
