from flask import Flask, render_template
import json
import numpy as np

app = Flask(__name__)

f = open('./local/data.json')
json_arr = json.load(f)

@app.route("/")
def main_page():
    return render_template('index.html', len=len(json_arr), data=json_arr)

if __name__ == "__main__":
    app.run(debug=True)