// pages/feedback/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
    {image:'https://dcdn.it120.cc/2021/12/07/710003b3-e1a5-4eb5-bfc2-18d5ff94adda.jpg'},
    { image: 'https://dcdn.it120.cc/2021/12/07/55fab63b-1a26-4edd-a910-a2d2d7285a4f.jpg' },
    { image: 'https://dcdn.it120.cc/2021/12/07/054af6c3-e8e4-4a02-b7c5-40713279fc4a.jpg' },
  
  
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