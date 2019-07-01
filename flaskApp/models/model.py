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