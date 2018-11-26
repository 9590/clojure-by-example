# Clojure by Example 中文版（通过例子学习clojure）

[![CircleCI](https://circleci.com/gh/kimh/clojure-by-example.svg?style=svg)](https://circleci.com/gh/kimh/clojure-by-example)

This repository hosts code for [Clojure by Example](http://kimh.github.io/clojure-by-example/)
这个仓库的主页是：....

## Development
## 开发

Run the following commands to run locally.
在本地运行下面的命令

```
bundle install
bundle exec middleman server
```

The command output from middleman tells you the url to access.
运行命令后会输出访问的地址。

## Updating Slate
## 更新slate

This site is created based on [Slate](https://github.com/lord/slate). The only way I know to update Slate is copying all files from the new version of Slate repository
and update only what you need for Clojure By Example site.
这个网站是基于[Slate](https://github.com/lord/slate)建立的。更新Slate的方法就是把Slate新版本仓库里的所有文件拷贝过来，更新此“Clojure By Example”网站所需要的文件。

Namely they are
这些文件是：

- `source/index.html.md` for the main content
- `source/index.html.md` 用于主要内容
- `source/stylesheets/_variables.scss` for font size
- `source/stylesheets/_variables.scss` 用于字体大小
- `source/layouts/layout.erb` for "Clojure By Example" logo
- `source/layouts/layout.erb` 用于"Clojure By Example" logo图标

See [this commit](https://github.com/kimh/clojure-by-example/commit/a2872b5660b89af5137a02be7169ae6c788b31b7) as an example.
查看例子： [this commit](https://github.com/kimh/clojure-by-example/commit/a2872b5660b89af5137a02be7169ae6c788b31b7) .

## Todo

* test 测试
* clean up the confusion in sequence. probably I should use coll where sequence is mentioned because sequence is not data type. 清除排序的混乱。可能要粘住原本的顺序，因为目前的顺序不是数据类型。
* defrecord 导航
* destructuring 重构
* dissoc in Map
