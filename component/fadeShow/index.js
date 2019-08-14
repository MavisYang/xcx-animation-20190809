// comment/fadeShow/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModalStatus:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationData:{}
  },
   /**
        * 组件的生命周期
        */
   lifetimes: {
      attached: function () {
         // 在组件实例进入页面节点树时执行
         console.log('attached',this.properties)

      },
      detached: function () {
         // 在组件实例被从页面节点树移除时执行
         // console.log( 'detached' )
      },
   },
  /**
   * 组件的方法列表
   */
  methods: {
    //显示对话框
    showModal: function () {
      // 显示遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    },
    //隐藏对话框
    hideModal: function () {
      // 隐藏遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          showModalStatus: false
        })
      }.bind(this), 200)

    },

  }
})
