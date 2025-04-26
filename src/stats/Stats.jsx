import React, { useState, useEffect } from "react";
import SearchBar from "../Components/Common/SearchBar";


const dividerStyle = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};

const dividerBoxStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    width: '100%',
}

const Stats = () => {
    return (
        <div><SearchBar/></div>
    );
};

export default Stats;
