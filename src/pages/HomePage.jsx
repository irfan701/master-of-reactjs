import TopBanner from "../components/TopBanner.jsx";
import TopNavbar from "../components/TopNavbar.jsx";
import Services from "../components/Services.jsx";
import Analysis from "../components/Analysis.jsx";
import Summary from "../components/Summary.jsx";
import Projects from "../components/Projects.jsx";
import Courses from "../components/Courses.jsx";
import Video from "../components/Video.jsx";
import ClientReview from "../components/ClientReview.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";

const HomePage = () => {
    return (
        <>
            <TopBanner/>
            <TopNavbar/>
            <Services/>
            <Analysis/>
            <Summary/>
            <Projects/>
            <Courses/>
            <Video/>
            <ClientReview/>
            <Footer/> 
        </>
    );
};

export default HomePage;