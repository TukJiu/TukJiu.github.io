## 引入

```css
@import url("css.css")
```

css内部引入头文件

## 媒体查询/小细节

```css
*{
    -webkit-tap-highlight-color:transparent; /*去除移动端点击背景*/
    xxx   ! important; /*最高优先级*/
    -webkit-appearance:none; /*去除ios默认样式*/
    -webkit-touch-callout: none;/*禁止使用弹出菜单*/
    box-sizing: border-box; /*不用考虑外边距*/
}
```

在实战中，图片应该使用二倍图，可放大，可速度平衡

```html
<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```

防止用户缩放网页引起内容变化，确保移动端和PC端字的大小一样

```html
<link href="1.css" media="screen">屏幕设备
<link href="1.css" media="print">打印机
<link href="1.css" media="all">所有设备
<style media="如上">
    @import url("1.css") print; /*引入时限制*/
    @media screen {}   /*便携时限制*/
    @media only screen{} /*仅高版本可用*/
    @media not screen{} /*除了屏幕设备外都可用*/
</style>
```

```css
@media screen and (orientation: landscape){}/*屏幕设备并且
portrait：指定输出设备中的页面可见区域高度大于或等于宽度
landscape：除portrait值情况外，都是landscape*/
/*
	max-width	最大宽度
	min-width	最小宽度
	and			和 关键字
	,			或 关键字
*/
```

```css
outline: 2px #3498db solid; /*不算在触发区内的外边框*/

text-stroke: 2px #555;/*会场景复杂且文字不突出场景的增加白色描边*/
text-stroke: 2px #555;

object-fit: cover; /*图片等比例缩放*/

display: list-item;/*类似列表的显示方式*/
list-style-type: circle;

text-indent: 1em;/*缩进*/

word-break: break-word;/*文字强制换行*/

letter-spacing: .25em;/*增加文字间间距*/

writing-mode: vertical-lr;/*文字对其方式*/
writing-mode: vertical-rl;

text-transform: capitalize; /*首字母大写
lowercase  全部小写
uppercase  全部大写
*/

user-select: none;/*防止用户选中*/

pointer-events: none;/*元素不触发事件*/

visibility: hidden;/*元素不可见*/

scroll-margin-top: 2em;/*元素跳转时上部保留空行*/

scroll-behavior: smooth;/*使用a标签跳转元素时滚动条将会更平滑*/
```

以上框：不常用属性

## 颜色选择器

RGB即为RED、GREEN、BLUE

HSB即色相（H）、饱和度（S）、明度（B）

## 元素选择器

### 子元素选择器

```css
form > fieIdset > meter,
form > fieIdset > input{
    /*内容*/
}
```

会选中form中的fieIdset中的meter和input

### 元素位置选择器

```css
E:nth-last-child(n){
    /**/
}
```

倒数所有元素

```css
E:nth-child(n){
    /**/
}
```

正数所有元素

```css
li:nth-of-type(odd){
    /*奇数*/
}
li:nth-of-type(even){
    /*偶数*/
}
```

奇数和偶数个数的参数选择器，一般用于棋盘等

```css
li:nth-last-of-type(-n+5){
    /*选择最后4个*/
}
li:nth-of-type(-n+5){
    /*选择前4个*/
}
```

`n`：默认取值范围是 0-无限 个子元素个数，但当n<=0时，该次数的选择器无效。所以可以对n进行运算以选中元素

> -n+5
>
> 0>>5
>
> 1>>4
>
> ...
>
> 4>>1
>
> 5>>0

```css
E:target{
    /**/
}
```

当当前元素作为描点且被跳转时激活

#### nth-child与nth-of-type的区别

`nth-child`会先选中前面第n个元素，然后符合E的被修饰。

`nth-of-type`会先挑选E元素，然后第n个E元素被修饰。

### 伪类选择器

```css
li::before{
    content: "";
    position: absolute;
    /*参数*/
}
li::after{
    content: "";
    position: absolute;
    /*参数*/
}
```

伪元素选择器(凭空生成一个元素)

```css
li:empty{
    /*参数*/
}
```

只会选中空的li标签，并且进行修饰

```css
E::first-letter{
    /*参数*/
}
```

选中第一个字母或字，但不是词组

```css
E::first-line{
    /*参数*/
}
```

文本的第一行

```css
E::selection{
    /*参数*/
}
```

可以改变被选中时文本的样式

```css
:root{}
```

选中`html`标签下的元素

### 属性选择器

```css
div[class]{
    /**/
}
```

表示存在`class`即可

```css
div[class=m]{
    /**/
}
```

值必须完全相等

```css
div[class*=m]{
    /**/
}
```

只要包含`m`就可以

```css
div[class^=m]{
    /**/
}
```

开头必须有`m`

### 同级标签选择器

```css
a:hover~li{
    /*参数*/
}
```

当a元素被鼠标指向时触发li标签的样式变化，也可以正常使用。

```css
a:link{/*a标签有链接指向时*/
    /*参数*/
}
a:visited{/*被访问过后*/
    /*参数*/
}
a:hover{/*被鼠标指向*/
    /*参数*/
}
a:active{/*被鼠标点击*/
    /*参数*/
}
```

触发事件时自己的变化

## 背景图片

### 一句话

```css
background: color url("bg.jpg") no-repeat fixed center / cover;
```

### 背景图片的填充方式

```css
background-size: contain;
```

图片大于容器，有可能造成空白区域，会将图片放小

图片小于容器，有可能造成空白区域，会将图片放大

```css
background-size: cover;
```

图片大于容器，等比例缩小，可能造成图片部分内容不可见

图片小于容器，等比例放大，可能造成图片部分内容溢出

```css
background-image: url("../images/sprites.png");
background-position: -20px 0;
```

设置背景坐标的**偏移**

```css
background-origin: content-box;
```

设置背景坐标的原点

`border-box`： 从border的位置开始填充背景，与border重叠

`padding-box`：从padding的位置开始填充背景，与padding重叠

`content-box`：从内容的位置开始填充背景

```css
background-clip: content-box;
```

裁剪背景图片

`border-box`：显示border以及内部内容

`padding-box`：现实padding以及内部内容

`content-box`：现实content内部内容

```css
background-size: auto;
```

设置背景图片大小，推荐将图片尽量缩小展示

`auto`：原始图片大小

`number`：通过数值设置图片的大小

`percentage`：通过百分比设置大小

`cover`：放大方式铺满

`contain`：缩小方式铺满

```css
background-attachment: fixed;
```

设置在滚动容器的背景的行为，跟随或固定

`fixed`代表背景图片位置不会变化，`scroll`代表背景图片跟随滚动轴移动，`local`代表背景图片跟随内容移动

## 边框设置

### 边框圆角

```css
border-radius: 10px 2px 3px 5px;
```

可以分别设置四个角的圆角，如果只有两个参数，则设置两个对角。

一般情况下，可以只有一个参数负责设置四个角

### 边框重复

```css
border-image-repeat: round;
```

`repeat`直接平铺，`round`缩放且显示完整

### 其他

`border-image-source: url("image.jpg")`：指定图片边距的路径，默认填充到四个角点

`border-image-slice: 27 fill`：设置四个角上的裁切图片的距离，fill属性可以使内容也正常填充

`border-image-width: 27px`：边框图片显示（可见）的宽度

`border-image-outset: 0px`：向外扩展边框

## 元素阴影

一个元素可以设置多个阴影，不同于文字阴影（text-shadow)，元素阴影可以修饰大部分元素

### 内阴影

```css
e{
    box-shadow: 3px 3px 3px #ccc inset;
}
```

### 外阴影

```css
e{
    box-shadow: 3px 3px 3px #000;
}
```

### 文字/边框/元素 阴影格式和对比

```css
text-shadow: offsetX offsetY blur color;
box-shadow: h v blur spread color inset;
```

## 伪元素

伪元素特点：必须添加content样式，否则后期不可见。默认是行级元素，如果想设置宽高，需要转换成块级元素。

### befor/after

before和after是语义伪元素。

```css
E:before{
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
}
```

```css
E:after{
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
}
```

## 渐变

产生渐变，也是产生图像，可以省去服务器的上传流量。

```css
background: radial-gradient(red,blue);
background: radial-gradient(形状 大小 坐标,颜色1,颜色2,...);
```

径向渐变

形状：

* circle：产生正方形的渐变色
* ellipse：适配当前形状

坐标：默认在正中心，可以赋值坐标

* left：左
* center：中心
* right：右
* top：上
* bottom：下

可以组合：例如left top

大小：

* closet-side：最近边
* farthest-side：最远边
* closest-corner：最近角
* farthest-corner：最远角

设置颜色的位置：

`background: radial-gradient(red,red 50%,blue 50%,blue);`

**线性渐变把`radial`换成`linear`即可**

## 动画与变换

### 流程控制

```css
transition: NAME TIME TIME-FUNCTION TIME-OUT
```

`transition-property`：(NAME)规定属性的名称

`transition-duration`：(TIME)规定完成一个动作所需时间

`transition-timing-function`：(TIME-FUNCTION)细节规划/时间曲线

`transition-delay`：(TIME-OUT)延时执行

#### 时间曲线

| 值                    | 描述                       |
| --------------------- | -------------------------- |
| linear                | 线性速度                   |
| ease                  | 缓出缓入                   |
| ease-in               | 缓入                       |
| ease-out              | 缓出                       |
| ease-in-out           | 缓入缓出                   |
| cubic-bezier(n,n,n,n) | 自定义值，在0和1之间的数值 |

### 触发动画

`transition:all 2s steps(4)`表示通过4步2在秒内完成所有效果

`transition: left 2s linear 0s,background-color: 5s linear 0s;`定义两种动画效果

### 变换

|        属性         |                 描述                 |
| :-----------------: | :----------------------------------: |
|      transform      |      向元素应用 2D 或 3D 转换。      |
|  transform-origin   |     允许你改变被转换元素的位置。     |
|   transform-style   | 规定被嵌套元素如何在 3D 空间中显示。 |
|     perspective     |       规定 3D 元素的透视效果。       |
| perspective-origin  |       规定 3D 元素的底部位置。       |
| backface-visibility |   定义元素在不面对屏幕时是否可见。   |

#### 2D

`transform:scale(1,1)`：以元素中心为原点缩放元素，可以不传入第二个值

`transform:skew(x,y)`：元素斜切，可以让元素倾斜显示，不会让元素旋转，只会改变元素的形状

`transform:rotate(0)`：旋转某个元素，但不会改变元素的形状

`transform:translate(x,y)`：移动某个元素，可以通过`transform-origin`设置中心

#### 3D

`transform-style: flat;`默认值，每个子元素自己变换，设置成`preserve-3d`可以开启3D空间，每个子元素在这个父元素内做变换

`transform: perspective(1px)`设置元素距离屏幕的距离，将这个空间进行透视投影

`transform: perspective-origin: x y;`中心参考点位置

|                             函数                             |                   描述                    |
| :----------------------------------------------------------: | :---------------------------------------: |
| matrix3d(*n*,*n*,*n*,*n*,*n*,*n*, *n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) |  定义 3D 转换，使用 16 个值的 4x4 矩阵。  |
|                   translate3d(*x*,*y*,*z*)                   |              定义 3D 转化。               |
|                       translateX(*x*)                        |    定义 3D 转化，仅使用用于 X 轴的值。    |
|                       translateY(*y*)                        |    定义 3D 转化，仅使用用于 Y 轴的值。    |
|                       translateZ(*z*)                        |    定义 3D 转化，仅使用用于 Z 轴的值。    |
|                     scale3d(*x*,*y*,*z*)                     |            定义 3D 缩放转换。             |
|                         scaleX(*x*)                          | 定义 3D 缩放转换，通过给定一个 X 轴的值。 |
|                         scaleY(*y*)                          | 定义 3D 缩放转换，通过给定一个 Y 轴的值。 |
|                         scaleZ(*z*)                          | 定义 3D 缩放转换，通过给定一个 Z 轴的值。 |
|                rotate3d(*x*,*y*,*z*,*angle*)                 |              定义 3D 旋转。               |
|                       rotateX(*angle*)                       |          定义沿 X 轴的 3D 旋转。          |
|                       rotateY(*angle*)                       |          定义沿 Y 轴的 3D 旋转。          |
|                       rotateZ(*angle*)                       |          定义沿 Z 轴的 3D 旋转。          |
|                       perspective(*n*)                       |       定义 3D 转换元素的透视视图。        |

### 非触发动画与时间曲线

创建动画通过创建时间曲线实现

```css
@keyframes NAME{
    form{
        body{
            background: #FFF;
        }
    }
    to{
        body{
            background: #000;
        }
    }
}
```

```css
@keyframes NAME{
    0%{
        /*DO SOMETHING*/
    }
    100%{
        /*DO SOMETHING*/
    }
}
```

引用：

```css
animation-name: NAME;/*指定引用的时间曲线*/
animation-duration: 2s;/*动画在规定的时间内完成*/
animation-iteration-count: infinite;/*动画的执行次数，默认为一次，当前为无限*/
animation-direction: alternate;/*设置交替动画，当前为来回交替*/
animation-delay: 2s;/*动画执行前延迟*/
animation-fill-mode: both;
/*
设置动画结束时状态，默认执行完毕后回归原始状态。
forwards:  保留动画结束状态，延迟时不初始化。
backwards: 不保留状态，延迟时初始化。
both:      保留结束状态，延迟初始化。
*/

animation-timing-function: linear;/*播放时间曲线调整*/
animation-play-state: paused;/*动画状态，当前是暂停，running是运行*/
```

在使用时，根据需求确定应该使用哪种动画。

可以通过`animation`在编译器查看一句话函数方法，推荐使用一句话。

## web字体与字体图标

开发人员可以为自己的网页指定特殊的字体，无需考虑用户的计算机是否安装了此字体。它的支持程度比较好，完全抛弃了图片存储特殊图标字体的方式。

```css
@font-face{
    font-family: 'NAME'; /*设置名称*/
    src: url('font.eot');/*IE9*/
    src: url('font.eot?#iefix') format('embedded-opentype'),/*IE6-IE8*/
    url('font.woff') format('woff'),/*chrome,firefox*/
    url('font.ttf') format('truetype'),/*chrome,firefox,opera,Safari,Android,IOS 4.2+*/
    url('font.svg#webfont') format('svg');/*IOS4.1-*/
}

body{
    font-family: NAME; /*应用*/
}
```

### 字体样式

```css
font-size: 1em;
```

设置字体大小

```css
font-weight: normal;
```

字体重量： `normal`正常、`bold`加粗、`lighter`继承并加细、`bolder`继承并加粗、可以写入数字。

```css
font-style: normal;
```

字体样式： `normal`正常、`italic`斜体、`oblique`倾斜体。

```css
font-family: ...; //senf, sans-serif, monospace
```

Fantasy里面主要是那些具有特殊艺术效果的字体。

Papyrus, Herculanum, Party LET, Curlz MT, Harring, fantasy.

Times New Roman, Garamond, Georgia.  //笔画两端多∠

Trebuchet, Arial, Verdana.  //笔画简洁

```css
line-height: 800px;
```

行高

```css
font: font-style font-weight font-size / line-height font-family;
```

简写

### user-select用户选中

```css
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;
```

分别是： 禁止，自动，无限制（默认），内容，全部

## 多列布局

CSS3新出现的多列布局是传统HTML网页中块状布局的扩充。为了适应大屏显示器，要让文字像报纸一样展现在屏幕上，形成高效率的阅读页面。

|     属性     |         解释         |
| :----------: | :------------------: |
| column-count |   设置列的具体个数   |
| column-width |     控制列的宽度     |
|  column-gap  |    两列之间的间隔    |
| column-rule  | 列的宽度、样式、颜色 |
| column-span  |  元素应该横跨多少列  |

新的单位`fr`相当于网格布局剩下的空间的等比

`repeat(3, 1fr)` === `1fr 1fr 1fr`

`minmax(min,max)`函数规定了最小值和最大值

## 伸缩布局

传统的布局基于盒装模型，依赖display和position与float属性。CSS3做了改进，形成伸缩布局。

> 经过本人测试，该布局对适应大小不同的屏幕有良好效果

通过给父元素写入`display: flex;`属性实现将子元素变成伸缩项。

`justify-content: flex-start;`设置主轴方向，可用值有：`flex-start`，`flex-end`，`center`，`space-between`，`space-around`。

使用方法：

```css
.box{
    box-sizing: boder-box;/*将父元素（当前元素）设置为盒子，子元素自动变成伸缩项*/
    display: flex;
    justyfy-content: space-around;/*常用的属性*/
}
```

若子元素超标，则会引起换行，以下设置如何换行：

```css
flex-wrap: wrap-reverse;/*翻转*/
nowrap    收缩不换行
wrap      换行
```

调整主轴：

```css
flex-direction: row;/*横向*/
column              /*竖向*/
row-reverse         /*翻转横向*/
column-reverse      /*翻转竖向*/
```

 `flex-flow`相当于`flex-wrap`和`flex-direction`的结合

`flex`最简写用法：

flex是flex-grow,flex-shrink和flex-basis的简写，默认值为`0 1 auto`，后两个属性可选。

`flex: [flex-grow] [flex-shrink] [flex-basis]`

`flex: 0`该项目所占用空间比例

`flex: auto`占满剩余空间

## 网格布局

CSS布局新方案，可以把页面画成一个一个的格子，每个元素占据一个或多个格子，更有利于页面排布。

```css
.grid{ /*对父元素进行设置*/
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /*分3列，且按比例排布（fr比例单位）*/
    /*grid-template-columns: repeat(4,1fr)； 重复设置*/
    column-gap: 24px; /*列间距*/
    row-gap: 24px;/*行间距*/
    grid-template-areas: /*设置显示区域*/
        "header header header"
        "sidebar content content"
        "footer footer footer";
    align-items: center;/*元素在它自己格子中的位置 - 纵向*/
    jusify-items: space-between; /*元素在它自己格子中的位置 - 横向*/
}
/*对子元素进行设置*/
header{
    grid-area: header; /*放到header位置*/
}
main {
    grid-area: content;
}
aside {
    grid-area: sidebar;
}
footer {
    grid-area: footer;
}
.subgrid{ /*占据第一个到第三个横行的元素*/
    grid-colunm-start: 1;
    grid-column-end: 3;
    /*grid-column: 1 / 3;  简写*/
}
.subgrid{ /*占据第一个到第三和竖行的元素*/
    grid-row-start: 1;
    grid-row-end: 3;
    /*grid-row: 1 / -1;  简写，-1代表到结尾*/
    /*grid-row: 1 / span 2; 占据1+2=3个格子*/
}
/*最简： grid-area: 起始行号 / 起始列号 / 结束行号 / 结束列号; */
```

## CSS嵌套

HTML框架

```html
<article>
	<h1></h1>
    <p>
        <a></a>
    </p>
</article>
```

CSS嵌套可以使CSS代码更加简洁，提高开发效率和代码可读性。

```css
article.post{
    & h1{}
    & p{
        & a{}
    }
}
```

& 叫做嵌套选择器，只能放在开头，指代当前的父级选择器。

如果想把这个符号放在其他地方请用@nest：

```css
.someClass{
    @nest .otherClass & {}
}
```

等同于

```css
.someClass .otherClass .someClass{}
```

## filter滤镜

 CSS属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像，背景和边框的渲染。

```css
filter: url("filters.svg#filter-id");
```

插入一个SVG元素，并使它覆盖住被修饰的元素，此外，`filter`还自带一些实用的函数

```css
filter: blur(5px); /*毛玻璃 或 高斯模糊*/
filter: brightness(0.4); /*线性乘法器   亮度*/
filter: contrast(200%);/*对比度*/
filter: drop-shadow(16px 16px 20px blue);/*阴影模糊效果  可带有GPU加速*/
filter: grayscale(50%);/*灰度*/
filter: hue-rotate(90deg);/*色相旋转   色相偏转*/
filter: invert(75%);/*反转  反色*/
filter: opacity(25%);/*透明度  可带有GPU加速*/
filter: saturate(30%);/*饱和度*/
filter: sepia(60%);/*深褐色*/
```

函数可以通过空格符号分隔进行一次性多函数调用，此种调用方法会覆盖该元素内的所有内容，所以推荐使用`backdrop-filter`。

**`backdrop-filter`** 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。 因为它适用于元素*背后*的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

## CSS滚动条选择器

你可以使用以下伪元素选择器去修改各式浏览器的滚动条样式:

- `::scrollbar` — 整个滚动条.
- `::scrollbar-button` — 滚动条上的按钮 (上下箭头).
- `::scrollbar-thumb` — 滚动条上的滚动滑块.
- `::scrollbar-track` — 滚动条轨道.
- `::scrollbar-track-piece` — 滚动条没有滑块的轨道部分.
- `::scrollbar-corner` — 当同时有垂直滚动条和水平滚动条时交汇的部分.
- `::resizer` — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).

## element元素复制函数

```css
element(id);
```

CSS 函数 **`element()`** 定义了一个从任意的 HTML 元素中生成的图像值。该图像值是实时的，这意味着如果被指定的 HTML 元素被更改，CSS修饰的元素显示的图像值也会被更改。

## scroll-snap-type

**`scroll-snap-type`** CSS 属性定义在滚动容器中的一个临时点可以粘连式滑动（可以制作经典H5界面）。

此属性不能用来指定任何精确的动画或者物理运动效果来执行临时点，而是交给用户代理来处理。

- `none`

  当这个滚动容器的可视的 viewport 是滚动的，它必须忽略临时点。

- `x`

  滚动容器只捕捉其水平轴上的捕捉位置。

- `y`

  滚动容器只捕捉其垂直轴上的捕捉位置。

- `block`

  滚动容器仅捕捉到其块轴上的捕捉位置。

- `inline`

  滚动容器仅捕捉到其内联轴上的捕捉位置。

- `both`

  滚动容器会独立捕捉到其两个轴上的位置（可能会捕捉到每个轴上的不同元素）

- `mandatory`

  如果它当前没有被滚动，这个滚动容器的可视视图将静止在临时点上。意思是当滚动动作结束，如果可能，它会临时在那个点上。如果内容被添加、移动、删除或者重置大小，滚动偏移将被调整为保持静止在临时点上。

- `proximity`

  如果它当前没有被滚动，这个滚动容器的可视视图将基于基于用户代理滚动的参数去到临时点上。如果内容被添加、移动、删除或者重置大小，滚动偏移将被调整为保持静止在临时点上。

```css
none | [ x | y | block | inline | both ] [ mandatory | proximity ]?
```

## clip-path显示路径裁切

```css
clip-path: none; /*默认*/
```

|                     值                      |         解释          |
| :-----------------------------------------: | :-------------------: |
|                    none                     |       默认的无        |
|                    url()                    | 传入一个路径文件的url |
|                 margin-box                  |        选取点         |
|                 border-box                  |        选取点         |
|                 padding-box                 |        选取点         |
|                 content-box                 |        选取点         |
|                  fill-box                   |        选取点         |
|                 stroke-box                  |        选取点         |
|                  view-box                   |        选取点         |
|             insert(100px 50px)              |       插入切割        |
|           circle(50px at 0 100px)           |       圆形切割        |
| polygon(50% 0, 100%, 50%, 100% 100%, 0% 0%) |    矩形（自定义）     |
|       path('M0.5,1 C0.5, 1, 0......')       |         路径          |

## 图片视频宽高比

```css
aspect-ratio: 16 / 9; /*16:9*/
aspect-ratio: 4; /* === 4 / 1 */
```

对于视频，图片，或元素均适用

## css自定义属性|变量

```css
:root {
    --main-bg-color: brown;
}
element {
    background-color: var(--main-bg-color);
}
```

基本使用方法（带有作用域）

## 样式组合

css一行文本超出

```css
overflow: hidden;
text-overflow: cllipsis;
white-space: nowrap;
```

多行文本超出

```css
display: -webkit-box;
webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

IOS滑动优化

```css
overflow: auto;
-webkit-overflow-scrolling: touch;
```

三角形角标

```css
div {
    width: 0;
    height: 0;
    border: 5px solid #transparent;
    border-top-color: red;
}
```

元素水平垂直居中

```css
div {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
```

```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

```css
.ex1 .parent {
    display: grid;
    place-items: center;
}
```

可以结构的自适应布局

```css
.ex2 .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.ex2 .box {
    flex: 1 1 150px;/*自动扩展*/
    flex: 0 1 150px;/*最小值*/
    margin: 5px;
}
```

经典sidebar

```css
.ex3 .parent {
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
}
```

固定的header和footer

```css
.ex4 .parent {
    display: grid;
    grid-template-rows: auto 1fr auto;
}
```

CSS文字渐变手写特效

```html
<div class="c">
    <!--文字-->
	<svg width="500" height="250" class="text">
        <!--定义渐变-->
    <defs>
        <linearGradient id="geekColor" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#91bd3a">
                <!--定义动画-->
                <animate attributeName="stop-color" values="#91bd3a;#12cad6;#91bd3a" dur="10s" begin="3s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="100%" stop-color="#12cad6"></stop>
        </linearGradient>
    </defs>
    	<text class="logo_text" x="100" y="100">TEXT</text>
	</svg>
</div>
```



```css
.c {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.logo_text {
    font-family: "PingFang SC";
    font-size: 96px;
    fill: none;
    stroke: url(#geekColor);
    stroke-width: 1;
    
    /*易错点*/
    stroke-dasharray: 10 800;
    stroke-dashoffset: 10;
    
    animation: 3s linear 0s darwing forwards;
}

@keyframes drawing {
    to {
        stroke-dasharray: 800;
        stroke-dashoffset: 0;
    }
}
```





# 页面设计

原子设计的五个层级： `原子`、`分子`、`组织`、`模板`、`页面`。

在人们挑选商品和服务时，只需要7秒钟就可以确定是否感兴趣，而在这短暂的几秒内，色彩的作用占了67%

## 文字排版

* 中文英文之间需要添加空格
* 中文和数字之间需要添加空格
* 数字和单位之间添加空格
* 链接之间简易增加空格

### 字色

* UI的字体只能使用纯色，不能使用渐变色
* 在比较规范的设计过程中，尽量不要使用透明度调节的方式来淡化字体颜色

## 排版

### 清晰-排版清晰

* 留白设计
* 弧度优化
* 灰色分割（分割块、分割线）
* 投影

视觉模型：

* 尼尔森F型视觉模型
* 2006年提出
* 人们在第一次观看页面时，视线会呈F形状关注页面
* 用户快速扫视时，具体的文字并不重要
* 多用小标题、短句引起阅读者注意
* 将重要的内容放在最上面

## 黑夜模式

* 避免使用纯黑色和高纯色
* 制作两套色板
* 规范使用颜色对比
* 避免使用阴影
* 背景层应该最暗
* 文字不建议纯白
* 图标形状、按钮状态、分割线
* 更注重视觉层级

## 配图

优质配图有，有高品质的感觉。

实际工作中，大量的外国图片并不适用。

背景干净。

烘托主题-抠图，展示的位置一致以及视觉比例一致。

凸显卖点-不要展示全身，要局部。凸显产品细节。

9:8、1:1、16:9等比例较好。

## 色彩选择

* 主色
  * 如今的互联网展品中，主色应用选择范围在拾色器区域的右上角，这点和平面设计有很大不同
  * 原因： 移动端产品要在一个方寸大的空间中争夺用户的注意力，引起用户的兴趣，而低饱和度清淡的色调是无法实现这个目标的
  * 所以如今主色饱和度越来越极致。
  * 再加上平面的RGB显示特性，高对比度、高动态范围的特质给用户提供更好的观感
  * 主色是一个应用最核心的色彩，品牌的象征色
  * 确定主色的要点在于——你想让用户感受到哪种情绪，然后通过情绪关联一个大致的色彩范围，在进行微调
* 辅色
  * 通知、提醒、取消用大红色
  * 确认、同意用绿色或者蓝色
  * 收藏、打分、评论用橙黄色
  * 已经建立了用户心理习惯标准，也是最安全、最简单的辅助色选择方式
  * 在没有标准色的情况下，需要被突出的文字距离主色调远，否则近
* 中性色
  * 中性色，是页面中文字、背景用到的颜色，它们承担起最基本的层次表现、便于阅读的重任
  * 主色、辅色决定了界面视觉是否出彩，而中性色的应用直接决定了页面能不能正常使用

# 性能优化

CSS在浏览器中会从右向左匹配，即使是同一个元素也会体现出差异，最右侧为ID的选择器速度要高于类。

速度排行： 

* ID选择器（`#id`）
* 类选择器（`.className`）
* 标签选择器（`div`）
* 相邻选择器（`h1+p`）
* 子选择器（`ul>li`）
* 后代选择器（`li a`）
* 通配符选择器（`*`）
* 属性选择器（`a[rel="external"]`）
* 伪类选择器（`a:hover`）

