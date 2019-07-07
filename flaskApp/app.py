import json

from flask import render_template,request,session,redirect,url_for
from config import app
from views.big_analysis import analysis
from config import db
from models.model import User
app.register_blueprint(analysis, url_prefix="/")

@app.route("/city")
def city():
    if  session.get("username"):
        return render_template("city.html",name=session["username"] )
    else:
        return render_template("city.html" )
@app.route("/company")
def company():
    if  session.get("username"):
        return render_template("company.html",name=session["username"] )
    else:
        return render_template("company.html" )
@app.route("/job")
def job():
    if  session.get("username"):
        return render_template("job.html",name=session["username"] )
    else:
        return render_template("job.html" )
@app.route("/tab")
def tab():
    if  session.get("username"):
        return render_template("tab.html",name=session["username"] )
    else:
        return render_template("tab.html" )
@app.route("/login")
def login():
    return render_template("login.html")

@app.route('/post_login', methods=["GET","POST"])
def post_login():
    if request.method == "POST":
        username = request.values["username"]
        password = request.values["password"]
        data = db.session.query(User).filter(User.username==username,User.password==password).first()
        if data:
            session["username"]=data.username  #将登录信息存入session
            session["password"]=data.password
            return  redirect(url_for("index1"))
        else:
            return "登录失败"

@app.route('/index1', methods=["GET", "POST"])
def index1():
    if  session.get("username"):
        return render_template("index.html",name=session["username"] )
    else:
        return render_template("index.html" )

app.secret_key="AKDJSKKJL;D'E.S/"

@app.route('/userspace', methods=["GET", "POST"])
def userspace():
    if  session.get("username"):
        return render_template("userspace.html",name=session["username"] )
    else:
        return "fail"
if __name__ == '__main__':
    app.run()

