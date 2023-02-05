import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        email: null,
        favoris: []
    },
    reducers: {
        userLogIn: (state, action) => {
            state.userId = action.payload
        },
        userLogOut: (state) => {
            state.userId = null
        }
    }
})


export const { userLogIn, userLogOut } = userSlice.actions
export const selectUser = (state) => state.user
export default userSlice.reducer