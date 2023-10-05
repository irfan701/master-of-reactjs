import TopNavbar from "../components/TopNavbar.jsx";
import Footer from "../components/Footer.jsx";
import AboutDescription from "../components/AboutDescription.jsx";
import PageTop from "../components/PageTop.jsx";

const AboutPage = () => {
    return (
        <>
            <TopNavbar/>
            <PageTop pageTitle="About Me"/>
            <AboutDescription />
            <Footer/>
        </>
    );
};

export default AboutPage;