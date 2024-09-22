import { createContext, useEffect, useState } from 'react'
import { data } from '../data';

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    const createTask = ({ title, description }) => {
        setTasks([...tasks, {
            title: title,
            id: tasks.length,
            description: description,
        }]);
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    useEffect(() => {
        setTasks(data);
    }, []);


    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>{props.children}
        </TaskContext.Provider>
    );
}
