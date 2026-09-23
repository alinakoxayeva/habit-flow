import { useSelector } from "react-redux";
import React from "react";
import addHabitButton from "./header/AddHabitButton";
import greeting from "./header/Greeting";
import { selectAllHabits } from "./features/habits/HabitSlice";
import weekNavigation from "./header/weekNavigation";

function App() {
  return (
    <>
      <header className="bg-white w-full flex">
        <greeting/>
        <weekNavigation/>
        <addHabitButton />
      </header>
      <div className="bg-blue-200">HabitFlow Application</div>
    </>
  );
}

export default App;
