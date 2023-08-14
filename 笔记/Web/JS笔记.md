## JAVASCRIPT

Web前段有3层：

* HTML： 从语义的角度，描述页面结构
* CSS： 从审美的角度，描述样式
* JavaScript： 从交互的角度，描述行为

## JS的声明提升特性

Javascript执行之前，会将声明提前，但不会将赋值提前

```javascript
console,log(a) //undefind
var a = 5;
console.log(a) //5
```

## Typeof运算符

```javascript
typeof 数值 //number
typeof 字符串 //string
typeof 布尔值 //boolean
typeof undefind //undefind
typeof null //object
```

## 类型转换

字符串与任何结果相加结果都是字符串，与顺序无关，这类现象被称为隐式转换

在JS中，可以使用类型函数进行直接转换

```javascript
let a = Boolean(0) //除了0和NaN会转换为false以外，其余都是true

//特例
123 + "" //"123"
String(0123) // "0123"
0123.toString() // "0123"

Number("456")
parseInt("456")
parseFloat("3.1415926")
```

如果传入非法参数可能会得到`undefind`或`NaN`

## null和undefined

`null`被专门用来表示一个空的```对象```

`undefind`表示声明了一个变量，但没有被赋值

进行数值运算时，`10+null=10`，`10+undefind=NaN`，null可以被当作0看待

## DOM对象

```javascript
document //整个文档
```

```javascript
document.getElementById("元素的ID") //ID取元素（ID具有唯一性）
```

```javascript
document.getElementsByTagName("元素的名字") //name属性取元素（返回数组）
```

```javascript
document.getElementByClassName("类名") //class属性取元素（返回数组）
document.querySelector("li")[3].classList.contains("red") //是否包含某类名
document.querySelector("li").classList.remove("ClassName") //移除一个类名
```

```javascript
document.querySelector("CSS选择器") //按照CSS匹配的方式选择元素，只会选择第一个
document.querySelectorALL("CSS选择器") //按照CSS匹配的方式选择元素，返回一个数组
```

```javascript
document.querySelector("#add").onclick=function(){ //单点监听点击事件，多次设置会覆盖
    document.querySelector("li").classList.add("red"); //添加一个red类（<li class="red"></li>）
}

document.querySelector("#add").addEventListener('click',function() { //多点监听点击事件，多次设置不会覆盖
    document.querySelector("li").classList.add("red");
}, false) //true代表事件捕获阶段触发， false代表事件冒泡阶段触发

document.querySelector("#add").removeEventListener('click',function() { //移除事件，为标记要求格式相同
    document.querySelector("li").classList.add("red");
}, false)
```

### 查询DOM节点

|   父节点   |        兄弟节点        |      子节点       | 所有子节点 |
| :--------: | :--------------------: | :---------------: | :--------: |
| parentNode |      nectSibling       |    firstChild     | childNodes |
|     -      |   nextElementSibling   | firstElementChild |  children  |
|     -      |    previousSibling     |     lastChild     |     -      |
|     -      | previousElementSibling | lastElementChild  |     -      |

```javascript
document.querySelector("p").parentNode //其他同理
```

### 插入DOM节点

```javascript
父节点.appendChild(新节点)
父节点.insertBefore(子节点, 定位子节点)
```

### DOM对象的属性

DOM对象的属性和HTML标签属性几乎是一致的。

* value  标签的value属性，常在表单元素中使用
* innerHTML   双闭合标签中的内容（识别标签）。
* innerText   双闭合标签中的内容（不识别标签）。（旧版火狐要用textContent）。

## BOM对象

BOM： Browser Object Model ， 浏览器对象模型。

* window对象是BOM的顶层（核心）对象，所有对象都是由它延伸出来的，也可以称为window的子对象。
* DOM也是BOM的一部分

window新建窗口

```javascript
window.open("url","_blank",param)
newWin.moveTo(5,5)
newWin.moveBy()
newWin.resizeTo()
window.resizeBy()
```

param参数可以是： 

* name  新窗口的名称，可以为空
* features   属性控制字符串，在此控制窗口的各种属性，属性之间以逗号隔开。
* fullscreen= (yes/no/1/0) 是否全屏，默认no
* channelmode=  (yes/no/1/0) 是否显示频道栏，默认no
* toolbar=  (yes/no/1/0) 是否显示工具条，默认no
* location=  (yes/no/1/0) 是否显示地址栏，默认no
* directories= (yes/no/1/0) 是否显示转向按钮，默认no
* status= (yes/no/1/0) 是否显示窗口状态条，默认no
* menubar=(yes/no/1/0)是否显示菜单，默认no
* scrollbars=(yes/no/1/0)是否显示滚动条，默认yes
* resizable=(yes/no/1/0)是否窗口可调整大小，默认no
* width=number窗口宽度
* height=number窗口高度
* top=number窗口距离屏幕顶部距离
* left=number窗口距离屏幕左边距离

多个参数可用句号隔开，但推荐写入jSON

```javascript
window.close() //用于关闭窗口
```

## location对象

* href  当前地址或赋值跳转
* hash   #后面的内容
* host   主机名，包含端口
* hostname  主机名
* pathname   url路径
* protocal  当前协议
* search    ?后面的内容

## 控制文件输入

```javascript
var reader = new FileReader();//读取文件，返回DataUEL
var file = document.querySelector("#myFile").files;
reader.readAsDataURL(file[0]);
reader.onload=function(){//展示文件内容
    document.querySelector("img").src = reader.result;
}
```

`FileReader`提供一个完整的事件模型，用来捕获读取文件时的状态，文件内容保存在文件存储对象的result中，file元素读取的文件在文件对象的files数组中，需要把file对象读取到的文件交给reader，事件列表如下：

|    事件     |             解释             |
| :---------: | :--------------------------: |
|   onabort   |     读取文件中断片时触发     |
|   onerror   |        读取错误时触发        |
|   onload    |    文件读取成功完成时触发    |
|  onloadend  | 读取完成时触发，无论成功失败 |
| onloadstart |        开始读取时触发        |
| onprogress  |    读取文件过程中持续触发    |

## navigator对像

window.navigator的一些属性可以获取到客户端的一些信息。

* 获取地理位置： 前两项参数，分别是成功之后的回调和失败之后的回调，最后一项是获取当前地理位置的方式，默认为空

```javascript
//navigator.geolocation.getCurrentPosition(success,error,option);
navigator.geolocation.getCurrentPosition(showPosition,showError,{});
```

* userAgent    浏览器UA，包含系统和浏览器信息
* platform       浏览器支持的系统

## 全屏

```javascript
document.fullscreenElement;
```

判断是否正在全屏

```javascript
requestFullScreen();
```

开启全屏显示

```javascript
cancelFullScreen();
```

取消全屏显示

## 元素拖动

在元素拖动中，有原元素（以下用A表示），被拖动元素（以下用B表示），目标元素（以下用C表示），拖动过程可以自己测试

> B被鼠标从A拖到了C

### 目标元素（C）事件

|    事件     |                   作用                   |
| :---------: | :--------------------------------------: |
| ondragenter |        当拖拽元素（B）进入时调用         |
| onfragover  |         当在目标元素（C）时调用          |
|   ondrop    | 当在目标元素（C）释放拖拽元素（B）时调用 |
| onfragleave |         当鼠标离开目标元素时调用         |

```javascript
E.ondragover = function(e){
    e.preventDefault();
}
```

如果想触发ondreagover事件，则必须阻止默认行为。浏览器默认会阻止此事件触发。

```javascript
document.ondrop=function(e){//为保证拖拽的完成，需要把元素添加进来，同时原来位置的该元素会自动删除
    var id = e.dataTransfer.getData("text/html");//接收传输过来的数据
    e.target.appendChild(document.getElementById(id));
}
```

### 被拖拽元素（B）事件

|    事件     |         作用         |
| :---------: | :------------------: |
|   ondrag    |       持续调用       |
| ondragstart |    拖拽开始时调用    |
| ondragleave | 拖拽时鼠标离开该元素 |
|  ondragend  |    拖拽结束时调用    |

```javascript
var obj=null;//存储B元素，当前为空
document.ondragstart=function(e){
    /*通过事件捕获A*/
    e.tartget.style.opcity = 0.5;//降低不透明度
    e.target.parentNode.style.borderWidth = "5px";//修改A元素的边框
    obj = e.target;//将B元素存入
    e.dataTransfer.setDate("text/html",e.target.id);//传输数据(格式，数据)
}
document.ondragend=function(e){//恢复原状
    e.target.style.opcity=1;//透明度恢复
    e.target.parentNode.style.borderWidth="1px";//A边框恢复
}
```

格式：`text/html`，`text/url-list`。

数据：一般是字符串。

**整个传输过程，事件的定义要按照拖拽顺序定义，事件的定义与A元素无瓜**

## 网络连通检测

|   事件    |      作用      |
| :-------: | :------------: |
|  online   | 网络连通时触发 |
| onoffline |   掉线时触发   |

## 网页数据存储

网页存储分为临时存储和永久存储，其中临时存储可以使用5mb内存空间存储数据，永久存储可以使用5mc磁盘空间存储数据。

|    存储方式    |   解释   |
| :------------: | :------: |
| sessionStorage | 临时存储 |
|  localStorage  | 永久存储 |

这种存储方式只有本页面可读写，占用空间小，清理方便，是一种代替“饼干”的良好存储方式，可保护用户隐私。

以上两种存储方式，均可使用以下函数，其存储模型可参考JSON

|        函数         |           说明           |
| :-----------------: | :----------------------: |
| setItem(key,value); | 通过键值对的方式存储数据 |
|    getItem(key);    |    通过key来拿到value    |
|  removeItem(key);   | 通过key删除对应的键值对  |
|      clear();       |   清除该空间存储的内容   |

两种方式调用方式相同，例子：

```javascript
sessionStorage.setItem("儒雅随和","wdnmd");
alert(sessionStorage.getItem("儒雅随和"));
```

## [Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

### 常用方法和属性

#### 画直线

|  beginPath   |    开启一个路径    |
| :----------: | :----------------: |
|  closePath   |    关闭一个路径    |
| moveTo(x,y)  |  定义线条开始坐标  |
| lineTo(x,y)  |  定义线条结束坐标  |
| strockeStyle | 属性设置或返回信息 |
|   strocke    |    绘制一条路径    |
|  lineWidth   |      设置线宽      |

#### 画圆

```javascript
let canvas = document.querySelector("#cont")
let ctx = canvas.getContext('2d')
ctx.arc(x, y, 半径, 起始点弧度, 结束点弧度, true/*是否为逆时针*/)

ctx.fillStyle = 'gold'
ctx.fill()

ctx.lineWidth = 10
ctx.strokeStyle = 'red'
ctx.stroke()
```

#### 画矩形

```javascript
fillRect(x, y, width, height)
//绘制一个填充的矩形
strokeRect(x, y, width, height)
//绘制一个矩形的边框
clearRect(x, y, width, height)
//清除指定矩形区域，让清除部分完全透明。
```

#### 画文字

```javascript
fillText(text, x, y [, maxWidth])
strokeText(text, x, y [, maxWidth])
```

### 放置图片和生成数据

```javascript
ctx.putImageData(imgData, 图片x, 图片y, 画布x, 画布y, width, height)
```

```javascript
let data = ctx.getImageData(x, y, width, height)
```

## Promise承诺

promese容器中放置了一个异步任务，容器一旦创建就会自动执行，不需要调用。

```javascript
//I promise you.
new Promise( ()=>{
    //异步代码，比如http请求
    reject(err) //把容器的状态改为失败，返回错误信息
    resolve(data) //把容器状态改为成功，返回数据
} )
```

作用是简化调用函数写法，避免回调函数的使用影响可读性。

```javascript
let p1 = new Promise(()=>{
    resolve(123)
})
p1.then((data)=>{console.log(data)},(err)=>{console.log(err)}) //成功与失败都会执行对应的函数
```

常用多层级化处理多次调用函数

```javascript
new Promise(()=>{resolve(123)}).then((data)=>{ //数据可以多层处理
    return data //当return一个promise时，后续的then也会转化为新的promise的then
}).then((data)=>{
    console.log(data)
})
```

## HTTP交互

```javascript
fetch('url', {mode: 'no-cors'}).then((data)=>{}) //常用fetch简化写法和跨域请求（仅当对方服务端支持时）
```

可以使用URLSearchParams来整理url

```javascript
let query - `q=测试&order=a&filters["前端","后端"]`
const params = new URLSearchParams(query)

for(let p of params) {
    console.log(p) 
    /*
    	['q','测试']
    	['order','a']
    	['filters','["前端","后端"]']
    */
}

params.get('q') //测试
params.has("order") //true
params.toString() //【中文字符串经过base64编码，其他部分不变】
params.set("order","desc") //设置键值
params.append("pageSize","10") //增加键值
params.delete("filters") //删除键值
```

## 面向对象

对象的作用是封装信息，对象具有特征（属性）和行为（方法）。

面向对象： 可以创建自定义的类型，很好的支持继承和多态。

面向对象的特征： 封装、继承、多态。

### 对象的分类

1. 内置对象：
   * 由ES标准中定义的对象，在任何的ES实现中都可以使用
   * 比如： Math、String、Number、Boolean、Function、Object......
2. 宿主对象
   * 由JS的运行环境提供的对象，主要是浏览器提供的对象。
   * 比如 BOM DOM 。

### 对象的创建

```javascript
let obj = new Object() //创建一个基本对象，并调用constructor()
let nobj = {} //创建一个空对象，以键值对存储
function ck(){} //一个函数对象

class v{ //常用定义类
    constructor(id){ //构造函数
        this.id = id //存储传值
    }
}
```

可以通过点向对象内添加属性和方法

```javascript
let obj = new Object()
obj.name = "cxk"
obj.like = "chicken"
obj.draw = function(){
    console.log(obj.name + " drawing")
}
```

使用delete删除对象值

```javascript
class v{
    constructor(){
        this.id = 1
    }
}

let a = new v()
delete a.id
```

### 原型对象

所有对象中，都会有`prototype`和`__proto__`属性，其均指向构造对象（即定义时写的对象）。

```javascript
function Person() {} //构造函数之一

let per1 = new Person()
let per2 = new Person()

console.log(Person.Prototype) //[object object]
console.log(per1.__proto__ == Person.prototype)
```

使用`in`检查对象中是否有某个属性是，如果原型对象中有，也会返回`true`。可以使用`hasOwnProperty()`来检查单个对象中的属性。

使用同一个构造函数创建的对象（没有new），叫做一类对象，也将构造函数称为一个类。

通过一个构造函数创建的对象（有new），称为该类的实例。

使用`类 instanceof 构造函数`来判断**一个对象是否为一个类的实例。**

### 对象的this

默认this指向

```javascript
window.fn(this) //this == window
```

`bind`绑定this指向

```javascript
function (){
    console.log(this) //window
}.bind(window)
```

箭头函数中的this

```javascript
()=>{
    console.log(this) //window (指向外层)
}
```

`call/apply`改变this指向

```javascript
fn.call(window)
fn.apply(window)
```

### 参数对象

在调用函数时，系统会传入两个参数：

* 函数的上下文对象的this
* 封装实参的对象arguments

```javascript
function f(){
    console.log(arguments) //参数
    console.log(typeof arguments) //参数对象类别
    console.log(arguments.length) //参数数量
    console.log(arguments.callee) //当前正在执行的函数
    arguments[0] = 99 //更改参数
    console.log(arguments) 
}
f()
```

### 数组和对象的一些封装好的函数

|         方法          |                             描述                             |
| :-------------------: | :----------------------------------------------------------: |
|        push()         |            向数组最后面追加元素，返回数组的新长度            |
|         pop()         |            删除数组最后面的元素，返回被删除的元素            |
|       unshift()       |            在数组最前面插入元素，返回数组的新长度            |
|        shift()        |            删除数组最前面的元素，返回被删除的元素            |
|        slice()        |               从数组中提取元素，返回提取的元素               |
|       splice()        |                从数组中删除元素，返回剩余元素                |
|       concat()        |                拼合多个数组，返回拼合后的数组                |
|        join()         |               将数组转换为字符串，并返回字符串               |
|       reverse()       |                  反转数组，返回反转后的数组                  |
|        sort()         |       对元素进行Unicode编码中的顺序进行从大到小的排序        |
|       forEach()       |    对每个元素进行处理，参数为一个回调函数，通常没有返回值    |
|         map()         |  对数组中的每一项进行加工，将组合成新的数组，且不改变原数组  |
|       filter()        | 对数组中的每一项进行回调计算，返回那些return true的元素，不改变原数组 |
|        every()        | 如果遍历回调有一项元素返回false，即返回false，否则返回真，用于校验合格性 |
|        some()         |  只要有一向返回true，即返回true，适合寻找数据或判断其合格性  |
|        reduce         |                 单纯循环遍历，与forEach相同                  |
|    indexOf(value)     |                从前向后找第一个元素出现的位置                |
|  lastIndexOf(value)   |                从后向前找元素出现的第一个位置                |
|     find(()=>{})      |             找到第一个返回true的元素，并返回元素             |
|   findIndex(()=>{})   |             找到第一个返回true的元素，并返回索引             |
| Array.from(arrayLike) |                      将伪数组转换为数组                      |
|  Array.of(v1,v2,v3)   |                     将一系列值转换为数组                     |

## scroll对象

使用鼠标滚轮滚动网页时，会触发window.onscroll方法

获取任意盒子的宽高，调用者为节点元素。不包括border和margin。

* scrollWidth = width + padding
* scrollHeight = height + padding

scrollHeight有一个特点，如果文字超出了盒子，高度为内容的高（包括超出的内容），如果文字没有超出盒子，高度这是盒子的高度。

## 一些简单的代码片段

### Quick Console.log

```javascript
let c = console.log.bind(document)
c("text")
```

### Spread Operator 展开运算符

```javascript
let num = [1,2,3]
let cp = [...num]
console.log(cp)
```

### Truncating any Array

```javascript
let arr = [1,2,3,4,5,6]
arr.length = 3
console.log(arr)
```

### Numerical Separator

```javascript
let data = 100_000
console.log(data) //100000
```

### Quick Power Calculation

```javascript
console.log(Math.pow(4,5)) //1024
console.log(4**5) //1024
```

### Rest Parameter

```javascript
function sum(...num){
    let cal = 0
    for (let a of num){
        cal += a
    }
    console.log(cal)
}
sum(1,2,3,4,5,6,7,8,9,10)
```

### Smart Short Loop

```javascript
const a = [1,2,3,4,5,6]
for(let n of a) console.log(n)
```

### CSS Module Script

```javascript
import styles from "./style.css" assert { type: 'css' }
document.adoptedStyleSheets = [style]
```

### JS操作剪贴板

```javascript
navigator.clipboard
	.readText()
	.then((text)=>{
    console.log(text)
})
```

```javascript
navigator.clipboard
	.writeText(text)
	.then(()=>{
    alert("复制成功！")
})
```

### 数组去重

```javascript
let arr = [1,1,2,3,4,4,1,2,2,3]
let uniqueArr = [...new Set(arr)]
console.log(uniqueArr)
```

```javascript
let arr = [1,1,2,3,4,4,1,2,2,3]
let uniqueArr = (arr) => [...new Set(arr)]
console.log(uniqueArr(arr))
```

### 随机字符串

```javascript
const randomString = () => Math.random().toString(36).slice(2)
console.log(ramdomString())
```

### 交换两个变量

```javascript
let foo = 'foo'
let bar = 'bar'
[foo,bar] = [bar,foo]
```

### 防抖

```javascript
//操作时不执行，确认不操作了才执行
function debounce(fun,delay) {
    let timer
    return function() {
        if(timer) clearTimeout(timer)
        let args = arguments
        timer = setTimeout(()=>{
            fun.apply(this, args)
        }, delay)
    }
}
```

### 节流

```javascript
//定时发送时段内数据包
function throttle(fun, time) {
    let start = 0
    return function() {
        let now = new Date()
        if(now - start > time){
            fun.apply(this, arguments)
            start = now
        }
    }
}
```

## Web性能计算

### 网页加载时间

```javascript
const t = window.performance.timing
let time = []

//DNS用时
time.DNSTime = t.domainLookupEnd - t.domainLookupStart

//在TCP上SSL的耗时
time.TCPTime = t.connectEnd - t.connectStart

//服务器响应用时
//同时这也是 Chrome Tools 对TTFB的定义
time.ServerResponseTime = t.responseStart - t.requestStart

//重定向用时
time.RedirectTime = t.redirectEnd - t.redirectStart

//页面下载时间
time.PageDownloadTime = t.responseEnd - t.responseStart

//TTFB用时
//这里的TTFB用时包括了TCP、SSL、DNS时间
time.TTFBTime = t.responseStart - t.navigationStart

//从页面加载到DOMContentLoaded用时
time.ContentLoadingTime = t.domContentLoadedEventStart - t.navigationStart

//在load事件上的耗时
time.loadEventTime = t.loadEvent = t.loadEventEnd - t.loadEventStart

//DOM用时（包括资源加载和DOM树的解析和构建）
time.DOMReady = t.domComplete - t.responseEnd

//页面加载完成的时间
//从页面开始载入到绑定在load事件上的函数全部执行完毕
time.PageLoadTime = t.loadEventEnd - t.navigationStart

//DOM交互用时
time.DOMInteractiveTime = t.domInteractive - t.domLoading
```

