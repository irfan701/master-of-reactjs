import Modal from "./utils/Modal.jsx";
import {FaPlayCircle} from "react-icons/fa";
import 'video-react/dist/video-react.css';

const Video = () => {
    return (
        <>
            <div className="conatiner mx-auto">
                <div className="flex flex-col videoCard text-center items-center">
                    <p className='videoTitle'>How I Do</p>
                    <p className='videoDes'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, harum.</p>
                    <Modal btnName=<FaPlayCircle className='playBtn'/> />
                </div>
            </div>

        </>
    );
};

export default Video;