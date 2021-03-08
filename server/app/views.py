from app import app, datetime

'''
@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/user')
def user_page():
    return app.send_static_file('index.html')
'''

@app.route('/api/time')
def time_api():
    return { 'datetime':  datetime.now()}
