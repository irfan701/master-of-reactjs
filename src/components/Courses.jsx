const Courses = () => {
    return (
        <>
            <div className="container mx-auto">
                <h2 className='title'>Courses</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-row max-w-sm rounded shadow-lg">
                        <div className='flex-1 w-30 h-full'>
                            <img className="h-full" src="https://v1.tailwindcss.com/img/card-top.jpg"
                                 alt="Sunset in the mountains"/>
                        </div>
                        <div className='flex-1 w-50'>
                            <div className="px-4 py-2">

                                <div className="font-medium text-[14px] mb-2">Title One</div>
                                <p className="text-gray-700 text-justify text-[12px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis
                                    dolore doloremque
                                </p>

                            </div>
                            <a href="" className="px-6 pt-1 pb-2 text-xs">Go Details</a>
                        </div>
                    </div>


                    <div className="flex flex-row max-w-sm rounded shadow-lg">
                        <div className='flex-1 w-30 h-full'>
                            <img className="h-full" src="https://v1.tailwindcss.com/img/card-top.jpg"
                                 alt="Sunset in the mountains"/>
                        </div>
                        <div className='flex-1 w-50'>
                            <div className="px-4 py-2">

                                <div className="font-medium text-[14px] mb-2">Title One</div>
                                <p className="text-gray-700 text-justify text-[12px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis
                                    dolore doloremque
                                </p>

                            </div>
                            <a href="" className="px-6 pt-1 pb-2 text-xs">Go Details</a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Courses;