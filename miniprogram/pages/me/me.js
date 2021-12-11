// pages/me/me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
  
    //1.检测story是否保存了用户信息
    let info = wx.getStorageSync('userinfo');
    let openid = wx.getStorageSync('openid');
    console.log(info.openid)
    if(!info){
      
    }else{
      //缓存有，直接登陆上去
      this.setData({
        userinfo:info,
        openid:openid
      })
    }
  },
  zan:function(e){
    wx.navigateTo({
      url: '/pages/myZanTie/myZanTie',
    })
  },
  join:function(e){
    wx.navigateTo({
      url: '/pages/myJoin/myJoin',
    })
  },
  info:function(e){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
 
 zuozhe:function(e){
    wx.navigateTo({
      url: '/pages/author/author',
    })
  },
 contact:function(e){
    wx.navigateTo({
      url: '/pages/author/author',
    })
  },
  //新版本的获取用户登陆信息
  getUserProfile:function(e){
    let that = this
    wx.getUserProfile({
      desc: '获取个人信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        let info = res.userInfo
        //获取用户的openid
        wx.cloud.callFunction({
          name:"love_login",
          success:function(e){
            console.log(e)//获取到用户openid
            let openid = e.result.openid
          //先去判断用户之前是否注册入库，如果未注册，注册入库
          wx.cloud.callFunction({
            name:"love_iszhu",
            data:{
              openid:openid
            },success:function(e){
              if(e.result.data.length==0)//未入库，进行入库
              {
                wx.cloud.callFunction({
                  name:'love_register',
                  data:{
                    username:info.nickName,
                    head:info.avatarUrl,
                    openid:openid
                  },success:function(ev){
                  console.log(ev);
                   
                    wx.hideLoading({
                      success: (res) => {},
                    })
                    wx.showToast({
                      title: '登陆成功',
                      icon:"success",
                      duration:2000
                    })
                  },fail:function(e){
                    console.log(e);
                  }
                })
              }else{//已经入库，直接从数据库读取信息
                console.log('已经注册');
                wx.showToast({
                  title: '登陆成功',
                  icon:"success",
                  duration:2000
                })
                wx.hideLoading({
                  success: (res) => {},
                })
              }
              that.setData({
                userinfo:info,
                openid:openid
              })
               //用户信息保存到数据库和缓存里面
               wx.setStorageSync('userinfo', that.data.userinfo);
               wx.setStorageSync('openid', that.data.openid);
            },fail:function(e){
              console.log(e);
            }
          })
            
          }
        })
      },fail:(res)=>{
        console.log(res)
      }
    })
  },
  //登陆实现
  getUserInfo:function(e){
    //1.用户进入页面，提示登陆。
    wx.showLoading({
      title: '登陆中....',
    })
    let that = this;
    let info = e.detail.userInfo;
    console.log(info);
    wx.cloud.callFunction({
      name:"love_login",
      success:function(e){
        console.log(e.result.openid);
        if(e.result.openid)
          that.setData({
            openid:e.result.openid,
            userinfo:info
          })
          //先去判断用户之前是否注册入库，如果未注册，注册入库
          wx.cloud.callFunction({
            name:"love_iszhu",
            data:{
              openid:that.data.openid
            },success:function(e){
              if(e.result.data.length==0)//未入库，进行入库
              {
                wx.cloud.callFunction({
                  name:'love_register',
                  data:{
                    username:that.data.userinfo.nickName,
                    head:that.data.userinfo.avatarUrl,
                    openid:that.data.openid
                  },success:function(ev){
                  console.log(ev);
                   
                    wx.hideLoading({
                      success: (res) => {},
                    })
                    wx.showToast({
                      title: '登陆成功',
                      icon:"success",
                      duration:2000
                    })
                  },fail:function(e){
                    console.log(e);
                  }
                })
              }else{//已经入库，直接从数据库读取信息
                console.log('已经注册');
                wx.showToast({
                  title: '登陆成功',
                  icon:"success",
                  duration:2000
                })
                wx.hideLoading({
                  success: (res) => {},
                })
              }
               //用户信息保存到数据库和缓存里面
               wx.setStorageSync('userinfo', that.data.userinfo);
               wx.setStorageSync('openid', that.data.openid);
            },fail:function(e){
              console.log(e);
            }
          })
}
})
},

contact:function(e){
  if(this.data.openid==null || this.data.openid==undefined){
    wx.showToast({
      title: '请先登陆',
    })
  }else{
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  }
  
},
//加载我的帖子
myTie:function(e){
  if(this.data.openid==null || this.data.openid==undefined){
    wx.showToast({
      title: '请先登陆',
    })
  }else{
    wx.navigateTo({
      url: '/pages/myTie/myTie'
    })
  }
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   console.log("我进来了")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})