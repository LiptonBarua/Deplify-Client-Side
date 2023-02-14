
import { BsSearch } from "react-icons/Bs";
import { HiOutlineHome, HiOutlineServer, HiOutlineInformationCircle, HiPhone } from "react-icons/Hi";
import { BiTimeFive, BiUserPin, BiVideo } from "react-icons/Bi";
import { ShareContext } from '../../../ShareProvider/ShareProvider';
import ContactUserData from '../../ContactForm/ContactUserData/ContactUserData/ContactUserData';
import { AuthContext } from '../../../context/AuthContext';
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client"

const Contact = () => {

    const { contactUser, profileImage } = useContext(ShareContext);
    const { user } = useContext(AuthContext);

    const socket = io("https://Contact-549484f.onrender.com/", { transports: ['websocket'] });
    const [message, setMessage] = useState("")
    const [getMessage, setGetMessage] = useState([])


    const handleSubmit = (e) => {
        console.log(message)
        socket.emit("reactEvent", { post: message })
    }


    socket.on("showMessage", (data) => {
        setGetMessage([...getMessage, data])
    })
    return (
        <div className="md:max-w-[1140px] md:mx-auto my-12">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-500 shadow-lg'>

                {/* ..............Session-1...................... */}
                <div className='bg-gradient-to-tr from-violet-900  to-blue-600  p-5 pb-16'>

                    {/* ..........Part 1............... */}
                    <div className='flex justify-between text-white'>
                        <div className='font-bold'>Inbox</div>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>

                        </div>
                    </div>

                    {/* ..........Part 2............... */}

                    <div className='my-3'>
                        <fieldset className="w-full space-y-1 dark:text-gray-100">
                            <label for="Search" className="hidden">Search</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                        <BsSearch></BsSearch>
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />

                            </div>
                        </fieldset>
                    </div>

                    {/* ..........Part 3............... */}


                    <div className='flex justify-around text-xl text-white'>
                        <BiTimeFive></BiTimeFive>
                        <BiUserPin></BiUserPin>
                        <HiOutlineHome></HiOutlineHome>
                        <HiOutlineServer></HiOutlineServer>
                    </div>

                    {/* ..........Part 4............... */}

                    <div className='mt-3 overflow-y-auto h-80 p-4 text-white'>

                        {
                            contactUser?.map(contactUser => <ContactUserData key={contactUser._id} contactUser={contactUser}></ContactUserData>)
                        }

                    </div>
                </div>

                {/* ..............Session-2...................... */}

                <div className='bg-gray-200'>

                    {/* ...............Part-1.......... */}


                    <div className='flex justify-between  bg-gray-300 p-5'>
                        <div className=''>

                            {profileImage[0]?.name ? <h1 className='font-semibold'>{profileImage[0]?.name}</h1> : <h1>{user?.displayName}</h1>}
                        </div>
                        <div className='flex'>
                            <HiPhone className='mr-2 bg-gradient-to-tr from-violet-900  to-blue-600 text-white w-7 h-7 p-1 rounded-full'></HiPhone>
                            <BiVideo className='bg-gradient-to-tr from-violet-900 to-blue-600 text-white w-7 h-7 p-1 rounded-full'></BiVideo>
                        </div>
                    </div>

                    {/* ...............Part-2.......... */}
                    <div>
                        <div className="text-white overflow-y-auto h-80 sticky">
                            {
                                getMessage.map(((p) => (<div>{p.post}</div>)))
                            }
                        </div>

                        {/* ...............Part-3.......... */}

                        <div>
                            <div className="flex mt-24 border-b-2 dark:border-slate-900">
                                <input onChange={(e) => setMessage(e.target.value)} type="text" className="w-full dark:text-white py-2 pl-3 rounded-l" />
                                <button onClick={handleSubmit} className="builds-button dark:bg-lime-600 dark:text-black px-5 text-white font-bold rounded-r">Send</button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* ..............Session-3...................... */}

                <div className="bg-white">
                  <div>

                  </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;