import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../utils/http'
//异步请求创建action,home界面3个
export const fetchdata0 = createAsyncThunk(
  '/home/multidata0',
  async (currentPage = 1) => {
    const res = await http.get('home/houselist', {
      params: { page: currentPage },
    })
    // console.log(res.data.data)
    return res.data.data
  }
)
export const fetchdata1 = createAsyncThunk(
  '/home/multidata1',
  async (currentPage = 1) => {
    const res = await http.get('home/houselist', {
      params: { page: currentPage },
    })
    // console.log(res.data.data)
    return res.data.data
  }
)
export const fetchdata2 = createAsyncThunk(
  '/home/multidata2',
  async (currentPage = 1) => {
    const res = await http.get('home/houselist', {
      params: { page: currentPage },
    })
    // console.log(res.data.data)
    return res.data.data
  }
)
//因为要确保cleardata执行完毕后再执行后面操作，所以必须用异步组件才能返回promise
export const cleardata = createAsyncThunk('cleardata', () => {
  return
})
const homeSlice = createSlice({
  name: 'home',
  initialState: { detaildata0: [], detaildata1: [], detaildata2: [] },
  reducers: {
    getAdd(state, { payload }) {
      state.cout = state.cout + payload
    },
    // cleardata(state) {
    //   state.detaildata0 = []
    //   state.detaildata1 = []
    //   state.detaildata2 = []
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata0.fulfilled, (state, { payload }) => {
        state.detaildata0 = [...state.detaildata0, ...payload]
      })
      .addCase(fetchdata1.fulfilled, (state, { payload }) => {
        state.detaildata1 = [...state.detaildata1, ...payload]
      })
      .addCase(fetchdata2.fulfilled, (state, { payload }) => {
        state.detaildata2 = [...state.detaildata2, ...payload]
      })
      .addCase(cleardata.fulfilled, (state) => {
        state.detaildata0 = []
        state.detaildata1 = []
        state.detaildata2 = []
      })
      .addDefaultCase((state, action) => {})
  },
})
// export const { cleardata } = homeSlice.actions
export default homeSlice.reducer
