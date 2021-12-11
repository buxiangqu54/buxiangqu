// pages/myTie/myTie.js
Page({
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    //加载我的所有帖子
    wx.cloud.callFunction({
      name:'love_getMyTie',
      data:{
        openid:wx.getStorageSync('openid')
      },
      success:function(e){
        console.log(e.result.data)
        that.setData({
          myTie:e.result.data,
          userinfo:wx.getStorageSync('userinfo')
        })
      },fail:function(e){

      }
    })
  },
  show:function(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/show/show'+'?id='+e.currentTarget.dataset.id,
    })
  }
})