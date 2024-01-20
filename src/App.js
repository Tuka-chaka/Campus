import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Programs from './pages/Programs';
import Schools from './pages/Schools';
import Visits from './pages/Visits';
import * as data from './apianswer.json';

function App() {

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
