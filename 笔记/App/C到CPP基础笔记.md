## 函数与参数

创建工程，可见如下内容

```cpp
#include "stdafx.h"

int _tmain(int argc,_TCHAR* argv[]){
    return 0;
}
```

函数参数传参过程，入栈。

```cpp
int n = 0;
test(n++,n++,n++);
```

传出：2,1,0

*C++支持函数重载*

### 主函数

在VS创建的工程中自带的主函数和C语言工程自带的主函数基本相同，其基本区别是字符集不同

| unicode字符集       | 多字节字符集 |
| ------------------- | ------------ |
| wmain   (_tmain)    | main         |
| wchar_t   (_TCHAR*) | char         |

## 输出与输入

```cpp
#include <iostream> //C++标准头文件

using namespace std; //使用std命名空间

int main(){ //主函数没有区别
    cout << "内容" << endl; //前后均需要用到std空间，endl代表换行
}
```

## 头文件

以.h结尾的文件均为C语言头文件，没有结尾均为C++头文件。

通常C++引用C语言头文件可以在前面加上一个c

例如：`string.h` -> `cstring`

在C++中`string`是一个类的头文件

```cpp
#include "stdafx.h" //引入相对位置的标准包含文件，默认创建文件会包含此文件，添加任何新的头文件应在此处添加
```

其中文件内容如下：

```cpp
#pragma once //只引入一次，防止嵌套引入

#include <stdio.h>
#include <tchar.h>
#include <targetver.h> //旧WINDOWS兼容
```

通常，如果不是大工程，只包含`iostream`即可

## 命名空间

使用命名空间

```cpp
using namespace xxx;
```

定义命名空间

```cpp
namespace name2{
    int i = 10;
    void fun1(){
        printf("命名空间中的函数\n");
    }
}
```

临时使用命名空间`空间名::使用的变量或函数`

`std::cout << "hwllo world!" << std::endl;`

## 内联函数

`this`指针指向对象本身。

`inline`关键字创建一个内联函数，声明的同时定义，膨胀内存来节约时间

> 代码行数超过5行，有循环递归等复杂流程，调用次数很少的函数不建议设置为内联函数

## 内存分配

C语言的内存分配是`malloc`和`free` 函数

C++的内存分配是`new`和`delete` 运算符

## 对象

*一些位置使用伪代码以便记录*

```cpp
#include <string>

using namespace std;

string str = "wdnmd";
string str1;
str1 = str;
printf("%s\n",str1.c_str()/*c_str函数可以将c++字符串转换为c字符串*/);

str1 += str;//c++字符串可以累加
```

### 创建对象

MyString.h内容：

```cpp
struct MyString{
    //成员变量
    char* buff;//字符串
    size_t size;//字符个数
    //成员函数
    void init();
    void strSet(char* str);
    size_t getSize();
}
```

MyString.cpp内容：

```cpp
#include "MyString.h"
void MyString::init(){
    //一些代码
}
void MyString::strSet(char* str){
    //一些代码
}
size_t MyString::getSize(){
    //一些代码
}
```

### 权限分配

不同的函数和类需要不同的权限设置。

MyClass.h

```cpp
class MyClass{
    //属性 成员变量
    int C;
    int D;
    int E;
    public: //可以被公开使用的区域
    	MyClass();//创建时调用
    	~MyClass();//销毁时调用
    	void CPP();//功能 成员函数
    private: //私有区域
}

MyClass::MyClass(){}
MyClass::~MYClass(){}
```

MyClass.cpp

```cpp
#include "MyClass.h"
#include <iostream>
using namespace std;
int C = 8;
void MyClass::CPP(){
    this->C = C;//将外部的C存储到内部的C
}
```

### 使用对象

main.cpp

```cpp
#include <iostream>
using namespace std;
#include "MyClass.h"


int main(){
    MyClass C1;
    C1.CPP();
}
```

### 删除对象

此时会调用对象销毁时的函数

```cpp
delete C1;
```

### 构造函数

```cpp
class A{
    int n;
    public:
    A(){printf("无参构造\n");}
    A(int n) :n(n){printf("有参构造\n");}
    A(A& a){//传参过程中不会产生临时对象
        this->n = a.n;
        printf("拷贝构造函数\n");
    }
}
```

其中，无参数构造函数是必要的，内可加传参说明，也可以进行初始化。

拷贝构造：用对象创建对象，即拷贝一个对象。可以有无参数拷贝对象。

​	深拷贝：重新分配内存，拷贝数据。

​	浅拷贝：直接赋值，保存内存地址。

如果对象是基本数据类型，浅拷贝就没有问题，如果对象成员变量是指针类型，要使用深拷贝。

```cpp
MyString(const MyString& str){
    pStr = str.pStr;//浅拷贝
    
    pStr = new char[strlen(str.pStr)];//深拷贝
    memcpy(pStr, str.pStr, strlen(str.pStr)+1);
}
```

缺省的拷贝构造函数都是浅拷贝。

定义类时，要定义构造器和拷贝构造器。

### 继承与多态和接口

继承的原因： 高聚类、低耦合的工程。

class 派生类名（子类名) : 基类类名（父类名）{};

继承了成员变量与成员函数，可以使用函数重载重写继承得到的函数。

继承的目的：代码重复利用，也可以修改前辈留下的bug。（不建议直接修改，因为“本程序依靠本bug运行”）

多态：派生类继承自基类的函数需要重新实现。

重写：基于继承，函数名、参数列表都相同，函数体不同。

重写的方式：

* 基类和派生类中定义函数原型相同的函数。
* 基类指针指向派生类对象，调用基类成员函数。
* 派生类指针指向派生类对象，调用派生类成员函数。
* 基类和派生类中定义函数原型相同的函数，基类函数用virtual修饰
* 基类指针指向派生类对象，调用派生类成员函数。

虚函数表-多态底层实现原理

1. 普通函数，类决定地址
2. 虚函数：
   1.  对象大小多出4字节，这4个字节是一个指针变量，这个指针变量指向一个动态数组（虚函数表），动态数组的元素是函数指针。
   2. 派生类继承基类时，会继承基类虚函数表的成员。

```cpp
virtual void show() = 0;//纯虚函数
```

接口：抽象类

1. 纯虚函数
2. 抽象类（纯虚基类）：如果类中有纯虚函数，这个类没有对象。
3. 接口类的作用： 架构  功能改变容易
4. 接口类的好处：
   1. 分开操作
   2. 代码重用
   3. 省钱（？？？？？？？？？？）

virtual是一个虚构钩，创建各种虚构的东西，基类指针保存new出来的派生对象，如果基类析构函数不用虚构钩修饰，派生类将不会被释放。

## 操作运算符

### 引用

给某个内存段起名

```cpp
int b;
int& a = b;
```

和指针相似，但使用时要当成普通变量来写

```cpp
int x = 666;//999
int y = (int)&x;
```

引用和指针的区别：

1. 引用不占内存，指针占内存
2. 引用必须初始化，而指针不用
3. 引用不能指向其他内存段，而指针可以
4. const修饰引用，引用绑定内存段不能写入
5. sizeof结果不同
6. 引用不能为空，指针可以为空

### 运算符重载

运算符的本质是函数。

```cpp
int operator +(const int& a/*左值*/,const int& b/*右值*/){
    return a+b;
}
```

运算符重载的两种方式：

* 重载运算符函数为类的成员函数
* * 当前对象为元素左值，例如：
  * f1(1,2)
  * f2(3,6)
  * f1 + f2
* 重载运算符函数为类的友元函数
* * 有缘函数不是类的成员函数
  * 有缘函数中可以访问成员变量

ClassName.h 片段

```cpp
ClassName operator+(const ClassName& fs);
friend ClassName operator+(const ClassName& fs1,const ClassName& fs2);
```

ClassName.cpp片段

```cpp
ClassName operator+(const ClassName& fs1, const ClassName& fs2){
    return fs1.Number+fs2.Number;
}
```

基本上所有的运算符都可以重载，除了以下几个：

+ .
+ ->
+ ::
+ ?:
+ sizeof                              这是一个关键字

双目运算符一般重载为有缘函数，单一运算符一般重载为成员函数。

不能创建新的运算符，且遵循函数重载规则。

不能修改运算符的规则：优先级、操作数数量、操作数类型

重载后的运算符应与原来的相同（坑人除外）。

### 一些“隐藏”的运算符

+ 算数运算符：+  -  *  /  %
+ 关系运算符：>  <  >=  <=  ==  !=
+ 输入输出运算符：<<  >>                                     这种运算符只能重载为有缘函数，其参数是输入输出流  istream   ostream
+ 自运算符：++  --  **  // %%                                只有一个参数，重载时请注意前自增和后自增
+ 赋值运算符：=  +=  -=  *=  /=  %=
+ new  delete

## 文件读写操作与流和文件对象

```cpp
#include <iostream>
#include <fstream>
using std::cin;
using std::cout;
using std::endl;
using std::fstream;

int _tmain(int argc,_TCHAR* argv[]){
    //创建文件对象
    fstream file;
    
    //打开文件 -- 把内存中的文件对象和硬盘中的文件地址绑定
    file.open("newer.txt",std::ios::out);
    //file.write();
    file << "上课要认真" << endl;//向文件内写入
    file << "课后要消化" << endl;
    cout << "CMD用户听好了！早上好！！！" << endl;//输出到控制台
    //关闭保存
    file.close();
    
    char buff[256];//创建文件读取缓冲区
    file.open("newer.txt",std::ios::in);
    memset(buff,0,256);//初始化 -- 归0
    file >> buff;//读取第一行
    cout << buff << endl;//输出第一行
    file >> buff;//读取第二行
    cout << buff << endl;//输出第二行
    file.close();//关闭文件
}
```

以上为一般流程，除了以上流程外，还有以下操作：

```cpp
file.seekg(0,std::ios::end);//设置文件指针指向末尾
std::streamoff size = file.tellg();//获取文件大小（单位：字节）
file.seekg(0,std::ios::beg);//设置文件指针指向开头

//文件复制
char temp;
for (streamoff i = 0; i < size;i++){
    temp = file1.get();//获取一个字节
    file2.put(temp);//放置字节
}

//文件加密
char temp;
for (streamoff i = 0; i < size; i++){
    temp = file1.get();
    temp = temp ^ 0x66;//0x66是秘钥，一般不建议更改或设置过于复杂
    file2.put(temp);
}

//文件加密 - 一句话
file2.put(file1.get()^0x66);//原理相同
```

特殊注明：该加密程序也可以用来解密，原理是乘方运算（？）。

文件写入也可以自定义读写的格式（协议），可以达到一些游戏的解包效果。

>  效果.....自行斟酌，反正我觉得不压缩只打包丝毫没有意义。

### IO流表（？）

fstream对象：

* .open 
* .close
* .read
* .write
* <<
* \>\>
* .get
* .put
* .tellg
* .seekg

文件流对象：

|     对象      |    说明    |
| :-----------: | :--------: |
| std::ios::in  |   读文件   |
| std::ios::out |   写文件   |
| std::ios::beg | 文件头位置 |
| std::ios::cur |  当前位置  |
| std::ios::end | 文件尾位置 |

读写文件操作会自动修改文件内容指针

## 异常捕获

```cpp
try{
    //DO SOMETHING WRONG
    throw "扔个异常看看响不响";
}catch(char* str){
    printf("噼里啪啦噼里啪啦轰！");
}catch(int n){
    printf("这是%d号错误",n);
}catch(...){
    printf("大威天龙！管你什么类型，报错就完了！");
}
```

## 其他小知识块

`nullstr`是一个关键字(未证实)

auto是自适应类型，但是每个只能接管一种类型



for循环新格式

```cpp
int a[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
for(int n : a) cout << n << " ";
cout << endl;
```



函数重载一般是为了适应不同的数据类型但是相同的运算方法而设计的，一般运算符是函数重载达成。

(...)可接收一切参数，参考printf，但是printf的实现原理很少有人知道

decltype(表达式)  可以把表达式当做类型使用

typedef int INT;可以给类型起别名，using InT = int;也可以



## 泛型

泛型是以下类模板的基础

```cpp
template <typename 泛型名,...>//模板

init<int,int>(IntVar,1);//静态修饰

template <class T>//声明定义或函数模板时使用
    void a(T* a, int len){
    //DO SOMETHING
}
```

泛型使用方式：

* 缺省方式（自动匹配）
* 显示方式<类型名 , ...>



## 函数模板

函数模板与模板函数：函数模板生成模板函数（调用函数时）

函数模板与函数重载不冲突：

* 函数调用过程
  * 先查看有没有普通函数，如果有，调用普通函数。
  * 如果没有，查看是否有其他函数模板，如果有，生成对应模板函数。
  * 如果没有，查看其他作用域中是否有这个函数。
  * 如果没有，报错。

## 类模板

* 必须显示调用
  * 类名<类型名> 对象名;
  * 类名<类型名,...>* p = new 类名<类型名,...>;
* 类模板只能写到.h中
* 类中声明，类外定义，每个成员函数都是一个模板函数。

