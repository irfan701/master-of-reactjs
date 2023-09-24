import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ClientReview = () => {

    var settings = {
        vertical:true,
        verticalSwiping: true,
        autoPlay:true,
        autoplaySpeed:3000,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="container mx-auto">
                <h1 className='title'>Client Says</h1>


            <div>
                <h2> Responsive </h2>
                <Slider {...settings}>
                            <div className='text-center text-xs'>
                                <img src="" alt="" className='circleImg'/>
                                <h1>Web Design</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptas.</p>
                            </div>

                            <div>
                                <img src="" alt="" className='circleImg'/>
                                <h1>Web Design</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptas.</p>
                            </div>

                            <div>
                                <img src="" alt="" className='circleImg'/>
                                <h1>Web Design</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptas.</p>
                            </div>
                </Slider>
            </div>
        </div>
        </>
    )
};

export default ClientReview;