# virtual dom(虚拟 DOM)

## 什么是 vdom

- 统称为虚拟 DOM，不是真正的 DOM
- 使用 JS 模拟 DOM 结构
- DOM 变化的对比，放在 JS 层来做（图灵完备语言）
- 使用 vdom 提高重绘性能

> 图灵完备的语言：处理逻辑，实现算法，能够使用判断，使用递归等处理算法的语言

## 为什么使用 vdom

- DOM 操作比较昂贵，会影响页面性能

例： jquery 渲染一个表格，然后修改表格里面的内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>jquery 模拟虚拟 dom</title>
  </head>

  <body>
    <div id="container"></div>
    <button id="change-btn">change</button>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script>
      var data = [
        {
          name: '张三',
          age: 20,
          address: '北京'
        },
        {
          name: '李四',
          age: 21,
          address: '上海'
        },
        {
          name: '王麻子',
          age: 30,
          address: '南京'
        }
      ];

      // 渲染函数
      function render(data) {
        var $container = $('#container');
        // 清空容器
        $container.html('');

        // 拼接table
        var $table = $('<table>');
        $table.append($('<tr><td>name</td><td>age</td><td>address</td></tr>'));
        data.forEach(value => {
          $table.append($('<tr><td>' + value.name + '</td><td>' + value.age + '</td><td>' + value.address + '</td></tr>'));
        });

        // 渲染到页面,当元素添加完成之后再将元素渲染到页面中，有助于提供性能
        $container.append($table);
      }

      $('#change-btn').on('click', function() {
        data[1].age = 23;
        data[2].address = '深圳';
        // 再次渲染
        render(data);
      });

      // 初次渲染，页面加载完之后立刻执行
      render(data);
    </script>
  </body>
</html>
```

在根据数据生成表格时或者修改了表格内容时，会将承载表格的容器彻底清空，然后重新将生成好的表格 append 其中，这样操作对于页面性能上损耗很大，在做大项目时，频繁的 dom 操作会使项目运行时越来越卡，所以衍生出了 vdom

## vdom 如何应用

### snabbdom 介绍

vue2.0 以上中 vdom 就是借鉴 snabbdom 实现的

### snabbdom 核心 API

- h 函数，模拟 vnode，传三个参数

  1.  第一个参数 dom 的类型及名称
  2.  第二个参数 dom 需要添加的内敛样式、绑定的事件、内置属性
  3.  第三个参数 dom 的内容

- patch 函数，两个参数，两种使用方式
  1.  第一种使用方式是给空白的 dom 添加元素
      1.  第一个参数是空白的节点
      2.  第二个参数是 h 函数生成需要添加的元素
  2.  第二种使用方式是给原有的 dom 更新内容
      1.  第一个参数是 h 函数生成旧的节点
      2.  第二个参数是 h 函数新生成的节点，用于更新老的节点

### snabbdom 案例

例：使用 snabbdom 重写上面 jQuery 渲染 table 的例子

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>snabbdom</title>
  </head>

  <body>
    <div id="container"></div>
    <button id="btn-change">change</button>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.1/snabbdom.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.1/snabbdom-class.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.1/snabbdom-props.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.1/snabbdom-style.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.1/snabbdom-eventlisteners.js"></script>
    <script src="https://cdn.bootcss.com/snabbdom/0.7.1/h.js"></script>
    <script>
      var data = [
        {
          name: '姓名',
          age: '年龄',
          address: '地址'
        },
        {
          name: '张三',
          age: 20,
          address: '北京'
        },
        {
          name: '李四',
          age: 21,
          address: '上海'
        },
        {
          name: '王麻子',
          age: 30,
          address: '南京'
        }
      ];
      var snabbdom = window.snabbdom;

      // 定义 patch
      var patch = snabbdom.init([snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_eventlisteners]);

      // 定义 h
      var h = snabbdom.h;

      var container = document.getElementById('container');
      var changeBtn = document.getElementById('btn-change');

      var vnode;
      function render(data) {
        var newVnode = h(
          'table',
          {},
          data.map(function(item) {
            var tds = [];
            var i;
            for (i in item) {
              if (item.hasOwnProperty(i)) {
                tds.push(h('td', {}, item[i]));
              }
            }
            return h('tr', {}, tds);
          })
        );

        /**
         * 判断是否为初次渲染 vdom
         * 如果是第一次则将 vnode 添加到空白元素
         * 如果不是第一次则将新生成的 vnode 与旧的 vnode 进行对比，修改变化的地方
         */
        if (vnode) {
          patch(vnode, newVnode);
        } else {
          patch(container, newVnode);
        }

        // 每次渲染完之后将生成的 vnode 赋值给 oldVnode
        vnode = newVnode;
      }

      changeBtn.addEventListener('click', function() {
        data[1].age = 30;
        data[2].address = '深圳';
        render(data);
      });

      // 初次渲染
      render(data);
    </script>
  </body>
</html>
```

使用 snabbdom 创建 vdom，点击修改时，通过新生成的 vdom 去对比老的 vdom，将不同的地方进行替换，并不会将整个大元素清空，然后重新渲染，只是局部修改，有效的减少了 dom 操作，提升性能

## diff 算法

### diff 的用处

- linux 中的 diff 命令，查看两个文本文件的不同
- git diff 对比两个文件的不同
- vue，react 中 diff 算法对比 vdom 中的不同

### vdom 中为什么应用 diff 算法

因为 DOM 操作是“昂贵”的，所以要尽量减少 DOM 操作，找出本次 DOM 必须更新的节点来更新，其他的不更新，“找出”的过程，就需要 diff 算法

### diff 算法在 vdom 中实现原理

`snabbdom.js` 中的 patch 函数就是执行了 diff 算法

- `patch(dom, vnode)` 将生成的 vdom 添加到空白的 dom 元素中

使用简单的代码实现`patch(dom, vnode)`，**只是简单的实现思路，并不能直接运行**。

```javascript
// vnode 的数据模型
// vnode = {
//   "tag": 'ul',
//   "attrs": {"id": 'list'},
//   "children": [{
//     "tag": 'li',
//     "attrs": { "className": 'item'},
//     "children": ['item1']
//   }, {
//     "tag": 'li',
//     "attrs": { "className": 'item'},
//     "children": ['item2']
//   }]
// }

function createElement(vnode) {
  var tag = vnode.tag;
  var attrs = vnode.attrs || {};
  var children = vnode.children || [];
  if (tag == null) {
    return null;
  }

  // 创建真实的 DOM 元素
  var elem = document.createElement(tag);

  // 属性
  var attrName;
  for (attrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      // 给 elem 添加属性
      elem.setAttribute(attrName, attrs[attrName]);
    }
  }

  // 子元素
  children.forEach(childVnode => {
    // 给 elem 添加子元素
    elem.appendChild(createElement(childVnode)); // 递归
  });

  // 返回真实的 dom 元素
  return elem;
}
```

- `patch(vnode, newVnode)` 将新生成的 vdom 与 现有的 vdom 进行对比，只修改变化的地方

使用如下代码实现简单的元素检测不同及替换的逻辑，**只是简单的逻辑，想深究的可以去网上找专门的 diff 算法**

```javascript
// vnode 变化的数据模型
// vnode = {
//   "tag": 'ul',
//   "attrs": {"id": 'list'},
//   "children": [{
//     "tag": 'li',
//     "attrs": { "className": 'item'},
//     "children": ['item1']
//   }, {
//     "tag": 'li',
//     "attrs": { "className": 'item'},
//     "children": ['item2']
//   }]
// }
// newVnode = {
//   "tag": 'ul',
//   "attrs": {"id": 'list'},
//   "children": [{
//     "tag": 'li',
//     "attrs": { "className": 'item'},
//     "children": ['item1']
//   }, {
//     "tag": 'li',
//     "attrs": { "className": 'item'},
//     "children": ['itemB']
//   }, {
//     "tag": 'li',
//     "attrs": { "className": 'item'},
//     "children": ['item23]
//   }]
// }

function updateChildren(vnode, newVnode) {
  var children = vnode.children || [];
  var newChildren = newVnode.children || [];

  children.forEach((childVnode, index) => {
    var newChildVnode = newChildren[index];
    if (childVnode.tag == newChildVnode.tag) {
      // 没变化继续对比，深层对比
      updateChildren(childVnode, newChildVnode);
    } else {
      // 改变了替换
      replaceNode(childVnode, newChildVnode);
    }
  });
}

function replaceNode(vnode, newVnode) {
  var elem = vnode.elem;
  var newElem = createElement(newVnode);

  // 替换
}
```
