//index.js
//获取应用实例
const app = getApp()

const recordType =[
   {
      "id": 0,
      "title": "随手记",
      "image_url": "https://s3.cn-north-1.amazonaws.com.cn/nfs.gemii.cc/rekord/268f490f-bfde-481c-9e7b-b409b3427288.png"
   },
   {
      "id": 1,
      "title": "称体重",
      "image_url": "https://s3.cn-north-1.amazonaws.com.cn/nfs.gemii.cc/rekord/0157a586-483d-4685-b860-02a869123d04.png",

   },
   {
      "id": 2,
      "title": "做驱虫",
      "image_url": "https://s3.cn-north-1.amazonaws.com.cn/nfs.gemii.cc/rekord/2694a837-f067-469c-aed4-94f49c6a3fb2.png",
   },
   {
      "id": 3,
      "title": "打疫苗",
      "image_url": "https://s3.cn-north-1.amazonaws.com.cn/nfs.gemii.cc/rekord/c31a5881-5a96-491d-9529-48190568c212.png",
   }
]

Page({
  data: {
    showModalStatus:false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
     addpaly:false,
     projects: recordType
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showModal:function(){
     console.log('showModal')
    this.setData({
      showModalStatus:true
    })

  },
  hideModal:function(){
    this.setData({
      showModalStatus: false
    })
  },
   showAddpaly: function (params) {
      this.setData({
         addpaly: true
      })

   },

   hideAddpaly: function () {
      this.setData({
         addpaly: false
      })
   },

   //新增
   gotoaddRemind: function (e) {
      let id = e.detail.id
      pageGo(`/pages/addRemind/index?projectId=${id}`, 1)
      this.hideAddpaly()

   },
})
