# WinMin Jekyll Theme
此主题修改自 [3-Jekyll Theme](https://github.com/P233/3-Jekyll/)

## 特点

* 除了博客，还利用集合来存放网上搜集的文章。这些内容因为没有发表时间，所以不适合放在博客里。


## TODO

* 搜索功能
* 按标签现实集合内的文档列表


其他建议欢迎[提交 issue](https://github.com/fshuizhe/weimin/issues)


## 使用

### 设置集合

在`_config.yml` 内设置你想要现实的集合

### 修改样式

样式相关的 Sass 变量都存储在 `/css/main.sass` 文件中，修改这个文件可以满足大部分样式定制的需求。建议首先修改 `$gradient-start` 与 `$gradient-end` 两个变量，给自己的博客使用独一无二的侧边栏背景。

### 替换图片

请不要忘记替换 `/assets/img/` 内的图片。`avatar.jpg` 是侧边栏头像的图片，`qrcode.jpg` 会在提示浏览器不兼容时使用。[QR Code 生成器](https://www.unitag.io/qrcode)
