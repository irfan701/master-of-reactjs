import { FaCheckCircle } from "react-icons/fa";
import Countup from "./utils/Countup.jsx";

const Summary = () => {
    return (
        <>
            <div className=''>
                <div className="summaryBanner">
                    <div className='summaryBannerOverlay'>

                        <div className='grid grid-cols-3 gap-4 text-white text-center mt-[10%]'>

                            <div className='mt-12'>
                                <h1 className='countNumber'>{<Countup start={0} end={100}/>}</h1>
                                <h4 className='countTitle'>Total Projects</h4>
                                <hr className='w-28 mx-auto'/>
                            </div>

                            <div className='mt-12'>
                                <h1 className='countNumber'>{<Countup start={0} end={100}/>}</h1>
                                <h4 className='countTitle'>Total Clients</h4>
                                <hr className='w-28 mx-auto'/>
                            </div>.

                            <div className='card workCard'>
                                <h1 className='cardTitle text-justify'>How I Work </h1>
                                <p className='cardSubTitle text-justify'><FaCheckCircle className='iconBullet'/> Requirement Gathering</p>
                                <p className='cardSubTitle text-justify'><FaCheckCircle className='iconBullet'/> System Analysis</p>
                                <p className='cardSubTitle text-justify'><FaCheckCircle className='iconBullet'/>Coding Testing</p>
                                <p className='cardSubTitle text-justify'><FaCheckCircle className='iconBullet'/>Implementation</p>
                            </div>




                        </div>




                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;