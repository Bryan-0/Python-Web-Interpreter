from flask import Flask, request
from flask_cors import CORS
from datetime import datetime
from pathlib import Path
import subprocess
from uuid import uuid4
import os

app = Flask(__name__, static_folder='build', static_url_path='/')
CORS(app)

from app import views