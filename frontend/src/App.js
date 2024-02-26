import React from "react";
import { LandingPage, SigninPage, SignupPage } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/signin/" element={<SigninPage />} />
        <Route path="/auth/signup/" element={<SignupPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
