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
            <th className="text-left">Habit</th>
            {DAY_LABELS.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr>
              <td style={{ color: habit.color }}>{habit.name}</td>
              {weekDates.map((day) => {
                const dateKey = formatDateKey(day);
                const isCompleted = habit.completedDates.includes(dateKey);
                return (
                  <td>
                    <button
                      onClick={() =>
                        dispatch(toggleHabit({ id: habit.id, dateKey }))
                      }
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
