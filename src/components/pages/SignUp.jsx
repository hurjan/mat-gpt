import "../styles/LoginPage.css"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form"
import { DevTool } from "@hookform/devtools"

function SignUp()
{
    const form= useForm();
    const {register,control,handleSubmit,formState} = form;
    const {errors}= formState;
    const onSubmit = (data) => {
        console.log('Form submitted',data)
    }
    return(
        <div className="containerLogin flex justify-center p-10">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className=" w-full max-w-lg ">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-10">
                        Sign up
                    </h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                    htmlFor="firstname">
                        First Name*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="firstname" name="firstname" type="text" placeholder="John" {...register("firstname",{required:'Firstname is required'})}/>
                    <p className="error">{errors.firstname?.message}</p>
                    
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastname">
                        Last Name*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="lastname" name="lastname" type="text" placeholder="Doe" {...register("lastname",{required:'Lastname is required'})}/>
                    <p className="error">{errors.lastname?.message}</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email*
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="email" name="email" type="email" placeholder="name@email.com" 
                        {...register("email",{
                            required:'Email is required',
                            pattern:{
                                value:/^[a-zA-Z0-9.!#$%&'*+/=`^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message:"Invalid email format"}
                            })}/>
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Password*
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="password" name="password" type="password" placeholder="Password" {...register("password",{required:'Password is required'})}/>
                        <p className="error">{errors.password?.message}</p>
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password2">
                            Confirm Password*
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="password2" name="password2" type="password" placeholder="Confirm Password" {...register("password2",{required:'Password confirmation is needed'})}/>
                        <p className="error">{errors.password2?.message}</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <button className="landingButton1" >Sign up</button>
                    <Link className="landingButton2" to="/login"> Login </Link>
                </div>
            </form>
            <DevTool control={control}/>
        </div>
        
    )
}

export default SignUp