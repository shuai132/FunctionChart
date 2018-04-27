# FunctionChart
基于ECharts的一个绘制函数图像的小工具

## 用法：
只需在data.js中定义如下数据即可：
```javascript
colorDafult = '#2B2B2B';            // 默认颜色
myData = [
    {
        color:'#RGB',               // 可选 当前line的颜色 默认用colorDafult
        line:[
            {
                func:function(x) {
                    return x * x;
                },
                x1:-10,             // x范围左
                x2:10,              // x范围右
                num:100             // 可选 绘点个数(必须>=2) 默认是2即只计算x左右两个端点值
            },
            //...                   // 在这里添加新的x范围对应的函数 它是分段函数的一段 所以要求同一个line中每段中的x1、x2不可交叉
        ]
    },
    //...                           // 在这里添加新的line
];
```

然后用浏览器打开index.html即可。
