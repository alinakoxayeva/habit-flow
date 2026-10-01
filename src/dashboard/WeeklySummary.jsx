import React from "react"
import { useSelector } from "react-redux"
import { selectAllHabits } from "../features/habits/HabitSlice"
import { getWeekDates,formatDateKey } from "../utils/date"

function WeeklySummary({weekStart}){
    const habits = useSelector(selectAllHabits)
    const weekDateKeys = getWeekDates(weekStart).map(formatDateKey)
    const total = habits.length *7;
    const completed = habits.reduce(
        (sum,habit) => sum + habit.completedDates.filter((d)=> weekDateKeys.includes(d)).length,0
    )
    const progress = total === 0? 0 : Math.round((completed/total)*100)
    return(
        <p>This week: {progress}% completed</p>
    )
}
export default WeeklySummary