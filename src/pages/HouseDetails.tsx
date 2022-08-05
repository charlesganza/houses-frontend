import React from 'react';
import '../App.css';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Grid, Button } from "@material-ui/core";
import MainHeader from "../components/MainHeader";
import House from "../model/House";

const HouseDetails = () => {

    return (
        <div className="body">
            <MainHeader />
            <Grid container item xs={12} alignItems="center" direction="column" style={{ gap: 25 }}>

            </Grid>
        </div>
    )

}

export default HouseDetails;