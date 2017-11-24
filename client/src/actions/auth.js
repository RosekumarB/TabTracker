export const setToken = (token) => ({
    type: 'SET_TOKEN',
    token
})

export const setUser = (user) => ({
    type: 'SET_USER',
    user
})

export const setLoginStatus = (status)=>({
    type: 'SET_LOGIN',
    loggedIn: status
})

