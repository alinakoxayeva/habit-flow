import React, { useState } from "react";
import { addHabit } from "../features/habits/HabitSlice";

function addHabitButton() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addHabit(text));
    setText("");
  }
  return (
    <div>
      <button
        type="submit"
        onSubmit={handleSubmit}
        className="px-3 text-blue-500 border-gray-200 font-semibold rounded-2xl"
      >
        + Add Habit
      </button>
    </div>
  );
}

export default addHabitButton;
