import React, { useEffect, useState } from 'react'
import TodoItem from './todoItem'

const data = localStorage.getItem("todo-items") ;

const Form = () => {

  const [input , setInput] = useState("") ;
  const [items , setItems] = useState(JSON.parse(data)) ;
  const [clicked , setClicked] = useState(true) ;
  const [id , setId] = useState() ;

  useEffect(() => {
    localStorage.setItem("todo-items" , JSON.stringify(items)) ;
  } , [items])
  
  const handleClick = () => {
    let id = new Date().getTime() ;
    if (input !== ""){
      setItems([...items , {id: String(id) , value: input}]) ;
    }
    setInput("") ;
  }

  const deleteItem = (ind) => {
    setItems(
      items.filter(elem => {
        return elem.id !== ind ;
      })
    )
  }
  
  const handleEdit = () => {
    let ind = new Date().getTime() ;
    if (input !== ""){
      let array = items ;
      array[id] = {id: String(ind) , value: input} ; 
      setItems(array) ;
    }
    setInput("") ;
    setClicked(true) ;
  }

  const edit = (ind) => {
    setClicked(false) ;
    let arr = items ;
    arr.forEach((curElem , index) => {
      if(curElem.id === ind){
        setId(index) ;
        setInput(curElem.value) ;
      }
    })  

  }

  return (
    <div className='flex flex-col h-1/2 justify-center items-center space-y-4'>
        <div className='input flex bg-[#d4d4d4] mx-auto w-3/4 sm:w-1/2 justify-between border rounded-md md:w-1/4'>
            <input type="text" className='bg-[#d4d4d4] p-2 outline-none placeholder-gray-600 w-3/4' placeholder='Add Item' value={input} onChange={(event) => setInput(event.target.value)}/>
            {clicked ? <i className="fa-solid fa-plus my-auto pr-4 text-lg hover:text-[#1d848a]" onClick={handleClick}></i>
            : <i className="fa-solid fa-pen-to-square my-auto pr-4 text-lg hover:text-[#1d848a]" onClick={handleEdit}></i>}
        </div>
        <div className='item-data w-[50%] mx-auto space-y-2 md:w-1/4'>
            {items.map((item) => {
              return (
                <TodoItem
                  id={item.id}
                  key={item.id}
                  item={item.value}
                  func={deleteItem}
                  editFunc = {edit}
                />
              )
            })}
        </div>
        <div className='delete mx-auto'>
            <button className='bg-white px-5 py-1.5 mt-4 font-bold border rounded-lg hover:bg-[#3C4048] hover:text-white hover:border-[#3C4048]' onClick={() => {setItems([])}}>Delete All</button>
        </div>
    </div>
  )
}

export default Form
