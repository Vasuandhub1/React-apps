
import './App.css';
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Weather from './components/wather';
import Autosuggestion from './components/autosuggestion';
import Todo from './components/todolist';
import Form2 from './components/form2';
import Componenet1  from './components/loginformusingcontextapi/component1';
import Login from './components/loginformusingcontextapi/login';
import Advance from './components/advance_counter';
import Meta from './components/meta';
import Global from './components/projectmaja.js/global';
import Usercontext from './components/loginformusingcontextapi/context';


function App() {
 
  return (
    <>
    <Componenet1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/form" element={<Form2/>}/>
      <Route path="/weather" element={<Weather/>}/>
      <Route path="/timer" element={<Todo/>}/>
      <Route path="/auto" element={<Autosuggestion/>}/>
      <Route path="/advanc" element={<Advance/>}/>
      <Route path="/meta" element={<Meta/>}/>
      <Route path="/global" element={<Global/>}/>
    </Routes>
    </BrowserRouter>
    </Componenet1>

    </>    
  );
}

export default App;
