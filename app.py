from flask import Flask, render_template
import json
import numpy as np

app = Flask(__name__)

f = open('./local/data.json')
json_arr = json.load(f)

question_data = np.array([])
option_data = [[]]

for obj in json_arr:
    mcqs = []
    question_data = np.append(question_data, obj['question'])
    for opt in obj['mcq']:
        mcqs.append(opt['option'])
    option_data.append(mcqs)

@app.route("/")
def main_page():
    return render_template('index.html', len=len(json_arr), questions=question_data, mcqs=option_data)

if __name__ == "__main__":
    app.run(debug=True)