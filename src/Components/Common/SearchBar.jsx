import React, { useState, useContext } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { StatCategoryContext } from '../../contexts/StatCategoryContext';

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const { statCategory } = useContext(StatCategoryContext);
    const [searchResults, setSearchResults] = useState([]);
    React.useEffect(() => {
    }, [searchValue]);

    const handleSearch = () => {
        if (statCategory === "Team") {
            console.log("Search clicked for: " + searchValue + " in category: " + statCategory);
            fetch('/team/' + searchValue).then(res => res.json()).then(data => {
                setSearchResults(data.team_stats)
            });
            console.log(searchResults);
        }
    }

        return (
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search general' }}
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
        );
    }