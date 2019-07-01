(function(){$.ajax({
        url: "/get_people",
        type: "GET",
        dataType: "json",
        success: function (data) {
//        alert(JSON.stringify(data["series_data"][0].name.substring(4)));
           if($("#chart1").length>0){   //如果存在#chart1
              chart1(data);
            }
            if($("#chart2").length>0){
              chart2(data);
            }
        }
    });
})()
function chart1(mydata){
   mychart = echarts.init(document.getElementById("chart1"));
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
                fontSize: '16',
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
                fontSize: '16',
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
                        fontSize: '16',
                    }
                }
            },
            barWidth: 12,
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
            barWidth: 20,
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
            barWidth: 24,
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
            symbolSize: 35,
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
     // alert(JSON.stringify(data["series_data"][0].name));
           if($("#chart3").length>0){
              chart3(data);
            }

        }
    });
})()////
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

    yAxis: {
        axisLabel: {
            show: false,
            formatter: function(v) {
                var _v = (v / _max * 100).toFixed(0);
                return _v == 0 ? _v : _v + '%';
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    },
    xAxis: [{
        data: y_data,
        axisLabel: {
            fontSize: 16,
            color: '#fff'

        },
        axisLine: {
            show: false
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
        roam: false,
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
                    var colorList = ['#C1232B','#FCCE10','#E87C25','#60C0DD','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B', '#D7504B'];
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
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: 2,
        left: 120,
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

