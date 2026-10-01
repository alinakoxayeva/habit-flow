import React, { useState } from "react";
import { addHabit } from "../features/habits/HabitSlice";
import { useDispatch } from "react-redux";

function AddHabitButton() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addHabit(text));
    setText("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New habit..."
        className="border rounded px-2"
      />
      <button
        type="submit"
        className="px-3 text-blue-500 border-gray-200 font-semibold rounded-2xl cursor-pointer"
      >
        + Add Habit
      </button>
    </form>
  );
}

export default AddHabitButton;
