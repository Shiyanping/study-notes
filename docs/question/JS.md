# JavaScript 习题集

知识点：

- `()`可以进行计算。
- 暂时性死区，在`let`定义之前使用，获取不到变量。
- 块级作用域

#### 1. 请写出弹出值，并解释为什么

```js
alert(a); // // function a() {alert(10)}
a(); // 10
var a = 3;
function a() {
  alert(10);
}
alert(a); // 3
a = 6;
a(); // 报错：a is not a function
```

**答：** 函数和变量都会提升，而且函数提升要优于变量提升，提升之后的应该是下面这样：

```js
function a() {
  alert(10);
}
var a; // 忽略
alert(a); // function a() {alert(10)}
a(); // 10
a = 3;
alert(a); // 3
a = 6;
a(); // a is not a function
```

#### 2. 请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么

```js
this.a = 20;

var test = {
  a: 40,
  init: () => {
    console.log(this.a); // 20
    function go() {
      // this.a = 60;
      console.log(this.a); // 50
    }

    go.prototype.a = 50;
    return go;
  }
};

//var p = test.init();

//p();
new (test.init())(); // 20,50
```

**未取消注释的解答：**

`test.init()`在执行时会输出一个`this.a`，其中的 this 因为使用的箭头函数，所以 this 指向对象所绑定的最高作用域，也就是 window，自然就输出`window.a = 20`，在执行`test.init()`之后会返回一个函数 go，new 函数 go，并且立即执行，会输出函数 go 中的 a，也就是 50。

**取消注释之后的代码：**

```js
this.a = 20;

var test = {
  a: 40,
  init: () => {
    console.log(this.a);
    function go() {
      this.a = 60;
      console.log(this.a);
    }
    go.prototype.a = 50;
    return go;
  }
};

var p = test.init(); // 20（箭头函数同未注释的解答一样）
p(); // 60 （输出go的this.a）
new (test.init())(); // 60（前面执行了p函数，所以将window的a也改变成了60）,60
```

**取消注释后的解答：**

一个构造函数中定义变量的方法有两种，一个是`this.a`，一个是`go.prototype.a`，但是使用 this 定义（构造函数）的要优于 prototype 定义（原型链）的。

#### 3. 请写出如下点击 li 的输出值，并用三种办法正确输出 li 里的数字

```js
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>

<script type="text/javascript">

var list_li = document.getElementsByTagName("li");

for (var i = 0; i < list_li.length; i++) {
    list_li[i].onclick = function() {
        console.log(i);
    }
}
</script>
```

**答：** 点击每个 li 都会输出 6。因为在点击的时候，其实 for 循环中定义的 i 已经提升，并且 for 循环已经执行完了，i 其实已经变成 6 了，所以点击哪个 li 都是 6

**解决办法 1：**

```js
var list_li = document.getElementsByTagName('li');

for (var i = 0; i < list_li.length; i++) {
  (function(i) {
    list_li[i].onclick = function() {
      console.log(i + 1);
    };
  })(i);
}
```

使用闭包将 i 进行回传。

**解决办法 2：**

```js
var list_li = document.getElementsByTagName('li');

for (let i = 0; i < list_li.length; i++) {
  list_li[i].onclick = function() {
    console.log(i + 1);
  };
}
```

使用 let 定义块级作用域，防止变量 i 进行提升。

**解决办法 3：**

```js
var list_li = document.getElementsByTagName('li');

for (var i = 0; i < list_li.length; i++) {
  list_li[i].onclick = function() {
    console.log(this.innerHTML);
  };
}
```

#### 4. 写出输出值，并解释为什么

```js
function test(m) {
  m = { v: 5 };
  // m.v = 5  // 这样就会对引用地址进行修改
}

var m = { k: 30 };
test(m);
alert(m.v); // undefined
```

**答：** 函数传递的参数 m 和外部的 m 并不是同一个参数，只不过是引用了同一个地址而已。函数内部给参数 m 进行了重写，并不会影响他们的引用地址，所以也就不会对外部的 m 进行影响。

#### 5. 请写出代码执行结果，并解释为什么

```js
function yideng() {
  console.log(1);
}

(function() {
  if (false) {
    function yideng() {
      console.log(2);
    }
  }

  yideng();
})();

// 报错：yideng is not a function
```

**答：** 在立即执行函数中，访问不到外部的函数，在内部虽然函数 yideng 会提升，但是不会走到判断 false 中，所以没有赋值，总体来说，就是 yideng 的值应该是`undefined`，所以会报 yideng 不是一个函数的错误。

#### 6. 请用一句话算出 0-100 之间学生的学生等级，如 90-100 输出为 1 等生、80-90 为 2 等 生以此类推。不允许使用 if switch 等

```js
var grade = 85;
alert(Math.ceil((100 - grade) / 10) + '等生');
```

#### 7. 请用一句话遍历变量 a。(禁止用 for 已知 var a = “abc”)

```js
var a = 'abc';
//ES6
Array.from(a).forEach(item => console.log(item));
//ES5
a.split('').forEach(function(item) {
  console.log(item);
});
```

#### 8. 请在下面写出 JavaScript 面向对象编程的混合式继承。并写出 ES6 版本的继承。  要求:汽车是父类，Cruze 是子类。父类有颜色、价格属性，有售卖的方法。Cruze 子 类实现父类颜色是红色，价格是 140000,售卖方法实现输出如下语句:将 红色的 Cruze 买给了小王价格是 14 万

**答：**

```js
```

#### 9. 请你写出如何利用 EcmaScript6/7(小 Demo)优化多步异步嵌套的代码

**答：**

```js
```

#### 10. 写出如下代码执行结果，并解释为什么

```js
var length = 10;
function fn() {
  console.log(this.length);
}
var yideng = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};
yideng.method(fn, 1);
```

**答：** 输出 10，2。在调用`yideng.method(fn, 1);`时，将 fn 函数传入到 method 方法中，直接执行`fn()`没有具体指向，所以指向 window，fn 函数中的`this.length`输出 10；在执行`arguments[0]()`时，其实还是执行 fn 函数，只不过`this`的指向发生了变化。

**tips：** 在调用函数时，`arguments`有两种情况

- 如果函数以 `()` 的方式调用，那么 `arguments` 就是由所有参数组成的伪数组
- 如果函数以 `.call()` 的方式调用，那么 `arguments` 指的就是第二个及之后的参数组成的伪数组

所以在上面的例子中，`arguments[0]`是函数 fn，执行`arguments[0]()`之后，`this.length`输出的是`arguments`所有参数组成伪数组的长度，所以是 2。
