import React from 'react';
import TopNavbar from "./components/TopNavbar.jsx";
import Services from "./components/Services.jsx";
import TopBanner from "./components/TopBanner.jsx";
import Analysis from "./components/Analysis.jsx";
import Summary from "./components/Summary.jsx";

const App = () => {
  return (
    <div>
        <TopBanner/>
        <TopNavbar/>
        <Services/>
        <Analysis/>
        <Summary/>
    </div>
  );
};

export default App;