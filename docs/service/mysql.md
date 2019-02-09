# mysql

## 安装 mysql

```bash
brew install mysql
```

## 启动 mysql

```sql
mysql.server start
```

## 登录 mysql

```sql
mysql -u root
```

## 新建数据库

```sql
create database cAuth;
```

## 新建表

```sql
create table testTable(id int,name varchar(100));
```

## 描述表的内容

```sql
desc tableName;
```

## 删除表

```sql
drop table tableName;
```

## 使用数据库

```sql
use cAuth;
```

## 查看有哪些表

```sql
show tables;
```

## 查询表内容及 SQL 方法

- 查询表内所有的信息

```sql
SELECT * FROM tableName;
```

- 对表内容进行筛选查找

```sql
SELECT * FROM tableName WHERE id = X;
```

- 查询符合条件的数量

```sql
SELECT count(*) FROM tableName WHERE id = X;
```

- 查询某个字段下的最小值和最大值

```sql
SELECT min(字段名), tableName.* FROM tableName;
SELECT max(字段名), tableName.* FROM tableName;
```

- 返回一个随机数

```sql
SELECT RAND();
```

- 输出当前时间

```sql
SELECT NOW();
```

- 拼接字符串

```sql
SELECT CONCAT('111', '222');

-- 在指定的表中连接指定的字段
SELECT CONCAT(字段一, 字段二) FROM 数据表;
```

- 查询符合某个字段区间内数据

有两种方法，可以使用`between...and`，也可以使用`>`，`<`。

```sql
-- 第一种方法
SELECT * FROM 表名
WHERE 筛选的字段名 BETWEEN 区间一 AND 区间二;

-- 第二种方法
SELECT * FROM 表名
WHERE 筛选的字段名 > 区间一
AND 筛选的字段名 < 区间二;
```

- 模糊查询

```sql
SELECT * FROM 表名
WHERE 查询的字段名 LIKE '%X%';
-- X 属于需要模糊查询的字段，% 是通配符
-- 'X%'：以某个字符开头
-- '%X'：以某个字符结尾
-- '%X%'：前后不限，只要含有X即可
```

- 排序

```sql
SELECT * FROM 表名
ORDER BY 需要根据哪个字段排序 DESC;
-- DESC：降序
-- ASC：升序，可以省略
```

- 连表查询

```sql
-- 第一种方法
SELECT 需要的字段(逗号连接) FROM 需要连接的表名(逗号间隔)
WHERE 连接条件(如：t_books.library_id = t_library.library_id);

-- 第二种方法
SELECT 需要的字段(逗号连接)
FROM 表1 LEFT JOIN 表2
ON 连接条件(如：t_books.library_id = t_library.library_id);
```

> 豆瓣 api：https://douban.uieee.com/v2/book/1220562
