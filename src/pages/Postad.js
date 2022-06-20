import {React,useState} from "react"
import {useLocation,useNavigate} from "react-router-dom"
import Input from "../components/input"
import Button from "../components/semantic_button"
import Textarea from "../components/textarea"
import Container from "../components/container"
import Header from "../components/header"
import "./styles/Postad.css"

 
const PostAd = () =>{

    const location = useLocation()
    const navigate = useNavigate()
    const [post_data,setPost_data] = useState({
        title:"",description:"",price:"",image:null
    })
    const {category,subcategory} = location.state


    const Pircevalidate = (text)=>{
        var regex = /^[0-9]/
        return regex.test(text)
      }

    const onsubmit = ()=>{

        console.log(post_data)
        if(post_data.title.length>20){
            alert("Ad title should be maximum of 20")
            return
        }
        if(post_data.description>100){
            alert("Description should be maximum of 100 characters")
            return
        }
        if(!Pircevalidate(post_data.price)){
            alert("Price is not valid")
            return
        }
        if(!post_data.image){
            alert("Image should not be null")
            return
        }
        navigate("/Dashboard")
    }

    let string = category+" > "+subcategory
    return (
      <>    

           <Header/>
           <Container>
                    <h4>Selected Category</h4>
                    <div className="subcontainer">
                        <h5>{string}</h5>
                    </div>

                    <h4>Ad Title</h4>
                    <Input 
                     placeholder="Add a title" 
                     onChange={(e)=>{setPost_data({...post_data,title:e.target.value})}}
                     fluid
                    />

                    <h4>Post Ad Image</h4>
                    <div>
                        <Input 
                         type="file"
                         fluid
                         onChange={(e)=>{setPost_data({...post_data,image:e.target.files[0]})}}
                         />
                        <Button>Upload</Button>
                    </div>

                    <h4>Add Description</h4>
                    <Textarea 
                     onChange={(e)=>{setPost_data({...post_data,description:e.target.value})}}
                     placeholder="Description about AD"
                    />

                    <h4>Add Price</h4>
                    <Input 
                     placeholder="Price" 
                     onChange={(e)=>{setPost_data({...post_data,price:e.target.value})}}
                     fluid/>
                    
                    <Button fluid onClick={onsubmit}>Post Ad</Button>
                    
            </Container>
      </>
    )
}

export default PostAd