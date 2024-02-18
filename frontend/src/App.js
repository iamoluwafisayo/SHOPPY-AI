import React from "react";
import ResponsiveNavBar from "./components/common/navbar";
import Footer from "./components/common/footer";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <React.Fragment>
      <ResponsiveNavBar />
      {/* body */}
      <LandingPage />
      <Footer/>
    </React.Fragment>
  );
};

export default App;
