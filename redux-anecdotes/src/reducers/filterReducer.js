import { createSlice } from "@reduxjs/toolkit"

const initialState = 'ALL'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload
    },
    showAll(state, action) {
      return initialState
    }
  }
})

export const { setFilter, showAll } = filterSlice.actions
export default filterSlice.reducer