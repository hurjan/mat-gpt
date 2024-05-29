import "../styles/LoginPage.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form"
import { DevTool } from "@hookform/devtools"



function LoginPage() {
    const form= useForm();
    const {register,control,handleSubmit,formState} = form;
    const {errors}= formState;
    const onSubmit = (data) => {
        console.log('Form submitted',data)
    }

    return (
        <div className="containerLogin flex justify-center p-5">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 h-fit">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login to your account
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" placeholder="name@email.com" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("email",{required:'Email is required'})}/>
                            <p className="error">{errors.email?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            {...register("password",{required:'Password is required'})}/>
                             <p className="error">{errors.password?.message}</p>
                        </div>
                        <button type="submit" className="w-full text-white bg-emerald-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500" to="/signup"> Sign up </Link>
                        </p>
                    </form>
                    <DevTool control={control}/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;