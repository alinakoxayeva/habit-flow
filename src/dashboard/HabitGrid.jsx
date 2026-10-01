import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllHabits, toggleHabit } from "../features/habits/HabitSlice";
import { getWeekDates, formatDateKey } from "../utils/date";
const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function HabitGrid({ weekStart }) {
  const habits = useSelector(selectAllHabits);
  const dispatch = useDispatch();
  const weekDates = getWeekDates(weekStart);
  if (habits.length === 0) {
    return <p>No habits have added yet</p>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="text-left p-2">Habit</th>
            {DAY_LABELS.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr>
              <td style={{ color: habit.color }} className="p-2">{habit.name}</td>
              {weekDates.map((day) => {
                const dateKey = formatDateKey(day);
                const isCompleted = habit.completedDates.includes(dateKey);
                return (
                  <td className="p-2">
                    <button
                      onClick={() =>
                        dispatch(toggleHabit({ id: habit.id, dateKey }))
                      }
                       aria-label={`${habit.name} - ${dateKey}`}
                       className={`w-8 h-8 rounded-md border ${isCompleted ? "bg-green-400 border-green-500" : "bg-gray-100 border-gray-300"}`}
                    >
                      {isCompleted ? "✓" : ""}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default HabitGrid;
