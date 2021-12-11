// pages/search_show/search_show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载用户输入的数据
    let that = this
    let data = options.data
      //去云端查找数据
      wx.cloud.callFunction({
        name:'love_search',
        data:{
          data:data
        },success:function(e){
          console.log(e.result.list)
          that.setData({
            myTie:e.result.list
          })
        },fail:function(e){
          console.log(e)
        }
      })
  },
  show:function(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/show/show'+'?id='+e.currentTarget.dataset.id,
    })
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