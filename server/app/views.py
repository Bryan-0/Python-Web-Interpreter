from app import app, datetime, request

'''
@app.route('/')
def index():
    return app.send_static_file('index.html')
'''

@app.route('/api/python', methods=['POST'])
def get_python_code():
    code = request.json['pyCode']
    return {'output': code}
