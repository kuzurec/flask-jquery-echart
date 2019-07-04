from config import db

# class WordCount(db.Model):
#     __tablename__ = "wordcount"
#     id = db.Column(db.Integer, primary_key=True)
#     word = db.Column(db.String(50))
#     count = db.Column(db.BigInteger)
# 测试
# class Course(db.Model):
#     __tablename__ = "course"
#     CREDITS = db.Column(db.FLOAT)
#     CNAME = db.Column(db.String(10),primary_key=True)

#城市薪资
class CitySalary(db.Model):
    __tablename__ = "citysalary"
    name = db.Column(db.String(20),primary_key=True)  #城市
    value = db.Column(db.FLOAT)   #薪资
#城市岗位
class CityPeople(db.Model):
    __tablename__ = "citypeopel"
    name = db.Column(db.String(20),primary_key=True)  #城市
    value = db.Column(db.Integer)    #岗位数量
#城市公司规模
class CityScale(db.Model):
    __tablename__ = "cityscale"
    name = db.Column(db.Text,primary_key=True)  #城市
    value1 = db.Column(db.Integer)   #<50人
    value2 = db.Column(db.Integer)   #50-150人
    value3 = db.Column(db.Integer)   #150-500人
    value4 = db.Column(db.Integer)   #500-1000人
    value5 = db.Column(db.Integer)   #1000-5000人
    value6 = db.Column(db.Integer)   #5000-10000人
    value7 = db.Column(db.Integer)   #>10000人
# 城市工作经验要求
class ExperienceCity(db.Model):
    __tablename__ = "experiencecity"
    name = db.Column(db.Text, primary_key=True)  #城市
    value1 = db.Column(db.Integer)   #经验不限
    value2 = db.Column(db.Integer)   #应届毕业生
    value3 = db.Column(db.Integer)   #经验1年以下
    value4 = db.Column(db.Integer)   #经验1-3年
    value5 = db.Column(db.Integer)   #经验3-5年
    value6 = db.Column(db.Integer)   #经验5-10年
    value7 = db.Column(db.Integer)   #经验10年以上

#公司融资情况

class CompanyFinance(db.Model):
    __tablename__ = "companyfinance"
    name = db.Column(db.Text,primary_key=True) #岗位地点
    value1 = db.Column(db.Integer)  #A轮
    value2 = db.Column(db.Integer)  #B轮
    value3 = db.Column(db.Integer)  #C轮
    value4 = db.Column(db.Integer)  #D轮
    value5 = db.Column(db.Integer)  #上市公司
    value6 = db.Column(db.Integer)  #不需要融资
    value7 = db.Column(db.Integer)  #天使轮
    value8 = db.Column(db.Integer)  #未融资

#行业聚类
class Industryinfo(db.Model):
    __tablename__ = "industryinfo"
    salary = db.Column(db.String(20),primary_key=True)#平均薪资
    country = db.Column(db.String(20),primary_key=True)#主要城市
    scale = db.Column(db.String(20),primary_key=True)#平均公司规模
    job = db.Column(db.String(20),primary_key=True) #行业

#大公司数量
class CompanyCount(db.Model):
    __tablename__ = "companycount"
    name = db.Column(db.String(20),primary_key=True) #行业名称
    value1 = db.Column(db.Integer) #公司数量
    value = db.Column(db.Integer) #大公司数量

#工作经验与薪资关系
class Experience(db.Model):
    __tablename__ = "experience"
    name = db.Column(db.Text,primary_key=True) #工作经验
    value1 = db.Column(db.Integer) #1-5k
    value2 = db.Column(db.Integer) #5-10k
    value3 = db.Column(db.Integer) #10-20k
    value4 = db.Column(db.Integer) #20k以上
#岗位与平均薪资
class JobSalary(db.Model):
    __tablename__ = "jobsalary"
    name = db.Column(db.String(20),primary_key=True) #职位
    value = db.Column(db.FLOAT) #平均薪资

#后端开发语言的平均薪资
class LanguageSalary(db.Model):
    __tablename__ = "languagesalary"
    name = db.Column(db.String(20), primary_key=True)  # 语言
    value = db.Column(db.FLOAT)  # 平均薪资

#学历经验期望薪水
class Regression(db.Model):
    __tablename__ = "regression"
    exp = db.Column(db.String(20), primary_key=True) #经验要求
    edu = db.Column(db.String(20), primary_key=True) #学历
    salaryExpect = db.Column(db.FLOAT) #期望薪水