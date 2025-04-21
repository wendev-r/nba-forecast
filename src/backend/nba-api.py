import pandas as pd
from nba_api.stats.endpoints import teamyearbyyearstats
from nba_api.stats.endpoints import teamdetails
from nba_api.stats.static import teams
from nba_api.live.nba.endpoints import scoreboard
from io import StringIO
import json
from flask import jsonify
import pickle
from flask import Flask

### This file contains the custom API endpoints for the data orginating from NBA API data.

app = Flask(__name__)


def get_scoreboard_list():
    games = scoreboard.ScoreBoard()
    games_df = pd.read_json(StringIO(games.get_json()))
    scoreboard_list = (games_df.iloc[7])['scoreboard']
    return scoreboard_list

#GET endpoint for daily scoreboard
@app.route('/scoreboard', methods=['GET'])
def get_scoreboard():
    gameList = []
    scoreboard_response = get_scoreboard_list()
    for i in range(len(scoreboard_response)):
        game = {"home": scoreboard_response[i]["homeTeam"]["teamName"], 
            "away": scoreboard_response[i]["awayTeam"]["teamName"],
            "homeScore": scoreboard_response[i]["homeTeam"]["score"], "awayScore":scoreboard_response[i]["awayTeam"]["score"],
            "homeWLRatio": f"{scoreboard_response[i]['homeTeam']['wins']}-{scoreboard_response[i]['homeTeam']['losses']}",
            "awayWLRatio": f"{scoreboard_response[i]['awayTeam']['wins']}-{scoreboard_response[i]['awayTeam']['losses']}",
            "gameTime": scoreboard_response[i]["gameTimeUTC"],
            "gameCode": scoreboard_response[i]["gameCode"],
            "period": scoreboard_response[i]["period"],
            "gameClock": scoreboard_response[i]["gameClock"]}
        gameList.append(game)

    return jsonify({'scoreboard': gameList})