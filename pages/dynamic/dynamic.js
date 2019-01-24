// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friendsList: [{ headUrl: 'http://boom-static.static.cceato.com/styleimg/11-7.png', title: '哈哈哈，好开心啊啊啊啊', urlList: ['http://boom-static.static.cceato.com/styleimg/11-7.png', 'http://boom-static.static.cceato.com/styleimg/11-7.png','http://boom-static.static.cceato.com/styleimg/11-7.png'],time:'2019-01-01'}],
    isLike:false,
    likeList:['张三','李四','哈哈哈'],
    commentList: [{ name: '张三', content:'赞'}],
    inputVal:'',
    showInput: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
// 点赞
  giveLike: function() {
    let newlikeList = this.data.likeList;
    newlikeList.unshift('呵呵哒')
    this.setData({
      isLike: true,
      likeList: newlikeList
    })
  },
  // 评论
  comment:function() {
    this.setData({
      showInput:true,
    })
  },
  // 发送
  send: function() {
    let obj = { name: '李四', content: this.data.inputVal}
    this.data.commentList.unshift(obj);
    this.setData({
      commentList:this.data.commentList,
      showInput: false,
      inputVal: ''
    })
  },
  onBlur: function(e) {
    let val = e.detail.value;
    this.setData({
      inputVal:val,
    })
  },
  inputVal: function(e) {
    let val = e.detail.value;
    this.data.commentList.unshift(val);
    this.setData({
      commentList: this.data.commentList,
      showInput: false,
      inputVal:''
    })
  }
})