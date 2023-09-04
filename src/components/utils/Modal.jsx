import React from "react";
import { Player, BigPlayButton } from 'video-react';
export default function Modal(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button type="button" onClick={() => setShowModal(true)}>
                {props.btnName}
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[500px] h-auto  mx-auto">
                            {/*content*/}
                            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                    {/*            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">*/}
                    {/*                /!*<h3 className="text-xl font-semibold">*!/*/}
                    {/*                /!*    Modal Title*!/*/}
                    {/*                /!*</h3>*!/*/}


                    {/*                <button*/}
                    {/*                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"*/}
                    {/*                    onClick={() => setShowModal(false)}*/}
                    {/*                >*/}
                    {/*<span className="text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">*/}
                    {/*  ×*/}
                    {/*</span>*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                                {/*body*/}
                                <div className="relative p-1 flex-auto">

                                        <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                            <BigPlayButton position="center"/>
                                        </Player>

                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-1 text-xs ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        close
                                    </button>
                                    {/*<button*/}
                                    {/*    className="bg-emerald-500 text-white active:bg-emerald-600 text-xs px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                                    {/*    type="button"*/}
                                    {/*    onClick={() => setShowModal(false)}*/}
                                    {/*>*/}
                                    {/*    Save Changes*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}