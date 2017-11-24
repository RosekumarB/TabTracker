const userReducerDefaultState = { user: null }

export default (state = userReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                user: action.user
            }
        default:
            return state;
    }
} 