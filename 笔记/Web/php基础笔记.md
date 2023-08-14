# PHP笔记



### 常量与变量

```php+HTML
<?php 

$name = value;//变量 

const name = value;//常量 

define("name",value);//常量 

echo $neme;//使用变量 

unset($name);//删除变量 

$n = &amp;$name;//指针 

?>
```

以下将会输出"bb"

```php
$a = "b";  

$b = "bb"; 

echo $$a;
```

当输入两个**\$**时，系统先“编译” **\$a** 。得到**b**，然后读取“编译”出的 **\$b** ，得到 **bb**。



### 字符串

没有单引号的可规定格式的格式单引号字符串 

```php
$str = <<<'str'

字符串内容 

str; 
```

没有上引号的可规定格式的双引号字符串 

```php
$str = <<<str    

字符串内容 

str; 
```

**str是边界符 **



### 各进制的数字

```php
$a = 120; //十进制  

$b = 0b110; //二进制（0b） 

$c = 0120; //八进制（0）  

$d = 0x120; //十六进制（0x）
```

### 定义数组

这是一个二维数组

```php
$info = array(

array('name' => 'jim','age' => 30); 

);  
```

这是一个一维数组

`$arr = array(1,2,3,4,5,6,7,8,9,10); `

这是增强for循环

```php
foreach($arr as $v){//$v是调用的指针

echo $v.'<br>';

 }  

foreach($arr as $k => $v){

echo 'key: ',$k,' == value: ',$v,'<br>';

}
```



### PHP中特殊的计算符号

科学计数法（1.23* 10的10次方）

`$e = 1.23e10;`

"***.***" 符号相当于JS的 a + b 的字符串相加  

`$a . $b;`

"***@***"符号可以避免错误输出

`@(1/0); `



### PHP定义了一些变量与方法

###### 带有 $

```php
$_GET //get提交表单 

$_POST //post提交表单 

$_REQUEST //get和post提交的表单  

$GLOBALS //全局变量（？）  

$SERVER //服务器信息 

$SESSION //当前会话 

$COOKIE //cookie  

$ENV //环境  

$_FILES //上传文件  

$PHP_VERSION //PHP版本  

$PHP_INT_SIZE //整形字节大小  

$PHP_INT_MAX //整形最大存储量 
```

###### 不带有 \$

```php
__DIR__ //当前目录  

__FILE__ //当前目录/文件  

__LINE__ //当前行数  

__NAMESPACE__ //当前命名空间  

__CLASS__ //当前类  

__METHOD__ //当前function 
```

###### 关于数学的函数

```php
max(); //最大值  

min(); //最小值  

rand(); //随机  

mt_rand(); //高效率随机 

round(); //四舍五入 

cell(); //向上取整 

floor(); //向下取整 

pow(); //次方 - pow(2,8) == 256 ; 

abs(); //绝对值 

sqrt(); //平方根    
```

###### 关于函数的函数

```php
function_exists(); //是否存在 

func_get_arg(); //指定数值对应的参数 

func_get_args(); //数组返回所有参数值 

func_num_args(); //获取参数数量
```

###### 关于字符串的函数

`strlen(); //字符串长度 `

**转换函数 **

```php
implode(); 

explode(); 

str_split(); 
```

**截取函数(); **

```php
trim(); 

ltrim(); 

rtrim(); 

substr(); 

strstr(); 
```

**大小转换函数** 

```php
strtolower(); 

strtoupper();

ucfirst(); 
```

**查找函数**

```php
strpos();

strrpos();
```

**替换函数**

`str_replace();`

**格式化函数**

```php
printf();

sprintf();
```

**其他**

```php
str_repeat();

str_shuffle();  
```

###### 数组相关函数

**排序函数**

```php
sort();

rsort();

asor();

arsort();

ksort();

krsort();

shuffle();
```

**指针函数**

```php
reset();

end();

next();

prev();

current();

key();
```

**其他函数**

```php
count();

array_push();

array_pop();

array_reverse();

in_array();

array_keys();

array_values();
```