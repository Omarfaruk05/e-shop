import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent/NavComponent';
import Body from './components/Body/Body';
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import Kids from './components/Kids/Kids';

function App() {
  return (
    <div>
      <NavComponent></NavComponent>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="men" element={<Men></Men>}></Route>
        <Route path="women" element={<Women></Women>}></Route>
        <Route path="kids" element={<Kids></Kids>}></Route>
      </Routes>
    </div>
  );
}

export default App;
