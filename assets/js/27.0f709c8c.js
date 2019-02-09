(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{57:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"严格模式及-json-对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#严格模式及-json-对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 严格模式及 JSON 对象")]),n("h2",{attrs:{id:"_1-严格模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-严格模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 严格模式")]),n("p",[t._v("特点：")]),n("ul",[n("li",[n("p",[t._v("未定义的变量不会默认定义成全局变量")])]),n("li",[n("p",[t._v("重复的对象字面量禁止重复定义")])]),n("li",[n("p",[t._v("this 的值为 null 或者 undefined 时，不会分配给 window")])]),n("li",[n("p",[t._v("禁止使用"),n("code",[t._v("delete")]),t._v("删除变量或者函数")])]),n("li",[n("p",[t._v("不能使用保留关键字（public 等）")])]),n("li",[n("p",[t._v("无法在语句或者块中声明函数")]),n("p",[t._v("例：在"),n("code",[t._v("for")]),t._v("循环中声明"),n("code",[t._v("function")])])]),n("li",[n("p",[t._v("同一个函数定义重复的形参")])]),n("li",[n("p",[t._v("不能使用"),n("code",[t._v("eval")]),t._v("，"),n("code",[t._v("arguments")]),t._v("定义变量，函数")])]),n("li",[n("p",[t._v("不要修改"),n("code",[t._v("arguments")])])]),n("li",[n("p",[t._v("不能使用"),n("code",[t._v("with")])])]),n("li",[n("p",[t._v("不能使用"),n("code",[t._v("arguments.callee")])])])]),n("h2",{attrs:{id:"_2-json-对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-json-对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. JSON 对象")]),n("p",[t._v("JSON 对象提供了"),n("code",[t._v("JSON.stringify")]),t._v("和"),n("code",[t._v("JSON.parse")]),t._v("两个方法。"),n("code",[t._v("JSON.stringify")]),t._v("可以将 JSON 对象格式化成 JSON 字符串，"),n("code",[t._v("JSON.parse")]),t._v("可以将 JSON 字符串格式化成 JSON 对象。")]),n("ul",[n("li",[t._v("JSON.stringify")])]),n("p",[t._v("第一个参数具体格式化的对象，第二个参数可以写一个函数，对 JSON 对象的值进行操作，第三个参数可以规定格式化之后空格的格数。")]),n("p",[t._v("例：")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  first"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  second"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  third"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" luckyName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("stringify")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" undefined"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("luckyName"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// {first: 1, second: 2}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);