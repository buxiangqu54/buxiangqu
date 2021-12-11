//app.js
App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
  },
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    systemInfo: null,//客户端设备信息
    userInfo: null,
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#1c1c1b",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "icon/shouye2.png",
          "selectedIconPath": "icon/shouye.png"
        },
        {
          "pagePath": "/pages/categery/index",
          "text": "分类",
          "iconPath": "icon/fenlei1.png",
          "selectedIconPath": "icon/fenlei.png"
        },
        {
          "pagePath": "/pages/shoucang/shoucang",
          "text": "",
          "iconPath": "icon/Static5.png",
          "selectedIconPath": "icon/Static5.png",
          "isSpecial": true
        },
        {
          "pagePath": "/pages/list/list",
          "text": "论坛",
          "iconPath": "icon/luntan.png",
          "selectedIconPath": "icon/luntan1.png"
        },
        {
          "pagePath": "/pages/me/me",
          "text": "我的",
          "iconPath": "icon/wode1.png",
          "selectedIconPath": "icon/wode2.png"
        }
      ]
    }
  }
})
wx.cloud.init({env: 'cloud1-0g9enoyc8a10c50b',
traceUser: true,
})