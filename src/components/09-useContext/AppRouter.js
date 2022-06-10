// RUTAS CON REACT-ROUTER-DOM 

import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { ComponentError } from './ComponentError';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path="/" exact element={ <HomeScreen /> } />
                        <Route path="/about" exact element={ <AboutScreen /> } />
                        <Route path="/login" exact element={ <LoginScreen /> } />
                        <Route path="*" element={ <ComponentError /> } />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
