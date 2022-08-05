import React from 'react';
import './App.css';
import Stack from '@mui/material/Stack';
import { BiSearchAlt } from "react-icons/bi";
import { TextField, IconButton, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import MainHeader from "./components/MainHeader";

function App() {
    document.title = "Winter is Coming";

    const navigate = useNavigate();
    const goToSearchPage = () => navigate('/search/' + searchQuery['query']);

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
            goToSearchPage();
        }
    }

    const onEnterKeyPressed = (event: React.KeyboardEvent, callback: any) => event.key === 'Enter' && callback()

    return (
        <div className="body">
            <MainHeader />
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
