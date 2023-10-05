import logo1 from './../assets/images/logo-gradient.png'
import logo2 from './../assets/images/logo-blue.png'
import {useEffect, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const TopNavbar = () => {

    let Links = [
        {name: "Home", link: "/"},
        {name: "Service", link: "/"},
        {name: "Courses", link: "/"},
        {name: "Portfolio", link: "/"},
        {name: "Contact", link: "/"},
        {name: "About", link: "/"},
    ]

    const [open,setOpen]=useState(false)

    const [navBarTitle, setNavBarTitle] = useState("navTitle")
    const [navBarLogo, setNavBarLogo] = useState([logo1])
    const [navBarBg, setNavBarBg] = useState("navBackground")
    const [navBarItem, setNavBarItem] = useState("navItem")
    //const [NavVarint, setNavVarint] = useState("navItem")


    const onScroll = () => {
        if (window.scrollY > 100) {

            setNavBarLogo([logo2])
            setNavBarTitle('navTitleScroll')
            setNavBarBg('navBackgroundScroll')
            setNavBarItem('navItemScroll')

        } else if (window.scrollY < 100) {

            setNavBarLogo([logo1])
            setNavBarTitle('navTitle')
            setNavBarBg('navBackground')
            setNavBarItem('navItem')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <>

            <div className="w-full fixed left-0 top-0 shadow-md">
                <div className={navBarBg}>
                    <div className="md:flex         py-4 px-7 md:px-10 item-center justify-between">
                        <div className='font-bold cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                            <img width="25" src={navBarLogo} className='mr-2'/>
                            <p className={navBarTitle}><span className=''>Hayyat Mart</span></p>
                        </div>
                        <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-7 top-4 cursor-pointer md:hidden'>
                            {open?<AiOutlineClose/>:<AiOutlineMenu/>}
                        </div>
                        <ul className={`${open?'top-[55px]':'top-[-490px]'} md:flex md:item-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
                            {Links.map((link, i) => {
                                return <li key={i.toString()} className='md:ml-8 md:my-0 my-7'>
                                    <a href={link.link} className={navBarItem}>{link.name}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TopNavbar;