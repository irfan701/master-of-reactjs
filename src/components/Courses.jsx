const Courses = () => {
    return (
        <>
            <div className='container text-center mx-auto'>

                <div className='grid grid-cols-3 gap-4'>

                    <div className="flex sm:flex-row flex-col shadow-xl">
                        <div className='basis-[45%]  my-auto px-1.5 img-fluid'>
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className='w-full'/>
                        </div>
                        <div className='basis-[55%] px-5'>
                            <div className='text-start'>
                                <h1 className='text-2xl mb-5'>Web Development</h1>
                                <p className='text-justify my-3'>
                                    I build native and cross platform mobile app for your business
                                    app for your buisness</p>
                                <p><a href="" className='text-blue-400 p-2 inline-block'>Details</a></p>
                            </div>
                        </div>


                    </div>
                    <div className="flex sm:flex-row flex-col shadow-xl">
                        <div className='basis-[45%]  my-auto px-1.5 img-fluid'>
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className='w-full'/>
                        </div>
                        <div className='basis-[55%] px-5'>
                            <div className='text-start'>
                                <h1 className='text-2xl mb-5'>Web Development</h1>
                                <p className='text-justify my-3'>
                                    I build native and cross platform mobile app for your business
                                    app for your buisness</p>
                                <p><a href="" className='text-blue-400 p-2 inline-block'>Details</a></p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
};

export default Courses;