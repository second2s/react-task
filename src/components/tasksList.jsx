import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from '../context/TaskContext'

export const TaskList = () => {
    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-4xl font-bold text-white mb-3 text-center'>No hay tareas</h1>
    }

    return (
        <div className="grid grid-cols-4 gap-2 p-4">
            {tasks.map((task) => (
                <TaskCard task={task} key={task.id} />
            ))}
        </div>
    )
}

