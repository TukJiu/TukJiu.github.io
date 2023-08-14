## 特点

解释型语言，弱类型语言

## 变量与函数

基础：

```python
str = "str"
type() #获取type
isinstance() #获取type
for i in range(0,800): #for循环
    print(i)
while(true): #while循环
    print("鸡汤来喽")
```

类型转换：

```python
int(3.1415926) #转成int
str(134568) #转成字符串
float(358) #转成小数
```

向列表添加元素：

```python
append() #追加
extend() #加到顶层
insert() #插入
```

断言：程序必须经过此检验才可以运行

```python
assert false #这段程序没有bug，但就是不想让你运行
```

三目表达式

```python
small = x if x < y else y
```

乘方和整除

```python
a ** 2
b // 2
```

## 爬虫

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
import cookielib
import urllib2
 
url = "http://www.baidu.com"
response1 = urllib2.urlopen(url)
print "第一种方法"
#获取状态码，200表示成功
print response1.getcode()
#获取网页内容的长度
print len(response1.read())
 
print "第二种方法"
request = urllib2.Request(url)
#模拟Mozilla浏览器进行爬虫
request.add_header("user-agent","Mozilla/5.0")
response2 = urllib2.urlopen(request)
print response2.getcode()
print len(response2.read())
 
print "第三种方法"
cookie = cookielib.CookieJar()
#加入urllib2处理cookie的能力
opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cookie))
urllib2.install_opener(opener)
response3 = urllib2.urlopen(url)
print response3.getcode()
print len(response3.read())
print cookie
```

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
import re
 
from bs4 import BeautifulSoup
html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title"><b>The Dormouse's story</b></p>
<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>
<p class="story">...</p>
"""
#创建一个BeautifulSoup解析对象
soup = BeautifulSoup(html_doc,"html.parser",from_encoding="utf-8")
#获取所有的链接
links = soup.find_all('a')
print "所有的链接"
for link in links:
    print link.name,link['href'],link.get_text()
 
print "获取特定的URL地址"
link_node = soup.find('a',href="http://example.com/elsie")
print link_node.name,link_node['href'],link_node['class'],link_node.get_text()
 
print "正则表达式匹配"
link_node = soup.find('a',href=re.compile(r"ti"))
print link_node.name,link_node['href'],link_node['class'],link_node.get_text()
 
print "获取P段落的文字"
p_node = soup.find('p',class_='story')
print p_node.name,p_node['class'],p_node.get_text()
```

## 图形界面

```python
import tkinter
top = tkinter.Tk()
# 进入消息循环
top.mainloop()
```

```python
root = Tk()                     # 创建窗口对象的背景色
                                # 创建两个列表
li     = ['C','python','php','html','SQL','java']
movie  = ['CSS','jQuery','Bootstrap']
listb  = Listbox(root)          #  创建两个列表组件
listb2 = Listbox(root)
for item in li:                 # 第一个小部件插入数据
    listb.insert(0,item)
 
for item in movie:              # 第二个小部件插入数据
    listb2.insert(0,item)
 
listb.pack()                    # 将小部件放置到主窗口中
listb2.pack()
root.mainloop()                 # 进入消息循环
```

## Tkinter 组件

Tkinter的提供各种控件，如按钮，标签和文本框，一个GUI应用程序中使用。这些控件通常被称为控件或者部件。

目前有15种Tkinter的部件。我们提出这些部件以及一个简短的介绍，在下面的表:

| 控件                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Button](https://www.runoob.com/python/python-tk-button.html) | 按钮控件；在程序中显示按钮。                                 |
| [Canvas](https://www.runoob.com/python/python-tk-canvas.html) | 画布控件；显示图形元素如线条或文本                           |
| [Checkbutton](https://www.runoob.com/python/python-tk-checkbutton.html) | 多选框控件；用于在程序中提供多项选择框                       |
| [Entry](https://www.runoob.com/python/python-tkinter-entry.html) | 输入控件；用于显示简单的文本内容                             |
| [Frame](https://www.runoob.com/python/python-tk-frame.html)  | 框架控件；在屏幕上显示一个矩形区域，多用来作为容器           |
| [Label](https://www.runoob.com/python/python-tk-label.html)  | 标签控件；可以显示文本和位图                                 |
| Listbox                                                      | 列表框控件；在Listbox窗口小部件是用来显示一个字符串列表给用户 |
| Menubutton                                                   | 菜单按钮控件，用于显示菜单项。                               |
| Menu                                                         | 菜单控件；显示菜单栏,下拉菜单和弹出菜单                      |
| Message                                                      | 消息控件；用来显示多行文本，与label比较类似                  |
| Radiobutton                                                  | 单选按钮控件；显示一个单选的按钮状态                         |
| Scale                                                        | 范围控件；显示一个数值刻度，为输出限定范围的数字区间         |
| Scrollbar                                                    | 滚动条控件，当内容超过可视化区域时使用，如列表框。.          |
| Text                                                         | 文本控件；用于显示多行文本                                   |
| Toplevel                                                     | 容器控件；用来提供一个单独的对话框，和Frame比较类似          |
| Spinbox                                                      | 输入控件；与Entry类似，但是可以指定输入范围值                |
| PanedWindow                                                  | PanedWindow是一个窗口布局管理的插件，可以包含一个或者多个子控件。 |
| LabelFrame                                                   | labelframe 是一个简单的容器控件。常用与复杂的窗口布局。      |
| tkMessageBox                                                 | 用于显示你应用程序的消息框。                                 |

------

## 标准属性

标准属性也就是所有控件的共同属性，如大小，字体和颜色等等。

| 属性      | 描述       |
| --------- | ---------- |
| Dimension | 控件大小； |
| Color     | 控件颜色； |
| Font      | 控件字体； |
| Anchor    | 锚点；     |
| Relief    | 控件样式； |
| Bitmap    | 位图；     |
| Cursor    | 光标；     |

------

## 几何管理

Tkinter控件有特定的几何状态管理方法，管理整个控件区域组织，以下是Tkinter公开的几何管理类：包、网格、位置

| 几何方法 | 描述   |
| -------- | ------ |
| pack()   | 包装； |
| grid()   | 网格； |
| place()  | 位置； |