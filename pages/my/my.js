//my.js
const util = require('../../utils/util.js')

Page({
  data: {
    tabList: [{ name: '待付款', type:'payment'},
      { name: '待发货', type: 'deliver' },
      { name: '待收货', type: 'receiving' },
      { name: '已完成', type: 'accomplish' },]
  },
  // 收货地址
  addAdress: function() {
    wx.navigateTo({
      url: '/pages/adress/adress',
    })
  },
  // 我的订单
  go_order: function(e) {
    let _id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/order/order?id=' + _id,
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
