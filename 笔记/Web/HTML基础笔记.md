### 什么是HTML？

HTML称为超文本标记语言，是一种标记语言。

### 形式

\<标签\>内容\</标签\>

### 正则匹配

/<.?+>/

### HTML5标准框架

##### 外部框架

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Document.</title>
    </head>
    <body>
        
    </body>
</html>
```

##### body内部

```html
<nav>页面导航</nav>
<header>头部</header>
<main>文档主要内容</main>
<article>文章</article>
<aside>主题之外</aside>
<footer>尾部</footer>
```

标签的使用没有顺序规则



### HTML5新内容

##### 普通表单

```html
<form action="">
    <input type="text" name="userName"><br>
    <input type="password" name="userPwd"><br>
    <input type="email"><br>
    <!--电话号tel种，没有验证，只能在移动端唤起数字键盘-->
    <input type="tel"><br>
    <!--只能输入合法的网址，必须包含协议头-->
    <input type="url"><br>
    <!--标准搜索框-->
    <input type="search"><br>
    <input type="number"><br>
    <!--提交-->
    <input type="submit"><br>
</form>
```

##### 进阶表单

```html
<input type="range" max="100" min="0" value="50"><br>
<input type="color"><br>
<input type="time"><br>
<!--日期：年月日-->
<input type="date"><br>
<!--兼容性差-->
<input type="datetime"><br>
<input type="datetime-local"><br>
<!--文件，multiple标签声明是否可以多选，email标签也可用-->
<input type="file" name="photo" multiple>
```

```html
<!--一个自动选中自动补全有提示文字的输入框-->
<input type="text" name="useName" placehoder="放置的文字" autofocus autocomplete="on"><br>
<!--一个有允许输入正则验证，必填的电话号框-->
<input type="tel" name="userPhone" required pattern="/^(\+86)?1\d{10}$/"><br>
```

##### 可选列表

```html
<input type="text" list="subjects">

<datalist id="subjects">
	<option value="文本" lable="说明"></option>
    <option value="文本" lable="说明"></option>
    <option value="文本" lable="说明"></option>
    <option value="文本" lable="说明"></option>
    <option value="文本" lable="说明"></option>
</datalist>
```

```html
<input type="url" list="urls">

<datalist id="subjects">
	<option value="www.bing.com"></option>
</datalist>
```

##### output和keygen

output用于存放输出的内容，不常用。

keygen标签元素是秘钥生成器，当提交表单时，会生成两个键，一个是私钥，一个是公钥，实现非对称加密。

```html
<output></output>
<keygen></keygen>
```

##### 进度条

```html
<porgress max="100" value="50"></porgress>
<meter max="100" min="0" high="80" low="40" value="50"></meter>
```

##### base

```html
<base href="http://cn.bing.com?q=" target="_blank">
```

设置本页面基于的位置，`a`元素若没有协议头，则在此链接后跳转（可不经过后端自定义浏览器主页）

##### map

`map`标签定义一个客户端图像映射，`area`元素永远在`map`内，用于定义图像映射中的区域

`<map mapname="name"></map>`定义一个`map`，一个`map`可以定义多个`area`表示不同的区域

`area`标签属性：

|   属性   |                              值                              |               描述               |
| :------: | :----------------------------------------------------------: | :------------------------------: |
|   alt    |                             text                             |       定义此区域的替换文本       |
|  coords  |                         coordinates                          |       定义可点击区域的坐标       |
| download |                           filename                           |     把超链接用于下载一个资源     |
|   href   |                             URL                              |         定义此区域的URL          |
| hreflang |                        language_code                         |       连接的资源使用的语言       |
|  media   |                         media query                          |        链接资源的媒体提示        |
|   rel    | alternamete,author,bookmark,help,license,next,nofollow,noreferrer,prefetch,prev,search,tag |     目标对象与链接对象的关系     |
|  shape   |                    default,rect,circ,poly                    |          定义区域的形状          |
|  target  |                \_blank,\_parent,\_self,\_top                 |        规定在何处打开URL         |
|   type   |                          media_type                          | 用于链接目标的MIME类型的媒体类型 |

```html
<img src="pic.jpeg" alt="你的浏览器不支持img标签" usemap="#name">引用map，但是必须有#
```

##### 其它

```html
<var>变量</var>
<kbd>画框圈重点</kbd>
<samp>语义标签</samp>
<blockquote>整段缩进（引用）</blockquote>
<cite>新重点标签</cite>
<abbr title="文字">鼠标指向显示文字</abbr>
<dfn>新重点标签</dfn>
<ruby>注音<rp>(</rp><rt>zhuyin</rt><rp>)</rp></ruby>
<section>段落，可嵌套，会随着变化字体大小</section>
<details open>
    <summary>展开前显示标题</summary>
    展开时显示内容，open参数表示默认打开
</details>
<picture>不同屏幕宽度下显示不同图片
    <source media="(min-width: 1024px)" srcset="大图片.jpg">可以定义很多这种标签
    <img>对应默认显示的图片
</picture>
<figure>插入图片时底部的标注</figure>
```

### 网页缓存

##### 网页缓存概念

网页中的一些资源每次都需要访问服务器，但是这样会导致服务器过载，所以HTML新推出了网页缓存，以减缓服务器压力

##### 网页缓存文件

后缀名是`.appcache`且读取格式为`text/cache-manifest`的文本文件

文件内编写格式

```cache-manifest
CACHE MANIFEST
#上面一句必须在文档第一行，井号后注释

CACHE:
#需要缓存的文件列表
index.css
index.js
index-img-01.jpg
index-img-02.jpg
index-img-03.jpg
index-img-04.jpg
index-img-05.jpg
index-img-06.jpg

NETWORK:
#每次都需要联网获取的文件列表
../images/13.jpg

FALLBACK:
#如果前面的文件无法被获取则用后面的代替
../images/14.jpg ../Cilents_Error/404.jpg
```

##### 引入缓存文件

```html
<html manifest="demo.appcache">
```

### meta

```html
<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```

防止用户缩放网页引起内容变化，确保移动端和PC端字的大小一样

```html
<meta name="description" content="网站短文介绍">
```

在百度等搜索引擎搜索时显示的站外基本站点介绍

```html
<meta name="keywords" content="关键词">
```

设置搜索引擎搜索时可搜索到本站的关键词

```html
<meta http-equiv="refresh" content="0; http://cn.bing.com">
```

设置0秒后跳转至必应网站

```html
<meta name="author" content="作者">
```

设置作者信息，搜索引擎可能可用

### link

link元素定义了6个属性，其中`rel`值是必须的，它说明了当前文档与被链接资源之间的关系

|   属性   |                              值                              |                描述                 |
| :------: | :----------------------------------------------------------: | :---------------------------------: |
|   href   |                             URL                              |         指定被链接资源的URL         |
| hreflang |                        language_code                         |      指定被链接资源使用的语言       |
|  sizes   |                         HeightxWidth                         | 指定图标的大小，比如`sizes="16x16"` |
|  media   |                         media_query                          | 指定被链接的资源被显示到什么设备上  |
|   rel    | altermate,author,help,icon,license,next,pingback,prefetch,prev,search,sidebar,stylesheet,tag |   指定当前文档与被链接资源的关系    |
|   type   |                          MIME_type                           |      规定被链接文档的MIME类型       |

其中`rel`表的值可选为下表

|     值     |                           描述                           |
| :--------: | :------------------------------------------------------: |
| altermate  |     链接到当前文档的替代版本（比如另一种语言的版本）     |
|   author   |                   链接到当前文档的作者                   |
|    help    |                 链接到当前文档的帮助文档                 |
|    icon    |                    当前文档的图标资源                    |
|  license   |                 链接到当前文档的版权信息                 |
|    next    | 当前文档是集合的一部分，且链接的文档是集合中的下一个文档 |
|  prefetch  |               预先获取的资源（先进性缓存）               |
|    prev    | 当前文档是集合的一部分，且链接的文档是集合中的上一个文档 |
|   search   |                  针对当前文档的搜索工具                  |
| stylesheet |                         载入CSS                          |

### SVG

基础元素

```html
<svg width="400" height="400" viewBox="0 0 400 400"><!-- viewBox是视口大小，相当于长宽比  真正的长宽可以不设置，等于HTML元素大小 -->
    <rect x="50" y="50" width="250" height="250" class="rect" fill="red">矩形</rect>
    <image xlink:href="path/to/image.jpg" width="50" height="50" />图片，可以是SVG图片
    <text x="25" y="20">文字</text>
    <circle cx="50" cy="50" r="20" />圆
    <polygon fill="green" stroke="orange" stroke-width="1" points="0,0 100,0 100,100 0,100 0,0">折线</polygon>
    <line x1="50" y1="50" x2="350" y2="350">线</line>
</svg>
```

动画

```html
    <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />父元素动画
```

|     属性      |         解释         |
| :-----------: | :------------------: |
| attributeName | 发生动画效果的属性名 |
|     from      |   单词动画的初始值   |
|      to       |         结束         |
|      dur      |       持续时间       |
|  repeatCount  |       循环模式       |

可以定义很多个动画标签，若需要变形，使用`<animateTransform>`标签

合成组 && 不显示合成

```html
<svg width="300" height="300">
	<g id="g">
        <text x="25" y="20">圆形</text>
        <circle cx="50" cy="50" r="20" />
    </g>
    <use href="#g" x="100" y="0" fill="red" stroke="green">使用图形组</use>
    <defs>不显示组合，可以正常引用
        <g id="g">
        	<text x="25" y="20">圆形</text>
        	<circle cx="50" cy="50" r="20" />
    	</g>
    </defs>
</svg>
```

自定义图形

```html
<path d="M 0,0 L 100,200 ..."></path>
```

|                           指令                           |                             描述                             |
| :------------------------------------------------------: | :----------------------------------------------------------: |
|                          M x,y                           |                            移动到                            |
|                          L x,y                           |                           画直线到                           |
|                           H x                            |                        水平画直线到X                         |
|                           V y                            |                        垂直画直线到Y                         |
| A rx ry 顺时针角度 1大弧0小弧 1顺时针0逆时针 终点x 终点y | 画一段到x,y的椭圆弧，x,y轴半径分别为rx,ry，相对于x旋转xrr度，maxrr等于1或者0代表弧线大于或小于180度，rry等于0或1代表弧线按照逆时针或顺时针旋转。 |
|                            Z                             |                           闭合路径                           |

**SVG元素均支持CSS，属性不同**

### 少量其他属性

* contenteditable="true"   设置元素可以被非技术手段编辑
