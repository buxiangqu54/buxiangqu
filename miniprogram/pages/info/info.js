// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['学生','老师'],
    array1:['男','女'],
    index1:0,
    index:0
  },
  bindPickerChange:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  bindPickerChange1:function(e){
    this.setData({
      index1:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.showLoading({
      title: '加载中...',
    })
    wx.cloud.callFunction({
      name:'love_getInfo',
      data:{
        openid:wx.getStorageSync('openid')
      },success:function(e){
        console.log(e)
        wx.hideLoading({
          success: (res) => {},
        })
        let info = e.result.data[0]
        if(info.shen=='学生'){
          that.setData({
            index:0
          })
        }else{
          that.setData({
            index:1
          })
        }
        if(info.sex=='男'){
          that.setData({
            index1:0
          })
        }else{
          that.setData({
            index1:1
          })
        }
        that.setData({
          info:e.result.data[0]
        })
      },fail:function(e){
        console.log(e)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  submit:function(e){
    console.log(e)
    let that = this
    wx.showLoading({
      title: '修改中...',
    })
    wx.cloud.callFunction({
      name:'love_updateInfo',
      data:{
        openid:wx.getStorageSync('openid'),
        name:e.detail.value.name,
        yuan:e.detail.value.nian,
        sex:that.data.array1[parseInt(that.data.index1)],
        telephone:e.detail.value.telephone,
        shen:that.data.array[parseInt(that.data.index)]
      },success:function(e){
        console.log(e)
        wx.hideLoading({
          success: (res) => {
            wx.showToast({
              title: '修改成功',
              icon:'success'
            })
          },
        })
      },fail(e){
        console.log(e)
      }
    })
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