import React, { useState } from "react";
import AddHabitButton from "./header/AddHabitButton";
import Greeting from "./header/Greeting";
import WeekNavigation from "./header/weekNavigation";
import HabitActionList from "./sidepanel/HabitActionList";
import HabitGrid from "./dashboard/HabitGrid";
import { startOfWeek } from "./utils/date";
import WeeklySummary from "./dashboard/WeeklySummary";

function App() {
  const [selectedDate, setSelectedDate] = useState(()=> startOfWeek(new Date()));
  return (
    <>
      <header className="bg-white w-full flex">
        <Greeting name="Alina" />
        <WeekNavigation selectedDate={selectedDate} onChange={setSelectedDate}/>
        <AddHabitButton />
      </header>
      <main>
        <WeeklySummary weekStart={selectedDate}/>
        <HabitGrid weekStart={selectedDate}/>
      </main>
      <HabitActionList />
    </>
  );
}

export default App;
