# JAVA笔记

### 程序开头---package

`package com.sun.index.indexmodles.javalang.lang;`定义一个程序包，相当于路径。

规则：

​    该语句只能出现在程序语句的第一句，上面可以有注释。

​    形式为 com.公司域名倒叙.项目名.模块名.功能名



### public class

在一个java源文件中，只能有一个public class，但可以有多个class。必须有一个class是与文件名一致的，但是可以没有public修饰



### 基本数据类型

|  修饰   |  类型  | 大小  |
| :-----: | :----: | :---: |
|  byte   |  整数  | 1字节 |
|  short  |  整数  | 2字节 |
|   int   |  整数  | 4字节 |
|  long   |  整数  | 8字节 |
|  float  | 浮点数 | 4字节 |
| double  | 浮点数 | 8字节 |
| boolean | 布尔值 | 1字节 |
|  char   |  字符  | 2字节 |



### 异常捕获

##### 捕获异常

可以使用try...catch...finally语句或throws语句处理异常

```java
class a throws Exception{
    1/0;
}
class a{
    try{
        1/0
    }catch(Exception e){
        e.printStackTrace(); //打印错误堆栈
        e.getMessage(); //获取错误信息
    }finally{
        System.out.println("这个语句块中的代码一定会被执行")
    }
}
```

##### 手动抛出异常

```java
xxx e = xxx("msg");
throw e;
```



### 包装类对象 - 自动装箱与自动拆箱

| 原类型  |        包装类型         |
| :-----: | :---------------------: |
|   int   |  **java.lang.Integer**  |
|  byte   |     java.lang.byte      |
|  short  |     java.lang.Short     |
|  long   |     java.lang.Long      |
| double  |    java.lang.Double     |
| boolean |    java.lang.Boolean    |
|  char   | **java.lang.Character** |

现在的JDK将会自动进行自动装箱与自动装箱



### 数组

静态初始化一维数组`int[] c1 = (0,1,2,3,4,5,6,7,8,9);`，静态初始化二维数组`int[][] d1 =((1,2,3),(1,2,3));`。

动态初始化

```java
int[] a1 = new int[5];
int[] b1 = new int[1][2];
```



### 关于类

##### 类的继承

```java
class a extends b{
    //a类中重写b类中的方法
}
```

##### 构造方法

```java
class name{
    f(){
        //无参数构造方法，用处不大但至关重要
    }
    f(int a){
        //有参数的构造方法，与无参数构造方法构成方法重载
    }
}
```

构造方法不能写返回值，相当于有void关键字修饰

##### super关键字

super不是引用类型，其中存储的不是内存地址，且指向的不是父类对象。super代表的是当前子对象当中的父类特征。

当子类重写父类中的方法函数时，子类需要调用父类中的方法，需要使用super关键字。

super可以用在成员方法中，构造方法中，但不能用于静态方法中。

```java
super a;
super("001",0.01);
```

第二种方法调用的是父类的构造方法



### 接口

接口也是一种引用类型，可以被等同看做类。接口是一个特殊的抽象类，完全抽象。接口中没有构造方法，无法被实例化。接口和接口之间可以多继承。一个类可以实现多个接口，可以看做继承。

```java
int interface name{
    //定义一个接口
    //只能出现常量和抽象方法
}
```

一个非抽象的类实现接口，需要把接口中的方法**全部**重写

```java
class myclass implements aclass,bclass{
    public void m1(){}
    public void m2(){}
}
```

```java
interface aclass{
    public abstract void m1();
}
```

```java
interface bclass{
    public abstract void m2();
}
```



### 访问权限修饰符

通过访问权限修饰符来规定访问范围。

private < 缺省 < portected < public

|  修饰符   |            访问域            |
| :-------: | :--------------------------: |
|  private  |    私有，只能在本类中访问    |
|   缺省    |      可以在同一个包访问      |
| portected |  可以在同一个包或子类中访问  |
|  public   | 完全公开，任何地方都可以访问 |



### buffer缓冲区

StringBuffer和StringBuilder缓冲区大小默认是16，创建缓冲区前需要考虑大小，否则将浪费内存。

StringBuffer是线程安全的，StringBuilder效率较高。

```java
public class test01{
    public static void main(String[] args){
        StringBuffer ab = new StingBuffer(); //默认16
        String[] ins = ["stra","strb","strc","strd"];
        for(int i;i<ins.length();i++){
            if(i==ins.length()-1) ab.append(ins[i]);
            else{
                ab.append(ins[i]);
                ab.append(",");
            }
        }
    }
}
```



### 泛型

```java
int a<int> = 1;
```

泛型只能存储单一类型的数据，但可以防止程序出错

```java
public class GenericTest05{
    public static void main(String[] args){
        MyClass<String> me = new MyClass<String>();
        me.m1("JACK");
    }
}
```

```java
class MyClass<T>{
    public void m1(T t){
        System.out.println(t);
    }
}
```

自定义泛型

### 枚举

```java
enum Result{
    SUCCESS,FAIL
}
```

定义一个枚举（在主类外）

```java
Result.SUCCESS;
```

枚举的使用

### 时间与日期对象

##### 获取当前时间戳

```java
public class DateTest01{
    public static void main(String[] args){
        long now = System.currentTimeMillis();
        System.out.println(now);
    }
}
```

##### 获取当前日历

```java
import java.util.Calendar;
public class DateTest05{
    public static void main(String[] args){
        Calendar e = Calendar.getInstance();//获取当前日历
        int i = c.get(Claendar.DAY_OR_WEEK);//获取星期
        System.out.println(i);//输出
    }
}
```

##### 获取当前系统时间

```java
import java.util.Date;
import java.text.SimpleDateFormat;

public class DateTest02{
    public static void main(String[] args){
        Date nowTime = new Date();
        SimpleDateFormat adf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss SSS");
        String strTime = sdf.format(nowTime);
        System.out.println(strTime);
    }
}
```

##### 格式化

日期和时间格式由*日期和时间模式*字符串指定，在日期和时间模式字符串中，未加引号的“A”到“Z”和“a”到“z”被解释为模式字母，用来表示日期或时间字符串元素，文本可以使用单引号引起来，以免进行解释

定义了以下字母（其他字母保留复制）：

| 字母 | 日期或时间元素  |       表示        |     示例      |
| :--: | :-------------: | :---------------: | :-----------: |
|  G   |   Era 标识符    |       Text        |      AD       |
|  y   |       年        |       Year        |   1996; 96    |
|  M   |    年中的月     |       Month       | July; Jul; 07 |
|  w   |    年中的周     |      Number       |      27       |
|  W   |    月中的周     |      Number       |       2       |
|  D   |    年中的天     |      Number       |      159      |
|  d   |   月中的天数    |      Number       |      10       |
|  F   |   月中的星期    |      Number       |       2       |
|  E   |  星期中的天数   |       Text        | Tuesday; Tue  |
|  a   |    Am/pm标记    |       Text        |      PM       |
|  H   | 一天中的小时数  |      Number       |       0       |
|  k   | 一天中的小时数  |      Number       |      24       |
|  K   | am/pm中的小时数 |      Number       |       0       |
|  h   | am/pm中的小时数 |      Number       |      12       |
|  m   | 小时中的分钟数  |      Number       |      30       |
|  s   |  分钟中的秒数   |      Number       |      55       |
|  S   |     毫秒数      |      Number       |      978      |
|  z   |      时区       | General time rone |    Pacific    |
|  Z   |      时区       | RFC 822 time rone |     -0800     |

```java
Date t = new Date(NULL);
System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS").format(t));
```

示例

### 集合

##### HashMap集合

HashMap是无序存储的不重复集合

```java
import java.util.*;
public class MapTest01{
    public static void main(String[] args)[
        Map p = new HashMap();
    ]
}
```

HashMap默认大小是16,扩展因子0.75

```java
p.put("123","456");
```

存储key对

```java
p.get("123");
```

获取key对应的value

```java
p.clear();
```

清空Map

```java
p.remove("123");
```

删除123key对

```java
p.size();
```

获取个数

```java
p.containsKey("LUCY");
```

判断map中是否有这样的key对

```java
p.containsValue("123");
```

判断map中是否有这样的value对

```java
p.values();
```

获取所有的value

```java
Set keys = p.keySet();
Iterator it2 = keys.iterator();
while(it2.hasNext()){
    Object id = it2.next();
    Object name = p.get(id);
    System.out.println(id+"--->"+name);
}
```

遍历HashMap

```java
Set entrySet = p.entrySet();
Iterator it3 = entrySet.iterator();
while(it.hasNext()){
    System.out.println(it3.next());
}
```

遍历HashMap

##### HashSet集合

```java
Set a = new HashSet();
```

创建集合

```java
a.add(1);
a.add(100);
```

存储数据，无序不可重复

```java
Iterator it = a.iterator();
while(it.hasNext()){
    System.out.println(it.next());
}
```

遍历示例

### 各种流

##### 输入输出流

```java
PrintStream ps = System.out;
ps.println("JAVA.........");
```

```java
System.setOut(new PrintStream(new FileOutputStream(log.log)));
System.out.print("213");
```

流可以改变输出位置，通常用以上方法记录日志

##### 文件流

```java
FileInputStream f1 = new FileInputStream("Test02.txt");
```

文件字节输入流

```java
FileReader f2 = new FileReader("Test02.txt");
```

文件字符读取流

```java
new FileOutputStream("temp02",true);
```

以追加模式打开文件

```java
String abslutePath = f1.getAbsolutePath();
```

获取绝对路径

```java
f1.read();
```

读取一个字节的数据

```java
f2.readLine();
```

读取一行数据，不包含换行

```java
byte[] bytes = new byte[1024];
int i1 = fis.read(bytes);
```

一次读取1024字节，需要限制一次输出的个数，因为如果字数不足，上次读取的数据不会被销毁

```java
f1.length();
```

获取文件的字节大小

```java
File f3 = new File("D:\\");
File[] fs = f3.listFiles();
for(File f:fs)[
    if(f.getAbsolutePath.endWith(".java")){
        System.out.println(f.getAbsolutePath());
    }
]
```

遍历文件夹示例，只显示`.java`文件

```java
f2.getParent();
```

获取父路径

```java
f1.isDirectory();
f2.isFile();
```

判断是否是目录/文件

```java
Date t = new Date(f1.lastmodified());
System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS").format(t));
```

输出文件最后修改时间

```java
f4.mkdir();
f5.createNewFile();
f6.exists();
```

创建目录文件和判断是否存在

##### 二进制文件流

```java
DataInputStream dis = new DataInputStream(new FileInputStream("temp05"));
```

二进制文件输入流，需要提前知道文件存储的格式和顺序

```java
DataOutputStream dos = new DataOutputStream(new FileOutputStream("temp05"));
```

二进制文件输出流，按照特定格式输出

##### 缓冲区输入输出流

```java
FileInputStream fis = new FileInputStream("temp06");
```

创建文件字节输入流

```java
InputStreamReader isr = new InputStreamReader(fis);
```

将字节流转换成字符流

```java
BufferedReader br = new BufferedReader(isr);
```

将字符流转换成带有缓冲区的字符流

```java
String temp = null;
while((temp=br.readLine())!=null){
    System.out.println(temp);
}
br.close();
```

读取和关闭

此时只需要关闭最外层的流即可，这属于**装饰者模式**

```java
BufferedReader br = new BufferedReader(new FileReader("t.txt"));
```

文件字符流引入缓冲区

##### 对象的存储

```java
ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("temp06"));
oos.writeObject(new User("张三"));
oos.writeObject(new User("罗..."));
oos.flush();
oos.close();
```

完整的存储示例

### 多线程

##### 创建新线程

```java
public class ThreadTest07{
    public static void main(String[] args) throws Exception{
        Thread t = new P();
        t.setName("Task1");
        t.start();
        t.sleep(5000);
        System.out.println("Hello world!");
    }
}
```

```java
class P extends Thread{
    public void run(){
        for(int i = 0;i<200;i++){
            System.out.println("Task2 is runing...");
        }
    }
}
```

主线程会创建线程，通过`t.setName("Task2")`设置新线程名字为`Task2`，然后通过`t.start()`启动线程，线程会调用`run`方法执行，但是，`t.sleep(5000)`不是让新线程暂停5秒，而是让主线程暂停5秒。相当于`Thread.sleep(5000)`

```java
class p implements Runnable{
    public void run(){
        for(int i=0;i<10;i++){
            System.out.println("run-->"+i);
        }
    }
}
```

**推荐使用这种方法来创建线程，保留了类的继承**

##### 线程同步

对象锁

```java
Thread.join(t1);
```

当前线程与t1线程合并

```java
syncheonised(共享对象){
    需要被同步的代码
}
```

通常的线程同步（安全锁），被锁定的类一次性只能一个线程使用

类锁

```java
class Myclass{
    public synchronized static void m1(){}
}
```

在方法添加`synchronized`后，线程执行时，程序执行时会找类锁，被锁定的函数一次只能一个线程使用

##### 线程其他

```java
t.interrupt();
```

中断t的睡眠，通常不建议使用，一般通过全局变量标记

```java
t.getName();
```

可以获取到线程名字

```java
Thread t = Thread.currentThread();
```

获取当前线程对应的内存地址

```java
try{
    Thread.sleep(1000);
}catch(InterruptedException e){
    e.printStackTrace();
}
```

由于`run`方法不能抛出异常，所以`sleep`方法需要用这种方法捕获异常

```java
t1.setPriority(5);
```

设置线程优先级，决定线程抢CPU时间片的多少，1-10之间

```java
Thread.yield();
```

让步一次，让同优先级的线程优先抢占CPU时间片，不能指定休眠时间

##### 守护线程

线程分类上可以分为用户线程和守护线程，只有所有用户线程结束之后守护线程才能。Java的回收机制就是一个守护线程。守护线程一般都是无限执行的（while循环）

```java
t1.setDaemon(true/false);
```

将`t1`线程设置为用户进程或守护线程，`true`代表守护线程，`false`代表用户线程

即使守护线程在程序代码上不会退出，但是守护线程还是会跟着所有用户线程的结束所结束

##### 定时器

作用：每隔一段固定的时间执行一段代码（由于计算机环境不稳定，即使代码是准确的，实际应用效果也不一定准确）

```java
Timer t = new Timer();
```

创建定时器

```java
t.schedule(TimerTask task,Date firstTime,long period);
```

创建定时任务

```java
public class TimerTest01{
    public static void main(String[] args){
		Timer t = new Timer();
		t.schedule(new logTimerTask,new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS").parse("2021-02-16 00:00:00 000"),10*1000);
    }
}
class logTimerTask extends TimerTask{
    public void run(){
        System.out.println("H B D");//猜猜这是什么意思
    }
}
```

在2020年02月16日0点执行输出`H B D`，后每隔10秒输出一次

##### wait

```java
wait(Timeout);
```

等待其他线程调用该线程的`notify()`方法前一直等待，如果传入超时则超时后也可以继续执行

```java
notify();
notifyAll();
```

唤醒此对象在监视器上等待的单个和所有线程

##### 反射

反射是指调整自己的状态以适配当前的条件，根据自己的状态调整当前的条件，**类似于递归**。

**如果使用不当，将会造成较高成本。**

### 类的存储 - 序列化与反序列化

```java
import java.io.Serializable;
public class User implements Serializable{
    static final long serialVersionUID = 123456789;
    transient String name;
    User(String name){
        this.name = name;
    }
    public String toString(){
        return "User("+name+")";
    }
}
```

被序列化的类示例 - 通过类引入属性参加序列化，使用transient来避免属性参加序列化

```java
public class Test01{
    public static void main(String[] args) throws Exception{
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.DBF"));//这里是一行下来的，由于长度问题自动换行
        User u = new User("JACK");
        oos.writeObject(u);
        oos.flush();
        oos.close();
    }
}
```

序列化类示例

```java
import java.io.*;
public class ObjectInputStreamTest01{
    public static void main(String[] args){
        ObjectInputStream ols = new ObjectInputStream(new FileInputStream("temp4"));
        Object o = ols.readObject();
        ols.close();
    }
}
```

反序列化示例
