import React, { useState, useEffect } from "react";
import SearchBar from "../Components/Common/SearchBar";
import { Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
    const [statCategory, setStatCategory] = useState('');
    const handleStatCategoryChange = (event) => {
        setStatCategory(event.target.value);
    };
    return (
        <Box sx={dividerBoxStyle}>
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="category-input-label">Category</InputLabel>
                    <Select
                        id="stats-category-select"
                        value={statCategory}
                        onChange={handleStatCategoryChange}
                        label="Stat Category"
                        defaultValue=""
                    >
                        <MenuItem value={"Team"}>Team</MenuItem>
                        <MenuItem value={"Player"}>Player</MenuItem>
                        <MenuItem value={"Matchup"}>Matchup</MenuItem>
                    </Select>
                </FormControl>
                <SearchBar />
            </div>
        </Box>
    );
};

export default Stats;
