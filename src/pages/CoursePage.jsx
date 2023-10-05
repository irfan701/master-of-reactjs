import TopNavbar from "../components/TopNavbar.jsx";
import PageTop from "../components/PageTop.jsx";
import AboutDescription from "../components/AboutDescription.jsx";
import Footer from "../components/Footer.jsx";
import Courses from "../components/Courses.jsx";

const CoursePage = () => {
    return (
        <>
            <TopNavbar/>
            <PageTop pageTitle="Our Courses"/>
            <Courses />
            <Footer/>
        </>
    );
};

export default CoursePage;