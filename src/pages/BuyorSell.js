import Button from "../components/semantic_button"
import {useNavigate} from "react-router-dom"
import Test from "../components/semantic_button"
import Container from "../components/container"
import Header from "../components/header"


const BuyorSell = ()=>{
    let username = localStorage.getItem("user")
    console.log(username)
    const navigate = useNavigate()

    const onSubmit = ()=>{
        navigate("/Dashboard")
    }
    return (
      <>
        <Header/>
        <h1 style={{textAlign:"center"}}>Hello {username}</h1>
        <Container>
            <Button fluid onClick={()=>{navigate("/Dashboard")}}>Buy</Button>
            <h2 style={{textAlign:"center"}}>or</h2>
            <Button fluid onClick={()=>{navigate("/Category")}}>Sell</Button>
        </Container>
      </>  
    )
}

export default BuyorSell