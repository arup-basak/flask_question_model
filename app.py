from flask import Flask, render_template
import json
import numpy as np

app = Flask(__name__)

f = open('./local/data.json')
json_arr = json.load(f)


@app.route("/")
def main_page():
    return render_template('index.html', len=len(json_arr), data=json_arr)

def match(answers):
    correct = 0
    arr = np.array(answers)
    for index, answer in enumerate(arr):
        answer_index = json_arr[index]['ans']
        if (answer == json_arr[index]['mcq'][answer_index]['option']):
            correct += 1
    return correct


if __name__ == "__main__":
    app.run(debug=True)