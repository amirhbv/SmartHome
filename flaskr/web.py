nodeIP = 'http://192.168.43.175'

import functools, requests, json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from flaskr.db import get_db

bp = Blueprint('web', __name__, url_prefix='/web')

@bp.route('/temp')
def getTemp():
    res = requests.post(nodeIP + '/temp')
    print(res.text)
    data = json.loads(res.text)
    return data['temp']

@bp.route('/humidity')
def getHumidity():
    res = requests.post(nodeIP + '/humidity')
    data = json.load(res.text)
    return data['humidity']

@bp.route('/switchLight/<state>')
def switchLight(state):
    print(state)
    if (state == "on"):
        print(nodeIP + '/light/off')
        requests.post(nodeIP + '/light/off')
    else:
        requests.post(nodeIP + '/light/on')
    return "OK"
