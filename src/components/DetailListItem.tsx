import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {BiBadge} from "react-icons/all";
import Detail from "../model/Detail";
import {isNotUndefined} from "./utils/Undefined";

function handleNullorEmpty(object?: string): string {
    if(!isNotUndefined(object) || object! === "" || object!.length === 0){
        return "N/A"
    } else {
        return object as string;
    }
}

const DetailListItem = ( data: { detail: Detail } ) => {

    const details = JSON.parse(JSON.stringify(data));

    return (
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <BiBadge />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={details.detail.title}
                    secondary={handleNullorEmpty(details.detail.value)}
                />
            </ListItem>
        </div>
    );
}

export default DetailListItem;