import React from 'react'
import { selectAllHabits } from '../features/habits/HabitSlice'
import { useSelector } from 'react-redux'

function HabitActionList() {
  const tasks = useSelector(selectAllHabits)
  if(tasks.length === 0){
    return <p>You haven't added a task yet </p>
  }
  return (
    <ul>
      {tasks.map((task)=>(
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  )
}

export default HabitActionList