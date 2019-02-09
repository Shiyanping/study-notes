# Koa 小常识

洋葱圈模型，当遇到 next 时，暂停当前函数，执行下一个中间件，当下游没有中间件执行时，将从最后一个中间件继续向上执行。

绕过 koa 的 response 处理是不被支持的，应该注意不要使用一下 node 属性：

- res.statusCode
- res.writeHead()
- res.write()
- res.end()

koa 会根据 `ctx.body` 返回值去自动更换`Content-Type`。

- `ctx.body = 111`

```js
Content-Type: application/json; charset=utf-8
```

因为数字的 111 属于伪 json。

- `ctx.body = '111'`;

```js
Content-Type: text/plain; charset=utf-8
```

- `ctx.body = '<p>111</p>'`

```js
Content-Type: text/html; charset=utf-8
```
