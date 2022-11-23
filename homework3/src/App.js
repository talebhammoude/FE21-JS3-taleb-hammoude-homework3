import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cinema from './Components/Cinema';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <header className="App-header">
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<Cinema/>} />
              <Route path="/register" element={<Signup/>} />
          </Routes>
        </header>
      </div>

    </BrowserRouter>

  );
}

export default App;
