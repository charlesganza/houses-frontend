import React from 'react';
import House from "../model/House";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import {BiCategory} from "react-icons/all";
import {useNavigate} from "react-router-dom";

const HousesTable = ( data: { houses: House[] } ) => {

    const navigate = useNavigate();
    const navigateTo = (house: House) => navigate('/house/' + house.name);

    return (
        <div>
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
                            />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );
}

export default HousesTable;