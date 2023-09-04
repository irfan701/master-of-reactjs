const Projects = () => {
    return (
        <>
            <div className="container mx-auto">
                <h2 className='title'>Recent Projects</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg"
                             alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-medium text-['12px'] mb-2">Title One</div>
                            <p className="text-gray-700 text-xs text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis
                                dolore doloremque enim exercitationem hic impedit ipsa, labore quas rerum?
                            </p>
                        </div>
                        <div className="px-6 pt-1 pb-2">
                            <button className="btn">Go Details</button>
                        </div>
                    </div>


                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg"
                             alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-medium text-['12px'] mb-2">Title One</div>
                            <p className="text-gray-700 text-xs text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis
                                dolore doloremque enim exercitationem hic impedit ipsa, labore quas rerum?
                            </p>
                        </div>
                        <div className="px-6 pt-1 pb-2">
                            <button className="btn">Go Details</button>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg"
                             alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-medium text-['12px'] mb-2">Title One</div>
                            <p className="text-gray-700 text-xs text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis
                                dolore doloremque enim exercitationem hic impedit ipsa, labore quas rerum?
                            </p>
                        </div>
                        <div className="px-6 pt-1 pb-2">
                            <button className="btn">Go Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;