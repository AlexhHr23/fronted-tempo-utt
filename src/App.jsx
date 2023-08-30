import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage';
import { Navigation } from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App