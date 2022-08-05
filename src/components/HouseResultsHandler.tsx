import React from 'react';
import HousesTable from "./HousesTable";
import NoHousesFound from "./NoHousesFound";
import House from "../model/House";

const HouseResultsHandler = (data: { houses: House[] }) => {
    return (
        <div>
            {
                data.houses.length > 0 ? <HousesTable houses={data.houses}/> : <NoHousesFound/>
            }
        </div>
    );
}

export default HouseResultsHandler;