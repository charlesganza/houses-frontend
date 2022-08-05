import React from 'react';
import '../App.css';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Grid, Button } from "@material-ui/core";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "../networking/BaseAxios";
import MainHeader from "../components/MainHeader";
import HouseResultsHandler from "../components/HouseResultsHandler";
import House from "../model/House";
import { isNotUndefined } from "../components/utils/Undefined";

const SearchResults = () => {

    const { name } = useParams();

    const [successful, setSuccessful] = React.useState(true);

    const [loading, setLoading] = React.useState(false);

    const [houseList, setHouses] = React.useState<{ house: House[] }>();

    const retry = () => {
        if (!loading) {
            searchHouses();
        }
    };

    const searchHouses = async () => {
        setLoading(true)
        await axios.get('/search', { params: { query: name } }).then(response => {
            let houses: House[] = response.data;

            setHouses({ ...houseList, ['house']: houses })
            setLoading(false)
            setSuccessful(true)
        }).catch((error) => {
            setSuccessful(false)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        searchHouses();
    }, []);

    return (
        <div className="body">
            <MainHeader />
            <Grid container item xs={12} alignItems="center" direction="column" style={{ gap: 25 }}>
                <Typography style={{ padding: 20 }} variant="h2" component="h2">
                    Search results for <b>{name}</b>
                </Typography>
                {
                    isNotUndefined(houseList) && (
                        <HouseResultsHandler houses={ houseList!.house } />
                    )
                }
                {
                    !successful && !loading ? <Button
                        className="retry"
                        variant="outlined" startIcon={<ChangeCircleIcon fill='#ffffff'/>}
                        onClick={retry}>Retry...</Button> : null
                }
                {
                    loading ? <CircularProgress /> : null
                }
            </Grid>
        </div>
    )

}

export default SearchResults;