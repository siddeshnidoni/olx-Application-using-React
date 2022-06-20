import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropDown = (props) => {
return(
     <Dropdown
        placeholder={props.placeholder}
        fluid
        selection
        {...props}
    />
)
   
}
      
export default DropDown