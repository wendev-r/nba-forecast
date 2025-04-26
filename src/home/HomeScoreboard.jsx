import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NavBar from "../Components/Common/NavBar";


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

const convertTime = (time) => {
    var date = new Date(time);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

/*
GameClock is formatted in ISO 8601 duration. so we need to convert it to a more readable format.
Example: PT1H30M15S = 1 hour, 30 minutes, 15 seconds
*/
const convertGameClock = (time) => {
    const match = time.match(/PT(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?/);
    if (!match) return null;

    const minutes = parseInt(match[1] || '0', 10);
    const seconds = Math.floor(parseFloat(match[2] || '0'));

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

const HomeScoreboard = () => {
    const [scoreboardData, setScoreBoardData] = useState([]);
    useEffect(() => {
        fetch('/scoreboard').then(res => res.json()).then(data => {
            setScoreBoardData(data.scoreboard)
        });

    }, [])
    return (
        <Box>
            <NavBar />
            <Box sx={dividerBoxStyle}>
                {scoreboardData.length > 0 ? 
                    <List sx={dividerStyle}>
                        {scoreboardData.map(scoreboard => ( console.log(scoreboard.gameClock),
                            <ListItem key={scoreboard.gameCode}>
                                <ListItemText
                                    primary=
                                    {scoreboard.away + " @ " + scoreboard.home}
                                    secondary={scoreboard.awayScore + "-" + scoreboard.homeScore}
                                    
                                />
                                <Typography>{scoreboard.gameClock ? "Q" + scoreboard.period + " " + convertGameClock(scoreboard.gameClock) : scoreboard.period ==4 && (scoreboard.gameClock) == ""? "Final" : convertTime(scoreboard.gameTime)}</Typography>
                            </ListItem>
                        ))}
                        <Divider component="li" />

                    </List> :
                    <Typography variant="h6" sx={{ padding: 2 }}> No games today</Typography>}
            </Box>
        </Box>
    );
};

export default HomeScoreboard;