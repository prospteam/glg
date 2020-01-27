const initState = {
    login_form: {},
    registration_form: {},
    current_route:'',
    isLoading:false,
    isCheckLoading:true,
    error:null,
    authenticate_data: {},
    showToast:false,
    isLoggedIn:false,
    userID:null,
    profile_details: {},
    user_details:{

    },
    response_data:{
        
    },    

}

const reducer = (state = initState,action) => {
    switch (action.type){
        case 'HANDLE_CHANGES':
            return {
                ...state,
                [action.payload.state_parent_name]: {
                    ...state[action.payload.state_parent_name],
                    [action.payload.state_child_name]: action.payload.value
                }
            }
        case 'SET_ROUTE':
            return {
                ...state,
                current_route:action.payload.current_route
            }
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn:true
            }
        case 'SET_USER_ID':
            return {
                ...state,
                userID: action.user_id
            }
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false
            }
        case 'GET_RESPONSE':
            return {
                ...state,
                response_data: action.payload.response_data
            }
        case 'LOADING_START':
            return {
                ...state,
                isLoading: true
            }
        case 'LOADING_SUCCESS':
            return {
                ...state,
                isLoading: false
            }
        case 'SET_USERNAME':
        console.log(action.payload)
            return {
                ...state,
                username: action.payload
            }
        case 'LOADING_FAILURE':
            return {
                ...state,
                isLoading:false
            }
        default:
            return state;
    }
}

export default reducer;
