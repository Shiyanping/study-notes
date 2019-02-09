# 作用域及闭包

JS 中的三座大山其中一座，作用域和闭包，作用域和闭包的知识在前端面试中，很容易被问到，也很容易掉坑，其实作用域中不好分辨的主要是 this 指向，函数变量提升的内容。

## 1. this 指向问题

this 既不指向函数本身，也不指向函数的词法作用域，this 是在运行时进行绑定的，不是在编写时绑定，要看 this 具体指向什么，需要看运行时的各种环境。主要的 this 绑定环境有以下几种：

### 1.1 默认绑定

默认绑定的意思就是在调用函数时，函数之前没有具体的调用对象，如果在非严格模式下，就默认指向`window`，如果在严格模式下，就是报错`Cannot read property xx of undefined`。

非严格模式：

```js
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); // 2
```

严格模式：

```js
function foo() {
  'use strict';
  console.log(this.a);
}

var a = 2;
foo(); // TypeError: Cannot read property 'a' of undefined
```

严格模式下，只是针对函数是否运行在严格模式下，并不是取决于函数的调用位置。

如：

```js
function foo() {
  console.log(this.a);
}
var a = 2;
(function() {
  'use strict';
  foo(); // 2
})();
```

TODO

### 1.2 隐式绑定

说白了就是谁调用绑定谁。意思就是有固定的对象去调用方法，这个在严格模式下和非严格模式下是没有区别的。

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

### 1.3 显式绑定

call，apply，bind

call 和 apply 作用是很像的，call 需要将所有的参数展开传递，apply 需要将参数行程一个数组进行传递。

bind 会返回一个新的函数，新函数的作用域 this 指向绑定的对象。

### 1.4 new 绑定

当使用 new 操作符去实例化一个构造函数时，this 指向构造函数本身。

使用 new 操作符生成一个对象主要包含以下四个过程：

1. 创建一个新对象
2. this 指向这个新对象
3. 执行代码给 this 赋值
4. return this

**例：**

```js
function Foo(name) {
  this.name = name;
  // return this;  // 本身会执行这一步
}

var f = new Foo('syp');
console.log(f.name); // 输出：syp
```

### 1.4 箭头函数

`() => {}`，箭头函数会生成了一个词法作用域，this 指向当前作用域。

## 2. 作用域

JS 属于函数作用域，只要在函数内部定义的变量，在函数内部一定能访问。

在 ES6 之前没有块级作用域，在 ES6 之后存在了块级作用域，使用`let`，`const`定义的变量或者对象，都会存在块级作用域。

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

## 3. 变量提升和函数提升

### 3.1 变量提升

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

### 3.2 函数提升

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

var foo; // 被忽略了

foo(); // 1

foo = function() {
  console.log(2);
};
```

`var foo` 是重复声明，所以被忽略了，因为函数声明优于变量声明。

## 4. 闭包

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

科学的来讲，其实就是，函数可以记住并访问所在的词法作用域时，不论函数在哪儿执行，都会产生闭包。

上面的例子中 test 函数 return 出来了一个 function，return 出来的 function 能够记住自己所在的函数作用域，并且能够访问自己所在函数作用域中的变量，这样其实就形成了闭包。

其实在 JS 开发中处处都会用到闭包，只不过我们没有仔细去发现。

闭包在开发中可以用来实现模块，模块的两个主要特征：

- 为了创建内部作用域而调用一个包装函数
- 包装函数返回值必须至少包括一个对内部函数的引用
