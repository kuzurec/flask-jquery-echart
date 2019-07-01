import json

from flask import Blueprint, render_template

from config import db
from models.model import CitySalary,CityPeople,CityScale,ExperienceCity

analysis = Blueprint('webaccess', __name__)


@analysis.route('/')
def hello_world():
    return render_template("index1.html")


# @analysis.route('/get_data')
# def get_data():
#     data = db.session.query(Course).all()
#     view_data = {}
#     view_data["series_data"] = []
#
#     def build_view_data(item):
#         tmp_dic = {}
#         tmp_dic["credits"] = item.CREDITS
#         tmp_dic["cname"] = item.CNAME
#         view_data["series_data"].append(tmp_dic)
#
#     [build_view_data(item) for item in data]
#
#     return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_salary')
def get_salary():
    data = db.session.query(CitySalary).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value"] = item.value
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_people')
def get_people():
    data = db.session.query(CityPeople).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value"] = item.value
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_scale')
def get_scale():
    data = db.session.query(CityScale).limit(30).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value1"] = item.value1
        tmp_dic["value2"] = item.value2
        tmp_dic["value3"] = item.value3
        tmp_dic["value4"] = item.value4
        tmp_dic["value5"] = item.value5
        tmp_dic["value6"] = item.value6
        tmp_dic["value7"] = item.value7
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_experience')
def get_experience():
    data = db.session.query(ExperienceCity).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value1"] = item.value1
        tmp_dic["value2"] = item.value2
        tmp_dic["value3"] = item.value3
        tmp_dic["value4"] = item.value4
        tmp_dic["value5"] = item.value5
        tmp_dic["value6"] = item.value6
        tmp_dic["value7"] = item.value7
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)