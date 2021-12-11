//Page Object
const app = getApp()

Page({
  data: {
  
    tabbar:{},
    // 轮播图数组
    imgUrls: [
      {image:'https://dcdn.it120.cc/2021/12/07/9693add8-010f-4c3e-bb16-6c9f864bbdec.jpg'},
      { image: 'https://dcdn.it120.cc/2021/12/07/3823304c-b0b9-4c2b-bc9f-fb30c8fc88c1.jpg' },
      { image: 'https://dcdn.it120.cc/2021/12/07/fcc4dd26-3e13-411c-a0fd-d02c6b76c5af.jpg' },
      { image: 'cloud://cloud1-0g9enoyc8a10c50b.636c-cloud1-0g9enoyc8a10c50b-1307230669/9bd45b47f5b1d56e237a734d37791da2.png' },
      { image: 'cloud://cloud1-0g9enoyc8a10c50b.636c-cloud1-0g9enoyc8a10c50b-1307230669/d303bc08b504f31eaa7dc42711d3ac5e.png' },
      { image: 'cloud://cloud1-0g9enoyc8a10c50b.636c-cloud1-0g9enoyc8a10c50b-1307230669/tabbbor/323a4bba73c094650e4dba0ae301e1d7.jpg' }
    
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
    app.editTabbar();

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
