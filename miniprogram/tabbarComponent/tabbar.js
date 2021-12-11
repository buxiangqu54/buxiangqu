// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ca",
        "color": "#ca5858",
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
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.includes("iPhone X"),
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
