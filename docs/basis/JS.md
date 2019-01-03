# 你不知道的 JavaScript

## 数据类型

基本类型：`Undefined`，`Null`，`Boolean`，`String`，`Number`

引用类型：`Object`，`Array`，`Date`，`Function`，`RegExp`

### 对象

对象的 api 除了我们常用的以外，其实 ES5 中还添加很多额外的方法。

- 获取到对象的 key：`Object.keys()`
- 创建一个`__proto__`等于现有对象的新对象：`Object.create()`
- 冻结对象：`Object.freeze()`
- `Object.defineProperty()`

### 数组

数组原型链上包含的方法：

- `Array.prototype.indexOf`：检查数组中是否包含某一项
- `Array.prototype.lastIndexOf`：从末尾开始检查数组中是否包含某一项
- `Array.prototype.some`
- `Array.prototype.every`
- `Array.prototype.forEach`：将当前数组按照规则进行格式化，修改当前数组
- `Array.prototype.map`：返回一个新的数组
- `Array.prototype.filter`：过滤数组，返回结果为`true`的项汇集成新的数组
- `Array.prototype.reduce`

判断是不是数组的两种方法：

- `Array.isArray`
- `Object.prototype.toString.apply(value) === '[Object Array]'`

## 参数传递

### 按值传递

基本类型都是按值传递，新创建的变量和老变量有关联，但是在创建新变量时会新开辟一个内存空间，即使修改新变量，也不会对老变量有影响。

例：

```js
function test(num) {
  num = num + 1;
  console.log('num2:', num); // num2: 2
}

var num = 1;
test(num);
console.log('num1:', num); // num1: 1
```

按值传递的类型有：String，Number，Boolean

### 按引用传递

如果新创建的对象引用了老对象，再给新对象添加属性时，会将老对象也一并修改。因为引用的地址不会发生变化，不会新开辟一个内存空间。

如果新创建的对象后续等于了`{}`，那么修改就不会影响老对象。

例：

```js
function test(obj) {
  obj.age = 18;
  console.log('新创建的对象', obj); // {name: "test", age: 18}
}

var obj = {
  name: 'test'
};
console.log('旧对象', obj); // {name: "test"}
test(obj);
console.log('被修改的旧对象', obj); // {name: "test", age: 18}
```

按引用传递的类型有：Object，Array

## this 指向问题（待完成）

### 默认绑定

说白了就是谁调用绑定谁。但是其中还有两种绑定方式，隐式绑定和显式绑定。

例：

```js
var name = '我是window的名字';

var obj = {
  name: '我是对象obj的名字',
  test: function() {
    console.log(this.name);
  }
};

var alertName = obj.test;
alertName(); // 我是window的名字，隐式绑定
obj.test(); // 我是对象obj的名字，显式绑定
```

### 显式绑定

### new 绑定

### 箭头函数

#### 隐式绑定

隐式绑定的意思就是没有调用对象，如果在非严格模式下，就指向`window`，如果在严格模式下，就是报错`Cannot read property xx of undefined`。

在调用`alertName`时因为没有调用对象，并且是在非严格模式下，所以会输出`window`的`name`。如果是在严格模式下就会报错`Cannot read property 'name' of undefined`。

例：

```js
'use strict';
var name = '我是window的名字';

var obj = {
  name: '我是对象obj的名字',
  test: function() {
    console.log(this.name);
  }
};

var alertName = obj.test;
alertName(); // Cannot read property 'name' of undefined
```

#### 显式绑定

显式绑定的意思就是有固定的对象去调用方法。

例：

```js
var obj = {
  name: '我是对象obj的名字',
  test: function() {
    console.log(this.name);
  }
};

obj.test(); // 我是对象obj的名字
```

调用`test`方法的对象是`obj`，所以`this`指向`obj`，自然就会输出`obj`的`name`了。

## 函数作用域

JS 属于函数作用域，函数内部的变量只要定义了一定能访问。

例：

```js
function test() {
  if (false) {
    var i = 100;
  }
  console.log(i); // undefined
  console.log(j); // Uncaught ReferenceError: j is not defined
}
test();
```

虽然是在判断条件中定义的变量，并且当前条件也不满足，但是在访问定义的变量时，会提示`undefined`，而不是`Uncaught ReferenceError: j is not defined`报错，充分说明了在判断条件中定义的变量，即时没有执行到判断条件中，变量也会提前声明。

在函数内部可以访问内部和外部的变量，但是函数外部不能访问内部的变量，只能访问外部的变量。

例：

```js
var m = 1000;

function test() {
  if (false) {
    var i = 100;
  }
  console.log(m); // 1000
  console.log(i); // undefined
}

test();

console.log(i); // Uncaught ReferenceError: i is not defined
```

## 变量提升和函数提升

### 变量提升

变量在任何地方定义的时候都会发生变量提升。

例：

```js
console.log(a); // undefined

var a = 2;
```

在定义`a`之前打印`a`，并不会报`Uncaught ReferenceError: i is not defined`的错，而是输出`undefined`，因为`var a = 2`会进行变量提升，会被引擎解析成如下代码：

```js
var a;

console.log(a); // undefined

a = 2;
```

首先会声明`var a`，所以在使用的时候会输出`undefined`。引擎对变量声明进行了变量提升。

`var a = 2`，javascript 引擎其实会分解成`var a`和`a = 2`两个单独的声明，第一个是编译阶段，第二个是执行阶段。

### 函数提升

函数声明和变量声明一样，在被执行前都会进行“移动”处理，“移动”到**各自作用域的最顶端**，也就是所谓的提升。

在定义函数之前使用函数，函数也会执行。

例：

```js
test();

function test() {
  var i = 1;
  console.log(i); // 1
}
```

虽然函数和变量都会提升，但是**函数提升优于变量提升**。

例：

```js
foo(); // 1

function foo() {
  console.log(1);
}

var foo = function() {
  console.log(2);
};
```

会先输出 1 而不是 2，因为引擎会解析成一下代码：

```js
function foo() {
  console.log(1);
}

var foo;

foo(); // 1

foo = function() {
  console.log(2);
};
```

`var foo` 是重复声明，所以被忽略了，因为函数声明优于变量声明。

## 闭包

简单粗暴的来讲，就是拿到了本不该属于自己的东西。

例：

```js
function test() {
  var k = 1000;
  return function() {
    return k;
  };
}

var newK = test()();

console.log(newK);
```

科学的来讲，其实就是，函数可以记住并访问所在的词法作用域时，不论函数在哪儿执行，都会产生闭包。`test`函数中`return`出来的`function`能够记住自己所在的函数作用域，并且能够访问自己所在函数作用域中的变量，这样其实就形成了闭包。

其实在 JS 开发中处处都会用到闭包，只不过我们没有仔细去发现。

闭包在开发中可以用来实现模块，模块的两个主要特征：

- 为了创建内部作用域而调用一个包装函数
- 包装函数返回值必须至少包括一个对内部函数的引用

## 原型链（待完成）

### 原型链继承

正确的继承要做到以下几点：

1. 拿到父类原型链上的方法
2. 不能让构造函数执行 2 次
3. 引用的原型链不能是按地址传递
4. 修正子类的 constructor

## 严格模式

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

## JSON 对象

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
