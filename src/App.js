import {BrowserRouter, Route} from 'react-router-dom'
import AuthorizationPage from './components/Authorization/AuthorizationPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Route path='/' render={() => <AuthorizationPage />}/>
    </BrowserRouter>
  );
}

export default App;

// Test_ultra_task / T54321oikb