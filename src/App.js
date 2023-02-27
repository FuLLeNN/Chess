import React, {useState, useEffect, Component} from 'react';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import LandPage from './page/LandPage'
import WithMoveValidation from './components/WithMoveValidation'

function App() {
    return (
        <Router>
            <div>
                <section>
                    <Routes>
                        <Route path="/" element={<LandPage/>}></Route>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/chess" element={<WithMoveValidation/>}/>
                    </Routes>
                </section>
            </div>
        </Router>
    );
}

export default App;

const boardsContainer = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100vw",
    marginTop: 30,
    marginBottom: 50
};
