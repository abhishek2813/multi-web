import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Password from './pages/Password';
import Currency from './pages/Currency';
import Todo from './pages/Todo';
import { TodoContext } from './hooks/TodoContext';
import GitHub from './pages/GitHub';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<h1>home</h1>} />
      <Route path='/password' element={<Password />} />
      <Route path='/currency' element={<Currency />} />
      <Route path='/todo' element={<TodoContext><Todo /></TodoContext>} />
      <Route path='/github' element={<GitHub />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
