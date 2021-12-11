
var app = getApp();

Page({

  onPullDownRefresh() {
    this.onShow();
    console.log("上拉刷新");
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    },
    
  img:function()
  {
    wx.navigateTo({
      url: '../submit/submit'
    })
  },
  getUserInfo:function(e){

},
  formSubmit(e) {
        console.log(e.detail.value)
        wx.navigateTo({
          url: '/pages/search_show/search_show?data='+e.detail.value.find,
          })
           
  },
  data:{
    tabbar: {},
    message:[],
    sid:0,
    search:'',
    info1:[]
  },
  onLoad: function () {
    app.editTabbar();
  },
  
  //初始加载数据
  getData:function(e){
    this.setData({
      message:[],
      count:10,
      page:0
    })
    let that = this;
    wx.cloud.callFunction({
      name: "love_getTie",
      //一次加载5条数据，下拉加载更多
      data:{
        count:10,
        page:0,
        type:that.data.sid
      },
      success:res=>{
        console.log("res",res);
        //旧的数据加新获取数据的拼接
        let oldData = that.data.message;
        let newData = oldData.concat(res.result.info1.list);
        //获取分类
        let loveSort = res.result.info2.data
        console.log(newData,loveSort)
        that.setData({
          message:newData,
          loveSort:loveSort
        })
        wx.setStorageSync('loveSort', loveSort)
        console.log(that.data.message);
        wx.hideLoading({
          success: (res) => {},
        })
      },
      fail: res => {
        console.log("res", res)
      }
    })
  },

  blur:function(e){
    console.log(e.detail.value)
    this.setData({
      search:e.detail.value
    })
  },
  find:function(e){
    let search = this.data.search
    if(search==""){
      wx.showToast({
        title: '请输入内容',
      })
    }else{
      this.setData({
        search:''
      })
      wx.navigateTo({
        url: '/pages/search_show/search_show?data='+search,
      })
    }
    
  },
  //详情展示
  show:function(e){
    console.log(e.currentTarget.dataset.id);//点击跳转商品详情的id
    wx.navigateTo({  //跳转到页面
      url: '/pages/show/show'+'?id='+e.currentTarget.dataset.id,  //跳转到商品详情页并携带商品id 
    })
  },
 
  //逆序加载10篇
  onShow:function(e){
    let openid = wx.getStorageSync('openid');
    let userinfo = wx.getStorageSync('userinfo');
    console.log(openid);
    if(openid=="" || openid==null){
      wx.showToast({
        title: '请先登陆',
        duration:1000,
        icon:"none",
        success:function(e){
          setTimeout(function() {
            wx.switchTab({
              url: '/pages/me/me',
            })
          }, 500);
        }
      })
    }else{
      this.setData({
        openid:openid,
        userinfo:userinfo
      })
      wx.showLoading({
        title: '加载中...',
      })
      this.getData();
    }
  },

  //去对应分类请求数据
  sort:function(e){
    let id = parseInt(e.currentTarget.dataset.id)
    console.log(id)
    this.setData({
      sid:id
    })
    this.getData()
  },
  //下拉刷新效果
  onPullDownRefresh() {
    console.log('11')
    wx.showLoading({
      title: '刷新中...',
    })
    this.setData({
      message:[]
    })
    let that = this;
    wx.cloud.callFunction({
      name: "love_getTie",
      //一次加载5条数据，下拉加载更多
      data:{
        count:10,
        page:0
      },
      success:res=>{
        console.log("res",res);
        //旧的数据加新获取数据的拼接
        let oldData = that.data.message;
        let newData = oldData.concat(res.result.info1.list);
        //获取分类
        let loveSort = res.result.info2.data
        console.log(newData,loveSort)
        that.setData({
          message:newData,
          loveSort:loveSort
        })
        console.log(that.data.message);
        wx.hideLoading({
          success: (res) => {
            wx.showToast({
              title: '加载成功',
              duration:1000,
              icon:"success",
              success:function(e){
                wx.stopPullDownRefresh();
              }
            })
          },
        })
      },
      fail: res => {
        console.log("res", res)
      }
    })
    
  },
  
  //上拉加载新数据
  onReachBottom: function () {
    console.log('加载新数据')
    let count = 5;
    let page = this.data.message.length
    let that = this;
    wx.showLoading({
      title: '加载中...',
    })
    wx.cloud.callFunction({
      name:'love_getTie',
      data:{
        count:count,
        page:page,
        type:that.data.type
      },success:function(ev){
        console.log(ev);
        //数据的继续拼接
        let newData = that.data.message.concat(ev.result.info1.list);
        that.setData({
          message:newData
        })
        wx.hideLoading({
          success: (res) => {},
        })
      },fail:function(ev){
        console.log(ev);
      }
    })
  }
})
