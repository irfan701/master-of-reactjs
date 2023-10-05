import TopNavbar from "../components/TopNavbar.jsx";
import PageTop from "../components/PageTop.jsx";
import Courses from "../components/Courses.jsx";
import Footer from "../components/Footer.jsx";
import Portfolio from "../components/Portfolio.jsx";

const PortfolioPage = () => {
    return (
        <>
            <TopNavbar/>
            <PageTop pageTitle="Portfolio"/>
            <Portfolio />
            <Footer/>
        </>
    );
};

export default PortfolioPage;