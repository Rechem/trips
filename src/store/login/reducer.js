import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginStatus : 'disconnected'
    },
  reducers: {
        adminLogin: (state, _) => {
            state.loginStatus='admin'
        },
        touristLogin: (state, _) => {
            state.loginStatus='tourist'
        },
        logout: (state, _) => {
            state.loginStatus='disconnected'
        },
    },
})

// Action creators are generated for each case reducer function
export const { adminLogin, touristLogin, logout } = loginSlice.actions

export default loginSlice.reducer