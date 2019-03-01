from flask import Flask, request
from flask_cors import CORS
import requests
import json

import IPython

app = Flask("Backend")
CORS(app)

api_key = "API KEY NOT SET"
with open("api_key", "r") as file:
    api_key = file.read()

root_url = "https://api.challonge.com/v1/"


def check_ip():
    return request.remote_addr

@app.route("/")
def index():
    print(check_ip())
    return "hi"

@app.route("/tournaments")
def get_tournaments():
    params= {"api_key":api_key, "state":"all", "subdomain":"gmusmash"}
    r = requests.get("{}/tournaments.json".format(root_url), params=params)
    tourneys = []
    for t in json.loads(r.text):
        tourneys.append({
            "name": t["tournament"]["name"],
            "url": t["tournament"]["url"],
            "game_img": get_game_img(t["tournament"]["game_name"])
        })
    return str(json.dumps(tourneys[:5]))

def get_game_img(game_name):
    if game_name == "Super Smash Bros.":
        return "ssb.svg"
    if game_name == "Super Smash Bros. Melee":
        return "melee.png"
    if game_name == "Super Smash Bros. Brawl":
        return "brawl.png"
    if game_name == "Super Smash Bros. for 3DS" or game_name == "Super Smash Bros. for Wii U":
        return "wiiu.png"
    if game_name == "Super Smash Bros. Ultimate":
        return "ultimate.svg"
    if game_name == "Project M":
        return "projectm.png"
        
    return ""

app.run(host="0.0.0.0")