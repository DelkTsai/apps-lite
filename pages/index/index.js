import IndexAction from './index.action';
import { addToPageContext } from '../../yhbase/Utils/index';
import Mask from '../../yhui/Mask/index';
import YHToast from '../../yhui/YHToast/index';
import YHImage from '../../yhui/YHImage/index';
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: 
      'http://static.yonghuivip.com/62e06d932bca46aee747c7d6de5e2d69-d2db44ec7e2283a52a26859000d77c02.png?v=1499762940510',
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mask = new Mask(this);
    this.yhtoast = new YHToast(this);
    addToPageContext(IndexAction,this);
    this.mask.setOnMaskClick(this.closeDropDown);
    const img1 = new YHImage({context:this});
    img1.registerImgInfo({
      url: 'http://static.yonghuivip.com/62e06d932bca46aee747c7d6de5e2d69-d2db44ec7e2283a52a26859000d77c02.png?v=1499762940510',
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

  showRandomToast: function() {
    this.showToast('I am random toast')
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