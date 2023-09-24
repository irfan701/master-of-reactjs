import {FaEnvelope, FaFacebook, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footerSection text-center">

            <div className="flex">
                <div className="flex-1 p-5 text-justify">
                   <h1 className='serviceName'>Follow Me</h1>
                    <div className='serviceDes'>
                        <FaFacebook className='inline-block mr-2'/> <a href=""  className='footerLink'>Facebook</a> <br/>
                        <FaYoutube className='inline-block mr-2'/> <a href=""  className='footerLink'>Youtube</a>
                    </div>

                </div>
                <div className="flex-1 p-5 text-justify">
                    <h1 className='serviceName'>Address</h1>
                    <div className='serviceDes'>
                        <p>RECEIVER’S NAME
                            47 ANYVILLE
                            BERKSHIRE
                            RG1 1AT
                            UNITED KINGDOM</p>
                        <p><FaEnvelope className='inline-block mr-2'/>irfanhossain701@gmail.com</p>
                        <p><FaFacebook className='inline-block mr-2'/> engr.irfan.us</p>
                    </div>

                </div>
                <div className="flex-1 p-5 text-justify">
                    <h1 className='serviceName'>Information</h1>
                    <div className='serviceDes'>
                    <a href="" className='footerLink'>About Me</a> <br/>
                    <a href="" className='footerLink'>My Resume</a> <br/>
                    <a href="" className='footerLink'>Contact Me</a>
                    </div>

                </div>
                <div className="flex-1 p-5 text-justify">
                    <h1 className='serviceName'>Legal</h1>
                    <div className='serviceDes'>
                        <a href="" className='footerLink'> Refund Policy</a> <br/>
                        <a href="" className='footerLink'>Terms And Condition</a> <br/>
                        <a href="" className='footerLink'>Privacy Policy</a> <br/>
                    </div>

                </div>
            </div>
            </div>
            
            <div className='text-center copyRightSection'>
                <a href="" className='copyRightLink'>irfan.com &copy;2021-2023</a>
                
            </div>

        </>
    );
};

export default Footer;