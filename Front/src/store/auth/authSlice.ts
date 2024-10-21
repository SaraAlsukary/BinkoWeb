import { createSlice } from "@reduxjs/toolkit";

type TAuth = {
    authState: boolean
}
const initialState: TAuth = {
    authState: true
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export default authSlice.reducer