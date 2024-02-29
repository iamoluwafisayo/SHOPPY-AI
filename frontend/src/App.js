import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import SignIn from './pages/Signin';

export default function App() {
  return (
    <>  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />      
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
        
    </>
      
    
  );
}