# CSS3 的世界

## 双飞翼布局

**Q：** 为什么要有双飞翼布局

**A：** 将重要的元素放到 dom 最上边，提前渲染

**tips：**

margin 的负值会对浮动元素进行向左的平移

经典案例：

- 两边固定宽，中间自适应

- 三个元素等高

- 水平垂直居中

## flex 布局

将指定元素设置成弹性盒的格式，`display: flex`或者`display: inline-flex`；

## CSS hack

- Reset.css（重置浏览器样式）
- Normalize.css（修复浏览器样式）
- [Neat.css](http://thx.github.io/cube/doc/neat)（融合）

## Icon-font

no-image 时代：不超过纯色为 2 的图像尽量不使用图片。

资源：

1. SVG
2. 直接使用 CSS 绘制特殊图形
   - [cssIcon](https://cssicon.space/#/)

## CSS 规范

CSS 也应该制定一定的规范，不符合规范的 CSS 不能上线。
[csslint.net/#](http://csslint.net/#)

![](http://pkskks1su.bkt.clouddn.com/15447127657143.jpg)

CSS 命名不要使用驼峰命名，不要使用驼峰命名，不要使用驼峰命名，重点的问题说三遍。

## BFC，IFC，FFC，GFC

### BFC（block formatting context）

块级上下文，页面上一个隔离的独立容器，两个 BFC 之间是不重叠的，是独立的。

**什么元素会生成 BFC**

- 根元素

- float 不为 none

- position 为 absolute 或者 fixed

- overflow 不为 visible

- display 为 inline-block，table-cell，table-caption，flex，inline-flex

**应用场景**

1. 自适应两列
   Q：一个元素是浮动元素，这个元素会覆盖到兄弟元素之上。
   A：将兄弟元素变成 BFC，就会保持自适应的两列。

2. 清除内部浮动（高度丢失）
   Q：两个浮动子元素，父元素的高度不会根据子元素的高度撑开。
   A：给父元素添加一个`overflow: hidden` 将父元素生成 BFC，在计算 BFC 的高度时，浮动元素的高度就会计算在内。

3. margin 重叠
   Q：属于同一个 Box（BFC）下的两个 Box，垂直方向的 margin 会造成重叠的现象，取最大值。
   A：使用 BFC 元素对其中一个子元素进行包裹，解决 margin 重叠的问题。

**tips**

`overflow:hidden`虽然是让一个元素不可见，但是它会默认触发 BFC 原则，所以`overflow:hidden`可以解决 margin 重叠，父元素高度不根据浮动子元素高度计算而计算等问题。

### IFC（inline formatting context）

内联格式化上下文，高度是由其行内元素的实际高度决定的。

### FFC

Flex 布局

### GFC

Grid Layout 布局

## CSS 分层

- SMACSS
  面向对象 CSS，减少重复样式。
  修饰符使用`--`，子模块使用`__`符号

      - Base - 设定标签元素的预设值`input[type=text]`
      - Layout - 整个网站的大架构`#header{ margin: 30px;}`
      - Module - 应用在不同页面公共模块`button{}`
      - State - 丁义元素不同的状态`el-button-primary{}`
      - Theme - 主视觉`border-color, background-image`

- BEM

- SUIT

- ACSS
  将 class 名拆分，像一个分子拆分成很多个原子一样，或者说像一个表单中的一项可以拆分成标签和输入框，class 名可以将要表达的含义和数值进行拆分，有利于复用。
  **例子：**
  ![](http://pkskks1su.bkt.clouddn.com/15447154390174.jpg)

* ITCSS

## CSS 中的矩阵

transform 的根本其实是根据矩阵去进行相应的动画操作（matrix）

[http://www.css88.com/tool/css3Preview/Transform-Matrix.html](http://www.css88.com/tool/css3Preview/Transform-Matrix.html)

- translate（第五项，第六项对应的横纵的位移）

![](http://pkskks1su.bkt.clouddn.com/15448005086771.jpg)

- scale（第一项，第四项对应缩放）

![](http://pkskks1su.bkt.clouddn.com/15448006186846.jpg)

- skew（第二项，第三项对应的拉伸）

- rotate

![](http://pkskks1su.bkt.clouddn.com/15448011845990.jpg)

![](http://pkskks1su.bkt.clouddn.com/15448012000143.jpg)

![](http://pkskks1su.bkt.clouddn.com/15448014558361.jpg)

## CSS3 工具：

- matrix3d

[http://ds-overdesign.com/transform/matrix3d.html](http://ds-overdesign.com/transform/matrix3d.html)

[http://wow.techbrood.com/fiddle/25741](http://wow.techbrood.com/fiddle/25741)

- CSS-Matrix3d

[https://github.com/Zhangdroid/CSS-Matrix3d](https://github.com/Zhangdroid/CSS-Matrix3d)

- matrix

[http://meyerweb.com/eric/tools/matrix](http://meyerweb.com/eric/tools/matrix)

- tools

[http://www.f2e.name/case/css3/tools.html](http://www.f2e.name/case/css3/tools.html)

## H5 陀螺仪

可以对转动，偏转的动作做很好的测量，这样就可以精确分析判断出使用者的实际动作，而后根据动作，对手机做相应的操作。

![](http://pkskks1su.bkt.clouddn.com/15445365849041.jpg)

### api：

- deviceorientation

设备物理方向信息，表示为一系列本地坐标系的旋角

- devicemotion

提供设备的加速信息

- compassneedscalibration

用于通知 Web 站点使用罗盘信息校准上述事件

### 获取旋转角度

```js
window.addEventListener(
  'deviceorientation',
  function(event) {
    console.log(event.alpha, event.gamma, event.beta);
  },
  true
);
```

![](http://pkskks1su.bkt.clouddn.com/15445374256543.jpg)

### 罗盘校准

```js
window.addEventListener(
  'compassneedscalibration',
  function(event) {
    alert('罗盘需要校准');
    event.preventDefault();
  },
  true
);
```

### 获取重力加速

重力加速度是一个物体受重力作用的情况下具有的加速度。

与位置有关，（G=mg）（g 为标准重力加速度）

```js
window.addEventListener(
  'devicemotion',
  function(event) {
    // event.acceleration
    //  x(y, z): 设备在 x(y, z) 方向上的移动加速度值
    // event.accelerationIncludingGravity
    // 考虑了重力加速度后设备在 x(y, z)
    // event.rotationRate
    // alpha, beta, gamma: 设备绕x, y, z轴旋转的角度
  },
  true
);
```

摇一摇例子：

```js
var spreed = 30;
var x = (y = z = lastX = lastY = lastZ = 0);
window.addEventListener(
  'devicemotion',
  function(event) {
    var accelerationIncludingGravity = event.accelerationIncludingGravity;
    x = accelerationIncludingGravity.x;
    y = accelerationIncludingGravity.y;
    z = accelerationIncludingGravity.z;
    if (Math.abs(x - lastX) > spreed || Math.abs(y - lastY) > spreed || Math.abs(z - lastZ) > spreed) {
      alert('摇一摇');
    }
  },
  true
);
```

## 投影

- 球面投影

求球面投影推出的像素长度

**例：** 淘宝造物节，全景

![](http://pkskks1su.bkt.clouddn.com/15445402597478.jpg)

- 立方体投影

**例：** 3D 魔方

transform 如果写了多个属性是从右往左读，从右往左进行相应的动画。

## 资源

- [CSS3 全景图](http://720yun.com)
- [H5doo](http://www.h5doo.com)
