import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import userReducer from './modules/user'
const store = configureStore({
  reducer: { home: homeReducer, user: userReducer },
})
export default store
