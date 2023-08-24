import logo from './../assets/images/logo.png'
const Services = () => {
    return (
        <>
            <div className="container mx-auto mt-[50px]">

                <h2 className='title'>My Services</h2>
                <div className="grid grid-cols-3 gap-3">

<div className='shadow-xl p-6 hover:bg-emerald-500 hover:text-white  duration-500 ease-out text-justify rounded-xl w-25'>
    <img src={logo} alt="" width='100' className='pb-3 ml-[40px]' />
    <h3 className='text-2xs font-semibold text-center pb-3'>Web Development</h3>
    <p className='text-xs pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iusto molestiae officiis rem.
        Alias beatae explicabo pariatur repellat tenetur</p>
</div>

                    <div className='shadow-xl p-6 hover:bg-emerald-500 hover:text-white decoration-500 ease-out text-justify rounded-xl w-25'>
                        <img src={logo} alt="" width='100' className='pb-3 ml-[40px]' />
                        <h3 className='text-2xs font-semibold text-center pb-3'>Web Development</h3>
                        <p className='text-xs pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iusto molestiae officiis rem.
                            Alias beatae explicabo pariatur repellat tenetur</p>
                    </div>

                    <div className='shadow-xl p-6 hover:bg-emerald-500 hover:text-white  duration-500 ease-out text-justify rounded-xl w-25'>
                        <img src={logo} alt="" width='100' className='pb-3 ml-[40px]' />
                        <h3 className='text-2xs font-semibold text-center pb-3'>Web Development</h3>
                        <p className='text-xs pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iusto molestiae officiis rem.
                            Alias beatae explicabo pariatur repellat tenetur</p>
                    </div>




                </div>

            </div>
        </>
    );
};

export default Services;