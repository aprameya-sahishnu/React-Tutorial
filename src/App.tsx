import { Header } from "./components/Header";
import { HabitForm } from "./components/HabitForm";
import { HabitList, type Habit } from "./components/HabitList";
import { useState } from "react";


export default function App() {

  const [habits, setHabits] = useState<Habit[]>([])

  function addHabit(name: string) {
    const newRecord: Habit = {
      id: crypto.randomUUID(),
      name
    }

    setHabits([...habits, newRecord])

    // alternate way, to prevent bundling when we are trying to updated state with its own value
    // setHabits(curr => [...curr, newRecord]) 
  }

  function deleteHabit(id: string) {
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  return <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
    <Header />
    <HabitForm addHabit={addHabit}/>
    <HabitList habits={habits} deleteHabit={deleteHabit}/>
  </div>
}


