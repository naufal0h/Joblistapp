import { LOGIN_ACTION, LOGIN_STATUS, LOGOUT_ACTION } from "../../actions/UserAction";

const initialState = {
    loginActionLoading: false,
    loginActionResult: false,
    loginActionError: false,

    // getDataUserLoading: false,
    // getDataUserResult: false,
    // getDataUserError: false,
    
    // loginStatusLoading: false,
    loginStatusResult: false,
    // loginStatusError: false
    
    // logoutActionLoading: false,
    logoutActionResult: false,
    // logoutActionError: false
    
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                loginActionLoading: action.payload.loading,
                loginActionResult: action.payload.data,
                loginActionError: action.payload.errorMessage
            }
            case LOGIN_STATUS:
                return {
                    ...state,
                    loginStatusResult: action.payload.data,
                }
            case LOGOUT_ACTION:
                return {
                    ...state,
                    logoutActionResult: action.payload.data,
                }
        default:
            return state;
    }
}

export default AuthReducer