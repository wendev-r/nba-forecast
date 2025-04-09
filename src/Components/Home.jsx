import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NavBar from "./Common/NavBar";


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

const Home = () => {
    return (
        <Box>
            <NavBar />
            <Box sx={dividerBoxStyle}>
                <List sx={dividerStyle}>
                    <ListItem>
                        <ListItemText primary="Placeholder" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary="Placeholder" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary="Placeholder" />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                        <ListItemText primary="Placeholder" />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Home;
