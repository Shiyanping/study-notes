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

**Tips:**

> 尽量少些 html 标签，可以减少 dom 渲染的时间，减少整个文件大小
