# go语言的开发环境

## 下载安装

[Go语言官网](https://golang.org)，[Go语言谷歌中文镜像站](https://golang.google.cn/dl)。

推荐从包源安装。

## go语言优势

简单部署，直接编译机械码，编译后不依赖其它库，直接运行即可部署。

是一个静态语言，会在编译时检查问题。

跨平台，面向对象，支持C语法

编译时间顶层，运行时间仅次于C++。

## go语言的hello world

```go
package main
import "fmt"

func main(){
    fmt.Println("hello golang!!!!")
}
```

可见以下特点：

* 需要声明
* 导入的文件必须使用
* 可以写也可以不写分号

## go语言的编译与运行

使用命令`go help`调出帮助

使用`go run filename.go`尝试运行程序源文件

使用`go build filename.go`编译文件

## 常见逻辑语法

```go
package main//声明一个包名

//import "fmt"
//import "time"
import {
    "fmt"
    "time"
}

func main(){
    fmt.Printf("Hello world!\n")
    time.Sleep(1*time.Second)//我直接倒地大睡1秒
}
```

```go
package main

import {
    "fmt"
}

func main(){
	var a int//标准却有点别扭的声明变量方式
    fmt.Println("a = ",a)//a = 0
    
    var b int = 100 //声明且赋值
    fmt.Println("b = ",b) //b = 100
    fmt.Printf("type of b = %T\n",b) // type of b = int
    
    var c = 100 //自适应类型
    fmt.Println("c = ",c) //c = 100
    fmt.Prinf("type of c = %T\n",c) //type of c = int
    
    d := 100 //常用方法 - 在某些情况下，该方法可以相当于new
    fmt.Println("d = ",d) //100
    fmt.Printf("type od d = %T\n",d) // type of d = int
    
    const dgdtj int = 10 //常量
}
```

```go
package main//语法糖
import "fmt"
func main(){
    fmt.Println("像这样的函数","其实可以传入很多的值","比如这样")
    var xx,yy int = 100,200 //声明很多变量 - 这在以后返回2个值的函数中常用
    var aa,bb = 123,"wd***" //支持很多类型
    var ( //多行格式化变量
    	vv int = 100
        jj bool = true
    )
    
    const { //定义枚举类型（大写
        A = 0
        B = 1
        C = 2
    }
    const { //自动累加 - 从0开始
        D = iota
        E
        F
    }
    const { //自动累加 - G = 1,J = 2, H = 3,K = 4 ......
        G,J = iota+1,iota+2 //可以使用其它运算符号
        H,K
        I,L
    }
}
```

以下是函数的定义

```go
package main
import "fmt"

func wd(){
    fmt.Println("wd")
}
func nm(a int){
    fmt.Println(a)
    return a
}
func d(b string){
    fmt.Println(b)
    return 100,"wdadafeetgsuyehgr4fbutghfjm"
}
func e() int {//返回一个int类型
    return 0
}
func d() (int,int){//返回2个int类型且匿名
    return 1,2
}
func f() (a int,b int){//返回且带有变量名
    a = 3
    b = 4
    return
}
func main(){
    wd()
    
    aa := nm(5)
    fmt.Println(aa)
    
    bb,cc := d("In The End...")
    fmt.Println(bb,cc)
    
    fmt.Println(e())
    
    ff,gg := f()
    fmt.Println(ff,gg)
    
    aaa,bbb = f()
    fmt.Println(aaa,bbb)
}
```

## 导包问题

导包时，可以导入自己写的包，此时，填写文件名，缺省后面的 .go ，可以多次嵌套，但注意不要循环

```go
package main
import "mygofile"
func main(){
    mygofile.myfunc1()
}
```

可以通过相对路径，也可以通过绝对路径

```go
package main
import "C:\User\UserName\Desktop\MyGoFilw"
func main(){
    MyGoFile.myfunc1()
}
```

如果不想写文件名，想直接导入，即使用匿名导入

```go
package main
import _ "MyGoFile"
func main(){
    myfunc1()
}
```

这个符号用`.`也是可以的

同样，也可以使用别名

```go
package main
import www "MyGoFile"
func main(){
    www.myfunc1()
}
```

## go语言中的指针

和C语言指针一样，略

## defer语句的调用顺序

简解：入栈式异步调用

```go
package main
import . "fmt"
func main(){
    defer Println("结束时执行，但是最后执行")
    defer Println("结束时执行，但是在最后执行之前执行")
    Println("优先执行")
    Println("之后执行")
}
```

## Go语言数组

```go
package main
import . "fmt"
func a(ma [4]){
    ma[0] = 5
}
func main(){
    var myArray1 [10]int //静态固定长度数组
    for i := 0;i<len(myArray1)li++ {
        Println(myArray1[i])
    }
    
    myArray2 := [4]int{1,2,3,4} //固定kv数组
    for index,value := range myArray2 {
        Println("index = ",index,", value = ",value)
    }
    
    a(myArray2) //指针传递 - 更改生效
}
```

```go
package main
import . "fmt"
func main(){
    myArr := []int{1,2,3,4} //动态数组 - 切片
    var a = make([]int,3,5) //make函数开辟一个空间
    Printf("%d  %d  %v  \n",len(a),cap(a),a) //长度  空间  值
    //在这个案例中，向a直接赋值a[3]是错误的，正确的做法应该是追加数据
    a = append(a,5) //向a追加一个元素位，值是5（len变化）
    // ............
    //若容器已满（cap=len），系统会自动扩容cap至原来的2倍，所以创建数组时要确定好cap的容量
}
```

```go
package main
import . "fmt"
func main(){
    a := []int{1,2,3}
    b := a[0,2] //从0开始，高位截瘫2位
    //但此过程不复制值
    
    copy(s1,s2) //从s2获取值传给s1 - 此时赋值值
}
```

## Map的声明与使用

```go
package main
func main(){
    var m1 map[string]string //声明一个map，k和v均为字符串类型
    m1 = make(map[string]string, 10) //给map分配空间
    
    m2 := make(map[string]string, 80) //简写
    
    m3 := map[string]string{ //最简（要make有什么用...）
        "a":"b"
    }
    m3["c"] = "d"
}
```

```go
package main
func main(){
    //添加和遍历和数组相同，但是删除不同
    delete(m1,"key")
}
```

## 结构体

```go
type mi int //声明mi是int的别名
type Book struct{ //定义一个结构体（？？？）
    title	string
    auth	string
}
func main(){
    var book1 Book//book1 = new Book()
    book1.title = "Go语言从入门到入土"
    book1.auth = "张三"
}
```

此时产生的对象调用函数时是复制值传递，不会修改原本内容

## Go语言面向对象

**注：此对象并不是现实中的对象，是一个虚化的，例子中的对象，与现实中的罗老师没有一点关系**

```go
package main
import . "fmt"
type Hero struct {
    Name string
    Ad	int
    L
}
func (this Hero) getname() {
    Println("Name = ",this.Name)
}
func main(){
    hero := Hero{Name:"罗老师", Ad: 100, L: 999}
    hero.getname()
}
```

**注：若结构体中的类别大写，则代表公开，否则代表私有**

```go
package main
type a struct {
    A
}
type b struct {
    a //在b中继承a
    B
}
```

继承后，该重写的重写，该添加的添加

> 结构体本质上是一个指针，可以用指针的全部技巧

## 接口

`interface{}` 是一个万能类型，也是一个空接口

```go
package main
import . "fmt"
func a(a interface{}){ //此时传入后，需要手动判断数据类型
    value, ok := a.(string)
    if ok {
        Println("字符串",value)
    }else{
        Println("其他",value)
    }
}
func main(){
    b int = 5
    a(b)
}
```

## 文件的读写

> 文案不完整

```go
package main
import {
    "fmt"
    "os"
    "io"
}
func main(){
    tty,arr := os.OpenFile("/dev/tty", os.O_RDWR, 0)
    
    if err != nil {
        fmt.Println("openfileerr",err)
        return
    }
    
    var r io.Reader
    t = tty
    
    var w io.Writer
    w = r.(io.Writer)
}
```

## reflect反射

```go
package main
import {
    "reflect"
    "fmt"
}
func main(){
    var num float64 = 3.1415
    fmt.Println(reflect.TypeOf(num),reflect.ValueOf(num))
}
```

## 结构体标签/别名

```go
package main
import {
    "fmt"
    "reflect"
}
type a struct {
    Name string `info:"name" doc:"你的名字（与身份证号"`
    Sex	string `info:"sex"`
}
func main(){
    var b a
    t := reflect.TypeOf(b).Elem()
    s := b.Field(0).Tag.Get("info")
    fmt.Println(s)
}
```

## 多线程/go程

```go
package main
import {
    "fmt"
    "time"
}
func newTask() {
    i := 0
    for {
        i++
        fmt.Printf("new Goroutine : i = %d\n",i)
        time.Sleep(1*time.Second)
    }
}
func main(){
    go newTask() //创建新线程
    i := 0
    for {
        i++
        fmt.Printf("new Goroutine : i = %d\n",i)
        time.Sleep(1*time.Second)
    }
    //主函数一旦停止，其子线程也会停止
}
```

```go
package main
import {
    "fmt"
    "time"
    "runtime"
}
func main(){
    go func() {
        defer fmt.Println("次线程结束")
        func () {
            defer fmt.Println("函数结束")
            runtime.Goexit() //退出线程而不是函数
            fmt.Println("函数执行")
        }
        fmt.Println("子线程运行")
    }()
    
    for { //睡死
        time.Sleep(1 * time.Second)
    }
}
```

## 线程传递信息

```go
package main
import "fmt"
func main(){
    c := make(chan int) //定义一个管道
    go func(){
        defer fmt.Println("go程结束")
        fmt.Println("dfaeferfgrgsr")
        c <- 666 //传递信息
    }
    num := <-c //这里c和符号不能分开 - 此时main函数线程会阻塞并等待信息传递
    fmt.Println(num)
}
```

```go
package main
import "fmt"
import "time"
func main(){
    c := make(chan int, 3) //缓冲区为3的管道，此时不取空或填满，对应的线程不会阻塞
    go func(){
        defer fmt.Println("go程结束")
        fmt.Println("dfaeferfgrgsr")
        c <- 666 
        c <- 777
        c <- 888
    }
    
    time.Sleep(10*time.Second)
    
    num := <-c //这里c和符号不能分开
    num1 := <-c 
    num2 := <-c
    fmt.Println(num,num1,num2)
}
```

在通道使用过程中，`close(c)`函数可以关闭一个管道，`if data, ok := <-ok`，通过ok判断通道是否可用，data取出数据

```go
package main
import "fmt"
func main(){
    c := make(chan int)
    
    go func(){
        for i := 0;i<5;i++ {
            c <- i
        }
        close(c)
    }
    
    for {
        if data,ok := <-c; ok{ //从管道中获取数据，并以ok为判断条件
            fmt.Println(data)
        }else{
            break
        }
    }
}
```

```go
package main
import "fmt"
func main(){
    c := make(chan int)
    
    go func(){
        for i := 0;i<5;i++ {
            c <- i
        }
        close(c)
    }
    
    for data := range c{ //使用range代替不断操作管道
        fmt.Println(data)
    }
}
```

单线程只能检测一个管道，`select`可以检测多个管道

```go
package main
import "fmt"
func main(){
    c := make(chan int)
    quit := make(chan int)
    
    go func() {
        for i := 0;i<6;i++ {
            fmt.Println(<-c)
        }
        quit <- 0
    }()
    
    x,y := 1,1
    for {
        select {//只会执行一次，所以设置循环
            case c <- x: //如果c可写，则进入
            x = y
            y = x+y
            case <-quit: //如果quit传值
            fmt.Println("quit")
            return
        }
    }
}
```

# 图形界面

```go
package main

import {
    "os"
    "github.com/mattn/go-gtk/gtk"
}

func main() {
    gtk.Init(&os.Args) //初始化
    
    win := gtk.NewWindow(gtk.WINDOW_TOPLEVEL) //带有边框的顶层窗口
    win.SetTitle("窗口标题")
    win.SetSizeRequest(400,400) //窗口大小
    win.SetPosition(gtk.WIN_POS_CENTER) //窗口居中
    win.SetResizable(false) //用户可以缩放
    
    var w, h int
    win.GetSize(&w, &h) //获得窗口大小
    
    win.Show() //展示窗口
    
    gtk.Main() //主窗口事件循环
}
```

## 添加元素

```go
layout := gtl.NewFixed() //创建容器
win.Add(layout) //把容器塞进冰箱
b1 := gtk.NewButtonWithLabel("按钮1")
layout.Put(b1,0,0) //把按钮放在容器里
win.ShowAll() //避免写好多
gtk.Main()
```

## 信号处理

```go
func HandleSignal(tmp string) {
    fmt.PrintLn("tmp = ", tmp)
}
str := "are u ok?"
b1.Connect("clicked", HandelSignal, str) //把点击事件的信号交给HandelSignal函数，并传递str
```

```go
func HandleSignal(ctx %glib.CallbackContext) {
    arg := ctx.Data() //用户传递的参数
    data, ok := arg.(string)
    if ok {
        fmt.Printf("按钮被按下， %s\n", data)
    }
}
```

```go
b2.Connect("clicked", func() {
    fmt.Printf("按钮2被拍下，身价： %s\n", str)
})
```

窗口关闭： 

```go
win.Connect("destroy", func() {
    gtk.MainQuit() //gtk主程序关闭
})
```

