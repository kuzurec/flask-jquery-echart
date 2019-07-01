import json

from flask import render_template
from config import app, db
from views.big_analysis import analysis

app.register_blueprint(analysis, url_prefix="/")

@app.route("/index2")
def index1():
    return render_template("index1.html")

@app.route("/index1")
def index():
    return render_template("index.html")
@app.route("/city")
def city():
    return render_template("city.html")
@app.route("/company")
def company():
    return render_template("company.html")
@app.route("/job")
def job():
    return render_template("job.html")

if __name__ == '__main__':
    app.run()
