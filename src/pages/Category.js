import {React,useState} from "react"
import Dropdown from "../components/dropdown"
import Button from "../components/semantic_button"
import {useNavigate} from "react-router-dom"
import Header  from "../components/header"
import Container from "../components/container"
import { category,Clothing_sub_category,Furntiture_sub_category,Vehicles_sub_category,Electronics_sub_category } from "../data/data"


const Category = ()=>{
    
    const [selectedCategory,setSelectedCategory] = useState("")
    const [selectSubCategory,setselectSubCategory] = useState(null)
    const [subcategory,setSubcategory] = useState("")

    const navigate = useNavigate()


    const onSubmit = () =>{

        if(selectedCategory!=="" || selectSubCategory!==""){
            navigate("/Postad",{state:{category:selectedCategory,subcategory:subcategory}})
        }
        else{
            alert("Please select category and subcategory to post Add")
        }
       
    }
    const Fetchsubcateogry = (value)=>{

        console.log(value)  
        setSelectedCategory(value)
        if(value=="Vehicles"){
            setselectSubCategory(Vehicles_sub_category)
        }
        if(value=="Electronics"){
            setselectSubCategory(Electronics_sub_category)
        }
        if(value=="Home and Furniture"){
            setselectSubCategory(Furntiture_sub_category)
        }
        if(value=="Clothing"){
            setselectSubCategory(Clothing_sub_category)
        }
    }
    return(

    <>
        <Header/>
        <Container>
         <h1>Select Category</h1>
         <Dropdown
            placeholder="Select Category"
            options={category}
            onChange={(e,data)=>{Fetchsubcateogry(data.value)}}
        />

        <h1>Select SubCategory</h1>
         <Dropdown
            placeholder="Select SubCategory"
            options={selectSubCategory}
            value={subcategory}
            onChange={(e,data)=>setSubcategory(data.value)}
        />
        <Button onClick={onSubmit} fluid>Go To</Button>
        </Container>       
    </>
   
    )
}

export default Category