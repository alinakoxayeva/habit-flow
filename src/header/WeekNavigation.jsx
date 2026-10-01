import React from 'react'
import { addDays, getWeekDates, formatDateKey } from '../utils/date'

function WeekNavigation({selectedDate, onChange}) {
  const weekDates = getWeekDates(selectedDate)
  return (
    <div className='flex items-center gap-2'>
      <button onClick={()=> onChange(addDays(selectedDate, -7))} aria-label='Previous week'>,</button>
      <span>{formatDateKey(weekDates[0])} - {formatDateKey(weekDates[6])}</span>
      <button onClick={()=> onChange(addDays(selectedDate, 7))} aria-label='Next week'>,</button>
    </div>
  )
}

export default WeekNavigation