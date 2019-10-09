<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 17:29:07
 * @LastEditTime: 2019-08-14 17:36:25
 * @LastEditors: Please set LastEditors
 -->
### 小程序动画 

#### 1. css 详见 `/utils/animate.wxss`

animate.css包含76种动画，使用非常简单。
[animate.css官网](https://daneden.github.io/animate.css/)

所以在app.wxss中加入 @import './utils/animate.wxss'; 即可。

[微信小程序开发-76种动画 animate.css](https://developers.weixin.qq.com/community/develop/doc/00024648e982c0819e97ac85c5b804)


####  2. [wx.createAnimation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html)

```
 //显示对话框
_showModal: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
          animationData: animation.export()
      })
    }.bind(this), 200)
},
//隐藏对话框
_hideModal() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
          animationData: animation.export(),
          modalStatus: false
      })
    }.bind(this), 200)
}
```