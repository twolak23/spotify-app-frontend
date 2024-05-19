import './App.css';
import StartPage from './components/startPage/StartPage';
import { Route, Routes } from 'react-router';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/register/RegisterPage';
import { Amplify } from 'aws-amplify';
import Dashboard from './components/dashboard/Dashboard';

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
          `https://6wv39yq5gl.execute-api.eu-north-1.amazonaws.com/${process.env.REACT_APP_AWS_ENV}`,
        region: 'eu-north-1' // Optional
      }
    }
  }
});
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={StartPage()}></Route>
        <Route path='/register' element={RegisterPage()}></Route>
        <Route path='/login' element={LoginPage()}></Route>
        <Route path='/dashboard' element={Dashboard()}></Route>
      </Routes>
    </div>
  );
}

export default App;
