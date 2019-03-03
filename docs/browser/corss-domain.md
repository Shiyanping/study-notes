# 前端跨域

## 1. 导致跨域的原因：

同源策略：域名，协议，端口都相同。

## 2. 为什么要有同源策略：

浏览器不同的域名是不可以访问 Cookie 的，防止 Cookie 被盗用，防止隐私泄露。如果 Cookie 可以共享，那安全性就会很低。

## 3. 同源策略限制的范围

1. Cookie，LocalStorage（超过 2.5M 会出现性能问题），IndexedDB 无法读取。
2. DOM 无法获得
3. Ajax 无法发送

**Tips:**

> 1. LocalStorage 大小 5M，但是使用 2.5M 以后会出现性能问题
> 2. IndexedDB，web SQL：关系型数据库，有专门的 api 方法，大小 50M

## 4. 如何 Cookie 共享

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

## 5. 解决跨域的方式：

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
