import React from 'react';
import House from "../model/House";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import { BiCategory } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import {Paper} from "@material-ui/core";

const HousesTable = ( data: { houses: House[] } ) => {

    const navigate = useNavigate();
    const navigateTo = (house: House) => navigate('/house/' + house.name, { state: { house: house } });

    return (
        <div>
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
            <List>
                {
                    data.houses.map((house) => (
                        <ListItem className={'hoverClass'} key={house.name} onClick={() => navigateTo(house)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <BiCategory />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={house.name}
                                secondary={house.coatOfArms}
                            />
                        </ListItem>
                    ))
                }
            </List>
            </Paper>
        </div>
    );
}

export default HousesTable;