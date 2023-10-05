const Portfolio = () => {
    return (
        <>
            <div className='max-w-[1320px] mx-auto'>

                <h1 className='text-4xl text-center py-5'>Portfolio</h1>
            </div>


            <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px]'>

                <div className='text-center shadow-lg rounded'>
                    <div className='overflow-hidden'>
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""
                             className="hover:scale-125 duration-1000"/>
                    </div>

                    <h3 className='py-2 text-2xl'>Card Title</h3>
                    <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, porro.</p>
                    <div className='py-4'>
                        <a href="" className='btn'>More Details</a>
                    </div>


                </div>

                <div className='text-center shadow-lg rounded'>
                    <div className='overflow-hidden'>
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""
                             className="hover:scale-125 duration-1000"/>
                    </div>

                    <h3 className='py-2 text-2xl'>Card Title</h3>
                    <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, porro.</p>
                    <div className='py-4'>
                        <a href="" className='btn'>More Details</a>
                    </div>


                </div>

                <div className='text-center shadow-lg rounded'>
                    <div className='overflow-hidden'>
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""
                             className="hover:scale-125 duration-1000"/>
                    </div>

                    <h3 className='py-2 text-2xl'>Card Title</h3>
                    <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, porro.</p>
                    <div className='py-4'>
                        <a href="" className='btn'>More Details</a>
                    </div>


                </div>

                <div className='text-center shadow-lg rounded'>
                    <div className='overflow-hidden'>
                        <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""
                             className="hover:scale-125 duration-1000"/>
                    </div>

                    <h3 className='py-2 text-2xl'>Card Title</h3>
                    <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, porro.</p>
                    <div className='py-4'>
                        <a href="" className='btn'>More Details</a>
                    </div>


                </div>



            </div>
        </>
    );
};

export default Portfolio;