// pages/changjing/changjing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {image:'https://dcdn.it120.cc/2021/12/07/3838bbeb-d9d5-4e4f-a575-642502543ec1.jpg'},
      { image: 'https://dcdn.it120.cc/2021/12/07/754deb10-22c4-4ee5-862e-c202105ec2a5.jpg' },
      { image: 'https://dcdn.it120.cc/2021/12/07/40100b04-1f0b-41f1-b04b-15dc710432c2.jpg' },
    
    
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true,      // 是否自动切换
    circular: true,      // 是否采用衔接滑动
    interval: 3000,      // 自动切换时间间隔
    duration: 1000,      // 滑动动画时长
    parallax : true,
    autoplay: true,
    interval: 5000,
    nowIdx:0,
    swiperCurrent: 0,
     indicatorDots: true,
    duration: 200,
  },
  //swiper滑动事件 
  swiperChange: function (e) {  //指示图标
  this.setData({
    nowIdx: e.detail.current,
    swiperCurrent:e.detail.current
  },
  )

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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