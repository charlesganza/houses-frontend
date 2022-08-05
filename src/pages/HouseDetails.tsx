import React from 'react';
import '../App.css';
import { useLocation } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import MainHeader from "../components/MainHeader";
import House from "../model/House";
import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import DetailListItem from "../components/DetailListItem";

const HouseDetails = () => {
    const location = useLocation();
    const house = JSON.parse(JSON.stringify(location.state as House)).house;

    return (
        <div className="body">
            <MainHeader />
            <Paper variant={'outlined'} elevation={10} style={{
                width: '50vh',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
                marginBottom: '20px',
                flexDirection: 'row',
                borderRadius: "20px",
                padding: '10px',
            }} >
                <Grid container spacing={2}>
                    <Typography style={{ padding: 20 }} variant="h5" component="h5">
                        Details for <b>{house.name}</b>
                    </Typography>
                    <List>
                        <DetailListItem detail={ { title: "Name", value: house.name} } />
                        <DetailListItem detail={ { title: "Coat of Arms", value: house.coatOfArms} } />
                        <DetailListItem detail={ { title: "Link", value: house.url} } />
                        <DetailListItem detail={ { title: "Current Lord", value: house.currentLord} } />
                        <DetailListItem detail={ { title: "Words", value: house.words} } />
                        <DetailListItem detail={ { title: "Heir", value: house.heir} } />
                        <DetailListItem detail={ { title: "Founded", value: house.founded} } />
                        <DetailListItem detail={ { title: "Founder", value: house.founder} } />
                        <DetailListItem detail={ { title: "Sworn Members", value: house.swornMembers.join(', ')} } />
                        <DetailListItem detail={ { title: "Ancestral Weapons", value: house.ancestralWeapons.join(', ')} } />
                    </List>
                </Grid>
            </Paper>
        </div>
    )

}

export default HouseDetails;