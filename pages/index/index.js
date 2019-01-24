const app = getApp();
Page({
  data: {
    unfold:false,
    userInfo:{},
    hasUserInfo: false,
    lick:false,
    messageList: [{ name: '手机', describe: '13866552782' }, { name: '微信', describe: '13866552782' }, { name: '邮箱', describe: '750981029@qq.com' }, { name: '公司名称', describe: '辰盟科技有限公司' }, { name: '地址', describe:'漕河泾科汇大厦'}],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showCard: false,
    lickNum:0,
    heaList:[
      { url:'http://boom-static.static.cceato.com/styleimg/11-7.png'},
      { url: 'http://boom-static.static.cceato.com/styleimg/11-7.png' },
      { url: 'http://boom-static.static.cceato.com/styleimg/11-7.png' },
      { url: 'http://boom-static.static.cceato.com/styleimg/11-7.png' },
      { url: 'http://boom-static.static.cceato.com/styleimg/11-7.png' },
      { url: 'http://boom-static.static.cceato.com/styleimg/11-7.png' },
      { url: 'http://boom-static.static.cceato.com/styleimg/11-7.png' },
    ]
  },
  togglePhone: function() {
    this.setData({
      unfold: !this.data.unfold
    })
  },
  // 点赞
  headerLick: function() {
    this.setData({
      lick: !this.data.lick,
      lickNum: this.data.lickNum +1
    })
  },
  // 拨打电话
  handerDial: function(e) {
    let Type = e.currentTarget.dataset.type;
    let phoneNumber = this.messageList[0].describe;
    if(Type=='手机') {
      wx.makePhoneCall({
        phoneNumber: phoneNumber,
        success(){
          console.log('拨打成功')
        } 
      })
    } else {
      
    }
  },
  // 名片
  gotoCard: function() {
    this.setData({
      showCard: true
    })
  },
  // 返回首页
  gotoIndex: function() {
    this.setData({
      showCard: false
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 转发
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '名片',
      path: '/page/index/index'
    }
  },
  // 保存到通讯录
  handerSave: function() {
    wx.addPhoneContact({
      firstName: '王呵呵',   //名字
      mobilePhoneNumber: this.data.phoneNumber,    //手机号
      success: function () {
        console.log('添加成功')
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
