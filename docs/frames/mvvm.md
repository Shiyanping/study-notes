# MVVM

## 1. jQuery 与 vue 的区别

- vue 是数据驱动视图，只关心数据变化，DOM 操作被封装。但是 jquery 属于直接操作 dom
- vue 数据和视图进行分离（解耦，开放封闭原则），jquery 直接操作 dom 修改视图

> 开放封闭原则：对扩展开放，对修改封闭

## 2. 如何理解 MVVM

- View 通过事件绑定影响 Model
- Model 通过数据绑定影响 View
- ViewModel 属于中间桥梁，MVVM 不算创新，是基于 MVC 发展来的，但是 ViewModel 属于创新

## 3. MVVM 三要素

### 3.1 响应式

vue 中主要通过使用 Object.defineProperty 将 data 的属性代理到 vm 上

- 什么是响应式

通过 JS 修改 data 数据，可以对显示视图进行相应的修改，在不需要直接操作 DOM 的前提下，改变视图的显示效果

- [Object.defineProperty](<https://msdn.microsoft.com/library/ff800817(v=vs.94).aspx>)

例：使用 Object.defineProperty 给一个对象进行读取和赋值的操作

```javascript
var obj = {};
var _name = 'yanping';
Object.defineProperty(obj, 'name', {
  get: function() {
    console.log('get');
    return _name;
  },
  set: function(newValue) {
    console.log('set');
    _name = newValue;
  }
});
console.log(obj.name); // get
obj.name = 'shi'; // set
```

- 使用 Object.defineProperty 将 data 代理到 vm 上

例：

```javascript
var vm = {};
var data = {
  name: 'shi',
  age: 20
};
var key;
for (key in data) {
  (function(key) {
    Object.defineProperty(vm, key, {
      get: function() {
        console.log('get');
        return data[key];
      },
      set: function(newValue) {
        console.log('set');
        data[key] = newValue;
      }
    });
  })(key);
}
```

### 3.2 模板引擎、渲染

#### 3.2.1 什么是模板

- 本质是字符串
- 可以书写逻辑，如 `v-if`, `v-for` 必须用 JS 才能实现
- 与 html 格式很想，但不是 html，可以添加 js 变量
- 最终会通过 js 函数（render 函数）生成 vnode，然后通过 `_update`函数转换成 html 并渲染

#### 3.2.2 模板如何生成及渲染

vue 中会有 render 函数（在 vue 源码中搜索 code.render），根据 html 模板生成 JS 模板（vnode），还会有 `_update` 函数，将生成的 vnode 添加到 html 中。

例：

- vue 中的 `_c` 方法就类似之前我在[虚拟 dom 那篇文章](https://juejin.im/post/5b5474f3e51d45199358ac1e)中提到的 snabbdom 中的 `h` 函数，生成 vnode

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="vue.js"></script>
</head>

<body>
  <div id="container">
    <p>{{price}}</p>
  </div>
  <script>
    var vm = new Vue({
      el: "#container",
      data: {
        price: 100
      }
    })

    // 手写 vue 中的 render函数
    function render() {
      with (this) {   // this -> vm
        return _c('div', {
          attrs: {
            id: 'container'
          }
        }, [
            _c('p', [_v(_s(price))])
          ])
      }
    }
  </script>
</body>

</html>
```

- vue 中还有一个 `_update` 方法，可以自行去源码中搜索，`_update` 类似 snabbdom 中的 `patch` 函数，将生成 vnode 输出到页面中

![](http://cdn.jinyueyue.cn/15322516539230.jpg)

## 4. vue 的整个实现流程

1. 解析模板成 render 函数
   1. with 的用法，在自己开发的时候尽量不要使用，可自行百度
   2. 模板中的所有信息都被 render 函数包含
   3. 模板中用到的 data 中的属性，都变成了 JS 变量
   4. 模板中的 `v-model` `v-for` `v-on` 都变成了 JS 逻辑
   5. render 函数返回 vnode
2. 响应式开始监听
   1. Object.defineProperty
   2. 将 data 的属性代理到 vm 上
3. 首次渲染，显示页面，且绑定依赖
   1. 初次渲染，执行 updateComponent ，执行 `vm._render()`
   2. 执行 render 函数，会访问到 vm 下的 JS 变量（也就是 data 中的属性）
   3. 会被响应式的 get 方法监听
   4. 执行 updateComponent，会走到 vdom 的 patch 方法中
   5. patch 将 vnode 渲染成 DOM，初次渲染成功
4. data 属性变化，触发 rerender
   1. 修改属性，被响应式的 set 监听到
   2. set 中执行 updateComponent
   3. updateComponent 重新执行 `vm._render()`
   4. 生成的 vnode 通过 patch 函数和 prevVnode 进行对比
   5. 将变化的部分进行修改然后渲染到页面中

Q：为什么在响应式的时候需要监听 get
A：避免不必要的重复渲染，data 中有些属性时不会被用到的，如果不用到的属性，那就没有必要进行 set，用不到的属性是不会触发 get 的，只有 get 监听到的属性才能触发 set。
