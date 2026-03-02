import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import RecipeForm from './components/RecipeForm'
import RecipeDetails from './components/RecipeDetails'
import PrivateRoute from './components/PrivateRoute'
import RecipeList from './components/RecipeList'
const App = () => {
  const [rec,setRec]=useState({});

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setRec({...rec,[name]:value});
  }
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<RecipeForm rec={rec} setRect={setRec} handleChange={handleChange}/>}/>
        <Route path='/recipedetail' element={<RecipeDetails/>}/>
        <Route path='/PrivateRoute' element={<PrivateRoute/>}/>
        <Route path='/Recipelist' element={<RecipeList/>}/>
      </Routes>
    </>
  )
}

export default App
