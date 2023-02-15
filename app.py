from flask import Flask, render_template, request
import json
import numpy as np

app = Flask(__name__)

f = open('./local/data.json')
json_arr = json.load(f)

def match(answers):
    correct = 0
    arr = np.array(answers)
    for index, answer in enumerate(arr):
        answer_index = json_arr[index]['ans']
        if (answer == json_arr[index]['mcq'][answer_index]['option']):
            correct += 1
    return correct


@app.route("/")
def main_page():
    return render_template('index.html', len=len(json_arr), data=json_arr)


@app.route('/exam/answers', methods=['GET', 'POST'])
def answers():
    if(request.method == 'GET'):
        return 0

if __name__ == "__main__":
    app.run(debug=True)