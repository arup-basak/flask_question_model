from flask import Flask, render_template
import json

app = Flask(__name__)

f = open('./local/data.json')
json_arr = json.load(f)

question_data = []
option_data = [[]]
mcqs = []

for obj in json_arr:
    question_data.append(obj['question'])
    for opt in obj['mcq']:
        mcqs.append(opt['option'])
    print(mcqs)
    mcqs.clear()

print(option_data)
# @app.route("/")
# def main_page():
#     return render_template('index.html', len=len(json_arr), questions=question_data, mcqs=option_data)

# if __name__ == "__main__":
#     app.run(debug=True)