import YHComponent from '../YHComponent/index';

class YHImage  extends YHComponent{
    constructor(props) {
        const {
            context,
            windowHeight,
            topOffset,
            bottomOffset,
        } = props;
        super(context);
        this.windowHeight = windowHeight || 0;
        this.topOffset = topOffset || 0;
        this.bottomOffset = bottomOffset || 0;
        this.pageContext.data.imgLoadList = {};
        this.pageContext.data.imgPostionList = {};
        this.pageContext.onYHImageLoad = this.onYHImageLoad.bind(this);
    }

     onScroll(scrollEvent) {
        console.log(`${this.topOffset} ${this.windowHeight} ${scrollEvent.scrollTop} ${scrollEvent.scrollHeight}`);
        const inviewRange = scrollEvent.scrollTop + this.windowHeight - this.topOffset - this.bottomOffset;
        console.log(`${scrollEvent.scrollTop} ${inviewRange}`);
        const {
            imgPostionList
        } = this.pageContext.data;
        for(let key in imgPostionList) {
            if(imgPostionList[key] && imgPostionList[key].bottom <= inviewRange){
                imgPostionList[key].inview = true;
            }
        }
         this.pageContext.setData({
            imgPostionList
        });
    }

    /**
     * imgInfo: {url,top,bottom,inview}
     */
    registerImgInfo(imgInfo) {
        const {
            imgPostionList
        } = this.pageContext.data;
        const {
            url,
            top,
            bottom,
            inview
        } = imgInfo;
        imgPostionList[url] = {url,top,bottom,inview:false};
        this.pageContext.setData({
            imgPostionList
        });
    }

    onYHImageLoad(event) {
        const {
            imgLoadList
        } = this.pageContext.data;
        imgLoadList[event.currentTarget.id] = true;
        this.pageContext.setData({
            imgLoadList: imgLoadList
        });
    }

}

export default YHImage;
// module.exports = YHImage;