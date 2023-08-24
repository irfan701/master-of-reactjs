import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

const Analysis = () => {

    let data=[
        {Technology:'PHP',Projects:"100"},
        {Technology:'PHP',Projects:"90"},
        {Technology:'PHP',Projects:"80"},
        {Technology:'PHP',Projects:"70"},
        {Technology:'PHP',Projects:"50"},
    ]

    let fillColor='#4C9DED'
    return (

        <>
            <div className='container mx-auto'>
                <h2 className='title'>Analysis</h2>
                <div className='flex text-justify gap-7 p-10'>

                    <div className='w-full h-[300px] flex-1'>
                        <ResponsiveContainer>
                        <BarChart width={100} height={300} data={data}>
                            <XAxis dataKey="Technology" />
                            <Tooltip/>
                            <Bar dataKey="Projects" fill={fillColor} />
                        </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='des flex-1'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet assumenda cupiditate est placeat quibusdam, sapiente? Beatae commodi delectus explicabo magnam voluptatem. Ab adipisci aliquam aliquid atque autem doloribus eum excepturi facilis hic id incidunt itaque, optio quam qui quod, rem rerum, saepe sit vitae voluptas? A doloribus fuga laborum, nam nulla odit possimus quo! Dolorem, odio, ratione. Natus necessitatibus quas recusandae similique temporibus! A, accusantium autem dignissimos dolorum eius eos et excepturi exercitationem expedita fugiat impedit in maxime nihil nulla quam? Ad aliquam atque facere, fugit minima nihil omnis sunt veniam. At consectetur doloribus error nostrum quidem, quisquam sunt.
                    </div>
                </div>


            </div>
        </>
    );
};

export default Analysis;