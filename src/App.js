import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import { useState } from 'react';
import UserDasboard from './components/UserDashboard';
// import UserSettings from './components/UserSettings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(''); 

  const handleLoginFun = (userData) => {
    setUser(userData.email);
    setIsAuthenticated(true);
  };

  
  return (
    <BrowserRouter>
      <Menu isAuthenticated={isAuthenticated} userName={user}/>
    
        <Routes>

            {/* public routes */}
            <Route path="/"element={<HomePage/>}/>
            <Route path="/loginform"element={<LoginForm authentication={handleLoginFun} isAuthenticated={isAuthenticated} />}/>
            <Route path="/signupform" element={<Signup />} />
          

            {/* proteced routes */}
            <Route
            path="/userdasboard"
            element={
              isAuthenticated ? (
                <UserDasboard userName={user}/>
              ) : (
                <LoginForm authentication={handleLoginFun} isAuthenticated={isAuthenticated}  />
              )
            }
            />
            
            
        
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
      <Footer />
    </BrowserRouter>
  );
}

export default App;
