import React from 'react';
import { useState } from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/navbar/NavBar.jsx';
import Home from './pages/homepage/Home.jsx';
import Profile from './pages/profilepage/Profile.jsx';
import ChatBot from './assets/components/chatbot/ChatBot.jsx';


function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
            <Routes/>
        </BrowserRouter>
    )
}

export default App;
