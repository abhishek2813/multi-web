import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<h1>home</h1>} />
      <Route path='/password' element={<h1>Password Generator</h1>} />
      <Route path='/currency' element={<h1>currency Convertor</h1>} />
      <Route path='/todo' element={<h1>Todo</h1>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
