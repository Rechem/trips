import { configureStore } from '@reduxjs/toolkit'
import placesReducer from './places/reducer'
import loginReducer from './login/reducer'

export default configureStore({
  reducer: {
      places: placesReducer,
      login: loginReducer,
  },
})