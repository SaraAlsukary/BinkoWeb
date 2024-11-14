import { createSlice } from "@reduxjs/toolkit";

type TAuth = {
    authState: boolean
}
const initialState: TAuth = {
    authState: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export default authSlice.reducer