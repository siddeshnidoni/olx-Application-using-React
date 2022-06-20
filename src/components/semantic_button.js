import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const ButtonUI =(props) => (

<div style={{marginTop:"1em"}}>
   <Button inverted color='green' {...props} onClick={props.onClick}>
      {props.children}
    </Button>
</div>

)

export default ButtonUI