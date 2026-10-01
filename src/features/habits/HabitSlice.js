import { createSlice } from "@reduxjs/toolkit";
const STORAGE_KEY = "habit-flow: habit";
function loadhabits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Local Storage reading error", error.message);
    return [];
  }
}
const COLORS = ["#f59e0b", "#8b5cf6", "#06b6d4", "#ef4444", "#22c55e"];
const initialState = {
  items: loadhabits(),
};
const HabitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name) {
        const trimmed = name.trim();
        return {
          payload: {
            id: Date.now().toString(),
            name: trimmed,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            schedule: [0, 1, 2, 3, 4, 5, 6],
            completedDates: [],
          },
        };
      },
    },
    toggleHabit(state, action) {
      const { id, dateKey } = action.payload
      const habit = state.items.find((h) => h.id === action.payload);
      if (!habit) return
      const index = habit.completedDates.indexOf(dateKey)
      if( index === -1){
        habit.completedDates.push(dateKey)
      }else {
        habit.completedDates.splice(index, 1)
      }
    },
    editHabit(state, action) {
      const { id, name } = action.payload;
      const trimmed = name.trim();
      if (!trimmed) return;
      const habit = state.items.find((h) => h.id === id);
      if (habit) {
        habit.name = trimmed;
      }
    },
    deleteHabit(state, action) {
      state.items = state.items.filter((h) => h.id !== action.payload);
    },
  },
});
export const { addHabit, toggleHabit, editHabit, deleteHabit } =
  HabitSlice.actions;
export const selectAllHabits = (state) => state.habit.items;
export default HabitSlice.reducer;
export { STORAGE_KEY };
