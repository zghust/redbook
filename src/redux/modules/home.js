import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../utils/http'
//异步请求创建action
export const fetchdata = createAsyncThunk(
  '/home/multidata',
  async (currentPage = 1) => {
    const res = await http.get('home/houselist', {
      params: { page: currentPage },
    })
    return res.data
  }
)
const homeSlice = createSlice({
  name: 'home',
  initialState: { cout: 888, detaildata: {} },
  reducers: {
    getAdd(state, { payload }) {
      state.cout = state.cout + payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.fulfilled, (state, { payload }) => {
        state.detaildata = payload
      })
      .addDefaultCase((state, action) => {})
  },
})
export const { getAdd } = homeSlice.actions
export default homeSlice.reducer
