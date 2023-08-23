import React from 'react';
import TopNavbar from "./components/TopNavbar.jsx";
import Services from "./components/Services.jsx";
import TopBanner from "./components/TopBanner.jsx";

const App = () => {
  return (
    <div>
        <TopBanner/>
       <TopNavbar/>
        <Services/>
    </div>
  );
};

export default App;