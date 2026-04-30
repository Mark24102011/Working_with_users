import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isAuth: false,
        user: []
    },
    reducers: {
        addUser: (state, action) => {
            state.isAuth = true

            state.user.push({
                name: action.payload.name,
                email: action.payload.email
            })
        }
    }
})

export const { addUser } = loginSlice.actions
export default loginSlice.reducer