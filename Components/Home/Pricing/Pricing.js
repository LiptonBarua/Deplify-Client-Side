import Image from "next/image";
import { motion, spring } from "framer-motion"

const buttonVariants = {
    hover:{
        scale:1.1
    }
}

const Pricing = () => {



    return (
        <div>
            <section className="py-20">
                <div className="px-4 mx-auto">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                    
                        <h2 className="text-4xl font-bold lg:text-5xl ">Get the plan <br></br> that works for you</h2>
                    </div>

                    <div className="gap-y-16 gap-x-8 md:my-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                        <motion.div
                        initial={{x:'-100vw'}}
                        animate={{x:0}}
                        transition={{type:'spring', stiffness:50}}
                        whileHover= "hover"
                        >
                            <div className="my-4  md:my-0 pricing shadow-2xl flex flex-col p-6 space-y-6 rounded shadow sm:p-8">
                                <div className="space-y-2">
                                    <div className="flex flex-row items-center mb-10">
                                    <Image src="/Pricing Logo/Pricing_Reguler_logo-removebg-preview.png" width={80} height={80}></Image>
                                    <h4 className="text-2xl font-bold mb-5 ml-3 text-indigo-900 ">REGULER</h4>
                                    </div>
                                    <p className="text-6xl font-bold text-indigo-900 ">
                                    <span>$19
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                    </p>
                                   
                                </div>

                                <ul className="flex-1 space-y-2 leading-12 ">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">1 Environments</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">50 Applications</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">100 Deployments</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Integrated Cl/CD</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Slack integration</span>
                                    </li>
                                </ul>
                                <motion.button
                                  variants={buttonVariants}
                                  whileHover="hover"
                                  className="rounded py-3 px-4 text-white bg-gradient-to-tr from-violet-900 to-blue-600 font-semibold text-lg">
                               Add To Cart
                             </motion.button>
                            </div>
                        </motion.div>
                        <motion.div
                        whileHover={{scale:1.03}}
                        >
                            <div className="my-4 md:my-0 pricing shadow-2xl flex flex-col p-6 space-y-6 rounded shadow sm:p-8">
                                <div className="space-y-2 ">
                                <div className="flex flex-row items-center mb-10">
                                    <Image src="/Pricing Logo/Pricing_Start_Logo-removebg-preview.png" width={80} height={80}></Image>
                                    <h4 className="text-2xl font-bold mb-5 ml-3 text-indigo-900">ADVANCED</h4>
                                    </div>
                                    <span className="text-6xl font-bold text-indigo-900">$29
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <ul className="flex-1 space-y-2 leading-12">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">3 Environments</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">150 Applications</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">500 Deployments</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Automated rolbacks</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Deployment Insights</span>
                                    </li>
                                </ul>
                                <button className="rounded py-3 px-4 text-white bg-gradient-to-tr from-violet-900 to-blue-600 font-semibold text-lg">
                               Add To Cart
                         </button>
                            </div>
                        </motion.div>
                        <motion.div
                          whileHover={{scale:1.03}}
                        >
                            <div className="my-4 md:my-0 pricing shadow-2xl flex flex-col p-6 space-y-6 rounded shadow sm:p-8">
                                <div className="space-y-2">
                                <div className="flex flex-row items-center mb-10">
                                    <Image src="/Pricing Logo/Pricing_Premium_logo-removebg-preview.png" width={80} height={80}></Image>
                                    <h4 className="text-2xl font-bold mb-5 ml-3 text-indigo-900">PREMIUM</h4>
                                    </div>
                                    <span className="text-6xl font-bold text-indigo-900">$49
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <ul className="flex-1 space-y-2 leading-12">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Custom Environments</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Custom Applications</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Custom Deployments</span>
                                    </li>
                                   
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Environment Replication</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">Multi Cloud Support</span>
                                    </li>
                                </ul>
                                <button className="rounded py-3 px-4 text-white bg-gradient-to-tr from-violet-900 to-blue-600 font-semibold text-lg">
                               Add To Cart
                         </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;