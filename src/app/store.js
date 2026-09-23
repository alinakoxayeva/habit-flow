import {configureStore} from '@reduxjs/toolkit'
export default configureStore({
    reducer: {
        habit: HabitReducer,
    }
})
store.subscribe(()=>{
    try {
        const state = store.getState()
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.habit.items))
    } catch (error) {
        console.error("Local Storage error", error.message)
    }
})