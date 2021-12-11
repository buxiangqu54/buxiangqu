const db = wx.cloud.database()
const $ = db.command.aggregate
const app = getApp()
Page({
    data: {
        tabs: [],
        tabCur: 0, //默认选中
        lefts: [],
        leftCur: 0,
        rights: [],

    },
    onLoad: function (options) {
        app.editTabbar();

        db.collection('demo').aggregate()
            .group({
                _id: '$louhao'
            })
            .end()
            .then(res => {
                console.log('楼号列表', res)
                this.setData({
                    tabs: res.list
                })
                this.sushehao(res.list[0]._id)
            })
    },
    //加载当前楼号所有的宿舍号
    sushehao() {
        let louhao = this.data.tabs[this.data.tabCur]._id
        db.collection('demo').aggregate()
            .match({
                louhao
            })
            .group({
                _id: '$sushe'
            })
            .sort({
                sushe: -1 //宿舍号升序排列
            })
            .end()
            .then(res => {
                console.log(louhao + '宿舍号列表', res)
                this.setData({
                    lefts: res.list
                })
                this.xuesheng()
            })
    },
    //加载当前宿舍号里所有的学生
    xuesheng() {
        let louhao = this.data.tabs[this.data.tabCur]._id
        let sushe = this.data.lefts[this.data.leftCur]._id
        db.collection('demo')
            .where({
                louhao,
                sushe
            }).get()
            .then(res => {
                console.log(louhao + sushe + '室学生列表', res)
                this.setData({
                    rights: res.data
                })
            })
    },
    //顶部选择分类条目
    tabSelect(e) {
        this.setData({
            tabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id - 2) * 200
        }, success => {
            this.sushehao()
        })
    },
    //左侧条目选择
    switchLeftTab(e) {
        let index = e.target.dataset.index;
        this.setData({
            leftCur: index,
        }, success => {
            this.xuesheng()
        })
    },
})