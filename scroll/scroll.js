class Scroll {
    constructor(selector) {
        this.selector = selector
        this.init()
        this.scroll()
    }

    init() {
        this.box = e(this.selector)
        this.enable = false
    }

    scroll() {
        let startX
        let left
        this.box.addEventListener('mousedown', (event) => {
            this.enable = true
            startX = event.clientX
            left = this.box.scrollLeft
        })

        this.box.addEventListener('mouseup', () => {
            this.enable = false
        })

        this.box.addEventListener('mouseleave', () => {
            this.enable = false
        })

        this.box.addEventListener('mousemove', (event) => {
            if (this.enable) {
                let offset = (event.clientX - startX) * 2
                // log(offset, left , original , event.target.offsetLeft, event.clientX)
                // this.box.style.transform = `translateX(${offset}px)`
                this.box.scrollLeft = left - offset
            }
        })
    }
}

const __main = () => {
    new Scroll('.items')
}
__main()
