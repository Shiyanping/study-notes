(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{65:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"php-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-基础","aria-hidden":"true"}},[t._v("#")]),t._v(" php 基础")]),s("p",[t._v("php 属于脚本语言，上手比较容易，只是记录自己开发中用到的笔记，详细的资料可以到"),s("a",{attrs:{href:"http://www.runoob.com/php/php-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("菜鸟教程")]),t._v("中找。")]),s("h2",{attrs:{id:"引用其他-php-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用其他-php-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 引用其他 php 文件")]),s("ul",[s("li",[t._v("include")]),s("li",[t._v("require")]),s("li",[t._v("include_once")]),s("li",[t._v("require_once")])]),s("h2",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量")]),s("p",[t._v("定义变量时必须使用"),s("code",[t._v("$")]),t._v("。")]),s("p",[t._v("使用"),s("code",[t._v("isset($变量名)")]),t._v("，可以判断是否定义了变量。")]),s("p",[t._v("在函数外定义的变量，函数内部如果想使用的话，需要用到"),s("code",[t._v("globel")])]),s("p",[t._v("定义全局变量的话需要使用"),s("code",[t._v("$GLOBALS")]),t._v("，例：")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$GLOBALS")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'a'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'我是全局变量'")]),t._v("\n"),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n\necho $GLOBALS['a'];\n")])]),s("h2",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组")]),s("h3",{attrs:{id:"定义数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义数组")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$arr")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'first'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'second'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h3",{attrs:{id:"获取数组长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取数组长度","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取数组长度")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$cars")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token keyword"}},[t._v("array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Volvo"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"BMW"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Toyota"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("count")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$cars")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),s("h3",{attrs:{id:"遍历数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遍历数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 遍历数组")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$cars")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token keyword"}},[t._v("array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Volvo"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"BMW"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Toyota"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$arrlength")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token function"}},[t._v("count")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$cars")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$x")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{attrs:{class:"token variable"}},[t._v("$x")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token variable"}},[t._v("$arrlength")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{attrs:{class:"token variable"}},[t._v("$x")]),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$cars")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token variable"}},[t._v("$x")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"<br>"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),s("h3",{attrs:{id:"创建关联数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建关联数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建关联数组")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$age")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token keyword"}},[t._v("array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Peter"')]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"35"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Ben"')]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"37"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Joe"')]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"43"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("json_encode")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$age")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),s("h3",{attrs:{id:"遍历关联数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遍历关联数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 遍历关联数组")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$age")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token keyword"}},[t._v("array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Peter"')]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"35"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Ben"')]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"37"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Joe"')]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"43"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("foreach")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$age")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$x")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token variable"}},[t._v("$x_value")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Key="')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$x")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('", Value="')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$x_value")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"<br>"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),s("p",[s("a",{attrs:{href:"http://www.runoob.com/php/php-arrays.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门")])]),s("h2",{attrs:{id:"数据库相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库相关","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库相关")]),s("h3",{attrs:{id:"如何连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何连接")]),s("p",[t._v("php 连接数据库有两种方式，可以使用"),s("code",[t._v("MySQLi")]),t._v("和"),s("code",[t._v("PDO")]),t._v("，具体连接方式看菜鸟教程。"),s("a",{attrs:{href:"http://www.runoob.com/php/php-mysql-connect.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门")])]),s("h3",{attrs:{id:"mysql-相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-相关","aria-hidden":"true"}},[t._v("#")]),t._v(" MySQL 相关")]),s("ul",[s("li",[s("a",{attrs:{href:"http://www.runoob.com/php/php-mysql-create.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建数据库")])]),s("li",[s("a",{attrs:{href:"http://www.runoob.com/php/php-mysql-create-table.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建表")])]),s("li",[s("a",{attrs:{href:"http://www.runoob.com/php/php-mysql-insert.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("插入数据")])]),s("li",[s("a",{attrs:{href:"http://www.runoob.com/php/php-mysql-insert-multiple.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("插入多条数据")])]),s("li",[s("a",{attrs:{href:"http://www.runoob.com/php/php-mysql-select.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("读取数据")])])]),s("p",[s("strong",[t._v("tips：")])]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$conn")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("PDO")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"mysql:host='),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token variable"}},[t._v("$servername")])]),t._v(";dbname="),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token variable"}},[t._v("$dbname")])]),t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$username")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$password")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("在使用 PDO 执行数据库操作时，"),s("code",[t._v("host")]),t._v("，"),s("code",[t._v("dbname")]),t._v("的"),s("code",[t._v("=")]),t._v("左右两边不要写"),s("code",[t._v("=")]),t._v("。")]),s("h3",{attrs:{id:"注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意点","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意点")]),s("ul",[s("li",[t._v("一定要记得给 php 文件添加编码信息")])]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("header")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Content-type: text/html; charset=utf-8"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("ul",[s("li",[t._v("在给数据库中添加数据时，也要添加编码信息，以防汉字乱码。")])]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$conn")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("PDO")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"mysql:host='),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token variable"}},[t._v("$servername")])]),t._v(";dbname="),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token variable"}},[t._v("$dbname")])]),t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$username")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$password")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token variable"}},[t._v("$conn")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("query")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"set names utf8"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("ul",[s("li",[t._v("在 sql 语句中使用变量时，可以用"),s("code",[t._v("'{}'")]),t._v("包裹变量。")])]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$sql")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[t._v("\"INSERT INTO news (title, content) VALUES ('"),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token variable"}},[t._v("$title")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("', '"),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token variable"}},[t._v("$content")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("')\"")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("ul",[s("li",[t._v("获取前端传入的参数")])]),s("p",[t._v("前端传参的时候会有不同的方式去传参，php 在接收的时候也有对应的方法。")]),s("ol",[s("li",[s("code",[t._v("$_GET")]),t._v("：获取 get 传参")]),s("li",[s("code",[t._v("$_POST")]),t._v("：获取 post 传参")]),s("li",[s("code",[t._v("$_REQUEST")]),t._v("：万能，get 和 post 都可以获取到")])])])}],!1,null,null,null);a.default=e.exports}}]);