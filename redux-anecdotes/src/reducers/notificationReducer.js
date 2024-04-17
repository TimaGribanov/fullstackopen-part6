import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  action: '',
  value: ''
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    votedNotification(state, action) {
      return { action: 'VOTE', value: action.payload }
    },
    addedNotification(state, action) {
      return { action: 'ADD', value: action.payload }
    },
    removeNotification(state, action) {
      return initialState
    }
  }
})

export const { votedNotification, addedNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer