import { useEffect, useState } from 'react'
import axios from 'axios'
import Form from './components/form'
import ListTodo from './components/listTodo'
import { useDispatch } from 'react-redux'
import { postAction } from './store/postSlice'
import { GetAllPostAction } from './store/postAction'
import Header from './components/header'

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(GetAllPostAction())
  }, [])

  return (
    <div className="container">
      <Header/>
      <Form/>
      <ListTodo/>
    </div>
  )
}

export default App
