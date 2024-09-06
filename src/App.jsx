/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Signup from "./pages/Signup"
import Notification from "./pages/Notification"
import { PostProvider } from './pages/PostContext';
import { UserProvider } from './pages/UserContext';
import Search from './pages/Search';
import Profile from './pages/Profile';

function App() {
  

  return (
    <>
    <UserProvider>
    <PostProvider>
     <Router>
      <Navbar />
      
      <Routes>
        <Route path='/Social-media.github.io/' element={<Home />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      
     </Router>
     </PostProvider>
     </UserProvider>
    </>
  )
}

export default App
