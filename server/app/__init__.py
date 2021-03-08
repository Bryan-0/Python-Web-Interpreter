from flask import Flask, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__, static_folder='build', static_url_path='/')
CORS(app)

from app import views