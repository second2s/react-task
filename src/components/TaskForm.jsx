import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

export const TaskForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle('');
        setDescription('');
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4 rounded-xl'>
                <h1 className='text-2xl font-bold text-white mb-3 text-center'>Crea una Tarea</h1>
                <input placeholder='Tarea:'
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                    className='bg-slate-300 p-3 w-full mb-2'
                    autoFocus
                />
                <textarea placeholder='Descripcion de la tarea:'
                    onChange={(e) => { setDescription(e.target.value) }}
                    className='bg-slate-300 p-3 w-full mb-2'
                    value={description}
                ></textarea>
                <button disabled={!title.trim()} className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm
