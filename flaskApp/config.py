from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta
app = Flask(__name__)

# url的格式为：数据库的协议：//用户名：密码@ip地址：端口号（默认可以不写）/数据库名
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@127.0.0.1:3306/bigdata"
# 动态追踪数据库的修改. 性能不好. 且未来版本中会移除. 目前只是为了解决控制台的提示才写的
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# 创建数据库的操作对象
db = SQLAlchemy(app)
#修改缓存时间
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = timedelta(seconds=1)
#修改回话存活时间
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(seconds=1)
