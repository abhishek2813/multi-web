import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Password from './pages/Password';
import Currency from './pages/Currency';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<h1>home</h1>} />
      <Route path='/password' element={<Password />} />
      <Route path='/currency' element={<Currency />} />
      <Route path='/todo' element={<h1>Todo</h1>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
