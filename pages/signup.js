
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';
import Link from 'next/link';


const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser, googleSingIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail);
    // const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken;
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }





    const handleSignUp = (data) => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                reset();
                toast.success('User created Successfully', {
                    position: toast.POSITION.TOP_CENTER
                })
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log(data.name, data.email)
                        saveUser(data.name, data.email, data.userType);

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                setSignUpError(error.message)
            })
    }
    const saveUser = (name, email, userType) => {
        const user = { name, email, userType };
        fetch('https://server-sooty-five.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                console.log(data)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    {/* <img src className="max-w-sm md:max-w-lg rounded-lg shadow-2xl lg:ml-10" alt='login' /> */}
                    <div>
                        <div className='w-96 p-7'>
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    <input type="text" {...register("name", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>

                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input type="text"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        className="input input-bordered w-full" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text">Password</span></label>
                                    <input type="password" {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })} className="input input-bordered w-full" />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>
                                <input className='login-button py-3 rounded-lg w-full mt-4' value="Sign Up" type="submit" />
                                {signUpError && <p className='text-red-600'>{signUpError}</p>}

                            </form>
                            <p>Already have an account <Link href="/login" className='text-secondary' >Please Login</Link></p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSingIn} className='google-button rounded-lg w-full'><div className='flex justify-center'><FaGoogle className='font-bold text-2xl mr-2'></FaGoogle>Google Sign Up</div></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;