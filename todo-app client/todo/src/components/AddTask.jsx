import axios from '../axios'
import React from 'react'

const AddTask = () => {

  const [query, setquery] = React.useState()
  console.log(query)

  const changeInput = (e) => {
    setquery(e.target.value)
  }

  const postTask = () => {
    axios.post('/task', {task: query})
  }

  return (
    <div className='space-x-4'>
        <input onChange={(e) => changeInput(e)} className='px-4 py-4 h-12 mt-4 border rounded-md' placeholder='Add a new task'/>
        <button onClick={postTask} className='border p-3 w-12 text-white bg-black rounded-md hover:bg-gray-700'>+</button>
    </div>
  )
}

export default AddTask