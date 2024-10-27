import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";

export const SignupPage = ({ role = "user" }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const user = {
        role: "user",
        signup_api: "/user/sign-up",
        login_route: "/login",
        profile_route: "/user/profile",
    };

    if (role === "admin") {
        user.role = "admin";
        user.signup_api = "/admin/sign-up";
        user.login_route = "/admin/log-in";
        user.profile_route = "/admin/profile";
    }

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: user.sign-up_api,
                data,
            });
            toast.success("Sign-up successful");
            navigate(user.profile_route);
        } catch (error) {
            toast.error("Sign-up failed");
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center w-full max-w-lg px-6 py-8 bg-white shadow-lg rounded-lg md:flex-row md:space-x-8">
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Sign Up Now! {role}</h1>
                    <p className="text-gray-600">Create your account to access the {role === "admin" ? "admin dashboard" : "user profile"}.</p>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" {...register("email")} className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email" required />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" {...register("password")} className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Password" required />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" {...register("confirmPassword")} className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Confirm Password" required />
                        </div>
                        <div className="text-right">
                            <Link to={user.log-in_route} className="text-sm text-indigo-600 hover:underline">Already have an account? Log in</Link>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
