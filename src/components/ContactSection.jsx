import {FaEnvelope, FaFacebook} from "react-icons/fa";

const ContactSection = () => {
    return (
        <>
            <div className='container '>
                <div className="flex sm:flex-row flex-col mx-auto my-auto">
                    <div className='basis-[45%] p-12'>
                        <h1 className='serviceName'>Quick Connect</h1>
                        <form>
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">First
                                                name</label>
                                            <div className="mt-2">
                                                <input type="text" name="first-name" id="first-name"
                                                       autoComplete="given-name"
                                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="email"
                                                   className="block text-sm font-medium leading-6 text-gray-900">Email
                                                address</label>
                                            <div className="mt-2">
                                                <input id="email" name="email" type="email" autoComplete="email"
                                                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="about"
                                                   className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                            <div className="mt-2">
                                                <textarea id="about" name="about" rows="3"
                                                          className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <button type="submit"
                                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className='basis-[55%] p-12'>
                        <div className='text-start'>
                            <h1 className='serviceName'>Address</h1>
                            <div className='serviceDes'>
                                <p>RECEIVER’S NAME 47 ANYVILLE BERKSHIRE RG1 1AT UNITED KINGDOM</p>
                                <p><FaEnvelope className='inline-block mr-2'/>irfanhossain701@gmail.com</p>
                                <p><FaFacebook className='inline-block mr-2'/> engr.irfan.us</p>


                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default ContactSection;