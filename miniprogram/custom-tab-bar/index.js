// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    index:0,
   
    fontWeight:'bold',
    tabBar:[
      {
        name:'home',
        icon:'icon-shouye',
        pagePath: "/index/index",
      },
      {
        name:'classify',
        icon:'icon-fenlei1',
      },
      {
        name:'forum',
        icon:'icon-biaoqiankuozhan_luntan-149',
      },
      {
        name:'user',
        icon:'icon-31wode',
      },
    ]

  },

  goto(e){
    if(e.currentTarget.dataset.index!=this.data.index){
      this.setData({
        index:e.currentTarget.dataset.index
      })
      wx.switchTab({
        url: pagePath,
      });
    }

  }, 
  attached() {
  },
 
   
})

