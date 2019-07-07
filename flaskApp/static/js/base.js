(function(){$.ajax({
        url: "/get_people",
        type: "GET",
        dataType: "json",
        success: function (data) {
//        alert(JSON.stringify(data["series_data"][0].name.substring(4)));
           if($("#chart1").length>0){   //如果存在#chart1
              chart1(data);
            }
            if($("#chart1s").length>0){   //如果存在#chart1
              chart1s(data);
            }

            if($("#chart2").length>0){
              chart2(data);
            }
        }
    });
})()

var geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '招远':[120.38,37.35],
    '舟山':[122.207216,29.985295],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '太仓':[121.1,31.45],
    '曲靖':[103.79,25.51],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '昆山':[120.95,31.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '连云港':[119.16,34.59],
    '葫芦岛':[120.836932,40.711052],
    '常熟':[120.74,31.64],
    '东莞':[113.75,23.04],
    '河源':[114.68,23.73],
    '淮安':[119.15,33.5],
    '泰州':[119.9,32.49],
    '南宁':[108.33,22.84],
    '营口':[122.18,40.65],
    '惠州':[114.4,23.09],
    '江阴':[120.26,31.91],
    '蓬莱':[120.75,37.8],
    '韶关':[113.62,24.84],
    '嘉峪关':[98.289152,39.77313],
    '广州':[113.23,23.16],
    '延安':[109.47,36.6],
    '太原':[112.53,37.87],
    '清远':[113.01,23.7],
    '中山':[113.38,22.52],
    '昆明':[102.73,25.04],
    '寿光':[118.73,36.86],
    '盘锦':[122.070714,41.119997],
    '长治':[113.08,36.18],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '宿迁':[118.3,33.96],
    '咸阳':[108.72,34.36],
    '铜川':[109.11,35.09],
    '平度':[119.97,36.77],
    '佛山':[113.11,23.05],
    '海口':[110.35,20.02],
    '江门':[113.06,22.61],
    '章丘':[117.53,36.72],
    '肇庆':[112.44,23.05],
    '大连':[121.62,38.92],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '石嘴山':[106.39,39.04],
    '沈阳':[123.38,41.8],
    '苏州':[120.62,31.32],
    '茂名':[110.88,21.68],
    '嘉兴':[120.76,30.77],
    '长春':[125.35,43.88],
    '胶州':[120.03336,36.264622],
    '银川':[106.27,38.47],
    '张家港':[120.555821,31.875428],
    '三门峡':[111.19,34.76],
    '锦州':[121.15,41.13],
    '南昌':[115.89,28.68],
    '柳州':[109.4,24.33],
    '三亚':[109.511909,18.252847],
    '自贡':[104.778442,29.33903],
    '吉林':[126.57,43.87],
    '阳江':[111.95,21.85],
    '泸州':[105.39,28.91],
    '西宁':[101.74,36.56],
    '宜宾':[104.56,29.77],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '大同':[113.3,40.12],
    '镇江':[119.44,32.2],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '库尔勒':[86.06,41.68],
    '安阳':[114.35,36.1],
    '开封':[114.35,34.79],
    '济南':[117,36.65],
    '德阳':[104.37,31.13],
    '温州':[120.65,28.01],
    '九江':[115.97,29.71],
    '邯郸':[114.47,36.6],
    '临安':[119.72,30.23],
    '兰州':[103.73,36.03],
    '沧州':[116.83,38.33],
    '临沂':[118.35,35.05],
    '南充':[106.110698,30.837793],
    '天津':[117.2,39.13],
    '富阳':[119.95,30.07],
    '泰安':[117.13,36.18],
    '诸暨':[120.23,29.71],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '聊城':[115.97,36.45],
    '芜湖':[118.38,31.33],
    '唐山':[118.02,39.63],
    '平顶山':[113.29,33.75],
    '邢台':[114.48,37.05],
    '德州':[116.29,37.45],
    '济宁':[116.59,35.38],
    '荆州':[112.239741,30.335165],
    '宜昌':[111.3,30.7],
    '义乌':[120.06,29.32],
    '丽水':[119.92,28.45],
    '洛阳':[112.44,34.7],
    '秦皇岛':[119.57,39.95],
    '株洲':[113.16,27.83],
    '石家庄':[114.48,38.03],
    '莱芜':[117.67,36.19],
    '常德':[111.69,29.05],
    '保定':[115.48,38.85],
    '湘潭':[112.91,27.87],
    '金华':[119.64,29.12],
    '岳阳':[113.09,29.37],
    '长沙':[113,28.21],
    '衢州':[118.88,28.97],
    '廊坊':[116.7,39.53],
    '菏泽':[115.480656,35.23375],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
    '大庆':[125.03,46.58]
};

function chart1(mydata){
   mychart = echarts.init(document.getElementById("chart1"));
   var data = mydata["series_data"];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name.substring(4)];
        if (geoCoord) {
            res.push({
                name: data[i].name.substring(4),
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    visualMap: {
        type: "piecewise",
        min: 0,
        max: convertData(data).sort(function(a,b){return b.value-a.value})[0].value,
        pieces: [
            {gt: 50000},
            {gt: 10000, lte: 50000},
            {gt: 5000, lte: 10000},
            {gt: 500, lte: 5000},
            {gt: 100, lte: 500},
            {gt: 0, lte: 100}
        ],
        inRange: {
            color:  ['red','#eac736','#50a3ba'].reverse(),
            opacity: 0.8,
            symbolSize: [5, 40],
        },
        textStyle: {
            color: '#fff'
        }
    },
     tooltip: {
            trigger: 'item'
         },
    geo: {
        show: true,
        map: 'china',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
             normal: {
                    areaColor: 'transparent',
                    borderWidth: 1.2,
                     //shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                    borderColor: '#0E94EA',
                    shadowBlur: 10,
                    shadowColor: '#0e94ea'
                },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
            name: '岗位数量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            encode: {
                value: 2
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            }
        }
    ]
};
  mychart.setOption(option);
}

function chart1s(mydata){
   mychart = echarts.init(document.getElementById("chart1s"));
   var data = mydata["series_data"];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name.substring(4)];
        if (geoCoord) {
            res.push({
                name: data[i].name.substring(4),
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    visualMap: {
        type: "piecewise",
        min: 0,
        max: convertData(data).sort(function(a,b){return b.value-a.value})[0].value,
        pieces: [
            {gt: 50000},
            {gt: 10000, lte: 50000},
            {gt: 5000, lte: 10000},
            {gt: 500, lte: 5000},
            {gt: 100, lte: 500},
            {gt: 0, lte: 100}
        ],
        show:false,
        inRange: {
            color:  ['red','#eac736','#50a3ba'].reverse(),
            opacity: 0.8,
            symbolSize: [5, 40],
        },
        textStyle: {
            color: '#fff'
        }
    },
     tooltip: {
            trigger: 'item'
         },
    geo: {
        show: true,
        map: 'china',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
             normal: {
                    areaColor: 'transparent',
                    borderWidth: 1.2,
                     //shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                    borderColor: '#0E94EA',
                    shadowBlur: 10,
                    shadowColor: '#0e94ea'
                },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
            name: '岗位数量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            encode: {
                value: 2
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            }
        }
    ]
};
  mychart.setOption(option);
}

function chart2(data){
     mychart = echarts.init(document.getElementById("chart2"));
     mydata = data["series_data"];
     function convertValuelist(data){
          var res = [];
          for(let i = 0;i < data.length;i++){
            res.push(data[i].value);
          }
          return res;
     }
     function convertNamelist(data){
        var res = [];
        for(let i = 0;i < data.length;i++){
            res.push(data[i].name);
        }
        return res;
     }
   var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'].reverse();
option = {
    backgroundColor: 'transparent',
    grid: {
        left: '10%',
        top: '6%',
        right: '3%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12',
            }
        },
        data:convertNamelist(mydata.sort(function(a,b){
              return b.value - a.value;})).splice(0,10).reverse()
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: 'transparent',
                fontSize: '12',
            }
        },
        data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
    }, {
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: convertValuelist(mydata.sort(function(a,b){
              return b.value - a.value;
        })).splice(0,10).reverse(),
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '12',
                    }
                }
            },
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            barWidth: 17,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};
   mychart.setOption(option);
}

(function(){$.ajax({
        url: "/get_scale",
        type: "GET",
        dataType: "json",
        success: function (data) {
           if($("#chart3").length>0){
              chart3(data);
            }
         }
    });
})()
function chart3(mydata){
    var mychart = echarts.init(document.getElementById("chart3"));
    var data = mydata["series_data"];
    var legendData = ['<50人', '50-150人', '150-500人','500-1000人','1000-5000人','5000-10000','>10000人'];
    var y_data = convertNamelist(data);
    var valuelist = [];
    var templist = [];
    function convertNamelist(data){
        var res = [];
        for(let i=0;i<data.length;i++){
            res.push(data[i].name);
        }
        return res;
    }
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value1);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value2);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value3);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value4);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value5);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value6);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value7);
    }
    valuelist.push(templist);
//    _data1 = [10,15,10,13,15,11],
//    _data2 = [19,5,40,33,15,51],
//    _data3 = [21,55,10,13,35,11];
//    _data4 = [21,55,10,13,35,11];
option = {
    backgroundColor: 'transparent',
    legend: {
        data: legendData,
        left: 130,
        textStyle: {
            color: '#ccc'
        }
    },
    grid: {
        containLabel: true,
        left: 30,
        right: 15,
        top: 10,
        bottom: 100
    },
    tooltip: {
        show: true,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        textStyle: {
            color: '#3c3c3c',
            fontSize: 16
        },
        formatter: function(p) {
            console.log(p);
            var _arr = p.seriesName.split('/'),
            idx = p.seriesIndex;//1，2，3
            return '人数：' + p.seriesName + '<br>' + '公司数：' + p.value;
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
    },
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 20,
        "start": 0,
        "end": 60,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c",
        zoomLock:true


    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 0,
        "end": 60,

        disabled:true,
        zoomLock:true
    }],

     "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    xAxis: [{
        data: y_data,
        axisLabel: {
            fontSize: 16,
            color: '#fff'

        },
        axisLine: {
             lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        show: false,
        data: y_data,
        axisLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        name: '<50人',
        stack: '2',
        legendHoverLink: false,
        barWidth: 32,
         label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
        data: valuelist[0]
    }, {
        type: 'bar',
        name: '50-150人',
        stack: '2',
        legendHoverLink: false,
        barWidth: 32,
         label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
        data: valuelist[1]
    }, {
        type: 'bar',
        stack: '2',
        name: '150-500人',
        legendHoverLink: false,
        barWidth: 32,
         label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
        data: valuelist[2]
    }, {
        type: 'bar',
        stack: '2',
        name: '500-1000人',
        legendHoverLink: false,
        barWidth: 32,
         label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
        data: valuelist[3]
    }, {
        type: 'bar',
        stack: '2',
        name: '1000-5000人',
        legendHoverLink: false,
        barWidth: 32,
         label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
        data: valuelist[4]
    }, {
        type: 'bar',
        stack: '2',
        name: '5000-10000',
        legendHoverLink: false,
        barWidth: 32,
         label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
        data: valuelist[5]
    }, {
        type: 'bar',
        stack: '2',
        name: '>10000人',
        legendHoverLink: false,
        barWidth: 32,
         label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
        data: valuelist[6]
    }]
};
    mychart.setOption(option);
}

(function(){$.ajax({
        url: "/get_salary",
        type: "GET",
        dataType: "json",
        success: function (data) {
           //alert(JSON.stringify(data));
           if($("#chart4").length>0){
               chart4(data);
            }
           if($("#chart5").length>0){
              chart5(data);
            }
        }
    });
})()

function chart4(mydata) {
    var mymap = echarts.init(document.getElementById('chart4'));
     var data = mydata["series_data"];
var geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '招远':[120.38,37.35],
    '舟山':[122.207216,29.985295],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '太仓':[121.1,31.45],
    '曲靖':[103.79,25.51],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '昆山':[120.95,31.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '连云港':[119.16,34.59],
    '葫芦岛':[120.836932,40.711052],
    '常熟':[120.74,31.64],
    '东莞':[113.75,23.04],
    '河源':[114.68,23.73],
    '淮安':[119.15,33.5],
    '泰州':[119.9,32.49],
    '南宁':[108.33,22.84],
    '营口':[122.18,40.65],
    '惠州':[114.4,23.09],
    '江阴':[120.26,31.91],
    '蓬莱':[120.75,37.8],
    '韶关':[113.62,24.84],
    '嘉峪关':[98.289152,39.77313],
    '广州':[113.23,23.16],
    '延安':[109.47,36.6],
    '太原':[112.53,37.87],
    '清远':[113.01,23.7],
    '中山':[113.38,22.52],
    '昆明':[102.73,25.04],
    '寿光':[118.73,36.86],
    '盘锦':[122.070714,41.119997],
    '长治':[113.08,36.18],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '宿迁':[118.3,33.96],
    '咸阳':[108.72,34.36],
    '铜川':[109.11,35.09],
    '平度':[119.97,36.77],
    '佛山':[113.11,23.05],
    '海口':[110.35,20.02],
    '江门':[113.06,22.61],
    '章丘':[117.53,36.72],
    '肇庆':[112.44,23.05],
    '大连':[121.62,38.92],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '石嘴山':[106.39,39.04],
    '沈阳':[123.38,41.8],
    '苏州':[120.62,31.32],
    '茂名':[110.88,21.68],
    '嘉兴':[120.76,30.77],
    '长春':[125.35,43.88],
    '胶州':[120.03336,36.264622],
    '银川':[106.27,38.47],
    '张家港':[120.555821,31.875428],
    '三门峡':[111.19,34.76],
    '锦州':[121.15,41.13],
    '南昌':[115.89,28.68],
    '柳州':[109.4,24.33],
    '三亚':[109.511909,18.252847],
    '自贡':[104.778442,29.33903],
    '吉林':[126.57,43.87],
    '阳江':[111.95,21.85],
    '泸州':[105.39,28.91],
    '西宁':[101.74,36.56],
    '宜宾':[104.56,29.77],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '大同':[113.3,40.12],
    '镇江':[119.44,32.2],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '库尔勒':[86.06,41.68],
    '安阳':[114.35,36.1],
    '开封':[114.35,34.79],
    '济南':[117,36.65],
    '德阳':[104.37,31.13],
    '温州':[120.65,28.01],
    '九江':[115.97,29.71],
    '邯郸':[114.47,36.6],
    '临安':[119.72,30.23],
    '兰州':[103.73,36.03],
    '沧州':[116.83,38.33],
    '临沂':[118.35,35.05],
    '南充':[106.110698,30.837793],
    '天津':[117.2,39.13],
    '富阳':[119.95,30.07],
    '泰安':[117.13,36.18],
    '诸暨':[120.23,29.71],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '聊城':[115.97,36.45],
    '芜湖':[118.38,31.33],
    '唐山':[118.02,39.63],
    '平顶山':[113.29,33.75],
    '邢台':[114.48,37.05],
    '德州':[116.29,37.45],
    '济宁':[116.59,35.38],
    '荆州':[112.239741,30.335165],
    '宜昌':[111.3,30.7],
    '义乌':[120.06,29.32],
    '丽水':[119.92,28.45],
    '洛阳':[112.44,34.7],
    '秦皇岛':[119.57,39.95],
    '株洲':[113.16,27.83],
    '石家庄':[114.48,38.03],
    '莱芜':[117.67,36.19],
    '常德':[111.69,29.05],
    '保定':[115.48,38.85],
    '湘潭':[112.91,27.87],
    '金华':[119.64,29.12],
    '岳阳':[113.09,29.37],
    '长沙':[113,28.21],
    '衢州':[118.88,28.97],
    '廊坊':[116.7,39.53],
    '菏泽':[115.480656,35.23375],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
    '大庆':[125.03,46.58]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var option = {
    tooltip : {
        trigger: 'item'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
             normal: {
                    areaColor: 'transparent',
                    borderWidth: 1.2,
                     //shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                    borderColor: '#0E94EA',
                    shadowBlur: 10,
                    shadowColor: '#0e94ea'
                },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series : [
        {
            name: '平均薪资（千）',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            encode: {
                value: 2
            },
            symbolSize: function (val) {
                return val[2]*1.5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 11)),
            encode: {
                value: 2
            },
            symbolSize: function (val) {
                return val[2]*2 ;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};
  mymap.setOption(option);
   

}

function chart5(data){
     var mychart = echarts.init(document.getElementById("chart5"));
     mydata = data["series_data"];
     function convertValuelist(data){
          var res = [];
          for(let i = 0;i < data.length;i++){
            res.push(data[i].value);
          }
          return res;
     }
     function convertNamelist(data){
        var res = [];
        for(let i = 0;i < data.length;i++){
            res.push(data[i].name);
        }
        return res;
     }
    option = {
    // title: {
    //     text: '平均招聘月薪最高的Top10城市',
    //     left:"center",
    //     textStyle: {
    //             color: '#fff'
    //         }
    // },
    grid: {  
     left: '4%',  
     right: '6%',  
    bottom: '6%',  
    containLabel: true  
    },  
    xAxis: {
        axisTick: 'none',
        axisLine: 'none',
        data: convertNamelist(mydata.sort(function(a,b){
              return b.value - a.value;
        })).splice(0,10),
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
                textStyle: {
                    color: '#fff'
            }
        }},
    series: [{
        type: 'bar',
        barWidth:20,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}\n{c}'
                }
            }
        },
        data:convertValuelist(mydata.sort(function(a,b){
              return b.value - a.value;
        })).splice(0,10)
    }]
};
    mychart.setOption(option);
}
(function(){$.ajax({
        url: "/get_experience",
        type: "GET",
        dataType: "json",
        success: function (data) {
           //alert(JSON.stringify(data));
           if($("#chart6").length>0){
              chart6(data);
            }
        }
    });
})()
 function chart6(mydata){
    var mychart = echarts.init(document.getElementById("chart6"));
    var data = mydata["series_data"];
    var legendData = ['经验不限', '应届毕业生', '经验一年以下','经验1-3年','经验3-5年','经验5-10年','经验10年以上'];
    var valuelist = [];
    var templist = [];
    function convertNamelist(data){
        var res = [];
        for(let i=0;i<data.length;i++){
            res.push(data[i].name);
        }
        return res;
    }
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value1);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value2);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value3);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value4);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value5);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value6);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value7);
    }
    valuelist.push(templist);
//    var xData = function() {
//    var data = [];
//    for (var i = 1; i < 31; i++) {
//        data.push(+i + "日");
//    }
//    return data;
//}();

option = {
    backgroundColor: "transparent",

    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 15,
        left: 50,
        "bottom": 85,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: 2,
        left: 170,
        textStyle: {
            color: '#90979c',
        },
        "data": ['经验不限', '应届毕业生', '经验1年以下', '经验1-3年', '经验3-5年', '经验5-10年', '经验10年以上']
    },


    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": convertNamelist(data),
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 20,
        "start": 1,
        "end": 50,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c",
        zoomLock:true


    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 50,

        disabled:true,
        zoomLock:true
    }],
    series: [{
            name: "经验不限",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(255,185,15,1)",}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[0],
        },
        {
            name: "应届毕业生",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(255,144,128,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[1],
        },
        {
            name: "经验1年以下",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(0,191,183,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[2]
        },
        {
            name: "经验1-3年",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(255,193,193,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[3]
        },
        {
            name: "经验3-5年",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(255,106,106,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[4]
        },
        {
            name: "经验5-10年",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(58,95,205,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[5]
        },
        {
            name: "经验10年以上",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(186,85,211,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[6]
        }
    ]
}
     mychart.setOption(option);
 }

(function(){$.ajax({
        url: "/get_companyfinance",
        type: "GET",
        dataType: "json",
        success: function (data) {
           //alert(JSON.stringify(data));
           if($("#chart7").length>0){
              chart7(data);
            }
        }
    });
})()
 function chart7(mydata){
    var mychart = echarts.init(document.getElementById("chart7"));
    var data = mydata["series_data"];
    var legendData = ['A轮', 'B轮', 'C轮','D轮及以上','上市公司','不需要融资','天使轮','未融资'];
    var valuelist = [];
    var templist = [];
    function convertNamelist(data){
        var res = [];
        for(let i=0;i<data.length;i++){
            res.push(data[i].name);
        }
        return res;
    }
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value1);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value2);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value3);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value4);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value5);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value6);
    }
    valuelist.push(templist);
    templist = [];
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value7);
    }
    valuelist.push(templist);
    for(let j = 0;j < data.length;j++){
          templist.push(data[j].value8);
    }
    valuelist.push(templist);
//    var xData = function() {
//    var data = [];
//    for (var i = 1; i < 31; i++) {
//        data.push(+i + "日");
//    }
//    return data;
//}();

option = {
    backgroundColor: "transparent",

    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 20,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: 2,
        left: 100,
        textStyle: {
            color: '#90979c',
        },
        "data": legendData
    },


    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": convertNamelist(data),
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 1,
        "end": 50,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",

        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c",
        zoomLock:true


    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 50,

        disabled:true,
        zoomLock:true
    }],
    series: [{
            name: "A轮",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(255,185,15,1)",}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[0],
        },
        {
            name: "B轮",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(255,144,128,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[1],
        },
        {
            name: "C轮",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(0,191,183,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[2]
        },
        {
            name: "D轮及以上",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(255,193,193,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[3]
        },
        {
            name: "上市公司",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(255,106,106,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[4]
        },
        {
            name: "不需要融资",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(58,95,205,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[5]
        },
        {
            name: "天使轮",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "rgba(186,85,211,1)"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[6]
        },{
            name: "未融资",
            type: "bar",
            stack: '2',
            legendHoverLink: false,
            barWidth: 32,
            itemStyle: {
                normal: {
                     color: "red"}
                    },
            label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
            "data": valuelist[7]
        }
    ]
}
     mychart.setOption(option);
 }
(function(){$.ajax({
        url: "/get_companycount",
        type: "GET",
        dataType: "json",
        success: function (data) {
           //alert(JSON.stringify(data));
           if($("#chart8").length>0){
              chart8(data);
            }
        }
    });
})()
 function chart8(mydata){
   mychart = echarts.init(document.getElementById("chart8"));
   data = mydata["series_data"];
   function convertNamelist(data){
      var res = [];
      for(let i = 0;i < data.length; i++){
          res.push(data[i].name);
      }
      return res;
   }
   function convertValue1list(data){
      var res = [];
      for(let i = 0;i < data.length;i++){
         res.push(data[i].value1);
      }
      return res;
   }
  option = {
    "backgroundColor": "transparent",
    "color": ["#3cefff"],
    "tooltip": {},
    "grid": {
        "containLabel": true
    },
    "xAxis": [{
        "type": "category",
        "data": convertNamelist(data),
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#82b0ec"
        },
        "axisLine": {
            "lineStyle": {
                "color": "#82b0ec"
            }
        },
        "axisLabel": {
            rotate: 40,
            "textStyle": {
                "color": "#82b0ec"
            }
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#82b0ec"
            },
            "formatter": "{value}"
        },
        "splitLine": {
            "lineStyle": {
                "color": "#0c2c5a"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "series": [{
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [20, 10],
        "symbolOffset": [0, -5],
        "symbolPosition": "end",
        "z": 12,
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "formatter": "{c}"
            }
        },
        "data": convertValue1list(data)
    }, {
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [20, 10],
        "symbolOffset": [0, 5],
        "z": 12,
        "data": convertValue1list(data)
    }, {
        "type": "bar",
        "itemStyle": {
            "normal": {
                "opacity": 0.7
            }
        },
        "barWidth": "20",
        "data":convertValue1list(data),
        "markLine": {
            "silent": true,
            "symbol": "none",
            "label": {
                "position": "middle",
                "formatter": "{b}"
            },

        }
    }]
}
      mychart.setOption(option);
 }

(function(){$.ajax({
        url: "/get_job",
        type: "GET",
        dataType: "json",
        success: function (data) {
           //alert(JSON.stringify(data));
           if($("#chart9").length>0){
              chart9(data);
            }
        }
    });
})()
function chart9(mydata){
  var mychart = echarts.init(document.getElementById("chart9"));
  var data = mydata["series_data"];
  function convertNamelist(data){
      var res = [];
      for(let i = 0;i < data.length; i++){
          res.push(data[i].name);
      }
      return res;
   }
   var datalist=[];
   var templist=[];
   var money = ['1-5k', '5-10k', '10-20k', '20k以上'];
    var exp = convertNamelist(data);
    for(let i=0;i<exp.length;i++){  //构造坐标数组
        for(let j=0;j<money.length;j++){
           templist.push(i);
           templist.push(j);
           if(j==0){
           templist.push(data[i].value1)
           }
           else if(j==1){
           templist.push(data[i].value2)
           }
           else if(j==2){
           templist.push(data[i].value3)
           }
           else if(j==3){
           templist.push(data[i].value4)
           }
           datalist.push(templist);
           templist=[];
        }
    }
    option = {
        backgroundColor: "transparent",
        tooltip: {},
        visualMap: {
            max:1500,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        xAxis3D: {
            name:"薪资",
            type: 'category',
            data: money
        },
        yAxis3D: {
            name:"工作经验",
            type: 'category',
            data: exp
        },
        zAxis3D: {
            name:"岗位数量",
            type: 'value'
        },
        grid3D: {
            boxWidth: 200,
            boxDepth: 80,
            axisLine: {
            lineStyle: { color: '#fff' }
        },
        axisPointer: {
            lineStyle: { color: '#fff' }
        },
        viewControl: {
            // autoRotate: true
        },
        light: {
            main: {
                shadow: true,
                quality: 'ultra',
                intensity: 1.5
            }
        }
        },
        series: [{
            type: 'bar3D',
            data: datalist.map(function (item) {
                return {
                    value: [money[item[1]], exp[item[0]], item[2]],
                }
            }),
            shading: 'lambert',

            label: {
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },

            emphasis: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        color: '#900'
                    }
                },
                itemStyle: {
                    color: '#900'
                }
            }
        }]
    }
    mychart.setOption(option);
}
(function(){$.ajax({
        url: "/get_jobsalary",
        type: "GET",
        dataType: "json",
        success: function (data) {
           //alert(JSON.stringify(data));
           if($("#chart10").length>0){
              chart10(data);
            }
        }
    });
})()
function chart10(mydata){
    var mychart = echarts.init(document.getElementById("chart10"));
    var data = mydata["series_data"];
    function convertNamelist(data){
        var res = [];
        for(let i = 0;i < data.length;i++){
            res.push(data[i].name);
        }
        return res;
     };
     function convertValuelist(data){
          var res = [];
          for(let i = 0;i < data.length;i++){
            res.push(data[i].value);
          }
          return res;
     };

    option = {
    backgroundColor: 'transparent',
    grid: {
        top: '20%',
        right: '3%',
        left: '5%',
        bottom: '16%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: convertNamelist(data),
        axisPointer: {
            type: 'line'
        },
        axisLine: {
            lineStyle: {
                color: '#272456'
            }
        },
        axisLabel: {
            margin: 20,
            color: '#fff',
            rotate: 40,
            textStyle: {
                fontSize: 13
            },
        },
    }],
    yAxis: [

    {
        axisLabel: {
            formatter: '{value}',
            color: '#fff',
        },

        axisLine: {
            show: true,
        },
        splitLine: {
            lineStyle: {
                color: '#272456'
            }
        }
    }],
    series: [{
        type: 'bar',
        data: convertValuelist(data),
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#41E1D4' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#10A7DB' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: 'rgba(0,255,225,1)',
                shadowBlur: 4,
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: '#252453',
                borderRadius: 200,
                position: ['-8', '-60'],
                distance: 1,
                formatter: [
                    '    {d|●}',
                    ' {a|{c}}     \n',
                    '    {b|}'
                ].join(','),
                rich: {
                    d: {
                        color: '#3CDDCF',
                    },
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                    b: {
                        width: 1,
                        height: 30,
                        borderWidth: 1,
                        borderColor: '#234e6c',
                        align: 'left'
                    },
                }
            }
        }
    }]
};
   mychart.setOption(option);
}
(function(){$.ajax({
        url: "/get_language",
        type: "GET",
        dataType: "json",
        success: function (data) {
           //alert(JSON.stringify(data));
           if($("#chart11").length>0){
              chart11(data);
            }
        }
    });
})()
function chart11(mydata){
    var mychart = echarts.init(document.getElementById("chart11"));
    var data = mydata["series_data"];
var xData = [],
    yData = [];
var min = 50;
data.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    backgroundColor:"transparent",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            if (prams[0].data === min) {
                return "平均薪资：0%"
            } else {
                return "平均薪资：" + prams[0].data
            }
        }
    },
    legend: {
        data: ['直接访问', '背景'],
        show: false
    },
    grid: {
        left: '6%',
        right: '0%',
        bottom: '5%',
        top: '10%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
             rotate:40,
             show: true,
             color: 'rgb(170,170,170)',
             fontSize:16
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
            name: '平均薪资',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 16

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100, 100,100,100,100,100,100,100,100,100,100,100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },

    ]
};

  mychart.setOption(option);
}
(function(){$.ajax({
        url: "/get_bigcompanycount",
        type: "GET",
        dataType: "json",
        success: function (data) {
           //alert(JSON.stringify(data));
           if($("#chart12").length>0){
              chart12(data);
            }
        }
    });
})()
function chart12(mydata){
    var mychart = echarts.init(document.getElementById("chart12"));
    var ydata = mydata["series_data"];
    function convertNamelist(data){
        var res = [];
        for(let i = 0;i < data.length;i++){
            res.push(data[i].name);
        }
        return res;
     }
var color = ["#8d7fec", "#5085f2","#e75fc3","#f87be2","#f2719a","#fca4bb","#f59a8f","#fdb301","#57e7ec","#cf9ef1"]
var xdata = convertNamelist(ydata);


option = {
     backgroundColor: "transparent",
    color:color,
    legend: {
        orient: "vartical",
        x: "left",
        top: "center",
        left: "70%",
        bottom: "0%",
        data: xdata,
        textStyle: {
            color: '#fff',
        },
        itemWidth: 8,
        itemHeight: 8,
        itemGap :16,
	    /*formatter:function(name){
	      var oa = option.series[0].data;
	      var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value + oa[5].value + oa[6].value + oa[7].value+oa[8].value + oa[9].value ;
	      for(var i = 0; i < option.series[0].data.length; i++){
              if(name==oa[i].name){
              	return ' '+name + '    |    ' + oa[i].value + '    |    ' + (oa[i].value/num * 100).toFixed(2) + '%';
              }
	      }
	    }*/

        formatter :function(name){
            return ''+name
          }
    },
    series: [{
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 2, //最小的扇区角度（0 ~ 360）
        radius: ["40%", "70%"],
        center: ["40%", "50%"],
        avoidLabelOverlap: false,
         itemStyle: { //图形样式
            normal: {
                borderColor: '#ffffff',
                borderWidth: 6,
            },
        },
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{text|{b}}\n{c} ({d}%)',
                rich: {
                    text: {
                        color: "#fff",
                        fontSize: 14,
                        align: 'center',
                        verticalAlign: 'middle',
                        padding: 8
                    },
                    value: {
                        color: "#8693F3",
                        fontSize: 24,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 24,
                }
            }
        },
        data: ydata
    }]
};
mychart.setOption(option);

setTimeout(function() {
    mychart.on('mouseover', function(params) {
        if (params.name == ydata[0].name) {
            mychart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        } else {
            mychart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: 0
            });
        }
    });

    mychart.on('mouseout', function(params) {
        mychart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    });
    mychart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    });
}, 1000);
}



function chart13(){
    var mychart = echarts.init(document.getElementById("chart13"))
    option = {
        tooltip: {
            show: true
        },
        series: [{
            name: 'Google Trends',
            type: 'wordCloud',
            size: ['100%', '100%'],
            textRotation : [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
            },
             textStyle: {
            normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                    // Random color
                    return 'rgb(' + [
                        Math.round(Math.random() * 255),
                        Math.round(Math.random() * 255),
                        Math.round(Math.random() * 255)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
            data: [
                {
                    name: "五险一金",
                    value: 10000,
                },
                {
                    name: "绩效奖金",
                    value: 6181,
                },
                {
                    name: "员工旅游",
                    value: 4386,
                },
                {
                    name: "年终奖金",
                    value: 4055,
                },
                {
                    name: "专业培训",
                    value: 2467,
                },
                {
                    name: "餐饮补贴",
                    value: 2244,
                },
                {
                    name: "带薪年假",
                    value: 1898,
                },
                {
                    name: "交通补贴",
                    value: 1484,
                },
                {
                    name: "节日福利",
                    value: 1112
                },
                {
                    name: "通讯补贴",
                    value: 965
                },
                {
                    name: "弹性工作",
                    value: 847
                },
                {
                    name: "周末双休",
                    value: 582
                },
                {
                    name: "定期体检",
                    value: 555
                },
                {
                    name: "全勤奖",
                    value: 550
                },
                {
                    name: "补充医疗保险",
                    value: 462
                },
                {
                    name: "包住宿",
                    value: 366
                },
                {
                    name: "做五休二",
                    value: 360
                },
                {
                    name: "免费班车",
                    value: 282
                },
                {
                    name: "包吃",
                    value: 273
                },
                {
                    name: "出国机会",
                    value: 265
                },
                 {
                    name: "股票期权",
                    value: 250
                },
                {
                    name: "补充公积金",
                    value: 235
                },
                {
                    name: "加班、住房、高温补贴",
                    value: 210
                }
            ]
        }]};
         mychart.setOption(option);
    }

if($("#chart13").length>0){
    chart13();
}
(function(){$.ajax({
        url: "/get_position",
        type: "GET",
        dataType: "json",
        success: function (data) {
//        alert(JSON.stringify(data["series_data"][0].name.substring(4)));
           if($("#chart15").length>0){
              chart15(data);
            }

        }
    });
})()
function chart15(mydata){
    var mychart = echarts.init(document.getElementById("chart15"));
    var data = mydata["series_data"];
    function convertNamelist(data){
        var res = [];
        for(let i = 0;i < data.length;i++){
            res.push(data[i].name);
        }
        return res;
     }
    option = {
    backgroundColor:"#0B1837",
    color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        type: "scroll",
        orient: "vartical",
        // x: "right",
        top: "center",
        right: "15",
        // bottom: "0%",
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 16,
        textStyle: {
            color: '#A3E2F4',
            fontSize: 12,
            fontWeight: 0
        },
        data: convertNamelist(data)
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        min: 40,
        max: 120,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: "#0B3E5E",
                width: 2,
                type: "solid"
            }
        }
    },
    calculable: true,
    series: [{
        type: 'pie',
        radius: ["5%", "10%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ["90%", "95%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        name: "",
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    },{
        stack: 'a',
        type: 'pie',
        radius: ['20%', '80%'],
        roseType: 'area',
        zlevel:10,
        label: {
            normal: {
                show: true,
                formatter: "{c}",
                textStyle: {
                    fontSize: 12,
                },
                position: 'outside'
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: data
    }, ]
}
   mychart.setOption(option);
}
(function(){$.ajax({
        url: "/get_industryinfo",
        type: "GET",
        dataType: "json",
        success: function (data) {
//        alert(JSON.stringify(data["series_data"][0].name.substring(4)));
           if($("#table2-box").length>0){
              ranking_box(data);
            }
        }
    });
})()
function ranking_box(mydata){
    data = mydata["series_data"];
     //添加第一行标题
    $("#table2-box").append("<li></li>");
    var namelist = ["行业","主要城市","平均公司规模","平均薪资"]
    for(let i = 0;i < namelist.length;i++){
        $("#table2-box").find("li").eq(0).append("<p>"+namelist[i]+"</p>");
    }
    //添加列表信息
    for(let i = 0;i < data.length;i++){
        $("#table2-box").append("<li></li>");
        $("#table2-box").find("li").eq(i+1).append("<p>"+data[i].job+"</p");
        $("#table2-box").find("li").eq(i+1).append("<p>"+data[i].country+"</p");
        $("#table2-box").find("li").eq(i+1).append("<p>"+data[i].scale+"</p");
        $("#table2-box").find("li").eq(i+1).append("<p>"+data[i].salary+"</p");
    }
}

(function(){$.ajax({
        url: "/get_expsalary",
        type: "GET",
        dataType: "json",
        success: function (data) {
//        alert(JSON.stringify(data["series_data"][0].name.substring(4)));
           if($("#table-box").length>0){
             $("#myselect").change(function(){
             //薪水排名
             if($(this).children("option:selected").val()=="salary"){
                $("#table-box li").remove();
                table_box(data["series_data"].sort(function(a,b){
                  return b.salaryExpect-a.salaryExpect;
              }));
             }
             //经验排名
             if($(this).children("option:selected").val()=="exp"){
                $("#table-box li").remove();
                table_box(data["series_data"].sort(function(a,b){
                  var patt = /^[0-9]/;
                  if(!patt.test(b.exp)){  //正则判断首字母是否为数字
                      b.exp="0"+b.exp;
                  }
                  if(!patt.test(a.exp)){
                      a.exp="0"+a.exp;
                  }
                  return parseFloat(b.exp)-parseFloat(a.exp);
              }));
             }
             //学历排名
             if($(this).children("option:selected").val()=="edu"){
                $("#table-box li").remove();
                table_box(data["series_data"].sort(function(a,b){
                  var edulist=["大专","本科","硕士","博士"];
                  if(edulist.indexOf(a.edu)>-1){
                      a.edu=edulist.indexOf(a.edu);
                  }
                  if(edulist.indexOf(b.edu)>-1){
                      b.edu=edulist.indexOf(b.edu);
                  }
                  return b.edu-a.edu;
              }));
             }
         })
             //默认经验排名
             table_box(data["series_data"].sort(function(a,b){
                  var patt = /^[0-9]/;
                  if(!patt.test(b.exp)){  //判断首字母是否为数字
                      b.exp="0"+b.exp;
                  }
                  if(!patt.test(a.exp)){
                      a.exp="0"+a.exp;
                  }
                  return parseFloat(b.exp)-parseFloat(a.exp);
              }));
            }
        }
    });
})()
function table_box(data){
     //添加第一行标题
    $("#table-box").append("<li></li>");
    var namelist = ["经验要求","学历","期望薪水(千)"]
    for(let i = 0;i < namelist.length;i++){
        $("#table-box").find("li").eq(0).append("<p>"+namelist[i]+"</p>");
    }
    //添加列表信息
    for(let i = 0;i < data.length;i++){
        if(data[i].exp.substring(0,1)=="0"){
            data[i].exp=data[i].exp.substring(1); //将首字符0去掉
        }
        var edulist=["大专","本科","硕士","博士"];
        var index = data[i].edu;
        if(/[0-3]/.test(index)){
            data[i].edu=edulist[index];//将学历的值复原
        }

        $("#table-box").append("<li></li>");
        $("#table-box").find("li").eq(i+1).append("<p>"+data[i].exp+"</p");
        $("#table-box").find("li").eq(i+1).append("<p>"+data[i].edu+"</p");
        $("#table-box").find("li").eq(i+1).append("<p>"+data[i].salaryExpect.toFixed(3)+"</p");
    }

}
////关注功能
$(function(){
    $.ajax({
        url:"/get_attention",
        type:"GET",
        dataType:"json",
        success:function(data){
             var mydata = data["series_data"];
             //将标题添加到我的关注里面
             if($(".mycontainer .attention-box").find(".attention-list").length>0){
                 for(let i=0;i<mydata.length;i++){
                 $(".mycontainer .attention-box").find(".attention-list").append("<li>"+mydata[i].topicname+"</li>")
             }
             }
             var topiclist=[];
             for(let i=0;i<mydata.length;i++){
                 topiclist.push(mydata[i].topicname);
             }
             for(let i=0;i<$(".alltitle").length;i++){
                 $(".alltitle").eq(i).append("<button id='cancel'>取关</button><button id='att'>关注</button>");
                 var len = $(".alltitle").eq(i).text().length;
                 if(topiclist.indexOf($(".alltitle").eq(i).text().substring(0,len-4))>-1){
                     $(".alltitle").eq(i).find("#att").hide();
                     $(".alltitle").eq(i).find("#cancel").show();
                 }
                 else{
                     $(".alltitle").eq(i).find("#cancel").hide();
                     $(".alltitle").eq(i).find("#att").show();
                 }
                 attention($(".alltitle"),i,len);
                 cancel_attention($(".alltitle"),i,len)
             }
              tuijian();

    }

})
})

function attention(title,i,len){
       title.eq(i).find("#att").click(function(){
               var data = {"topicname":$(this).parent().text().substring(0,len-4)}
               var _this = this;
               $.ajax({
                    url: "/post_attention",
                    type: "POST",
                    data:JSON.stringify(data),
                    contentType:"application/json;Charset=UTF-8",
                    success: function (data) {
                        if(data=="ok"){
                            alert("关注成功");
                            $(_this).hide();
                            $(_this).parent().find("#cancel").show();
                        }
                        else{
                            alert("关注失败");
                        }
                    }
                });
        })
}

function cancel_attention(title,i,len){
       title.eq(i).find("#cancel").click(function(){
               var data = {"topicname":$(this).parent().text().substring(0,len-4)}
               var _this = this;
               $.ajax({
                    url: "/post_cancel",
                    type: "POST",
                    data:JSON.stringify(data),
                    contentType:"application/json;Charset=UTF-8",
                    success: function (data) {
                        if(data=="ok"){
                            alert("取消成功");
                            $(_this).hide();
                            $(_this).parent().find("#att").show();
                        }
                        else{
                            alert("取消失败");
                        }
                    }
                });
        })
}


function tuijian(){
    $.ajax({
        url: "/get_tuijian",
        type: "GET",
        dataType:"json",
        success: function (data) {
             var mydata = data["series_data"];
             //将推荐添加到相关推荐里面
             if($(".mycontainer .tuijian-box").find(".tuijian-list").length>0){
                 for(let i=0;i<mydata.length;i++){
                 $(".mycontainer .tuijian-box").find(".tuijian-list").append("<li>"+mydata[i].tuijian+"</li>")
             }
             }
        }
    });
}