# Express 初识

## 1. 概述

Express 是一个简洁而灵活的 node.js Web 应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

- 可以设置中间件来响应 HTTP 请求。

- 定义了路由表用于执行不同的 HTTP 请求动作。

- 可以通过向模板传递参数来动态渲染 HTML 页面。

## 2. 使用方法

1. 安装引入 express 依赖包。`npm install express --save`
2. 通过 listen 监听端口，创建一个服务。
3. 通过`app.get`创建路由，处理 req，res，达到取值与吐值的效果。

req 和 res 常用到一些方法。

**req：**

- req.query()：获取 url 后?传参

- req.params()：获取 url 后动态传参（/index/:id 的形式）

**res：**

- res.send()：输出一定的内容

- res.json()：格式化返回结果

- res.redirect()：重定向到某个链接

- res.render()：使用 node 模板渲染时使用

```js
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

var server = app.listen(8888, function() {
  console.log('服务启动成功');
});
```

## 3. 常用 api

### 3.1 静态文件

express 中提供了内置的中间件`express.static()`来设置静态文件，如：js，css，图片。

```js
app.use(express.static('public'));
```

![](http://cdn.jinyueyue.cn/15487533473442.jpg)

通过上面的方法设置了静态文件后，我们可以将静态文件放到 `public` 文件夹下，当我们的服务跑起来之后，可以通过`localhost:8888/js/XX`访问自己的静态文件，public 目录默认会被 express 进行处理。

静态文件可以配合 express 中 `res.sendFile()` 这个 api 进行使用，通过 `res.sendFile()` 渲染一个页面，然后在页面中进行指定的静态文件引用。

例：

node.js：

```js
app.get('/index.html', function(req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});
```

views/index.html：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>测试文件</title>
    <link rel="stylesheet" href="/css/index.css" />
  </head>
  <body>
    <form action="/upload" method="GET">
      <input type="text" placeholder="用户名" name="username" />
      <input type="submit" value="提交" />
    </form>
    <script src="js/index.js"></script>
  </body>
</html>
```

这样就可以再 index.html 中使用静态资源了。

### 3.2 请求

我们可以使用 `app.route()` 方法设置路由，这样通过 get 和 post 方法就都可以使用设置的路由了。

也可以通过 `app.get()` 和 `app.post()` 设置路由，这样设置的路由，我们必须使用对应的方法进行访问。

#### 3.2.1 GET 方法

通过 `app.get` 设置的路由，我们可以有两种方式传参和接收参数。

- `app.get('index/:id')`

当我们使用这种方法设置传参时，我们在前端传参时，就必须在路由中传参，如：`index/123`，node 在接收参数的时候就需要使用`req.params` 接收参数。

- `app.get('index')`

如果我们在设置路由的时候没有做特殊处理，那前端就可以正常传参，当 node 接收参数时，可以使用 `res.query` 接收参数的键值对。

#### 3.2.2 POST 方法

当我们设置路由设置成 post 的路由时，node 在接收 post 传参时，就需要使用 `body-parser` 中间件了。

在使用 `body-parser` 中间件时，一定要记得设置它的编码格式。

例：

```js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.post('/upload', urlencodedParser, function(req, res) {
  res.json(req.body);
});

var server = app.listen(8888, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
```

## 4. 路由

在上面的例子中，我们都用到了路由，但是一直都没有细说。路由通过使用`app.get` 、 `app.post` 、`app.all`、`app.route` 创建，创建之后通过定义的路由名字对一定的路由进行访问，在访问时，需要使用对应的 GET 和 POST 请求去访问，`app.get` 定义的路由通过 GET 请求访问，`app.post` 定义的路由通过 POST 请求访问，`app.all` 和 `app.route` 定义的路由所有的请求方式都可以访问。

```js
const express = require('express');
const app = express();

app.all('/', function(req, res, next) {
  res.send('路由');
});
```

`/` 代表根路由，一般定义路由时应该由 controller 和 action 组成，比如 `/web/hello`，`web/world`，其中的 web 就是对应的 controller，后面的 hello 和 world 对应的是 web controller 下的操作。

在定义路由时，除了可以支持正常的路由以外，还可以支持定义虚拟的路由，比如 `/index/home.html` ，在浏览器中访问时，我们就会看到类似 `.html` 结尾的路由。

路由还可以支持使用正则匹配。

例：

```js
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
  console.log('/ab*cd GET 请求');
  res.send('正则匹配');
});
```

在使用多个回调去处理路由时，我们可以使用到 `next` 方法。

例：

```js
app.get(
  '/example/b',
  function(req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
  },
  function(req, res) {
    res.send('Hello from B!');
  }
);
```

在页面输出 `Hello from B!` 时，我们会先在控制台输出第一个回调里面的内容，如果我们在第一个回调中不使用 `next()` 方法的话，会导致程序一直在访问，也就是 loading 加载中。

我们在给浏览器吐出内容时，也就是使用 `res.send` 或者 `res.json` 等方法时，必须在最后一个回调中使用，如果在前面没有结束的回调中使用的话，就会出现后面输出的内容无法正常吐出的 bug。

## 5. 模板引擎

在 express 官网中提供的`pug`模板引擎，但是这个模板虽然简单，但是写起来没有 html 的规范。

可以使用`swig`这个模板渲染引擎。

### 5.1 安装

`npm install swig --save`

### 5.2 集成到 express 中

app.js

```js
var express = require('express');
var swig = require('swig');

var app = express();

//设置swig页面不缓存
swig.setDefaults({
  cache: false
});
app.set('view cache', false);

app.set('views', './views/pages/');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

//index page
app
  .get('/', function(req, res) {
    res.render('index', {
      title: '首页 ',
      content: 'hello swig'
    });
  })
  .listen(8888);
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{{ title }}</title>
  </head>
  <body>
    {{ content }}
  </body>
</html>
```

在命令框中运行

```bash
node app.js
```

在浏览器中输入 localhost:8888，就可以看到对应的效果了。

![](http://cdn.jinyueyue.cn/15488167068729.jpg)

### 5.3 基本用法

- 变量

```html
{{ name }}
```

- 属性

```html
{{ student.name }}
```

- 模板继承

我们如果给每个页面都写一遍 html 的结构，太费事了，所以可以使用模板继承，提前定义好公共模板。

layout.html：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{% block title %}{% endblock %}</title>
    {% block head %}{% endblock %}
  </head>
  <body>
    {% block content %}{% endblock %}
  </body>
</html>
```

在模板中，我们使用`block`定义模板页面的代码块，在子页面继承之后，我们可以使用`block`给父模板输出内容。

继承 layout.html 的子模板。index.html：

```html
{% extends './layout.html' %} {% block title %} index {% endblock %} {% block content %}
<div>
  <h1>hello swig</h1>
  <div>
    {% endblock %}
  </div>
</div>
```

在公共模板中可以定义很多`block`，我们在使用子模板的时候不需要把所有的 `block` 都使用，需要哪块使用哪块就可以。

### 5.4 include 模板

一个模板中可以包含其他的模板。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{% block title %}{% endblock %}</title>
    {% include "./includes/head.html" %} {% block head %}{% endblock %}
  </head>
  <body>
    {% include "./includes/header.html" %} {% block content %}{% endblock %}
  </body>
</html>
```

### 5.5 if 判断

```html
{ % if name === 'xiaoai' % } hello 小爱 { % endif % }
```

### 5.6 if-else 判断

```html
{ % if name === 'xiaoai' % } hello 小爱 { % elseif name === 'tianmao' % } hello 天猫精灵 { % else % } hello 京东精灵 { % endif % }
```

### 5.7 for 循环

arr = [1, 2, 3]

```html
{ % for key, val in arr % }
<p>{ { key } } -- { { val } }</p>
{ % endfor % }
```

在 for 循环中有很多内置的变量

> - loop.index：当前循环的索引（1 开始）

- loop.index0：当前循环的索引（0 开始）
- loop.revindex：当前循环从结尾开始的索引（1 开始）
- loop.revindex0：当前循环从结尾开始的索引（0 开始）
- loop.key：如果迭代是对象，是当前循环的键，否则同 loop.index
- loop.first：如果是第一个值返回 true
- loop.last：如果是最后一个值返回 true
- loop.cycle：一个帮助函数，以指定的参数作为周期

例：

arr = [1, 2, 3]

```html
{ % for key, val in arr % }
<p>{{ loop.index }} -- {{ key }} -- {{ val }}</p>
{ % endfor % }
```

### 5.8 swig 模板中还带了很多内置的过滤器

> - add(value)：使变量与 value 相加，可以转换为数值字符串会自动转换为数值。

- addslashes：用 \ 转义字符串
- capitalize：大写首字母
- date(format[, tzOffset])：转换日期为指定格式
- format：格式
- tzOffset：时区
- default(value)：默认值（如果变量为 undefined，null，false）
- escape([type])：转义字符
- first：返回数组第一个值
- join(glue)：同[].join
- json_encode([indent])：类似 JSON.stringify, indent 为缩进空格数
- last：返回数组最后一个值
- length：返回变量的 length，如果是 object，返回 key 的数量
- lower：同''.toLowerCase()
- raw：指定输入不会被转义
- replace(search, replace[, flags])：同''.replace
- reverse：翻转数组
- striptags：去除 html/xml 标签
- title：大写首字母
- uniq：数组去重
- upper：同''.toUpperCase
- url_encode：同 encodeURIComponent
- url_decode：同 decodeURIComponemt

例：

```html
{{ birthday|date('Y-m-d') }} {{ name|title }}
```

> 参考文献
> [http://www.iqianduan.net/blog/how_to_use_swig](http://www.iqianduan.net/blog/how_to_use_swig)
