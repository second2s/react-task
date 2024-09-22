import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskList } from './components/tasksList';
import TaskForm from './components/TaskForm';
import { TaskContextProvider } from './context/TaskContext'
import './index.css';


const App = () => {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>,
);
