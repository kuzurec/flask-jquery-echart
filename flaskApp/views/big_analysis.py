import json

from flask import Blueprint, render_template

from config import db
from models.model import CitySalary,CityPeople,CityScale,ExperienceCity,CompanyFinance,CompanyCount,Experience,JobSalary,LanguageSalary,Industryinfo,Regression

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

@analysis.route('/get_companyfinance')
def get_companyfinance():
    data = db.session.query(CompanyFinance).order_by(CompanyFinance.value1.desc()).limit(30).all()
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
        tmp_dic["value8"] = item.value8
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)


@analysis.route('/get_companycount')
def get_companycount():
    data = db.session.query(CompanyCount).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value1"] = item.value1
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_bigcompanycount')
def get_bigcompanycount():
    data = db.session.query(CompanyCount).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value"] = item.value
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_job')
def get_job():
    data = db.session.query(Experience).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value1"] = item.value1
        tmp_dic["value2"] = item.value2
        tmp_dic["value3"] = item.value3
        tmp_dic["value4"] = item.value4
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_jobsalary')
def get_jobsalary():
    data = db.session.query(JobSalary).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value"] = item.value
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_language')
def get_language():
    data = db.session.query(LanguageSalary).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["name"] = item.name
        tmp_dic["value"] = item.value
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_industryinfo')
def get_industryinfo():
    data = db.session.query(Industryinfo).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["salary"] = item.salary
        tmp_dic["country"] = item.country
        tmp_dic["scale"] = item.scale
        tmp_dic["job"] = item.job
        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/get_expsalary')
def get_expsalary():
    data = db.session.query(Regression).all()
    view_data = {}
    view_data["series_data"] = []

    def build_view_data(item):
        tmp_dic = {}
        tmp_dic["exp"] = item.exp
        tmp_dic["edu"] = item.edu
        tmp_dic["salaryExpect"] = item.salaryExpect

        view_data["series_data"].append(tmp_dic)

    [build_view_data(item) for item in data]

    return json.dumps(view_data, ensure_ascii=False)