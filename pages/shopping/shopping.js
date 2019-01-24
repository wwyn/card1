// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:['综合','新品','价格'],
    current:0,
    cardsList: [{ url: 'http://boom-static.static.cceato.com/styleimg/11-7.png', title: '智能名片', money: '￥3650' }, { url: 'http://boom-static.static.cceato.com/styleimg/11-7.png', title: '智能名片机器人', money: '￥1600' }]
  },
  toggleTab: function(e) {
    let cur = e.currentTarget.dataset.cur;
    this.setData({
      current: cur,
    })
  },
  // 个人中心
  personalCenter: function() {
    wx.navigateTo({
      url: '/pages/my/my',
    })
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