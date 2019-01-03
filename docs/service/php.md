# php 基础

php 属于脚本语言，上手比较容易，只是记录自己开发中用到的笔记，详细的资料可以到[菜鸟教程](http://www.runoob.com/php/php-tutorial.html)中找。

## 引用其他 php 文件

- include
- require
- include_once
- require_once

## 变量

定义变量时必须使用`$`。

使用`isset($变量名)`，可以判断是否定义了变量。

在函数外定义的变量，函数内部如果想使用的话，需要用到`globel`

定义全局变量的话需要使用`$GLOBALS`，例：

```php
<?php
$GLOBALS['a'] = '我是全局变量'
?>

echo $GLOBALS['a'];
```

## 数组

### 定义数组

```php
$arr = array('first', 'second');
```

### 获取数组长度

```php
<?php
$cars=array("Volvo","BMW","Toyota");
echo count($cars);
?>
```

### 遍历数组

```php
<?php
$cars=array("Volvo","BMW","Toyota");
$arrlength=count($cars);

for($x=0;$x<$arrlength;$x++)
{
    echo $cars[$x];
    echo "<br>";
}
?>
```

### 创建关联数组

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
echo json_encode($age);
?>
```

### 遍历关联数组

```php
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");

foreach($age as $x=>$x_value)
{
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
}
?>
```

[传送门](http://www.runoob.com/php/php-arrays.html)

## 数据库相关

### 如何连接

php 连接数据库有两种方式，可以使用`MySQLi`和`PDO`，具体连接方式看菜鸟教程。[传送门](http://www.runoob.com/php/php-mysql-connect.html)

### MySQL 相关

- [创建数据库](http://www.runoob.com/php/php-mysql-create.html)
- [创建表](http://www.runoob.com/php/php-mysql-create-table.html)
- [插入数据](http://www.runoob.com/php/php-mysql-insert.html)
- [插入多条数据](http://www.runoob.com/php/php-mysql-insert-multiple.html)
- [读取数据](http://www.runoob.com/php/php-mysql-select.html)

**tips：**

```php
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
```

在使用 PDO 执行数据库操作时，`host`，`dbname`的`=`左右两边不要写`=`。

### 注意点

- 一定要记得给 php 文件添加编码信息

```php
header("Content-type: text/html; charset=utf-8");
```

- 在给数据库中添加数据时，也要添加编码信息，以防汉字乱码。

```php
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conn->query("set names utf8");
```

- 在 sql 语句中使用变量时，可以用`'{}'`包裹变量。

```php
$sql = "INSERT INTO news (title, content) VALUES ('{$title}', '{$content}')";
```

- 获取前端传入的参数

前端传参的时候会有不同的方式去传参，php 在接收的时候也有对应的方法。

1. `$_GET`：获取 get 传参
2. `$_POST`：获取 post 传参
3. `$_REQUEST`：万能，get 和 post 都可以获取到
