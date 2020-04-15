const initstate = {
	isLoggedIn:false,
	isLoading: false,
	sampleBolean: false,
	sampleString: "xd",
}

export default function (state = initstate, action) {
    switch (action.type) {
        case "set_sampleBolean":
            return {
                ...state,
                sampleBolean: action.payload
            }
        case "set_sampleString":
            return {
                ...state,
                sampleString: action.payload
            }
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
