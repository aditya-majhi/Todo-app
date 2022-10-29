import React from 'react'

const TodoItem = (props) => {

  const del = (event) =>{
    const elem = event.target.parentElement.parentElement.getAttribute("id") ;
    props.func(elem)
  }

  const edit = (event) =>{
    const elem = event.target.parentElement.parentElement.getAttribute("id") ;
    props.editFunc(elem)
  }

  return (
    <div className='flex justify-between bg-gray-400 hover:bg-gray-200 border rounded-md border-gray-400' id={props.id}>
      <h3 className='p-2 font-semibold'>{props.item}</h3>
      <div className='space-x-3 p-2'>
          <i className="fa-solid fa-trash hover:text-red-500" onClick={(event) => {del(event)}}></i>
          <i className="fa-solid fa-pen-to-square hover:text-green-600" onClick={(event) => {edit(event)}}></i>
      </div>
    </div>
  )
}

export default TodoItem
