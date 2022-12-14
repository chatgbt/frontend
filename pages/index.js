import Image from 'next/image';
import logoPic from '../public/img/brand/chatGDT.jpg';

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import FooterSmall from "../components/Footers/FooterSmall.js";
import Logo from "../components/Logo/Logo";
import Ticker from "../components/Logo/Ticker";

function ImportantLetter({children, ...props}) {
    return (
        <span {...props} className="font-saira-stencil-one text-rose-600 font-bold uppercase">
            {children}
        </span>
    )
}
function FancyWords() {
    return (
        <>
            <ImportantLetter>A</ImportantLetter>rtificial <ImportantLetter>G</ImportantLetter>eneral <ImportantLetter>I</ImportantLetter>ntelligence 
        </>
    )
}
export default function Index() {
    return (
        <>
            <IndexNavbar />
            <section className="header mt-6 items-center flex ">
                <div className="container mx-auto items-center flex flex-wrap  z-4">
                    <div className="w-full z-2 mt-12 bg-gray-900 bg-opacity-90 shadow-sky-500 glow-sm rounded-sm md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 m-0">
                        <div className="py-0 mt-4 sm:pt-0 lg:pt-0 lg:-mt-2">
                            <h2 className="font-semibold text-max pointer-events-none lg:relative lg:-top-4 lg:-left-10">
                                <Logo weight={600} />
                            </h2>
                            <h3 className="text-lg font-semibold font-serif text-red-400 uppercase">
                                the official <Logo weight={600} /> project
                            </h3>
                            <p className="mt-4 text-xl leading-relaxed text-slate-300">
                                <FancyWords/> (<Ticker weight={600} />) is a type of advanced AI 
                                that has the ability to learn and adapt to new environments and tasks, similar to a human being. 
                                It has the potential to revolutionize many aspects of our lives, from healthcare to transportation to education. However, 
                                developing <Ticker weight={600} /> is a complex and challenging task that requires significant expertise and resources.
                            </p>
                            <p className="my-2 lg:mt-4 text-xl leading-relaxed text-slate-300">
                                Our approach to addressing these challenges is to use a decentralized training method, 
                                which involve leveraging the collective power of many different computers and devices 
                                to train <Ticker weight={600} /> systems.
                            </p>  
                                                   
                        </div>
                    </div>
                    <div className="w-full mt-6 z-2 text-center">
                        <p className="my-2 lg:mt-4 text-2xl subpixel-antialiased leading-relaxed text-slate-300">
                            We call it <span className="text-rose-500 font-bold uppercase">Generative Byzentine Training</span>.
                        </p>   
                    </div>
                </div>
                <Image
                    className="absolute z-2 b-auto right-0 top-0 hidden lg:inline sm:mt-10 shadow-sky-900 glow-xl"
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
                <div className="container mx-auto z-[10]">
                    <div className="flex flex-wrap items-center">
                        <div className="z-3 w-11/12 md:w-6/12 lg:w-4/12 px-2 md:px-4 mr-auto ml-auto mt-4 lg:-mt-32">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-inner shadow-gray-900 rounded-lg bg-zinc-700">
                                <Image
                                    palceholder="empty"
                                    src={logoPic}
                                    className="w-full rounded-t-lg"
                                />
                                <blockquote className="relative p-4 mb-0 rounded-b-lg">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="opacity-0 lg:opacity-100 xl:opacity-100 absolute left-0 w-full lg:block xl:block h-95-px -top-94-px"
                                    >
                                        <polygon
                                            points="0,45 0,95 723,95"
                                            className="text-zinc-700 fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-3xl font-bold subpixel-antialiased text-sky-400">
                                        Decentralization of <Ticker weight={600} />
                                    </h4>
                                    <p className="text-xl mt-2 text-slate-300">
                                        The best way to enable decentralized training of <Ticker weight={600} />  is through the use of a 
                                        decentralized cryptocurrency or "coin" that can be used to incentivize and reward individuals and organizations that contribute their computing power to the training process. 
                                    </p>
                                    <p className="text-xl mt-2 text-slate-300">
                                        Our coin will be open source and decentralized, allowing for transparency and collaboration among participants.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="z-3 w-full lg:mt-2 md:w-6/12 lg:px-4">
                            <div className="flex flex-wrap">
                                <div className="w-11/12 lg:px-4">
                                    <div className=" relative flex flex-col mt-4">
                                        <div className="px-4 pt-5 flex flex-row">
                                            <div className="text-indigo-700 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 rounded-full bg-gray-900 shadow-indigo-700 glow-sm">
                                                <i className="fas fa-vial"></i>
                                            </div>
                                            <h6 className="text-3xl my-1 font-semibold">
                                                Scalability
                                            </h6>
                                        </div>
                                        <div className="px-4">
                                            <p className="mb-4 text-xl text-slate-300">
                                                Decentralized training allows for the use of vast amounts of computing power, which can significantly accelerate the training process and improve the performance of <Ticker weight={600} /> systems.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 pt-5 flex flex-row">
                                            <div className="text-indigo-700 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 rounded-full bg-gray-900 shadow-indigo-700 glow-sm">
                                                <i className="fas fa-award"></i>
                                            </div>
                                            <h6 className="text-3xl my-1 font-semibold">
                                                Cost savings
                                            </h6>
                                        </div>
                                        <div className="px-4">
                                            <p className="mb-4 text-xl text-slate-300">
                                                By leveraging the computing power of many different devices, decentralized training can reduce the cost of <Ticker weight={600} /> development, making it more accessible to a wider range of organizations and individuals.
                                            </p>
                                        </div>
                                    </div>                                
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 pt-5 flex flex-row">
                                            <div className="text-indigo-700 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5   rounded-full bg-gray-900 shadow-indigo-700 glow-sm">
                                                <i className="fas fa-seedling"></i>
                                            </div>
                                            <h6 className="text-3xl my-1 font-semibold">Openness</h6>
                                        </div>
                                        <div className="px-4">
                                            <p className="mb-4 text-xl text-slate-300">
                                                Decentralized training can foster a more open and collaborative approach to <Ticker weight={600} /> development, allowing for the sharing of data and algorithms, and enabling a wider range of experts and researchers to contribute to the development process.
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
                        <div className="z-3 w-full md:w-6/12 p-4 lg:px-12 md:px-4 ml-auto mr-auto bg-zinc-700 rounded-xl glow-lg shadow-sky-600">
                            
                            <div className="pt-2 flex flex-row">
                                <div className="text-indigo-700 p-3 mr-2 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-indigo-700 glow-sm rounded-full bg-gray-900">
                                    <i className="fas fa-zap text-xl"></i>
                                </div>
                                <h3 className="text-3xl mt-3 uppercase antialiased ml-12 font-semibold leading-normal">
                                    Tokenomics
                                </h3>
                            </div>
                            <div className="px-0">
                                <p className="mb-4 text-xl text-slate-300">
                                    The tokenomics for <Ticker weight={600} /> token will be carefully designed and balanced to incentivize and reward participants in the <Ticker weight={600} /> training process, while also ensuring the stability and sustainability of the token itself.
                                </p>
                                <p className="mb-4 text-xl text-slate-300">
                                    To support decentralized training of <Ticker weight={600} />, the coin would need to have several key features, including:
                                </p>                                                                
                                <div className="block pb-6">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Governance
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Deflationary Policies
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Robustness
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Incentive Mechanisms
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Security
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Miner Rewards
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Transaction Fees
                                    </span>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-rose-500 bg-gray-800 uppercase last:mr-0 mr-2 mt-2">
                                        Inflationary Policies
                                    </span>
                                </div>
                                <p className="mb-4 text-xl text-slate-300">
                                    Overall, decentralized training of <Ticker weight={600} /> has the potential to accelerate the development of this technology,
                                     reduce its costs, and foster greater collaboration and openness among researchers and experts.
                                      A decentralized coin that enables and incentivizes decentralized training of <Ticker weight={600} /> could
                                       be a valuable tool in realizing this potential.
                                </p>
                            </div>
                        </div>

                        <div className="z-3 lg:w-5/12 pt-4 lg:pb-8 -mb-20 lg:mb-4 mr-auto ml-auto mt-12 lg:relative">
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-slate-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-indigo-700 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-indigo-700 glow-sm rounded-full bg-gray-900">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 antialiased font-semibold">Robust and Secure Blockchain</h6>
                                </div>
                                <div className="px-4 pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        Ethereum Proof of Stake will be able to securely and efficiently handle large amounts of data and transactions, and support the complex calculations required for <Ticker weight={600} /> training.
                                    </p>
                                </div>
                            </div>       
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-slate-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-indigo-600 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-indigo-700 glow-sm rounded-full bg-gray-900">
                                        <i className="fas fa-gift"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 antialiased font-semibold">Incentive mechanisms</h6>
                                </div>
                                <div className="px-4  pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        The coin will include mechanisms that incentivize and reward participants for contributing their computing power to the training process, such as mining rewards and transaction fees.
                                    </p>
                                </div>
                            </div>       
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-slate-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-indigo-400 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-indigo-700 glow-sm rounded-full bg-gray-900">
                                        <i className="fas fa-crown"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 antialiased font-semibold">Governance and decision-making</h6>
                                </div>
                                <div className="px-4  pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        The coin will have a clear and transparent governance structure and decision-making process, to ensure that the <Ticker weight={600} /> training process is aligned with the interests of all participants.
                                    </p>
                                </div>
                            </div>     
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-slate-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-indigo-400 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-indigo-700 glow-sm rounded-full bg-gray-900">
                                        <i className="fas fa-hammer"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 antialiased font-semibold">Miners</h6>
                                </div>
                                <div className="px-4  pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        Miners are individuals or organizations that contribute their computing power to the <Ticker weight={600} />  training process, and they would be rewarded with tokens for their contributions. The amount of tokens awarded to miners would be determined by a variety of factors, including the amount of computing power they contribute and the difficulty of the <Ticker weight={600} />  training tasks they are working on.
                                    </p>
                                </div>
                            </div>  
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-slate-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-indigo-400 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-indigo-700 glow-sm rounded-full bg-gray-900">
                                        <i className="fas fa-code-compare"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 antialiased font-semibold">Transaction Fees</h6>
                                </div>
                                <div className="px-4  pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        Whenever tokens are transferred between different parties, a small transaction fee would be charged. This fee would be used to reward the miners who are responsible for verifying and recording the transaction on the blockchain.
                                    </p>
                                </div>
                            </div>  
                            <div className="z-4 relative flex flex-col min-w-0 mt-4 rounded-md bg-slate-900 bg-opacity-70 glow-md shadow-red-500 mx-3">
                                <div className="px-4 pt-5 flex flex-row">
                                    <div className="text-indigo-400 p-3 mr-2 text-center inline-flex items-center justify-center w-[50px] h-12 mb-5 shadow-indigo-700 glow-sm rounded-full bg-gray-900">
                                        <i className="fas fa-comments-dollar"></i>
                                    </div>
                                    <h6 className="text-3xl my-1 antialiased font-semibold">Supply and Demand</h6>
                                </div>
                                <div className="px-4  pb-4">
                                    <p className="mb-4 text-xl text-slate-300">
                                        The tokenomics for an <Ticker weight={600} />  token will include mechanisms for managing the supply and demand for the token, such as inflationary and deflationary policies. This will help to ensure that the value of the token remains stable and that it continues to serve as an effective incentive and reward for <Ticker weight={600} />  training.
                                    </p>
                                </div>
                            </div>    
                        </div>
                    </div>

                </div>
            </section>

            <section className="pb-8 bg-slate-700 relative pt-2 z-0">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
                <div className="hidden">
                    <span className="text-rose-400">agi</span>
                    <span className="text-rose-500">agi</span>
                    <span className="text-rose-600">agi</span>
                    <span className="text-rose-700">agi</span>
                    <span className="text-rose-800">agi</span>
                    <span className="text-rose-900">agi</span>
                    <span className="text-indigo-400">agi</span>
                    <span className="text-indigo-500">agi</span>
                    <span className="text-indigo-600">agi</span>
                    <span className="text-indigo-700">agi</span>
                    <span className="text-indigo-800">agi</span>
                    <span className="text-indigo-900">agi</span>
                </div>
            </section>
            <FooterSmall />
        </>
    )

}
