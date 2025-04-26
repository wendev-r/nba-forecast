import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Toolbar, IconButton, Tooltip } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";


const buttonBox = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: "2",
    marginLeft: "2",

};



const NavBar = () => {
    let navigate = useNavigate();

    const onHomeClick = () => {
        navigate('/home');
    }
    const onStatsClick = () => {
        navigate('/stats');
    }
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'black', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Toolbar >
                    <Box sx={buttonBox}>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginRight: 2 }}>
                            NBA Forecast
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button color="primary" onClick={() => onHomeClick()}>
                            Home
                        </Button>
                        <Button color="primary"onClick={() => onStatsClick()} >
                            Stats
                        </Button>
                        <Button color="primary" >
                            About
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    {/* <Box sx={{ display: 'flex', alignContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box> */}
                </Toolbar>
            </AppBar>
        </Box>)
}

export default NavBar;