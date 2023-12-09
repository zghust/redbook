import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import http from '../../utils/http'
//异步请求创建action,home界面3个
export const fetchdata0 = createAsyncThunk(
  '/home/multidata0',
  async (currentPage = 1) => {
    const res = await http.get('api/article/list', {
      params: { page: currentPage },
    })

    return res.data
  }
)
export const fetchdata1 = createAsyncThunk(
  '/home/multidata1',
  async (currentPage = 1) => {
    const res = await http.get('api/article/list', {
      params: { page: currentPage },
    })
    // console.log(res.data.data)
    return res.data
  }
)
export const fetchdata2 = createAsyncThunk(
  '/home/multidata2',
  async (currentPage = 1) => {
    const res = await http.get('api/article/list', {
      params: { page: currentPage },
    })
    // console.log(res.data.data)
    return res.data
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    detaildata0: [],
    detaildata1: [],
    detaildata2: [],
    total0: 0,
    total1: 0,
    total2: 0,
    isdraweropen: false,
  },
  reducers: {
    setDrawerOpen(state, { payload }) {
      state.isdraweropen = !state.isdraweropen
    },
    cleardata0(state) {
      state.detaildata0 = []
    },
    cleardata1(state) {
      state.detaildata1 = []
    },
    cleardata2(state) {
      state.detaildata2 = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata0.fulfilled, (state, { payload }) => {
        state.detaildata0 = [...state.detaildata0, ...payload.data]
        state.total0 = payload.total
      })
      .addCase(fetchdata1.fulfilled, (state, { payload }) => {
        state.detaildata1 = [...state.detaildata1, ...payload.data]
        state.total1 = payload.total
      })
      .addCase(fetchdata2.fulfilled, (state, { payload }) => {
        state.detaildata2 = [...state.detaildata2, ...payload.data]
        state.total2 = payload.total
      })

      .addDefaultCase((state, action) => {})
  },
})
export const { cleardata0, cleardata1, cleardata2, setDrawerOpen } =
  homeSlice.actions
export default homeSlice.reducer
