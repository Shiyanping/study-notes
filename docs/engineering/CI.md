# 持续集成

## 前端工程化

项目整个开发流程

![](http://cdn.jinyueyue.cn/15507612525440.jpg)

## 前端模块化

CommonJS（webpack）

AMD，CMD，都是 CommonJS 的一种规范实现定义。只是一种让编码更爽的一种操作，对浏览器并没有优化，减少了 script 的引入。

引入 js 的时候是广度优先，然后是深度。

AMD（require.js）：依赖前置，3.js -> 2.js -> 1.js

CMD（sea.js）：需要加载某模块时引用，其实原理和 AMD 一样，都是需要先加载好。

还有一种模式是 UMD，rollup 打包成一个第三方库的时候要打包成 UMD 的模式。

## 资源定位

1. 添加版本号：`a.js?v=1.0.0`，`a.css?v=1.0.0`。问题：一改版本号，将所有的 js 和 css 版本号都更改，没更改的文件缓存不起作用。
2. 添加 md5：`a.js?v=dfa312`。问题：文件大小不一样，同时上线不能同时更新
3. 给文件名添加 md5：`a_fdsk3.css` -> `a_2376ds.css`。先上静态资源，静态资源前后版本都存在，后上 html，静态资源已经准备好，就不会出现 html 没样式或者没逻辑的 bug，而且这种方式有助于回滚代码。（**平滑升级，非覆盖式发布，增量更新**）

## 前端开发组件化

- Custom DOM

```js
<script>
  class ButtonHelloElement extends HTMLButtonElement {
    constructor() {
      super();
      this.addEventListener('click', () => {
        alert('hello world');
      });
    }
  }
  customElements.define('button-hello', ButtonHelloElement, { extends: 'button' });
</script>
<button is="button-hello">hello world</button>

```

- HTML Import（import）
- HTML template（template）

```js
<template id="template"><p>Smile!</p></template>
<script>
  let num = 3;
  const fragment = document.getElementById('template').content.cloneNode(true);
  while (num-- > 1) {
    fragment.firstChild.before(fragment.firstChild.cloneNode(true));
    fragment.firstChild.textContent += fragment.lastChild.textContent;
  }
  document.body.appendChild(fragment);
</script>
```

- Shadow DOM（影子节点）

```js
 <div id="test"></div>
<script>
  const div = document.getElementById('test');
  const shadowRoot = div.createShadowRoot();
  const span = document.createElement('span');
  span.textContent = 'hello world';
  shadowRoot.appendChild(span)
</script>
```

生成的 dom 是下面这种结构：

![](http://cdn.jinyueyue.cn/15508302380303.jpg)
