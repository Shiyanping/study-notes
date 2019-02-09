# 你不知道的 HTML

## 小常识

1. 文件夹命名不要使用驼峰的方式，因为 linux 会识别驼峰的方式，驼峰会导致运维时常去切换大小写，容易找不到路径。

## HTML 语义化

1. 使用 div 进行布局，不要使用 div 进行无意义的包裹，p 和 div 都可以使用的同时，尽量使用 p 标签，不要使用 div
2. 纯样式标签不要使用 b，font，使用 CSS 进行布局，需要强调的文本，可以使用 strong(加粗) 和 em(倾斜)
3. H5 新增语义化标签：
   - header
   - nav
   - article
   - section
   - footer
   - aside

示例结构：

```html
<header><nav></nav></header>
<div class="content">
  <section>1</section>
  <section>2</section>
  <aside></aside>
</div>
<footer></footer>
```

:::tip
尽量少些 html 标签，可以减少 dom 渲染的时间，减少整个文件大小
:::

## 前端跨域

### 导致跨域的原因：

同源策略：域名，协议，端口都相同。

### 为什么要有同源策略：

浏览器不同的域名是不可以访问 Cookie 的，防止 Cookie 被盗用，防止隐私泄露。如果 Cookie 可以共享，那安全性就会很低。

### 同源策略限制的范围

1. Cookie，LocalStorage（超过 2.5M 会出现性能问题），IndexedDB 无法读取。
2. DOM 无法获得
3. Ajax 无法发送

:::tip
1. LocalStorage 大小 5M，但是使用 2.5M 以后会出现性能问题
2. IndexedDB，web SQL：关系型数据库，有专门的 api 方法，大小 50M
:::

### 如何 Cookie 共享

使用 document.domain 设置同源策略。
前端设置方法：

```js
www.baidu.com  a.html
document.domain = .baidu.com;
document.cookie = 'test=testCookie';

baike.baidu.com  b.html
```

后端也可以设置，方法：

```
Set-Cookie: key=value; domain=.example.com; path=/
```

### 解决跨域的方式：

- jsonp

jsonp 只能发送 GET 请求，jsonp 原理：

```js
<script>
  function example(data) {
    console.log(data);
    //  {code: 0}
  }
</script>
<script src="http://www.baidu.com/test.php?callback=example"></script>
<script>
  // 后端代码
  // if(callback) {
  //   return callback( {code: 0} )
  //   相当于 return example( {code: 0} )
  // } else {
  //   {code: 0}
  // }
</script>
```

- CORS

跨域资源分享，允许任务类型的请求。

- Nginx 配置跨域

- img，iframe，script，link 标签没有被同源策略屏蔽

```js
// 利用img标签可以跨域的方式，使用image标签测试用户网速
var image = new Image();
var start = Date.now(); // 获取当前时间
image.src = 'http://www.baidu.com/test.png'; // 服务器上的一个图片地址，要知道具体多大
image.onload = function() {
  var end = Date.now(); // 获取加载完图片的时间
  var t = start - end; // 获取时间差
  // kb/s
  var v = '图片大小' / t;
};
```

- postMessage（iframe，img）

- WebSocket
