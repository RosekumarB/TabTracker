const tokenReducerDefaultState = { token: null }

export default (state = tokenReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return {
                token: action.token
            }
        default:
            return state;
    }
} 