// pages/baike/baike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {image:'https://dcdn.it120.cc/2021/12/07/4be37d2f-ef83-4f8d-bef8-6151adff57bc.jpg'},
      { image: 'https://dcdn.it120.cc/2021/12/07/0b141ba5-2c86-4ca6-8fbd-8e57b496ae7b.jpg' },
      { image: 'https://dcdn.it120.cc/2021/12/07/3d19e899-9f37-461b-b2f1-8f3573b59878.jpg' },
    
    
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