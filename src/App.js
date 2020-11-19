import { useSelector } from 'react-redux';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import AuthorizationPage from './components/Authorization/AuthorizationPage';
import Hospitals from './components/HospitalsPage/Hospitals';

function App() {
  const isAuth = useSelector(state => state.login.isAuth)
  console.log(isAuth)
  return (
    <BrowserRouter className="App">
      <Route exact path="/">
      {isAuth ? <Redirect to="/hospitals" /> : <AuthorizationPage />}
      </Route>
      <Route path='/hospitals' render={() => <Hospitals />}/>
    </BrowserRouter>
  );
}

export default App;

// Test_ultra_task / T54321oikb