import Car from "../images/car.jpg"
import Bike from "../images/bike.jpg"
import Camera from "../images/camera.jpg"
import car_icon from "../images/car_icon.jpg"
import cloth_icon from"../images/cloth_icon.jpg"
import furniture_icon from "../images/furniture_icon.jpg"
import mobile from "../images/mobile.jpg"
import TV from "../images/tv.jpg"

const ad_data = [
    {
        image:Car,
        title:"Swift Cax",
        about:"Shift car Model VXI 2014 Its in best shape,Overall running is 12000km only",
        location:"Dharwad Karnataka",
        price:220000

    },
    {
        image:Bike,
        title:"Suziki",
        about:"Suziki Bike Model 2014 Its in best shape Overall running is 10000km only",
        price:80000,
        location:"Banglore Karnataka"
    },
    {
        image:TV,
        title:"Samsung tv",
        about:"Samsung TV Model 2014 with Android Support,HDMI,2usb port with hight pixel density",
        price:12000,
        location:"Mumbai Maharastra"
    },
    {
        image:Camera,
        title:"Nikon 3D",
        about:"Nikon camera model 2018 Mirror less lens with 2 extra high res lens Price negotiable",
        price:20000,
        location:"Chennai Tamilnadu"
    },
]


const category = [
    {
        key: 'Vehicles',
        text: 'Vehicles',
        value: 'Vehicles',
        image: { avatar: true, src:car_icon}
    },
    {
        key:'Electronics',
        text:'Electronics',
        value:'Electronics',
        image: { avatar: true, src: mobile}
    },
    {
        key:'HomeandFurniture',
        text:'HomeandFurniture',
        value:'Home and Furniture',
        image: { avatar: true, src: furniture_icon}
    },
    {
        key:'Clothing',
        text:'Clothing',
        value:'Clothing',
        image: { avatar: true, src: cloth_icon}
    }
]

const Vehicles_sub_category =[
    {
        key:'Bikes',
        text:'Bikes',
        value:'Bikes',
    },
    {
        key:'Cars',
        text:'Cars',
        value:'Home and Furniture',
    },
    {
        key:'Trucks',
        text:'Trucks',
        value:'Trucks',
    }
]

const Electronics_sub_category =[
    {
        key:'Mobiles',
        text:'Mobiles',
        value:'Mobiles',
    },
    {
        key:'TV',
        text:'TV',
        value:'TV',
    },
    {
        key:'Tablets',
        text:'Tablets',
        value:'Tablets',
    },
    {
        key:'Computers',
        text:'Computers',
        value:'Computers',
    }
]

const Furntiture_sub_category =[
    {
        key:'Sofa',
        text:'Sofa',
        value:'Sofa',
    },
    {
        key:'Dinning Set',
        text:'Dinning Set',
        value:'Dinning Set',
    },
    {
        key:'Table',
        text:'Table',
        value:'Table',
    },
    {
        key:'Chair',
        text:'Chair',
        value:'Chair',
    }
]

const Clothing_sub_category =[
    {
        key:'Pants',
        text:'Pants',
        value:'Pants',
    },
    {
        key:'Shirts',
        text:'Shirts',
        value:'Shirts',
    },
    {
        key:'Shoes',
        text:'Shoes',
        value:'Shoes',
    },
    {
        key:'T-Shirts',
        text:'T-Shirts',
        value:'T-Shirts',
    }
]
export {
    ad_data,
    category,
    Vehicles_sub_category,
    Electronics_sub_category,
    Furntiture_sub_category,
    Clothing_sub_category
}