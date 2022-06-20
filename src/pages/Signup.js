import {React,useState} from "react"
import Button from "../components/semantic_button"
import Input from "../components/input"
import Header from "../components/header"
import {useNavigate} from "react-router-dom"
import Container from "../components/container"

const SignUp = ()=>{

    const navigate = useNavigate()
    const [SignupCredentials,setSignupCredentials] = useState({
        fistname:"",
        lastname:"",
        contact:"",
        email:"",
        password:"",
        confirmPassword:"",
        pincode:"",
        address:"",
        about:""

    })

    const Reset = ()=>{
        setSignupCredentials({
            fistname:"",
            lastname:"",
            contact:"",
            email:"",
            password:"",
            confirmPassword:"",
            pincode:"",
            address:"",
            about:""
        })
    }
    //Validation functions for each fields
    const nameValdiate=(text)=>{
        var regex = /^[a-zA-Z]{1,51}$/
        return regex.test(text)
      }
      const passwordValidate=(text)=>{
        var regex =/^(?=\D*\d)(?=.*?[a-zA-Z]).*[\W_]/
        return regex.test(text)
      }
      const PhonenumberValidate = (text)=>{
        var regex = /^[0-9]{10}/
        return regex.test(text)
      }
      const pincodeValidate= (text)=>{
        var regex = /^[0-9]{5}/
        return regex.test(text)
      }
      const emailValidate =(text)=>{
        var regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        return regex.test(text)
      }
      

    const onSubmit = ()=>{
        if(!nameValdiate(SignupCredentials.fistname)){
            alert("First name is not valid")
            return
        }
        if(!nameValdiate(SignupCredentials.lastname)){
            alert("Lastname is not valid")
            return
        }
        if(!PhonenumberValidate(SignupCredentials.contact)){
            alert("Phone number is not valid")
            return
        }
        if(!passwordValidate(SignupCredentials.password)){
            alert("Password is not valid")
            return
        }

        if(SignupCredentials.password!==SignupCredentials.confirmPassword){
            alert("Password mismatched")
            return
        }
        if(!emailValidate(SignupCredentials.email)){
            alert("Email is not correct")
            return
        }
        if(!pincodeValidate(SignupCredentials.pincode)){
            alert("Pincode is not valid")
            return
        }
        if(SignupCredentials.about>50){
            alert("About us should be less that 50")
            return
        }
        else{
            localStorage.setItem("user",SignupCredentials.fistname)
            navigate("/BuyorSell")
        }

    }
    return (
        <>
         <Header/>
        <Container>
        <h4>FirstName</h4>
         <Input
                placeholder="FirstName"
                value={SignupCredentials.fistname}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,fistname:e.target.value})}
        />
         <h4>Lastname</h4>
        <Input
                placeholder="LastName"
                value={SignupCredentials.lastname}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,lastname:e.target.value})}
             />
        
        <h4>Contact</h4>
        <Input
                placeholder="Contact"
                value={SignupCredentials.contact}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,contact:e.target.value})}
         />

          <h4>Email</h4>
         <Input
                placeholder="Email"
                value={SignupCredentials.email}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,email:e.target.value})}
             />
        
        <h4>Password</h4>
        <Input
                placeholder="Password"
                type="password"
                value={SignupCredentials.password}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,password:e.target.value})}
        />
        
        <h4>Confrim Password</h4>
        <Input
                placeholder="Confrim Password"
                type="password"
                value={SignupCredentials.confirmPassword}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,confirmPassword:e.target.value})}
        />
        
        <h4>Address</h4>
       <Input
                placeholder="Address"
                value={SignupCredentials.address}
                multiline
                rows={2}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,address:e.target.value})}
        />

        <h4>About us</h4>
       <Input
                placeholder="Something About You"
                value={SignupCredentials.about}
                multiline
                rows={2}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,about:e.target.value})}
        />

        <h4>Pincode</h4>
        <Input
                placeholder="Pincode"
                value={SignupCredentials.pincode}
                onChange={(e)=>setSignupCredentials({...SignupCredentials,pincode:e.target.value})}
        />
        <br/>
        <Button fluid onClick={onSubmit}>Signup</Button>
         <h5 style={{textAlign:"center"}}>or</h5>
        <Button fluid onClick={Reset}>Clear</Button>
        </Container>
         
        </>
    )
}

export default SignUp