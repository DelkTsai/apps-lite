import YHComponent from '../YHComponent/index';

class Mask extends YHComponent {
    constructor(pageContext) {
        super(pageContext);
        this.int();
    }

    int(){
        this.pageContext.openMask = this.openMask.bind(this.pageContext);
        this.pageContext.closeMask = this.closeMask.bind(this.pageContext); 
    }

    openMask(){
        this.setData({
            maskStatus: true
        })
    } 

    closeMask(){
        this.setData({
            maskStatus: false
        })
    }

    setOnMaskClick(callback) {
        if(callback && typeof callback == 'function') {
            this.pageContext.onMaskClick = callback
        }
    }
}

export default Mask;