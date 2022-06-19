import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginStatus : 'disconnected'
    },
  reducers: {
        adminLogin: (state, _) => {
            state.loginStatus='employé'
        },
        touristLogin: (state, _) => {
            state.loginStatus='touriste'
        },
        logout: (state, _) => {
            state.loginStatus='disconnected'
        },
    },
})

// Action creators are generated for each case reducer function
export const { adminLogin, touristLogin, logout } = loginSlice.actions

export default loginSlice.reducer