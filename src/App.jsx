import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router";
import Register from './components/Register';

let App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App