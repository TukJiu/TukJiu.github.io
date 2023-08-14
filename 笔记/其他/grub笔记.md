# grub
grub是一种新时代多系统高级引导器，与其他引导器相比：引导更为快速，可以多系统引导，支持efi

# 电脑启动过程
## 传统引导
传统引导（legacy），自检步骤多，稳定，但是速度慢。

启动过程如下

电源>初始化bois>bios自检>查找启动设备>mbr>加载os内核>启动
> bios：basic input output system（基本输入输出系统）
> mbr：master boot record（主引导记录）

## uefi | efi
efi引导，没有自检，直接启动系统，由系统自检。

启动>初始化efi>引导程序>加载os内核>启动

现在，该启动方式可以直接把引导程序当做操作系统使用，不过功能性不是很强。

该方式支持分辨率高，没有画面压缩效果，大部分设备都支持该启动方式，推荐使用这种启动方式。

# 安装grub | 支持uefi
关闭主板的secure boot，以关闭uefi分区保护。

创建一个33Mib的分区，文件系统为fat32。

使用`sudo -i`进入root模式。

挂载这个分区，创建一个efi文件夹和一个grub文件夹。

挂载根分区到`/mnt`，挂载新分区到`/mnt/boot/efi`

执行`grub-install --root-directory=/mnt --efi-directory=/mnt/boot/efi /dev/sd*`

再次执行`grub-mkconfig -o /mnt/boot/grub/grub.cfg`

执行完成后，即可安装完成。

# 如何使用坏掉的grub
使用`ls`查看所有可用的磁盘，再次使用`ls (hd*,xxx)`查看分区使用的分区种类，找到`linux`分类的分区（linux系统）。

执行`set profix=(hd*,xxx)/boot/grub`确定启动分区，使用`insmod normal`载入模块，使用`normal`运行模块。

选中系统后启动，进入系统后使用终端命令`update-grub`修复grub。