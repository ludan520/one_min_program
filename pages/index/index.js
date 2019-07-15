Page({

  /**
   * 页面的初始数据
   */
  data: {
    //1.0 轮播图数组
    swiper:[],
    //2.0 分类菜单数组
    cate:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.1调用轮播图接口 
    this.getSliderData(),
    //2.1 调用分类菜单乐请求
      this.getCateMenu()
      
  },

  //1.0 封装轮播图请求
  getSliderData(){
    //请求轮播图请求,获取首页轮播图数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      method: "get",
      success:res=>{
         //解构返回的轮播图数据
         const {message} = res.data;
         //使用setData修改数据(赋值)
        this.setData({
          swiper:message
        })
        
      }
    })
  },

  //2.0 封装分类菜单乐请求
   getCateMenu(){
      wx.request({
        url:'https://api.zbztb.cn/api/public/v1/home/catitems',
      
        method:"get",
        success:res=>{
          // 解构返回数据
          const {message} = res.data;
          // 给cate赋值
          this.setData({
             cate:message
          })
        
        }
      })
   },

   //3.0封装获取首页楼层数据的请求
   getFloorData(){
     wx:request({
       url:"https://api.zbztb.cn/api/public/v1/home/floordata",
       method: "get"

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