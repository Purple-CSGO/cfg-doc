# 使用说明

Purp1e(@[Purple-CSGO](https://space.bilibili.com/73115492))制作

控制台指令： <https://tools.dathost.net/csgo-commands>

HLAE Studio： <https://github.com/One-Studio/HLAE-Studio>

CSGO工具箱： <https://github.com/Purple-CSGO/CSGO-Toolbox-Qt>

----

请修改记事本字体为Consolas之类的等宽字体以获得最佳体验


![](/请修改记事本字体为Consolas之类的等宽字体.png)

## 文件作用

### 游戏相关

- **auto.cfg**
   核心cfg 包含若干常用设置指令并加以详尽注释 另有各种特殊功能的指令如跳投、投掷物准星
   
- **bind_default.cfg**
   还原初始键位的config 在auto demo hlae等cfg靠前位置调用此cfg 确保每次启动游戏键位一致
   
- **crosshair.cfg**
   存放**准星参数**的config 为了实现投掷物准星 单独成一个cfg可极大的保证投掷准星代码的可重用性
   
- **crosshair_throw.cfg**
  
   存放投掷物准星（超长十字准星）参数 配合投掷物准星功能
   
- **practice.cfg**
   **跑图**用cfg 方便跑图设置各种参数和键位绑定 控制台有中文提示
   
- **solo.cfg**
   进行solo 2v2 3v3等场景时使用的config 一次设置各种参数 另有设置solo模式的快捷键
   
- **demo.cfg**
   观看DEMO时使用的config 设置一些参数 绑定快捷按键

### HLAE录制集锦素材相关

- **hlae.cfg**
   搭配集锦制作工具**HLAE录制**素材时使用的config 包含各种参数键位设定如一键高亮玩家击杀信息
   
- **ffmpeg.cfg**
   搭配HLAE和FFMPEG**录制集锦素材**所用 已集成好录制预设 仅改变录制方式为ffmpeg
   
- **blocksound.cfg**
   使用HLAE时使用 可以屏蔽所有出语音外的声音 用来录制解说音轨
   
- **cals.cfg**
  
   搭配HLAE使用 实现自拍杆效果 附有若干预设
   
- **stream.cfg**

   搭配HLAE实现分层录制 已经集成好95%以上的指令 使用起来非常方便

### 其他

- **practiceExt.nut**

  本地跑图扩展脚本，需要放置在以下位置，加载practice.cfg后自动生效

  `..\Counter-Strike Global Offensive\csgo\scripts\vscripts`
  
- **启动项.txt**

  方便复制启动项

## 使用步骤

1.  **备份设置文件！备份设置文件！备份设置文件！**
   
   - 个人设置文件夹 `...\Steam\userdata\(32位ID)\730\local\cfg\`
   
   - 游戏设置文件夹 `...\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\cfg\`
   
   > 32位->二进制位，大多8~10位十进制数字

2. ID不知道怎么办？

   - 打开 Steam 的 `添加好友` 页面，**ID=好友代码**

   - 登录 <https://steamid.io/>

     - 复制个人资料简介，如 `https://steamcommunity.com/id/1234567890/`

     - 第二行，如 SteamID3 [U:1:`146859713`] ，ID=`146859713`

3. 修改 `auto.cfg` 中的参数

   - 可以把游戏设置成**窗口模式**对应着改

   - **准星、持枪参数**可到创意工坊地图导出

   - 或使用下文的方法

4. //是"注释" 在它出现的那一行，之后的内容都不会被读取

   ```
   这是指令;	//这是注释
   ```

   如果不想用某条指令，就在指令前加上注释，或者直接删除:

    ```
    //这是指令;	//这是注释
    ```

5. 修改完成后移动到CFG文件夹（步骤1），个人CFG文件夹仅该玩家使用，方便打包；游戏CFG所有本机账号共享，请自行取舍。

## 准星&持枪参数导出

分开使用，复制到控制台，即可得到对应参数。

```
echo ;echo "==================== 准星参数 ====================";echo ;developer 2;con_filter_enable 1;con_filter_text cl_crosshair;host_writeconfig;con_filter_text cl_fix;host_writeconfig;developer 0;con_filter_enable 0;
```

```
echo ;echo "==================== 持枪参数 ====================";echo ;developer 2;con_filter_enable 1;con_filter_text viewmodel;host_writeconfig;con_filter_text cl_bob;host_writeconfig;developer 0;con_filter_enable 0;
```

## 准星分享代码

控制台使用分享代码示例：

```
apply_crosshair_code CSGO-cS6Fv-iBc8r-sroTA-4jyik-OYTSH
```

![准星代码](/准星代码.png)

## 捐赠

如果觉得本项目对你有所帮助，可以安排一波，水果捞 or 减脂餐~

> 注意备注 `CFG捐赠` 哦！

![](/支付宝.png)
