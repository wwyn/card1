// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    orderList:['全部','待付款','待发货','待收货','已完成']
  },
  // 订单选择
  orderClick: function(e) {
    let cur = e.currentTarget.dataset.cur;
    this.setData({
      current:cur
    })
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    let _cur = options.id;
      this.setData({
        current:_cur
    })
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