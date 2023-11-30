import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../utils/http'

//异步请求创建action
export const fetchuserdata = createAsyncThunk('/my/userinfo', async () => {
  const res = await http.get('http://49.232.243.28:3007/my/userinfo')

  return res.data
})
const userSlice = createSlice({
  name: 'user',
  initialState: { userdata: {} },
  reducers: {
    // startnavigate(state) {
    //   state.isnavigate = true
    // },
    // endnavigate(state) {
    //   state.isnavigate = false
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchuserdata.fulfilled, (state, { payload }) => {
        state.userdata = payload
      })
      .addDefaultCase((state, action) => {})
  },
})
// export const {  } = userSlice.actions
export default userSlice.reducer
