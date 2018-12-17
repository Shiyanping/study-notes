# JS 核心

## this 指向问题

1. 在构造函数中使用（构造函数本身）
2. 作为对象属性时使用（调用属性的对象）
3. 作为普通函数时使用（window）
4. call，apply，bind（执行的第一个参数）

```javascript
var a = {
  name: 'A',
  fun: function() {
    console.log(this.name);
  }
};

a.fun(); //this === a
a.fun.call({ name: 'B' }); //this === { name: 'B' }
var fun1 = a.fun;
fun1(); //this === window
```

## 闭包

能够读取其他函数内部变量的函数。

作用：返回一个函数出去，可以保护函数内部的变量。

变量不会被回收，需要主动进行回收（==null）.

例：

```js
function f1() {
  var N = 0;
  function f2() {
    N++;
    console.log(N);
  }
  return f2;
}
var result = f1();
result();
result();
result();
result = null; // 主动回收变量
```

## 原型链

### 构造函数内部的属性要比原型链定义的属性优先级高。

例：

```js
function test() {
  this.a = 20;
}
test.prototype.a = 30;
var q = new test();
console.log(q.a); // 20
```

上面会输出 20，因为 this 定义的属性要比 prototype 定义的优先级高。

### 面向对象编程的时候，JS 中没有类的概念，可以用函数替代

### new 一个构造函数中 constructor 实际就是对应的构造函数

例：

```js
var Car = function() {
  // constructor == Car
};

var s = new Car();
console.log(s);
```

### prototype 需要按引用传递，使用 Object.create 创建原型链的副本

传递方式：按引用传递

正确的继承要做到以下几点：

1. 拿到父类原型链上的方法
2. 不能让构造函数执行 2 次
3. 引用的原型链不能是按地址传递
4. 修正子类的 constructor

使用 call 修改 this 的值，将父类构造函数的属性继承。
例子：

```js
var Car = function(color) {
  this.color = color;
};
Car.prototype.sail = function() {
  console.log(this.color + '色15W');
};

var BMW = function(color) {
  Car.call(this, color);
};

var bmw = new BMW('red');
console.log(bmw);
```

打印对应的子类，其中属性都可以继承，但是修改了子类的 constructor。

![](media/15448765910547/15448802937355.jpg)

我们既要完成子类继承父类的方法，而且还要将子类的 constructor 进行修复。使用`Object.create`创建父类，修改创建后的 constructor，最后赋值给子类的 prototype。
例子：

```js
var Car = function(color) {
  this.color = color;
};
Car.prototype.sail = function() {
  console.log(this.color + '色15W');
};

var BMW = function(color) {
  Car.call(this, color);
};

var __pro = Object.create(Car.prototype);
__pro.constructor = BMW;
BMW.prototype = __pro;

var bmw = new BMW('red');
console.log(bmw);
```

输出结果如下，父类的属性都可以继承，并且不会修改子类的 constructor。

![](media/15448765910547/15448804336139.jpg)

## 变量及函数提升

### 变量提升

```js
console.log(a);
var a = 20;
```

上面的例子会输出 `undefined`，因为变量在定义时会进行提升，其实 JS 的引擎会解析成如下代码：

```js
var a;
console.log(a);
a = 20;
```

如果在声明变量时，没有写`var`会默认给 window 对象添加一个对应的变量。
**例：**

```js
(function() {
  var a = 20;
  var b = (c = a);
});
alert(c);
```

上面这个例子中会输出 20，因为在解析时，会解析成如下代码：

```js
(function() {
  var a = 20;
  var b = 20;
  c = 20;
});
alert(c);
```

因为在定义 c 的同时没有书写`var`，所以默认会给 window 下添加一个 c。

### 函数提升

函数也会进行变量提升，并且函数提升要优于变量提升，函数会最先声明。
