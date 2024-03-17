import './App.css';
import StartPage from './components/startPage/StartPage';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/register/RegisterPage';
import { Amplify } from 'aws-amplify';

function App() {

const existingConfig = Amplify.getConfig();

// Add existing resource to the existing configuration.
Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      SpotifyAPI: {
        endpoint:
          'https://6wv39yq5gl.execute-api.eu-north-1.amazonaws.com/dev',
        region: 'eu-north-1' // Optional
      }
    }
  }
});
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
