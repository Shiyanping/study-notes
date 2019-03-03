# MVC

## 1. 概述

model：数据模型
view：视图
controller：控制器

![](http://cdn.jinyueyue.cn/15481469949120.jpg)

MVC 是一种模式，但是并不是设计模式，而是架构模式。

优点：

1. 更适合多人开发
2. 并且可以提高代码的可维护性

缺点：

1. 增加了系统的复杂性

## 2. MVC 工作流程

一个典型的 MVC 工作流程主要是以下几点：

- Controller 截获⽤用户发出的请求 （页面路由）
- Controller 调⽤ Model 完成状态的读写操作，Model 将数据库中读取到的数据打包传给 Controller
- Controller 把数据传递给 View
- View 将最终结果渲染并呈献给用户（可能在浏览器渲染，也有可能在服务器中渲染）

如图：

![](http://cdn.jinyueyue.cn/15480568260387.jpg)

Model 只和 Controller 交互，Controller 负责控制用户行为和 View 进行交互。

## 3. 目录结构

assets：静态资源
config：配置文件
controllers：路由
models：请求
middleware：中间件
tests：单元测试
views：页面级别的组件
web：前端项目
components：小组件
bin：启动文件

错误日志分析：

- log4
- app.on("error")
- process.on

要注意 models 的错误容错，因为 node 做中间件，不能将问题出在和后端的交互上，否则整个系统就挂了。

前端进程，后端进程

npm run env：查看当前环境配置

前端路由是假路由，如果访问前端项目和 node 项目在一起，那么访问前端路由会默认跳转到 node 的路由中，这时候我们就会用到 `koa2-connect-history-api-fallback` 这个依赖包，将路由打回到前端，让前端自己处理路由，这个依赖包也可以配置白名单，将我们后端吐出数据的路由，也就是前端访问的路由配置到白名单中，这样就不会出现误将后端路由打回前端，让前端处理，前端也没有的尴尬了。

SSP MPA SPA 预渲染

system.js 万能模块加载器

节流和防抖
