// pages/dongzuo/dongzuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {image:'https://dcdn.it120.cc/2021/12/07/6e8d2923-307e-4554-a893-5ce36cc2573d.jpg'},
      { image: 'https://dcdn.it120.cc/2021/12/07/c533ea91-2ff8-48ee-9e47-8b4fe0ccfe35.jpg' },
      { image: 'https://dcdn.it120.cc/2021/12/07/25259403-7889-4a0f-a719-1157f121d699.jpg' },
    
    
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