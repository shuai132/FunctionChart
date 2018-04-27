//
// Created by liushuai on 2018/4/27.
//

colorDafult = '#2B2B2B';
myData = [
    {
        color: '#141414',
        line: [
            {
                func:function(x) {
                    return x*x;
                },
                x1:-100,
                x2:100,
                num:100
            }
        ]
    },
    {
        color: '#F08080',
        line: [
            {
                func:function(x) {
                    return 10*x;
                },
                x1:-100,
                x2:0
            },
            {
                func:function(x) {
                    return 50*x;
                },
                x1:0,
                x2:100
            }
        ]
    }
];
