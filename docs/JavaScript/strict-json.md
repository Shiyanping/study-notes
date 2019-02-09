# 严格模式及 JSON 对象

## 1. 严格模式

特点：

- 未定义的变量不会默认定义成全局变量

- 重复的对象字面量禁止重复定义

- this 的值为 null 或者 undefined 时，不会分配给 window

- 禁止使用`delete`删除变量或者函数

- 不能使用保留关键字（public 等）

- 无法在语句或者块中声明函数

  例：在`for`循环中声明`function`

- 同一个函数定义重复的形参

- 不能使用`eval`，`arguments`定义变量，函数

- 不要修改`arguments`

- 不能使用`with`

- 不能使用`arguments.callee`

## 2. JSON 对象

JSON 对象提供了`JSON.stringify`和`JSON.parse`两个方法。`JSON.stringify`可以将 JSON 对象格式化成 JSON 字符串，`JSON.parse`可以将 JSON 字符串格式化成 JSON 对象。

- JSON.stringify

第一个参数具体格式化的对象，第二个参数可以写一个函数，对 JSON 对象的值进行操作，第三个参数可以规定格式化之后空格的格数。

例：

```js
var name = {
  first: 1,
  second: 2,
  third: 3
};

var luckyName = JSON.stringify(
  name,
  function(key, value) {
    if (value == 3) {
      return undefined;
    } else {
      return value;
    }
  },
  0
);

console.log(luckyName); // {first: 1, second: 2}
```
