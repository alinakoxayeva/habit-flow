import { configureStore } from '@reduxjs/toolkit'
import habitReducer, { STORAGE_KEY } from '../features/habits/HabitSlice'

const store = configureStore({
  reducer: {
    habit: habitReducer,
  },
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.habit.items))
  } catch (error) {
    console.error("Local Storage error", error.message)
  }
})

export default store