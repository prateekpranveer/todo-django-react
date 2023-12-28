import axios from '../axios'
import React, { useEffect } from 'react'
const task = [
    {
        id : 1,
        task: "Create the backend using Django",
        completed: true
    },
    {
        id : 2,
        task: "Create the frontend using React + Tailwindcss",
        completed: false
    },
]

const TaskView = () => {

    const [allTasks, setallTasks] = React.useState()

    useEffect(() => {
        axios.get('').then(res => setallTasks(res.data.payload))
    }, [])
    

    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`/task/${id}`)
    }

    const markCompleted = (id) => {
        console.log(id)
        axios.post(`/task/${id}`)
        
    }


  return (
    <div className='mt-12'>
        {
            allTasks?.map((p) => (
                <div className='mt-4 items-center space-x-4 flex justify-center'>
                <h1>{p.task}</h1>
                <h1 onClick={() => markCompleted(p.id)} className='border p-2 bg-sky-400 text-white'>Mark as Completed</h1>
                <button onClick={() => handleDelete(p.id)} className='border p-2 bg-red-500 text-white'>DELETE</button>
                </div>
            ))
        }
    </div>
  )
}

export default TaskView