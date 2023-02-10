import React from 'react';
import { motion, spring } from "framer-motion"
import Image from 'next/image';
const buttonVariants = {
    hover:{
        scale:1.1
    }
}

const PricingData = ({pricing}) => {
    const{_id, text, money, month, categorie_one,categorie_two, categorie_three, categorie_four, categorie_five}=pricing;
    return (
        <div>
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
                                    <h4 className="text-2xl font-bold mb-5 ml-3 text-indigo-900 ">{text}</h4>
                                    </div>
                                    <p className="text-6xl font-bold text-indigo-900 ">
                                    <span>${money}
                                        <span className="text-sm tracking-wide">/{month}</span>
                                    </span>
                                    </p>
                                   
                                </div>

                                <ul className="flex-1 space-y-2 leading-12 ">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">{categorie_one}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">{categorie_two}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">{categorie_three}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">{categorie_four}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-indigo-900 text-lg font-semibold">{categorie_five}</span>
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
        </div>
    );
};

export default PricingData;