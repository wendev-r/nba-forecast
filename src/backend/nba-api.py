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
from sqlalchemy import create_engine
import os

### This file contains the custom API endpoints for the data orginating from NBA API data and database.

app = Flask(__name__)
relative_path = "src/backend/db/NBA-Boxscore-Database.sqlite"

# Convert to absolute path
absolute_path = os.path.abspath(relative_path)
print("absolute path: ", absolute_path)

# Create the engine with absolute path
engine = create_engine(f"sqlite:///{absolute_path}")


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

@app.route('/team/<team_name>', methods=['GET'])
def get_team_details(team_name):
    result = {}
    with engine.connect() as conn:
        result = conn.execute("select * from team_stats")
        print("testing ", result.fetchall())  # Print table nam
    # test = pd.read_sql('select * from team_stats',engine)
    return jsonify({'team_stats': result.to_dict(orient='records')})

    

if __name__ == '__main__':
    app.run()