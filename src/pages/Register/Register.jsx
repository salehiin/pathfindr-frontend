import registe from "../../assets/register.jpg";
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../Shared/Components/SocialLogin/SocialLogin";


const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('User profile info updated')
                        // create user entry in database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User added to the database')
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully😊",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');

                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };
    // console.log(watch("example"));

    return (
        <>
            <Helmet>
                <title>Pathfindr | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-center">
                    <img
                        src={registe}
                        className="max-w-md rounded-lg shadow-2xl mr-16" />
                    <div className="text-center mx-auto px-16 w-full">
                        <div className="text-center py-5">
                            <h1 className="text-5xl font-bold">Register!</h1>
                            {/* <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p> */}
                        </div>
                        <div className="card bg-base-100 shadow-2xl py-3">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body py-3 w-full">
                                {/* NAME */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600" >Name is required</span>}
                                </div>
                                {/* PHOTO */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600" >Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn btn-accent" />
                                </div>
                                
                            </form>
                            <SocialLogin></SocialLogin>
                            <p className="px-6"><small>Already have an account? <Link to="/login" >Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;