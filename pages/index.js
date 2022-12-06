import React, { useEffect, useState } from "react";
import Image from 'next/image';
import logoPic from '../public/img/brand/chatGDT.jpg';

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import FooterSmall from "../components/Footers/FooterSmall.js";
import Logo from "../components/Logo/Logo.js";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

export default function Index() {
    return (
        <>
            <IndexNavbar />
            <section className="header relative items-center flex h-[70vh] mt-0">
                <div className="container mx-auto items-center flex flex-wrap z-2">
                    <div className="w-full bg-gray-900 bg-opacity-90 shadow-sky-500 glow-sm rounded-sm md:w-8/12 lg:w-6/12 xl:w-6/12 px-6">
                        <div className="py-2 mt-2 sm:pt-0 lg:pt-0 lg:-mt-2">
                            <h2 className="font-semibold text-max pointer-events-none lg:relative lg:-top-4 lg:-left-10">
                                <Logo weight={600} />
                            </h2>
                            <h3 className="text-lg font-semibold font-mono text-sky-400 uppercase">
                                the official <Logo weight={600} /> project
                            </h3>
                            <p className="mt-4 text-xl leading-relaxed text-slate-300">
                                Artificial general intelligence (<span className="text-rose-500 font-bold uppercase">AGI</span>) is a type of advanced AI that has the ability to learn and adapt to new environments and tasks, similar to a human being. 
                                It has the potential to revolutionize many aspects of our lives, from healthcare to transportation to education. However, 
                                developing <span className="text-rose-500 font-bold uppercase">AGI</span> is a complex and challenging task that requires significant expertise and resources.
                            </p>
                            <p className="my-2 lg:mt-4 text-xl leading-relaxed text-slate-300">
                                Our approach to addressing these challenges is to use a decentralized training method, 
                                which involve leveraging the collective power of many different computers and devices 
                                to train <span className="text-rose-500 font-bold uppercase">AGI</span> systems.
                            </p>  
                            <p className="my-2 lg:mt-4 text-2xl subpixel-antialiased leading-relaxed text-slate-300">
                                We call it <span className="text-rose-500 font-bold uppercase">Generative Byzentine Training</span>.
                            </p>                          
                        </div>
                    </div>
                </div>
                <Image
                    className="absolute z-0 b-auto right-0 top-0 h-full lg:h-auto sm:mt-10 shadow-slate-900 shadow-2xl"
                    src={logoPic}
                    priority={true}

                />
            </section>

            <section className="mt-8 lg:mt-48 md:mt-40 lg:pb-6 relative bg-slate-800">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 310"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-slate-800 fill-current"
                            points="2560 0 2560 310 0 310"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto z-4">
                    <div className="flex flex-wrap items-center">
                        <div className="z-3 w-11/12 md:w-6/12 lg:w-4/12 px-2 md:px-4 mr-auto ml-auto mt-4 lg:-mt-32">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-inner shadow-gray-700 rounded-lg bg-zinc-700">
                                <Image
                                    palceholder="empty"
                                    src={logoPic}
                                    className="w-full rounded-t-lg"
                                />
                                <blockquote className="relative p-4 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block h-95-px -top-94-px"
                                    >
                                        <polygon
                                            points="0,45 0,95 723,95"
                                            className="text-zinc-700 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-3xl font-bold ">
                                        Decentralized Training of AGI
                                    </h4>
                                    <p className="text-xl mt-2 text-slate-300">
                                        One way to enable decentralized training of AGI is through the use of a decentralized cryptocurrency or "coin" that can be used to incentivize and reward individuals and organizations that contribute their computing power to the training process. This coin would be open source and decentralized, allowing for transparency and collaboration among participants.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="z-3 w-full lg:mt-2 md:w-6/12 lg:px-4">
                            <div className="flex flex-wrap">
                                <div className="w-11/12 lg:px-4">
                                    <div className=" relative flex flex-col mt-4">
                                        <div className="px-4 pt-5 flex flex-row">
                                            <div className="text-indigo-800 p-3 mr-2 text-center inline-flex items-center justify-center w-1/12 h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                                                <i className="fas fa-vial"></i>
                                            </div>
                                            <h6 className="text-3xl my-1 font-semibold">
                                                Scalability
                                            </h6>
                                        </div>
                                        <div className="px-4">
                                            <p className="mb-4 text-xl text-slate-300">
                                                Decentralized training allows for the use of vast amounts of computing power, which can significantly accelerate the training process and improve the performance of AGI systems.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 pt-5 flex flex-row">
                                            <div className="text-indigo-700 p-3 mr-2 text-center inline-flex items-center justify-center w-1/12 h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                                                <i className="fas fa-award"></i>
                                            </div>
                                            <h6 className="text-3xl my-1 font-semibold">
                                                Cost savings
                                            </h6>
                                        </div>
                                        <div className="px-4">
                                            <p className="mb-4 text-xl text-slate-300">
                                                By leveraging the computing power of many different devices, decentralized training can reduce the cost of AGI development, making it more accessible to a wider range of organizations and individuals.
                                            </p>
                                        </div>
                                    </div>                                
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 pt-5 flex flex-row">
                                            <div className="text-indigo-700 p-3 mr-2 text-center inline-flex items-center justify-center w-1/12 h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                                                <i className="fas fa-seedling"></i>
                                            </div>
                                            <h6 className="text-3xl my-1 font-semibold">Openness</h6>
                                        </div>
                                        <div className="px-4">
                                            <p className="mb-4 text-xl text-slate-300">
                                                Decentralized training can foster a more open and collaborative approach to AGI development, allowing for the sharing of data and algorithms, and enabling a wider range of experts and researchers to contribute to the development process.
                                            </p>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-16 bg-zinc-900 relative pt-2">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 310"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-zinc-900 fill-current"
                            points="2560 0 2560 310 0 310"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto pb-16 z-3 mt-6 mb-12">
                    <div className="flex flex-wrap items-center">
                        <div className="z-3 w-full md:w-6/12 px-4 lg:px-12 md:px-4 ml-auto mr-auto bg-zinc-700 rounded-xl glow-lg shadow-sky-600">
                            <div className="pt-5 flex flex-row">
                                <div className="text-indigo-400 p-3 mr-2 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-900">
                                    <i className="fas fa-wand-sparkles text-xl"></i>
                                </div>
                                <h3 className="text-3xl my-2 font-semibold leading-normal">
                                    Technology
                                </h3>
                            </div>
                            <div className="px-0">
                                <p className="text-xl leading-relaxed mt-0 mb-4 text-slate-300">
                                    One way to enable decentralized training of AGI is through the use of a decentralized cryptocurrency or "coin" that can be used to incentivize and reward individuals and organizations that contribute their computing power to the training process. This coin would be open source and decentralized, allowing for transparency and collaboration among participants.
                                </p>
                            </div>
                            <div className="pt-5 flex flex-row">
                                <div className="text-indigo-400 p-3 mr-2 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-900">
                                    <i className="fas fa-zap text-xl"></i>
                                </div>
                                <h3 className="text-3xl my-2 font-semibold leading-normal">
                                    Tokenomics
                                </h3>
                            </div>
                            <div className="px-0">
                                <p className="mb-4 text-xl text-slate-300">
                                    To support decentralized training of AGI, the coin would need to have several key features, including:
                                </p>                                                                
                                <div className="block pb-6">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Governance
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Robust
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Incentive Mechanisms
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Secure
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Decision-making
                                    </span>
                                </div>
                                <p className="mb-4 text-xl text-slate-300">
                                    Overall, decentralized training of AGI has the potential to accelerate the development of this technology, reduce its costs, and foster greater collaboration and openness among researchers and experts. A decentralized coin that enables and incentivizes decentralized training of AGI could be a valuable tool in realizing this potential.
                                </p>
                            </div>
                        </div>

                        <div className="z-3 w-5/12 pt-4 pb-8 mb-4 mr-auto ml-auto mt-12 lg:relative">
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-zinc-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-rose-600 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 font-semibold">Robust and Secure Blockchain</h6>
                                </div>
                                <div className="px-4 pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        The coin's blockchain would need to be able to securely and efficiently handle large amounts of data and transactions, and support the complex calculations required for AGI training.
                                    </p>
                                </div>
                            </div>       
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-zinc-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-rose-600 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                                        <i className="fas fa-gift"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 font-semibold">Incentive mechanisms</h6>
                                </div>
                                <div className="px-4  pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        The coin would need to have a clear and transparent governance structure and decision-making process, to ensure that the AGI training process is aligned with the interests of all participants.
                                    </p>
                                </div>
                            </div>       
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-zinc-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-rose-600 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-lg rounded-full bg-gray-900">
                                        <i className="fas fa-code-compare"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 font-semibold">Governance and decision-making</h6>
                                </div>
                                <div className="px-4  pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        The coin would need to have a clear and transparent governance structure and decision-making process, to ensure that the AGI training process is aligned with the interests of all participants.
                                    </p>
                                </div>
                            </div>       
                        </div>
                    </div>

                </div>
            </section>

            <section className="pb-16 bg-slate-700 relative pt-2 z-0">
                <div
                    className="lg:-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 850"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-slate-700 fill-current"
                            points="2560 0 2560 850 0 850"
                        ></polygon>
                    </svg>
                </div>

            </section>
            <FooterSmall />
            <ToastContainer
                position="bottom-right"
                theme="dark"
            />
        </>
    )

}
