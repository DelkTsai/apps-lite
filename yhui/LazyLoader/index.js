class LazyLoader {
    constructor(props) {
        const {
            windowHeight,
            topOffset,
            bottomOffset,
            context
        } = props;
        this.windowHeight = windowHeight;
        this.topOffset = topOffset || 0;
        this.bottomOffset = bottomOffset || 0;
        this.pageContext = context;
    }

    

    onScroll(scrollEvent) {
        console.log(scrollEvent);
        console.log(`${this.topOffset} ${this.windowHeight} ${scrollEvent.scrollTop} ${scrollEvent.scrollHeight}`);
        const inviewRange = scrollEvent.scrollTop + this.windowHeight - this.topOffset - this.bottomOffset;
        console.log(`${scrollEvent.scrollTop} ${inviewRange}`);
    }


}

export default LazyLoader;