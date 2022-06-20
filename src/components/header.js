import React from 'react'
import { Image } from 'semantic-ui-react'
import OLX from "../images/olx.jpg"
import "./styles/header.css"

const Header = () => {
    return(

        <div className='header'>
            <Image src={OLX} size="small" rounded/>
            <div>
                <h2>Indias largest Marketplace</h2>
                <h4>Sell anything from used cars to mobiles,furniture,laptops and more...</h4>
            </div>
            
        </div>
    )
}

export default Header


