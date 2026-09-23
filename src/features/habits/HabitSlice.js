import {createSlice} from '@reduxjs/toolkit'
const STORAGE_KEY = 'habit-flow: habit'
function loadhabits(){
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw? JSON.parse(raw): []
    } catch (error) {
        console.error("Local Storage reading error", error.message)
        return []
    }
}
const initialState = {
    items: loadhabits(),
}
const HabitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit: {
            reducer(state, action){
                state.items.push(action.payload)
            },
            prepare(text){
                const trimmed = text.trim()
                return {
                    payload: {
                        id: Date.now().toString(),
                        text: trimmed,
                        completed: false
                    }
                }

            }
        },
        toggleHabit(state,action){
            const habit = state.items.find((h)=>h.id === action.payload)
            if ( habit){
                habit.completed = !habit.completed
            } 
        },
        editHabit(state,action){
            const {id, text} = action.payload
            const trimmed = text.trim()
            if (!trimmed) return
            const habit = state.items.find((h)=> h.id === id)
            if(habit){
                habit.text = trimmed
            }
        },
        deleteHabit(state, action){
            state.items = state.items.filter((h)=> h.id !== action.payload)
        }
    }
})
export const { addHabit, toggleHabit ,editHabit, deleteHabit } = HabitSlice.actions
export const selectAllHabits = (state)=> state.habit.items
export default HabitSlice.reducer
export {STORAGE_KEY} 