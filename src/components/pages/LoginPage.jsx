import "../styles/LoginPage.css"
import {useForm} from "react-hook-form"
import logo from "../../../public/images/logo.png"
import { DevTool } from "@hookform/devtools"
function LoginPage() {
    const form= useForm()
    const {register,control} = form

    return (

        <div className="containerLogin">
            
            <form className="form">
                <h1 className="h1">Welcome To <img src={logo} alt="" /></h1>
                <div className="flex-form">
                    <label htmlFor="email">E-mail</label>
                    <input className="input" type="text" id="email" 
                    name="email" placeholder="Please enter your email"
                    {...register("email")}/>

                    <label htmlFor="password">Password</label>
                    <input className="input" type="text" id="password" 
                    name="password" placeholder="Please enter you password"
                    {...register("password")}/>

                    <button className="landingButton1" style={{margin:0}}>Login</button>
                    <button className="landingButton2" >Register</button>
                </div>
                
            </form>
            <DevTool control={control}/>
        </div>
        
        
    );
}

export default LoginPage;