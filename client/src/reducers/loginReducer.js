const loginReducerDefaultState = { loggedIn: false }

export default (state = loginReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_LOGIN':
            return {
                loggedIn: action.loggedIn
            }
        default:
            return state;
    }
} 