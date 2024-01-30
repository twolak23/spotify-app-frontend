import './App.css';
import StartPage from './components/startPage/StartPage';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/register/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
