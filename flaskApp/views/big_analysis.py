import json

from flask import Blueprint, render_template,request,session

from config import db
from models.model import CitySalary,CityPeople,CityScale,ExperienceCity,CompanyFinance,CompanyCount,Experience,JobSalary,LanguageSalary,Industryinfo,Regression,User,Attention,Position
import random
analysis = Blueprint('webaccess', __name__)

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

@analysis.route('/get_position')
def get_position():
    data = db.session.query(Position).all()
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

@analysis.route('/post_attention',methods=["GET", "POST"])
def post_attention():
    data = request.get_json()
    topicname = data.get("topicname")
    if topicname:
        id = random.randint(0,10000)
        db.session.execute("SET NAMES utf8")
        new = Attention(attid=id,username=session.get("username"),topicname=topicname)
        db.session.add(new)
        db.session.commit()
        return "ok"
    else:
        return "fail"

@analysis.route('/get_attention',methods=["GET", "POST"])
def get_attention():
    if session["username"]:
        data = db.session.query(Attention).filter(Attention.username==session["username"]).all()
        view_data = {}
        view_data["series_data"] = []

        def build_view_data(item):
            tmp_dic = {}
            tmp_dic["topicname"] = item.topicname

            view_data["series_data"].append(tmp_dic)

        [build_view_data(item) for item in data]

        return json.dumps(view_data, ensure_ascii=False)

@analysis.route('/post_cancel',methods=["GET", "POST"])
def post_cancel():
    data = request.get_json()
    topicname = data.get("topicname")
    if topicname:
        db.session.execute("SET NAMES utf8")
        db.session.query(Attention).filter(Attention.topicname==topicname,Attention.username==session["username"]).delete()
        db.session.commit()
        return "ok"
    else:
        return "fail"

#生成相关推荐
@analysis.route('/get_tuijian',methods=["GET", "POST"])
def get_tuijian():
    if session["username"]:
        data = db.session.query(Attention).filter(Attention.username==session["username"]).all()
        uname_list = []
        tname_list = []
        for item in data:
            tname = item.topicname
            same_topic = db.session.query(Attention).filter(Attention.topicname == tname).all()#找出所有与当前用户关注标题相同的字段
            for item in same_topic:
                uname_list.append(item.username)  #把标题相同的用户名放进数组里面
            tname_list.append(tname) #把当前用户关注标题加到一个数组里面
        #计算数组中出现次数最多的2个用户(除了当前登录用户)
        uname_dic={}
        for uname in uname_list:
            uname_dic[uname] = 0
        for uname in uname_list:
            uname_dic[uname] = uname_dic[uname]+1
        #对字典排序
        slist = sorted(uname_dic.items(), key=lambda x: x[1],reverse=True)
        result_list=[]
        for i in range(len(slist)):
            same_user = db.session.query(Attention).filter(Attention.username == slist[i][0]).all()
            for item in same_user:
                topic = item.topicname
                if topic not in tname_list:      #如果该用户关注的标题不在当前用户关注的标题列表中
                    result_list.append(topic)
        new_list = list({}.fromkeys(result_list).keys())      #列表去重
        if len(new_list)>8:
            new_list = new_list[:8]  #只取前八个推荐
        view_data = {}
        view_data["series_data"] = []
        for item in new_list:
            tmp_dic = {}
            tmp_dic["tuijian"]= item
            view_data["series_data"].append(tmp_dic)
        return json.dumps(view_data, ensure_ascii=False)
