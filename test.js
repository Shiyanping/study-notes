'use strict';
var name = '我是window的名字';

var obj = {
  name: '我是对象obj的名字',
  test: function() {
    console.log(this.name);
  }
};

var alertName = obj.test;
alertName(); // 我是window的名字
obj.test(); // 我是对象obj的名字
