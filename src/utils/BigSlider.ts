export default class BigSlider {

    sliderName: string
    containerName: string
    step: number
    nowMargin: number

    constructor(sliderName: string, containerName: string, step: number) {
        this.sliderName = sliderName;
        this.containerName = containerName;
        this.step = step;
        this.nowMargin = 0;
    }
    slideRight() {

        const containerWidth = document.getElementById(this.containerName)?.offsetWidth;
        const sliderWidth = document.getElementById(this.sliderName)?.offsetWidth;

        if (containerWidth !== undefined &&
            sliderWidth !== undefined &&
            this.nowMargin < sliderWidth - containerWidth - this.step) {
            this.nowMargin += this.step;
            const margine: string = "-" + this.nowMargin + "px";
            const slider = document.getElementById(this.sliderName);
            if (slider)
                slider.style.marginLeft = margine
        }
    }
    slideLeft() {

        const containerWidth = document.getElementById(this.containerName)?.offsetWidth;
        const sliderWidth = document.getElementById(this.sliderName)?.offsetWidth;

        if (containerWidth !== undefined &&
            sliderWidth !== undefined &&
            this.nowMargin > 0) {
            this.nowMargin -= this.step;
            const margine: string = "-" + this.nowMargin + "px";
            const slider = document.getElementById(this.sliderName);

            if (slider)
                slider.style.marginLeft = margine
        }
    }
}