import YHComponent from '../YHComponent/index';

export default class YHToast extends YHComponent{
  constructor(pageContext) {
    super(pageContext);
    this.pageContext.showToast = this.showToast.bind(this.pageContext);
    this._init = this._init.bind(this.pageContext);
    this.onPageHide = this.onPageHide.bind(this.pageContext);
    this.pageContext._startToasting = this._startToasting.bind(this.pageContext);
    this._init();
  }

  /**
   * private
   */
  _init() {
    this.setData({
      toastQueue: [],
      toastStatus: false,
      toastContent: ''
    });
  }

  /**
   * public
   */
  showToast(toast) {
    const {
      toastQueue,
      toastStatus
    } = this.data;
    toastQueue.push(toast);
    this.setData({
      toastQueue
    })
    if (!!this.toastTMO)return;
    this._startToasting();
  }

  onPageHide() {
    clearTimeout(this.toastTMO);
    clearTimeout(this.statusTMO);
    this.toastTMO = null;
    this.setData({
      toastQueue: [],
      toastStatus: false,
      toastContent: ''
    });
  }

  /**
   * private
   */
  _startToasting() {
    const {
      toastQueue
    } = this.data;
    if(toastQueue.length == 0) {
      clearTimeout(this.toastTMO);
      this.toastTMO = null;
      return;
    }
    const toast = toastQueue.shift(0);
    this.setData({
      toastContent: toast,
      toastQueue,
      toastStatus: true
    });
    this.statusTMO = setTimeout(()=>{
      this.setData({
        toastStatus: false
      })
    },1000);
    this.toastTMO = setTimeout(this._startToasting,1400);
  }

}