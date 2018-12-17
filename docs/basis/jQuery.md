# jQuery 解读

## jQuery 基础架构

## jQuery.fn 解读

`$.extend` 与 `$.fn.extend`的差别

`$.extend`会给`jQuery`添加方法

`$.fn.extend`会给`jQuery`的原型链挂载方法

## jQuery 的链式开发

```js
var example = {
  a: function() {
    console.log('first');
    return this;
  },
  b: function() {
    console.log('second');
    return this;
  },
  c: function() {
    console.log('third');
  }
};
example
  .a()
  .b()
  .c();
```

在每个方法执行完成后返回当前大的对象，使得下一个方法调用时，this 的指向还是当前大对象。

## 解析.val()实现原理（待补充）

`$('.test').val()`，如果没有参数，会默认读取`test`的内容，如果`.val('testVal')`中传参，则会将传入的参数赋值给`test`内容中。

知识点：

Q：如何获取形参个数和实参个数
A：

```js
function test(a) {
  console.log('形参个数：' + test.length);
  console.log('实参个数：' + arguments.length);
}
test();
```

## 短路表达式

```js
var a;
if (a) {
  var foo = a;
} else {
  var foo = b;
}
```

上面的式子其实可以写成一个短路表达式

```js
var foo = a || b;
```