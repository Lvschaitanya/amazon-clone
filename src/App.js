import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/'  
            element={
              <div>
                <Header />
                <Home />
              </div>
            } 
          />

          <Route path='/checkout' 
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />

          <Route path='/login' 
            element={<Login />}
          />

        </Routes>
        {/* <Header />
        <Home /> */}


      </div>
    </Router>

  );
}

export default App;
