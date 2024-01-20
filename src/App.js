import './styles.scss';
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Programs from './pages/Programs';
import Schools from './pages/Schools';
import Visits from './pages/Visits';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://158.160.143.246:42202/getInfo', {
      method: 'GET'
    })
  .then(response => response.json())
  .then(response => setData(response));
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard data={data}/>} />
        <Route path='/programs' element={<Programs data={data}/>} />
        <Route path='/schools' element={<Schools data={data}/>} />
        <Route path='/visits' element={<Visits data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
