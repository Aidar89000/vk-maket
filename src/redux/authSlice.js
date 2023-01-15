import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const KEY = process.env.REACT_APP_KEY

// export const asyncFunc = createAsyncThunk(
//	'chatSlice/asyncFunc',
// 	async function asyncFunc(){
// }
// )

const AuthSlice = createSlice({
  name: "AuthSlice",

  initialState: {},

  reducers: {
    func(state, action) {},
  },

  //extraReducers:{
  //[asyncFunc.fulfilled]: (state, action)=>{},
  // }
});

export const { func } = AuthSlice.actions;

export default AuthSlice.reducer;
