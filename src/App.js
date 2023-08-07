import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      

      <Footer />
    </BrowserRouter>
  );
}

export default App;
