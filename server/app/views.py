from app import app, datetime, request, Path, subprocess, os, uuid4

'''
@app.route('/')
def index():
    return app.send_static_file('index.html')
'''

@app.route('/api/python/interprete', methods=['POST'])
def get_python_code():
    code = request.json['pyCode']
    fixed_Code = clean_Code(code)
    print(fixed_Code)

    return run_Code(fixed_Code)

@app.route('/api/python/remove', methods=['POST'])
def remove_python_file():
    file_to_delete = request.json['filename']
    os.remove(file_to_delete)
    return {'operation': 'done'}


# Utility
def clean_Code(code) -> str:
    return str(code).replace("</div>", "\n").replace("<div>", "\n").replace("<br>", "\n").replace("&gt;", ">").replace("&lt;", "<")

def run_Code(code) -> dict:
    tempfile = str(uuid4()) + ".py"
    
    with open(tempfile, 'w') as f:
        f.write(code)
    
    cmd = subprocess.run(["python", tempfile], capture_output=True)
    output = cmd.stdout.decode()
    
    return {'output': output, 'filename': tempfile}