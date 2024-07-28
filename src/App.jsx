/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Signup from "./pages/Signup"
import SignIn from './pages/SignIn';
import { PostProvider } from './pages/PostContext';
import Search from './pages/Search';

function App() {
  

  return (
    <>
    <PostProvider>
     <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      
     </Router>
     </PostProvider>
    </>
  )
}

export default App
