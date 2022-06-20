import { React,useState } from "react"
import Input from "../components/input"
import Button from "../components/semantic_button"
import {useNavigate} from "react-router-dom"
import Header from "../components/header"
import "./styles/Login.css"


const Login = (props)=>{

    const router = useNavigate()

    const [LoginCredentials,setLoginCredentials]= useState({
        email:"",
        password:""
    })

    const loginKey = {
        email:"siddesh@gmail.com",
        password:"siddesh@123"
      }

    const onLogin = ()=>{
        if(LoginCredentials.email==loginKey.email && LoginCredentials.password==loginKey.password){
            router("/Dashboard")
        }
        else{
            alert("Wrong Credentials")
        }
    }

    const onSignUp = ()=>{
        router("/Signup")
    }

    
    return (

        <>
            <Header/>
            <div className="container">
            <h4>Email</h4>
            <Input 
                placeholder="Email" 
                onChange={(e)=>{setLoginCredentials({...LoginCredentials,email:e.target.value})}}
                fluid
            />
            <h4>Password</h4>
            <Input
                type="password"
                fluid
                placeholder="strong password"
                value={LoginCredentials.password}
                onChange={(e)=>setLoginCredentials({...LoginCredentials,password:e.target.value})}
            />
            <Button fluid onClick={onLogin}>Login</Button>
             <br/>
             <p style={{textAlign:"center"}}>New user?</p>
            <Button fluid onClick={onSignUp}>SignUp</Button>
        </div>
        </>
        

    )
}

export default Login