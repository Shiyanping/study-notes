# git 常用命令分享

## 一、git 简介

> 1. git 属于分布式版本管理，更利于多人不同工作小组的相互协作
> 2. 相比于集中式管理，如`svn`来说，git 更加完善速度更快

### 1. 安装

这个就不赘述了，直接网上下载就行

### 2. 配置 git

#### 2.1 用户信息

```
git config --global user.name
git config --global user.email
```

#### 2.2 查看配置信息

```
git config --list
```

#### 2.3 获取帮助信息

```
git help config
```

## 二、git 文件状态

### 1. git 的三种状态

1. 已提交（committed）-> 本地仓库
2. 已修改（modified） -> 工作目录
3. 已暂存（staged）-> 暂存区域
   ![](http://cdn.jinyueyue.cn/15165923162466.jpg)

### 2. git 工作流程

1. 在工作目录中修改某些文件。
2. 对修改后的文件进行快照，然后保存到暂存区域。

```
git add .
```

3. 提交更新，将保存在暂存区域的文件快照永久转储到 Git 目录中。

```
git commit -m "msg"
```

## 三、git 分支管理

### 1. 获取 git 仓库

> 获取 git 仓库有两种方法
>
> 1. 在现存的目录下，通过导入所有文件来创建新的 Git 仓库
> 2. 从已有的 Git 仓库克隆出一个新的镜像仓库来。

#### 1.1 在现有的工作目录中初始化新仓库

1. 在 gitlab 或者 github 上新建一个项目，并且复制链接
2. 初始化本地仓库，并提交到本地

```
touch README.md     //创建说明文档
git init    //初始化本地仓库
git add .  //跟踪所有文件 跟踪某个文件直接将.替换成文件名即可
git commit -m ‘提交说明’
git remote add origin 远程仓库地址    //链接远程仓库
git push -u origin master   //创建一个 upStream （上传流），并将本地代码通过这个 upStream 推送到 别名为 origin 的仓库中的 master 分支上
```

#### 1.2 直接克隆现有的项目

```
git clone ssh://git@gitlab.coohua.com:20755/business/newsearn.git
```

### 2. 文件操作

#### 2.1 查看文件状态

```
git status
```

#### 2.2 跟踪文件

```
git add 文件名
```

#### 2.3 忽略文件

```
cat .gitignore
```

> 有些文件是我们不想提交的，比如 node_modules，可以创建一个.gitignore 文件，然后在文件中将自己不想提交的文件添加就可以了

#### 2.4 文件对比

```
git diff    //可以查看尚未暂存的文件两次修改的差别
git diff --cached   //可以查看已经暂存起来文件的差别
```

#### 2.5 提交文件

```
git commit -m ""    //提交文件添加提交记录
git commit -a -m ""     //跨过 git add . 直接提交
```

#### 2.6 移除文件

> 如果已经添加到缓存中的文件，想要从缓存中移除

```
git rm 文件名
```

#### 2.7 查看提交记录

```
git log
```

> 后面可以带参数，常用 `-p` 选项展开显示每次提交的内容差异，用 `-2` 则仅显示最近的两次更新

#### 2.8 撤销修改

- 修改最后一次修改

```
git commit --amend
```

- 取消已经暂存的文件

```
git reset HEAD <file>   //取消已经暂存的文件
```

> git add 之后用 git status 完全可以查看到命令，所以不需要死记硬背

```
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   idt-config.js

```

- 取消对文件的修改

```
git checkout -- <file>   //取消对文件的修改

```

> git add 之后用 git status 完全可以查看到命令，所以不需要死记硬背

```
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   idt-config.js

no changes added to commit (use "git add" and/or "git commit -a")

```

## 四、git 常用技巧

### 1. 常用操作

- 从远程拉取代码  
  `git pull = git fetch + git merge`
- 查看分支  
  `git branch`  
  `git branch -r`  
  用过之后就会发现有什么不一样
- 切换分支  
  `git checkout <分支名>`
- 创建分支  
  `git checkout -b <分支名>`
- 合并代码  
  `git checkout master`
  `git merge 分支名`
- 删除代码  
  `git branch -d iss53`
- 回滚代码  
  `git revert log 名`
- 放入缓存  
  `git stash`
- 将缓存里的文件拿出来合并  
  `git stash pop`
- 查看标签  
  `git tag`
- 回滚到指定版本  
  `git reset --hard <commit ID号>`
- 回滚后推送到远程分支  
  `git push -f origin master`

### 2. 修改别名

```
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status

```

### 3. 解决冲突

1. 不同分支修改不同文件，git 会自动合并
2. 不同分支修改同一文件，如果没修改同一行或者同一部分的代码，git 也会自动合并
3. 不同分支修改了同一行代码，git 会等待人工合并之后再做处理

```
<<<<<<< HEAD:index.html
<div id="footer">contact : email.shi@github.com</div>
=======
<div id="footer">
please contact us at shi@github.com
</div>
>>>>>>> iss53:index.html

```

> 会使用`=======`分割，上半部分是 master 的，下半部分是分支的代码，手动删除`=======`,`<<<<<<<`,`>>>>>>>`这些标示后，重新提交即可。

## 参考文档

[Pro Git（中文版）](https://gitee.com/progit/)
