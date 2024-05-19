import "../styles/LoginPage.css"
import {Link} from "react-router-dom";
//import {useForm} from "react-hook-form"
//import logo from "../../../public/images/logo.png"
//import { DevTool } from "@hookform/devtools"
function LoginPage() {
    //const form= useForm()
    //const {register,control} = form

    return (
        <div className="containerLogin flex justify-center p-5">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 h-fit">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <button type="submit" className="w-full text-white bg-emerald-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500" to="/signup"> Sign up </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
       

        // <div classNameName="containerLogin">
          
            
        //     <form classNameName="form">
        //         <h1 classNameName="h1">Welcome To <img src={logo} alt="" /></h1>
        //         <div classNameName="flex-form">
        //             <label htmlFor="email">E-mail</label>
        //             <input classNameName="input" type="text" id="email" 
        //             name="email" placeholder="Please enter your email"
        //             {...register("email")}/>

        //             <label htmlFor="password">Password</label>
        //             <input classNameName="input" type="text" id="password" 
        //             name="password" placeholder="Please enter you password"
        //             {...register("password")}/>

        //             <button classNameName="landingButton1" >Login</button>
        //             <button classNameName="landingButton2" >Register</button>
        //         </div>
                
        //     </form>
        //     <DevTool control={control}/>
        // </div>
        
        
    );
}

export default LoginPage;