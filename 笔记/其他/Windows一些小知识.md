# 自定义协议(某些病毒后门/在浏览器打开程序)

打开注册表编辑器

在HKCR创建一个条目，名字将会决定协议的本体

默认条目名字应该是 URL:名字 Protocol

再创建一个叫 URL Protocol 的文件

创建目录 shell\open\command

修改最后一层目录的默认文件内容为 要启动的程序 传过来的url参数为%1 （类似为 "C:\Windows\system32\cmd.exe" "%1"）

