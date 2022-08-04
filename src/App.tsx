import React from 'react';
import got_logo from './img/got_logo.png';
import './App.css';
import Stack from '@mui/material/Stack';
import { BiSearchAlt } from "react-icons/bi";
import { TextField, IconButton, Grid, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import {Typography} from "@mui/material";

type Quote = {
    quote: string;
    orator: string;
};

const quotes: Quote[] = [
    { quote: 'Winter is Coming', orator: 'Ned Stark'},
    { quote: 'You Know Nothing Jon Snow', orator: 'Ygritte'},
    { quote: 'Can a man be brave if he’s afraid?', orator: 'Bran'},
    { quote: 'Fear cuts deeper than swords', orator: 'Arya Stark'},
    { quote: 'Some wounds never truly heal, and bleed again at the slightest word', orator: 'Ned Stark'},
    { quote: 'A lion doesn’t concern himself with the opinions of a sheep', orator: 'Tywin Lannister'},
    { quote: 'If you think this has a happy ending you haven’t been paying attention', orator: 'Ramsay Bolton'},
    { quote: 'A man with no motive is a man no one suspects. Always keep your foes confused', orator: 'Lord Baelish'},
    { quote: 'The man who passes the sentence should swing the sword', orator: 'Ned Stark'},
    { quote: 'Any man who must say ‘I am the king’ is no true king', orator: 'Tywin Lannister'},
    { quote: 'When you play the game of thrones, you win or you die', orator: 'Cersei Lannister'},
    { quote: 'A Lannister always pays his debts', orator: 'The Lannister motto'},
    { quote: 'All men must die, but we are not men', orator: 'Daenerys Targaryen'},
    { quote: 'It is beautiful beneath the sea, but if you stay too long, you’ll drown', orator: 'Three Eyed Raven'},
    { quote: 'The night is dark and full of terrors', orator: 'Melisandre'},
    { quote: 'It doesn’t matter what we want. Once we get it, then we want something else', orator: 'Lord Baelish'}
];

function GetRandomQuote(): Quote {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {

    const navigate = useNavigate();
    const goToHouseDetails = () => navigate('/house/' + searchQuery['query']);

    const [quote, setQuote] = React.useState({
        quote: GetRandomQuote()
    });

    //pick and display a random quote every 15 seconds
    setInterval(function () {
        setQuote({ ...quote, ['quote']: GetRandomQuote() } )
    }, 15000)

    document.title = "Winter is Coming";

    //flag to prevent textfield validation as soon as the page is loaded
    const [autoValidate, setAutoValidate] = React.useState({
        validate: false
    });

    const [searchQuery, setSearchQuery] = React.useState({
        query: ''
    });

    const [searchFieldError, setSearchError] = React.useState({
        hasError: false
    });

    //at least three characters are needed
    const validateForm = (value: string) => {
        return value.trim().length >= 3;
    }

    const handleTextFieldChange = (e: any) => {
        if (autoValidate['validate']) {
            setSearchError({ ...searchFieldError, hasError: !validateForm(e.target.value) })
        }
        setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value })
    }

    const search = () => {
        setAutoValidate({ ...autoValidate, ['validate']: true }) //we're sure the user attempted to search, enable auto validation
        const isValid = validateForm(searchQuery['query'])
        setSearchError({ ...searchFieldError, hasError: !isValid })

        if (isValid) {
            goToHouseDetails();
        }
    }

    const onEnterKeyPressed = (event: React.KeyboardEvent, callback: any) => event.key === 'Enter' && callback()

    return (
        <div className="body">
            <img src={got_logo} className="logo" alt="logo" />
            <Typography variant="h4" component="h3">
                <b>"{ quote.quote.quote }"</b> - { quote.quote.orator }
            </Typography>
            <p>
                Search Game of Thrones Houses
            </p>
            <Stack alignItems="center">
                <Grid container alignItems="center" direction="column" style={{ gap: 25 }}>
                    <TextField id="outlined-basic"
                               label="Find house..."
                               variant="filled"
                               value={searchQuery.query}
                               name="query"
                               onChange={handleTextFieldChange}
                               helperText={searchFieldError.hasError ? 'At least 3 characters required!' : ''}
                               inputProps={{ maxLength: 25 }}
                               error={searchFieldError.hasError}
                               onKeyDown={(e: React.KeyboardEvent) => {
                                   onEnterKeyPressed(e, search);
                               }}
                               InputLabelProps={{ style: { color: '#ffffff', fontSize: 20 } }}
                               InputProps={{
                                   style: {
                                       color: '#ffffff',
                                       fontSize: 35,
                                       backgroundColor: '#737681',
                                       width: 450,
                                       height: 70
                                   },
                                   endAdornment: (
                                       <IconButton onClick={search}>
                                           <BiSearchAlt fill='#ffffff' />
                                       </IconButton>
                                   ),
                               }}
                    />
                </Grid>
            </Stack>
        </div>
    );
}

export default App;
