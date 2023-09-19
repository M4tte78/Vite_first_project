import { useState } from 'react'
import './App.css'
import Counter from './counter'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import NoPage from './NoPage';

function App() {
  const [input, setInput] = useState("")

  const handleChange = (value) => {
    setInput(value)
  }
  

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="*" element={<NoPage />} />
         </Route>
        </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App
