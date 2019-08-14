### 小程序动画 

1. css 详见 `/utils/animate.wxss`
2. `wx.createAnimation`

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
      let myEventDetail = {} // detail对象，提供给事件监听函数
      let myEventOption = {} // 触发事件的选项
      this.triggerEvent('close', myEventDetail, myEventOption)
    }.bind(this), 200)
}
```