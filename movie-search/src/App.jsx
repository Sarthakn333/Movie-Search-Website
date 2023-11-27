import React from 'react'
import {Routes,Route } from 'react-router-dom'
import SingleMovie from './SingleMovie';
import Home from './Home';
import Error from './Error';
import './app.css'

const App = ()=>{
  return (<>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='movie/:id' element={<SingleMovie />}></Route>
    <Route path='*' element={<Error />}></Route>
    </Routes>
   </>
  )
}
export default App;
