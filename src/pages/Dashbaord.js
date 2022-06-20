import { ad_data } from "../data/data";
import React from "react";
import Card from "../components/card"
import Header from "../components/header";
import Grid from '@mui/material/Grid';



const Dashboard =()=>{
    return (

        <>
            <Header/>
            <div style={{marginTop:"2em"}}>
            <Grid container spacing={10}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={10}>
                {ad_data.map((value,id) => (
                    <Grid key={id} item>
                       <Card
                            image={value.image}
                            title={value.title}
                            about={value.about}
                            price={"₹"+value.price}
                       />
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Grid>
        </div>
        </>

        
    )
}

export default Dashboard