import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cinema from './Components/Cinema';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddComp from './Components/AddComp';
import MovieComp from './Components/MovieComp';
import {useState } from "react";





function App() {

  const [id, setId] = useState();

  const setIdFunc = (theId)=> {
    setId(theId);
  }


  return (
    <BrowserRouter>
    
      <div className="App">
        <header className="App-header">
          <Routes>
              <Route path="/" element={<Login setIdFunc={setIdFunc}/>} />
              <Route path="/home" element={<Cinema/>} />
              <Route path="/register" element={<Signup/>} />
              <Route path="/add" element={<AddComp/>} />
              <Route path="/movie" element={<MovieComp id={id}/>} />
          </Routes>
        </header>
      </div>

    </BrowserRouter>

  );
}

export default App;
