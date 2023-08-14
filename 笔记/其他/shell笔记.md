# Shell笔记

shell是用户与内核交互的翻译官，**所有内容要求顶格写**

## shell注释与指定解释器

```shell
#!/bin/bash
#注释
```

第一行指定解释器为`/bin/bash`，第二行是注释。

**不可以把注释和命令写在同一行**

## 管道符与重定向

```shell
echo a | grep
```

管道符：将上一个命令的输出作为下一个命令的输入

```shell
echo abcd > abc.txt
```

重定向：覆盖写入`abc.txt`

```shell
echo abcdefg >> abc.txt
```

重定向：追加写入`abc.txt`

```shell
echo < abc.txt
```

重定向：传入文件内容

```shell
echo << EOF
a
b
c
d
EOF
```

重定向：传入多个内容，`END`也可以作为标识符

## 关于命令返回值 | 判断命令是否执行成功

```shell
echo $?
```

`$?`是上一条命令的返回值。如果输出0,则代表上一条命令执行成功。如果输出不是0的其他数字，则上一条命令执行失败。

### 自定义返回值

```shell
exit 0
```

默认返回值是0,可以自定义执行状态，最大值是255

## 运算

### 整数运算

```shell
expr 1 + 1
```

`expr`运算命令，一定要注意空格

```shell
expr 1 \* 2
```

由于`*`在终端中有特殊含义，所以一定要转义

```shell
let a=1+1
```

通过变量计算

### 小数运算

```shell
bc
```

交互式计算器，使用`Ctrl+C`退出

```shell
scale=2
```

在计算器内使用：调整计算器的小数点位是`2`位

```shell
echo "scale=2;141*100/7966"|bc
```

在shell文件中使用：非交互式计算

```shell
echo "`echo "scale=2;141*100/7966"|bc`%"
```

嵌套执行

### 简单运算

```shell
echo $((1+1))
```

括号一定要两个

## 格式化输出

一个程序需要0个或多个输入，1个或多个输出

```shell
echo somestr
```

`echo`会将字符串输出到默认显示设备（显示器），一般起到提示作用

```shell
echo [-en]str
```

输出时，不同参数会被以空格分开，且最后会被加入换行

`-n`参数可以使`echo`命令不换行输出

`-e`参数可以使`echo`命令可以添加以下转义字符

| 字符 |          解释          |
| :--: | :--------------------: |
|  \a  |       发出警告声       |
|  \b  |     删除前一个字符     |
|  \c  |     最后不加换行符     |
|  \f  |   换行但保留光标位置   |
|  \r  | 光标移动到行首但不换行 |
|  \t  |        插入tab         |
|  \v  |        与\f相同        |
|  \   |         插入\          |
| \nnn |   八进制所代表的字符   |
|  \n  |          换行          |

注意，有些转义字符需要配合`-n`使用

### 例子 | 倒计时

```shell
#!/bin/nash
for time in `seq 9 -1 0`;do
	echo -n -e "\b$time"
	sleep 1
done
echo 
```

## 带颜色输出

```shell
echo -e "\033[背景;文字m字符串\033[0m"
```

## 输入 | 交互

```shell
read -p "passwd: " -t 300 -s -n 80
```

读取一个字符串，`-p`打印信息，`-t`时间限制，`-s`不回显，`-n`限制字符串长度

```shell
read acc
read pw
```

这样就可以创建出两个可以获取输入内容的变量

## 变量与循环

for循环的常规用法

```shell
for var in v1 v2 ......
	do
		commands
done
```

for循环的C类用法

```shell
for((i=0;i<0;i++))
	do
		commands
done
```

for循环的多变量用法

```shell
for((a=0,b=9;a<10;a++,b--))
	do
		commands
done
```

for死循环

```shell
for((;;))
```

for循环检测主机存活

```shell
for((;;))
	do
		ping -c1 $1 &>/dev/null
		if[$? -eq 0];then
			echo -e "`date +"%F %H:%M:%S"`: $1 is \033[32m UP \033[0m"
		else
			echo -e "`date +"%F %H:%M:%S"`: $1 is \033[31m DOWN \033[0m"
		fi
	
	#节奏控制，生产环境中应一分钟以上
	sleep 5
done
```

支持`continue`等语句

while循环

```shell
while [var]
	do
		commands
done
```

until则与while条件相反，until函数不常用

## 函数的声明与使用

```shell
a1(){
#函数内容
}
function a2{
# 函数内容
}
```

```shell
a1
a2
```

## case

```shell
case $var in 
1)
	echo 1
;;
*)
	echo lll
;;
esac
```
## 正则表达式

匹配a开头，c结尾的字符串。
正则表达式一般符号只携带一个字符

```shell
egrep "^ac$" file
```

|特殊字符|说明|
|:---:|:----------:|
|`[:alnum:]`|匹配任意字母字符 0-9 a-z A-Z|
|`[:alpha:]`|匹配任意字母，大写或小写|
|`[:digit:]`|数字 0-9|
|`[:graph:]`|非空字符|
|`[:lower:]`|小写字符 a-z|
|`[:upper:]`|大写字符 A-Z|
|`[:cntrl:]`|控制字符|
|`[:print:]`|非空字符（包含空格）|
|`[:punct:]`|标点符号|
|`[:blank:]`|空格和制表符|
|`[:xdigit:]`|16进制数字|
|`[:space:]`|所有空白字符|

同样，支持`egrep`命令

> 当出现双中括号时，第一个代表中括号中的任意字符，第二个代表中括号中的格式

## shell文件操作

### sed

sed是linux中提供的外部命令，是一个行/流编辑器。它与文本编辑器有着本质的区别

```shell
sed [options] '{command}{flags}' {filename}

-e script 将文件中指定的命令添加到处理输入时执行的命令中  多条件，一行中要有多个操作
-f script 将文件中指定的命令添加到处理输入时执行的命令中
-n 		  抑制自动输出
-i 		  编辑文件内容
-i.bak	  修改时同时创建.bak备份文件
-r 		  使用扩展的正则表达式
!		  取反（在模式条件后不受shell限制）
```

sed内部命令：

```shell
a  在匹配后追加
i  在匹配前追加
p  打印
d  删除
s  查找替换
c  更改
y  转换   N D P
```

flags:

```shell
数字   表示新文本替换的模式
g:     表示用新文本替换现有文本的全部实例
p:     表示打印原始内容
w filename:    把替换的结果写入文件
```

**由于难度有限，此用法省略**

### shell对输出流的处理|awk

awk把文件视为记录，通常对数据的处理方式是按照分隔符分割并输出。

```shell 
awk [options] [BEGIN]{PROGRAM} [END]{file}

-F fs   指定描绘一行中数据字段的文件分割符 默认为空格
-f file 指定程序姚读取的文件名
-v var=value  定义awk程序中使用的变量和默认值

BEGIN: 在开始前执行，可选
program: 处理数据流的方式，必选
END:   处理完成后运行，可选
```

awk对字段（列/片段）的提取

```shell
$0   整行文本
$1   表示文本中的第一个数据字段
$2   文本中第二个数据字段
$N   文本中第n和数据字段
$NF  文本中最后一个数据字段
```

### awk玩法

定义数组

```shell
[索引]=值

awk 'BEGIN{array[0]=100;array[1]=200;print array[0],array[1]}'
```

运算

|       运算符       |   含义   |
| :----------------: | :------: |
|         =          | 赋值运算 |
|  > >= == < <= !=   | 比较运算 |
| + - * / % ** ++ -- | 数学运算 |
|      && \|\|       | 逻辑运算 |
|        ~ !~        | 匹配运算 |

环境变量

|    变量    |                          描述                          |
| :--------: | :----------------------------------------------------: |
| FILDWIDTHS | 以空格分割的数字列表，用空格定义每个数据字段的精确宽度 |
|     FS     |                    输入字符分割符号                    |
|    OFS     |                    输出字符分割符号                    |
|     RS     |                     输入记录分隔符                     |
|    ORS     |                     输出记录分割符                     |

### awk流程控制

这一段经常举栗子，以此类推....

if

```shell
awk '{if(条件)执行;}'
```

for

```shell
awk '{sum=0;for (i=1;i<4;i++){sum+=$i}print sum}' num2
```
