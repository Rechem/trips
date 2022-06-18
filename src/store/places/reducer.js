import { createSlice } from '@reduxjs/toolkit'
import places from '../../assets/places'

export const placesSlice = createSlice({
    name: 'places',
    initialState: places,
  reducers: {
        addPlace: (state, action) => {
            state.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addPlace } = placesSlice.actions

export default placesSlice.reducer