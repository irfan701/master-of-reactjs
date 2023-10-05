
const PageTop = ({pageTitle}) => {
    return (
        <>
            <div className="bg-fixed topFixedPage p-0">
                <div className='topPageOverlay'>
                    <div className='mt-32 text-center'>
                        <h4 className='page-title'>{pageTitle}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageTop;