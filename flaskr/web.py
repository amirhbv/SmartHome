import functools, requests, json

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from flaskr.db import get_db

bp = Blueprint('web', __name__, url_prefix='/web')

@bp.route('/temp')
def getTemp():
    # res = requests.post('ip')
    # data = json.load(res.text)
    # return data['temp']
    return '20'

@bp.route('/humidity')
def getHumidity():
    # res = requests.post('ip')
    # data = json.load(res.text)
    # return data['humidity']
    return '20000'


{"temp" : "80"}
