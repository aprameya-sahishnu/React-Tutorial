import { Button } from "./Button";


export function HabitForm() {
    return <form className="flex gap-3">
        <input 
            className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 focus-visible:ring-2 focus-visible:ring-violet-500" 
            placeholder="New Habit..."
        />
        <Button>Add Habit</Button>
    </form>
}