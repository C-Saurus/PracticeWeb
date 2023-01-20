import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './feature/home'
import MMT from './feature/mmt'
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <header></header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mmt' element={<MMT/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
