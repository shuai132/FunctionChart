//
// Created by liushuai on 2018/4/27.
//

var xDatas  = [];
var yDatas  = [];
var xyDatas = [];
var colors  = [];

myData.forEach(function (v) {
    var xData   = [];
    var yData   = [];
    var xyData  = [];

    v.line.forEach(function (v) {
        var func = v.func;
        var x1 = v.x1, x2 = v.x2;
        var num = v.num?v.num:2;

        var div = (x2 - x1)/(num - 1);

        for(var i=x1; i<=x2; i+=div) {
            xData.push(i);
            yData.push(func(i));
            xyData.push([i, func(i)]);
        }
    });
    xDatas.push(xData);
    yDatas.push(yData);
    xyDatas.push(xyData);
    colors.push(v.color?v.color:colorDafult);
});

console.log("xDatas:", xDatas);
console.log("yDatas:", yDatas);
console.log("xyDatas:", xyDatas);

var mySeries = [];
for (var i=0; i<myData.length; i++) {
    var data = xyDatas[i];
    mySeries.push({
        data:data,
        type:'line',
        lineStyle: {
            color: colors[i]
        }
    });
}

console.log("mySeries:", mySeries);

option = {
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    series: mySeries
};
