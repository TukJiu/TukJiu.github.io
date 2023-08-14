### 存储单位

| 单位  | 大小 |
| ----- | ---- |
| bit   | 1    |
| byte  | 8    |
| word  | 16   |
| oword | 32   |



### 计算机中存储数据的方式

| 数据存储方式 |                             特点                             |
| :----------: | :----------------------------------------------------------: |
|     原码     | 最高位是符号位，0是正数，1是负数<br />其他部分数据是原数据的绝对值的二进制数<br />原码并不适合加减运算 |
|     反码     | 对于正数，反码与原码相同<br />对于负数，符号位不变，其他位置取反<br />反码只是原码转换成补码之前的过渡，并不适合运算 |
|     补码     | 在计算机系统中，数据一律采用补码存储<br />补码统一了0的二进制数<br />可以将符号位与其他位一起处理<br />把减法运算变成了加法运算<br />两个用补码表示的数想要相加时，如果符号位有进位，则进位被舍弃<br />对于正数，补码与反码相同，对于负数，补码是它的反码+1 |
|     运算     |      可以通过符号位不变，其他位取反，然后+1的形式求原码      |



### C语言中的switch语句

```c
switch(c){
    case '1':
        printf("1");
        break;
    case '2':
        printf("2");
        break;
}
```

其中，变量C**只能**是整形变量



### C语言中的字符串

如果部分函数失效，需要导入头文件`#include <string.h>`

##### 定义

```c
char a[] = {'a','b','\0'};
char b[] = "ab";
```

只有像这样，字符串末尾有一个整型的0的字符数组，才被称之为**字符串**

##### 指针字符串与普通字符串的区别（需要看完指针）

`char ch[]="hello world";`这种方式定义的字符串存储在栈区，称为**栈区字符串**，指针指向可以改变，内容可以改变

`char* p="hello world";`这种方式定义的字符串存储在常量区，称为**数据常量区字符串**，指针指向可以改变，内容不可以改变

printf函数中直接传入的字符串也属于数据常量区字符串



##### 获取与使用

`gets(char* s)`可以获取字符串，遇到**换行**退出

`scanf('%s',s);`可以获取字符串，遇到**空格**，**逗号**，**换行**时退出

`fgets(char* s,int size,FILE *stream);`从stream流中读取字符串，读取**size-1**个字符，通常stream填写`stdin`以读取控制台内容

`puts(char* s)`可以输出字符串

`printf("%s",s)`可以输出字符串

`fputs(const char* s,FILE *stream);`写入流文件，**不写**入末尾的**0**，通常stream填写`stdout`以输出到控制台



##### 格式化字符串

```c
char ch[100];
sprintf(ch,"hello world");
printf('%s\n',ch);
```

```c
int main(){
    char ch[100];
    sprintf(ch,"%d+%d=%d",1,2,3);
    printf("%s\n",ch);
    return 0;
}
```

从`str`读取数据，根据`format`转换数据，返回转换的字符数量，-1表示失败

```c
sscanf(const char *str,const char *format, ...);
```

```C
char ch[] = "1+2=3";
int a,b,c;
sscanf(ch,'%d+%d=%d',&a,&b,&c);
printf("%d\n%d\n%d\n",a,b,c,);
```

从`str`读取数据，根据`format`给定的格式解析并输出

```c
sprintf(char *str,const char *format, ...);
```



##### 字符串处理函数

拷贝字符串，包括0

```c
strcpy(char *dest,const char *src);
```

拷贝一定数量的字符，不会自动补充0

```c
strncpy(char *dest,const char *src,size_t n);
```

字符串转换成数字

```c
int a = atoi(const char *nptr);
float b = atof(const char *nptr);
long c = atol(const char *nptr)
```

字符串追加，包含0

```C
strncat(char *dest,const char *src,size_t n);
```

比较字符串大小

```C
strncmp(const char* s1,const char *s2,size_t n);
```

**字符串分割**

在`str`中以`delim`为分隔符分割字符串，以后将`str`设置为NULL即为继续分割。

成功返回地址，失败返回NULL。

这种方法会破坏原字符串，所以在调用之前需要备份

```C
strtok(char *str,const char *delim);
```

字符串查找

在`haystack`中查找字符串`needle`出现的位置，失败返回NULL

```c
strstr(const char *haystack,const char *needle);
```

字符串拼接

```c
strcat(char *dest,const char *src);
```

字符查找

```c
strchr(const char *s,int c);
```



### C语言获取系统时间和随机数

`time_t time(time_t *t);`获取当前时间戳，一般传入NULL，依赖`time.h`头文件

```c
#include <stdlib.h>
unsigned int seed = NULL;
void srand((unsigned int)seed); //设置种子
int a = rand(void); //返回随机数
int b = a % 50; //得到0-50区间的随机数
int c = a % 51 + 50; //得到50-100区间的随机数
```



### 函数的声明与定义

```c
extern int name(int a,int b); //函数的声明
int name(int a,int b); //一般推荐使用
int name(int,int); //最简
```

通常，在主函数上面声明，下面定义



### 指针

定义：指针是存储内存地址的变量，无论什么类型，大小总是4或8，大小受32位或46位系统影响

特点：指针读取的内存地址将会随着指针类型变化

`&a`可以对a变量进行升维，但一次性只能升1层。

`*a`可以对a变量进行降维，可以嵌套很多层。

通常，指针最多嵌套3层，其中1层最为常见。

##### 空指针和野指针

|                 空指针                  |                  野指针                  |
| :-------------------------------------: | :--------------------------------------: |
| 指针指向0内存空间，该内存受操作系统保护 | 指针指向未知区域，**通常**受操作系统保护 |
|                无法存取                 |             **一般**无法读取             |

尽量在从程序中不出现野指针，不操作空指针。操作系统保留内存区域中的0-255区域，该区域禁止任何程序进行读写。

##### 万能指针

万能指针并不是真的万能，只是它可以存储任何类型的指针，但是必须转型后才能使用。

`void p = &a;`这是一个万能指针，保存着a变量的地址

`int* pp = (int*)p;`这是一个int*类型的变量，同样保存着a变量的地址，但是它的变量是由万能指针**强制转型**而来。

对万能指针直接进行操作会报错，原因是程序根本不知道一次性读取多少空间。

##### const修饰的指针类型变量

规则：const距离哪个比较近，就锁定哪个。

`const int* a = &b;`不能更改值，可以更改指向的位置

`int* const a = &b;`不能更改指向的位置，但可以更改值

如果两个const一起使用，则会彻底锁定，只有用更高层的指针才能解决

##### 数组？指针？

当定义一个数组时，该数组名可以被看做一个指针，当这个数组被当做参数传入时，数组退化成指针同时丢失精度（丢失长度）

当数组被看做指针时不能直接被赋值，只能通过偏移量赋值，如果不注意容易数组下标越界

##### 指针之间的计算

两个指针相减，得到的是两个指针之间的偏移量，结果总是一个整数，除以相应的类型以计算步长

指针的加减运算可以看做加减数组下标，步长移动的大小取决于变量类型，所以，不推荐不同类型的变量相互读取

指针之间乘除运算没有任何意义，但不会报错

##### 指针数组

`int* a[]={&a,&b};`指针数组里存放的全部都是指针，通过`char* arr[]={"hello","world"};`可以创建一个字符串数组，指针数组是一个特殊的二维数组结构

##### 指针与形参实参的关系

当正常的参数传入时，函数只能通过返回值间接调整参数的值。但当传入的是一个指针时，不需要间接修改指针的值，因为参数可以通过指针达到修改的目的。可以把指针指向的位置视作全局变量。



### main函数中的参数

`int main(int argc,char* argv[]){}`以这种方式定义带参数的main函数

| 参数 |   全名    |       解释       |
| :--: | :-------: | :--------------: |
| argc | arg count | 传入的参数的数量 |
| argv | arg value | 传入的参数的内容 |

特点：程序名本身也是一个参数，在`cmd -k "cmd"`中，cmd是第一个参数，-k是第二个参数，"cmd"是第三个参数。

### 程序内存图

|        代码区：<br />程序执行的二进制码<br />共享只读        | 数据区：<br />1.初始化数据区<br />2.为初始化数据区<br />3.常量区 |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| 栈区：<br />系统为每一个程序分配一个临时的空间<br />局部变量，函数信息，函数参数，数组<br />栈区大小为1M<br />在windows中最大是10M<br />在Linux中最大16M | 堆区：<br />通常存储大量数据，图片，音乐，视频等<br />需要手动开辟和释放<br />以指针为主要操作，可能会被其他程序破坏 |



### 枚举类型

```c
enum Name{
    v1,v2,v3
}
```

枚举有其相对应的值， 在枚举表中应列出所有可用值，也称为枚举元素。本身系统定义了一个表示序号的数值，默认从0开始定义，可以赋值，但会自动+-1式列数

### 局部变量和全局变量

|   变量类型   |      作用域      |     生命周期     | 存储位置 |
| :----------: | :--------------: | :--------------: | :------: |
|   局部变量   |     函数内部     | 从创建到函数结束 |   栈区   |
|   全局变量   |  项目中所有文件  | 从程序创建到销毁 |  数据区  |
| 静态局部变量 |     函数内部     | 从创建到程序销毁 |  数据区  |
| 静态全局变量 | 定义所在的文件中 | 从程序创建到销毁 |  数据区  |

> 静态变量用`static`修饰，只会定义一次，可以多次赋值

### 堆内存空间

##### 定义

堆内存空间是指一串连续的内存空间，通常用于临时存储大量数据。

```c
char* a=(char*)malloc(sizeof(char)*大小);//创建空间
if(!a){//初始化
    memset(a,值,大小);
    //其他操作
    //释放
    free(a);
}
```

`memset`函数第二个参数必须是`unsigned char`，值在0-255之间。

##### 堆空间操作函数

拷贝`src`的`n`个内容到`dest`区，**内存区域不可以重叠**

```c
memcpy(void *dest,const void *src,size_t n);
```



### 结构体

##### 结构体的定义

 ```c
struct stu{
    int num;
    char name[20];
    char sex;
    int age;
    char addr[30];
} student;
 ```

其中，`struct stu`表示结构体类型名，`stu`可以没有。

`student`表示结构体变量名，可以直接使用

通常，需要在主函数中重新定义一个结构体变量名：

```c
int main(){
    struct stu Mike;
}
```

`struct stu`可以看作一种数据类型

##### 结构体变量的操作

可以对函数传入结构体参数,*此处两个知识点*

```c
void fun1(struct stu * const p){
    //不能对指向操作，可以操作值
    p->age=10;
}
```

```c
void fun2(const strct stu * p){
    //不能操作值，可以操作指针指向
    p=NULL;
}
```

实例：

```c
int main(){
    struct student stu;
    //因为数组退化成指针，所以不需要&符号
    scanf("%s%d%d%s",stu.name,&stu.age,&stu.score,stu.addr);
    printf("姓名：%s\n",stu.name);
    printf("年龄：%s\n",stu.age);
    printf("成绩：%s\n",stu.score);
    printf("住址：%s\n",stu.addr);
    return 0;
}
```

**结构体数组略，大体与数组相同**

**结构体指针略，大体与指针相同**

**结构体指针数组略，大体与指针数组相同**

### 联合体

```C
union Var{
    int a;
    float b;
    double c;
    char d;
    short d;
}
```

```C
int main(){
    union Var var;
    var.a = 100;
    printf("%d\n",var.a);
    return 0;
}
```

该类型在存储时只支持存储其中一种类型的变量，在以其他类型读取时会出现异常的结果，可以存储任何类型的数据，包含自己

### 文件操作

##### 磁盘文件和设备文件

磁盘文件：一组相关数据的有序集合，通常存储在外部介质上，调用时才输入内存。

设备文件：操作系统中把每一个与主机相连的输入、输出设备看作是一个文件，输入输出等于读写。

##### 文件的打开

```c
FILE * fopen(const char * filename,const char * mode);
```

`filename`：文件名，`mode`：读写模式

```c
#include <stdio.h>
int main(){
    File fp = fopen("a.txt","r");
    //fclose(fp);
    return 0;
}
```

`mode`可以包含的模式：

| 打开模式 |                           含义                           |
| :------: | :------------------------------------------------------: |
|  r或rb   |           以只读的方式打开一个文本或二进制文件           |
|  w或wb   |           以只写的方式打开一个文本或二进制文件           |
|  a或ab   |           以追加的方式打开一个文本或二进制文件           |
| r+或rb+  |           以可读写的方式打开文件，不会创建文件           |
| w+或wb+  |        以可读写的方式方式打开文件，清空或创建文件        |
| a+或ab+  | 以添加的方式打开文件，打开文件末尾写入文件，否则创建文件 |

b只是windows中的模式，在linux中r和rb一样

##### 文件的关闭

```c
fclose(fp);
```

##### 文件的读写

```c
fputc(int ch,FILE * stream);
```

将ch转换为unsigned char并写入文件

```c
fgetc(FILE * stream);
```

从stream中读取一个字符，成功返回字符，失败返回NULL

```c
fprintf(FILE * stream,const char * format, ...);
```

根据`format`格式化数据，并输出在stream

```c
fseek(FILE *stream, long offset,int whence);
```

移动文件流光标位置，`stream`文件流，`offset`根据`whence`移动的偏移量

```c
ftell(FILE *stream);
```

获取光标位置

```c
fputs(const char * str,FILE * stream);
```

把`str`写入`stream`，不包含0

```c
fwrite(const void *ptr,size_t size,size_t nmemb,FILE *stream);
```

`ptr`准备写入的文件地址，`size`未标识的int类型，`nmemb`写入文件的块数，`stream`文件指针

```c
fscanf(FILE * stream,const char * format, ...);
```

根据`format`读取`stream`中的文件

```c
fgets(char *s,int size,FILE *stream);
```

读取`size`大小的文件内容到`s`，遇到换行空格结尾停止

```c
fputs(const char * str,FILE * stream);
```

写入文件不包含0

##### 文件结尾

在文件结尾，将会返回一个-1,其在编译器定义为`EOF`。

这种返回必须是文本文件，否则将不会返回`EOF`

##### 文件的删除和重命名 

```c
remove(const char* pathname);
```

删除一个文件/目录，成功0,失败1

```c
rename(const char* oldname,const char* newname);
```

重命名文件/目录，成功0,失败1

也可以使用此方法移动文件

##### 文件缓冲区

C语言中会自动建立文件缓冲区，通过以下方法释放缓冲区

```c
fflush(FILE* stream);
```

成功返回0,失败返回-1

### typedef

`typedef`是关键字，可以将一种数据类型定义一个其他简称，但不能定义数据。

发生在编译阶段，而`#define`发生在预处理阶段

```c
typedef unsigned int ui;
```

把`unsigned int`简写成`ui`

### 索引

索引是为了避免for循环时间过长出现的，原理：

记录某个词的首字母/首词出现的区间，在区间内进行循环查找，减少for循环占用的时间