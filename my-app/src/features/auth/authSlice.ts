import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice ({
    name: 'auth',
    // rest token that we will get back from our backend REST API

    initialState: {user: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
        
    }
})

export const {setCredentials, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state:any) => state.auth.token