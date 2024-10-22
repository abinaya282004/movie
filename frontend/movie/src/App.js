import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { CartProvider } from './components/cartcontext';  
import NavBar from './components/navbar';
import Carousel from './components/carousel';
import CardProp from './components/card2';
import DetailPage from './components/detailpage';
import CartPage from './components/cartpage';  
import SignIn from './components/login';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email) => {
    localStorage.setItem('user', email);  
    setIsLoggedIn(true);  
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    setIsLoggedIn(false);  
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={<SignIn onLogin={handleLogin} />}  
          />
          <Route 
            path="/" 
            element={
              isLoggedIn ? (  
                <>
                  <NavBar setSearchQuery={setSearchQuery} onLogout={handleLogout} />  
                  <Carousel />
                  <CardProp searchQuery={searchQuery} />
                </>
              ) : (
                <SignIn onLogin={handleLogin} />  
              )
            } 
          />
          <Route path="/movies/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
