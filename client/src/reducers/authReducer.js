const authReducerDefaultState = {
    token: null,
    user: null,
    isloggedIn: false,
}

export default (state = authReducerDefaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                token: action.token,
                user: action.user,
                isloggedIn: true
            }
        default:
            return state;
    }
} 