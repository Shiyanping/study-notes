(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{60:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"css3-的世界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3-的世界","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 的世界")]),s("h2",{attrs:{id:"双飞翼布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双飞翼布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 双飞翼布局")]),s("p",[s("strong",[t._v("Q：")]),t._v(" 为什么要有双飞翼布局")]),s("p",[s("strong",[t._v("A：")]),t._v(" 将重要的元素放到 dom 最上边，提前渲染")]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("margin 的负值会对浮动元素进行向左的平移")])]),s("p",[t._v("经典案例：")]),s("ul",[s("li",[s("p",[t._v("两边固定宽，中间自适应")])]),s("li",[s("p",[t._v("三个元素等高")])]),s("li",[s("p",[t._v("水平垂直居中")])])]),s("h2",{attrs:{id:"flex-布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局","aria-hidden":"true"}},[t._v("#")]),t._v(" flex 布局")]),s("p",[t._v("将指定元素设置成弹性盒的格式，"),s("code",[t._v("display: flex")]),t._v("或者"),s("code",[t._v("display: inline-flex")]),t._v("；")]),s("h2",{attrs:{id:"css-hack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-hack","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS hack")]),s("ul",[s("li",[t._v("Reset.css（重置浏览器样式）")]),s("li",[t._v("Normalize.css（修复浏览器样式）")]),s("li",[s("a",{attrs:{href:"http://thx.github.io/cube/doc/neat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Neat.css")]),t._v("（融合）")])]),s("h2",{attrs:{id:"icon-font"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icon-font","aria-hidden":"true"}},[t._v("#")]),t._v(" Icon-font")]),s("p",[t._v("no-image 时代：不超过纯色为 2 的图像尽量不使用图片。")]),s("p",[t._v("资源：")]),s("ol",[s("li",[t._v("SVG")]),s("li",[t._v("直接使用 CSS 绘制特殊图形\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://cssicon.space/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cssIcon")])])])])]),s("h2",{attrs:{id:"css-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-规范","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 规范")]),s("p",[t._v("CSS 也应该制定一定的规范，不符合规范的 CSS 不能上线。\n"),s("a",{attrs:{href:"http://csslint.net/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("csslint.net/#")])]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15447127657143.jpg",alt:""}})]),s("p",[t._v("CSS 命名不要使用驼峰命名，不要使用驼峰命名，不要使用驼峰命名，重点的问题说三遍。")]),s("h2",{attrs:{id:"bfc，ifc，ffc，gfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc，ifc，ffc，gfc","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC，IFC，FFC，GFC")]),s("h3",{attrs:{id:"bfc（block-formatting-context）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc（block-formatting-context）","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC（block formatting context）")]),s("p",[t._v("块级上下文，页面上一个隔离的独立容器，两个 BFC 之间是不重叠的，是独立的。")]),s("p",[s("strong",[t._v("什么元素会生成 BFC")])]),s("ul",[s("li",[s("p",[t._v("根元素")])]),s("li",[s("p",[t._v("float 不为 none")])]),s("li",[s("p",[t._v("position 为 absolute 或者 fixed")])]),s("li",[s("p",[t._v("overflow 不为 visible")])]),s("li",[s("p",[t._v("display 为 inline-block，table-cell，table-caption，flex，inline-flex")])])]),s("p",[s("strong",[t._v("应用场景")])]),s("ol",[s("li",[s("p",[t._v("自适应两列\nQ：一个元素是浮动元素，这个元素会覆盖到兄弟元素之上。\nA：将兄弟元素变成 BFC，就会保持自适应的两列。")])]),s("li",[s("p",[t._v("清除内部浮动（高度丢失）\nQ：两个浮动子元素，父元素的高度不会根据子元素的高度撑开。\nA：给父元素添加一个"),s("code",[t._v("overflow: hidden")]),t._v(" 将父元素生成 BFC，在计算 BFC 的高度时，浮动元素的高度就会计算在内。")])]),s("li",[s("p",[t._v("margin 重叠\nQ：属于同一个 Box（BFC）下的两个 Box，垂直方向的 margin 会造成重叠的现象，取最大值。\nA：使用 BFC 元素对其中一个子元素进行包裹，解决 margin 重叠的问题。")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[s("code",[t._v("overflow:hidden")]),t._v("虽然是让一个元素不可见，但是它会默认触发 BFC 原则，所以"),s("code",[t._v("overflow:hidden")]),t._v("可以解决 margin 重叠，父元素高度不根据浮动子元素高度计算而计算等问题。")])]),s("h3",{attrs:{id:"ifc（inline-formatting-context）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ifc（inline-formatting-context）","aria-hidden":"true"}},[t._v("#")]),t._v(" IFC（inline formatting context）")]),s("p",[t._v("内联格式化上下文，高度是由其行内元素的实际高度决定的。")]),s("h3",{attrs:{id:"ffc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffc","aria-hidden":"true"}},[t._v("#")]),t._v(" FFC")]),s("p",[t._v("Flex 布局")]),s("h3",{attrs:{id:"gfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gfc","aria-hidden":"true"}},[t._v("#")]),t._v(" GFC")]),s("p",[t._v("Grid Layout 布局")]),s("h2",{attrs:{id:"css-分层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-分层","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 分层")]),s("ul",[s("li",[s("p",[t._v("SMACSS\n面向对象 CSS，减少重复样式。\n修饰符使用"),s("code",[t._v("--")]),t._v("，子模块使用"),s("code",[t._v("__")]),t._v("符号")]),s("pre",[s("code",[t._v("- Base - 设定标签元素的预设值`input[type=text]`\n- Layout - 整个网站的大架构`#header{ margin: 30px;}`\n- Module - 应用在不同页面公共模块`button{}`\n- State - 丁义元素不同的状态`el-button-primary{}`\n- Theme - 主视觉`border-color, background-image`\n")])])]),s("li",[s("p",[t._v("BEM")])]),s("li",[s("p",[t._v("SUIT")])]),s("li",[s("p",[t._v("ACSS\n将 class 名拆分，像一个分子拆分成很多个原子一样，或者说像一个表单中的一项可以拆分成标签和输入框，class 名可以将要表达的含义和数值进行拆分，有利于复用。\n"),s("strong",[t._v("例子：")]),s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15447154390174.jpg",alt:""}})])])]),s("ul",[s("li",[t._v("ITCSS")])]),s("h2",{attrs:{id:"css-中的矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-中的矩阵","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 中的矩阵")]),s("p",[t._v("transform 的根本其实是根据矩阵去进行相应的动画操作（matrix）")]),s("p",[s("a",{attrs:{href:"http://www.css88.com/tool/css3Preview/Transform-Matrix.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.css88.com/tool/css3Preview/Transform-Matrix.html")])]),s("ul",[s("li",[t._v("translate（第五项，第六项对应的横纵的位移）")])]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15448005086771.jpg",alt:""}})]),s("ul",[s("li",[t._v("scale（第一项，第四项对应缩放）")])]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15448006186846.jpg",alt:""}})]),s("ul",[s("li",[s("p",[t._v("skew（第二项，第三项对应的拉伸）")])]),s("li",[s("p",[t._v("rotate")])])]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15448011845990.jpg",alt:""}})]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15448012000143.jpg",alt:""}})]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15448014558361.jpg",alt:""}})]),s("h2",{attrs:{id:"css3-工具："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3-工具：","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS3 工具：")]),s("ul",[s("li",[t._v("matrix3d")])]),s("p",[s("a",{attrs:{href:"http://ds-overdesign.com/transform/matrix3d.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ds-overdesign.com/transform/matrix3d.html")])]),s("p",[s("a",{attrs:{href:"http://wow.techbrood.com/fiddle/25741",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://wow.techbrood.com/fiddle/25741")])]),s("ul",[s("li",[t._v("CSS-Matrix3d")])]),s("p",[s("a",{attrs:{href:"https://github.com/Zhangdroid/CSS-Matrix3d",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Zhangdroid/CSS-Matrix3d")])]),s("ul",[s("li",[t._v("matrix")])]),s("p",[s("a",{attrs:{href:"http://meyerweb.com/eric/tools/matrix",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://meyerweb.com/eric/tools/matrix")])]),s("ul",[s("li",[t._v("tools")])]),s("p",[s("a",{attrs:{href:"http://www.f2e.name/case/css3/tools.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.f2e.name/case/css3/tools.html")])]),s("h2",{attrs:{id:"h5-陀螺仪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h5-陀螺仪","aria-hidden":"true"}},[t._v("#")]),t._v(" H5 陀螺仪")]),s("p",[t._v("可以对转动，偏转的动作做很好的测量，这样就可以精确分析判断出使用者的实际动作，而后根据动作，对手机做相应的操作。")]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15445365849041.jpg",alt:""}})]),s("h3",{attrs:{id:"api："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api：","aria-hidden":"true"}},[t._v("#")]),t._v(" api：")]),s("ul",[s("li",[t._v("deviceorientation")])]),s("p",[t._v("设备物理方向信息，表示为一系列本地坐标系的旋角")]),s("ul",[s("li",[t._v("devicemotion")])]),s("p",[t._v("提供设备的加速信息")]),s("ul",[s("li",[t._v("compassneedscalibration")])]),s("p",[t._v("用于通知 Web 站点使用罗盘信息校准上述事件")]),s("h3",{attrs:{id:"获取旋转角度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取旋转角度","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取旋转角度")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v("'deviceorientation'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alpha"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gamma"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beta"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15445374256543.jpg",alt:""}})]),s("h3",{attrs:{id:"罗盘校准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#罗盘校准","aria-hidden":"true"}},[t._v("#")]),t._v(" 罗盘校准")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v("'compassneedscalibration'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'罗盘需要校准'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h3",{attrs:{id:"获取重力加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取重力加速","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取重力加速")]),s("p",[t._v("重力加速度是一个物体受重力作用的情况下具有的加速度。")]),s("p",[t._v("与位置有关，（G=mg）（g 为标准重力加速度）")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v("'devicemotion'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// event.acceleration")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//  x(y, z): 设备在 x(y, z) 方向上的移动加速度值")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// event.accelerationIncludingGravity")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 考虑了重力加速度后设备在 x(y, z)")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// event.rotationRate")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// alpha, beta, gamma: 设备绕x, y, z轴旋转的角度")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("摇一摇例子：")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" spreed "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" z "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastX "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastY "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastZ "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v("'devicemotion'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" accelerationIncludingGravity "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accelerationIncludingGravity"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    x "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" accelerationIncludingGravity"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    y "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" accelerationIncludingGravity"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    z "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" accelerationIncludingGravity"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("abs")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" lastX"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" spreed "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("abs")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" lastY"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" spreed "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("abs")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" lastZ"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" spreed"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'摇一摇'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h2",{attrs:{id:"投影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#投影","aria-hidden":"true"}},[t._v("#")]),t._v(" 投影")]),s("ul",[s("li",[t._v("球面投影")])]),s("p",[t._v("求球面投影推出的像素长度")]),s("p",[s("strong",[t._v("例：")]),t._v(" 淘宝造物节，全景")]),s("p",[s("img",{attrs:{src:"http://cdn.jinyueyue.cn/15445402597478.jpg",alt:""}})]),s("ul",[s("li",[t._v("立方体投影")])]),s("p",[s("strong",[t._v("例：")]),t._v(" 3D 魔方")]),s("p",[t._v("transform 如果写了多个属性是从右往左读，从右往左进行相应的动画。")]),s("h2",{attrs:{id:"资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 资源")]),s("ul",[s("li",[s("a",{attrs:{href:"http://720yun.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS3 全景图")])]),s("li",[s("a",{attrs:{href:"http://www.h5doo.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("H5doo")])])])])}],!1,null,null,null);a.default=e.exports}}]);