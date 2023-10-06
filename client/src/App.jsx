import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Landing from "./pages/landing/Landig"
import Detail from "./pages/Detail"
import Home from "./pages/Home/home"
import Create from "./pages/create"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
