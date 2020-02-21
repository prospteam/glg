const initstate = {
	isLoggedIn:false,
	isLoading: false
}

export default function (state = initstate, action) {
    switch (action.type) {
        case "SET_TRUE_FALSE":
            return {
                ...state,
                [action.payload.state]: !state[action.payload.state]
            }
        case "TOGGLE":
            return {
                ...state,
                [action.payload.state]: !state[action.payload.state]
            }
        case "LOADING_START":
            return {
                ...state,
                isLoading: true
            }
        case "LOADING_STOP":
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}
