/**
 * 为小程序路由方法提供统一封装
 */
class Route {

  navigateTo(params) {
    wx.navigateTo(params);
  }

  redirectTo(params) {
    wx.redirectTo(params);
  }

  reLaunch(params) {
    if(wx.canIUse("reLaunch")) {
      wx.reLaunch(params);
    }else {
      this.redirectTo(params);
    }
  }

  switchTab(params) {
    wx.switchTab(params);
  }

  navigateBack(params) {
    wx.navigateBack(params);
  }
}

const route = new Route();

export default route;