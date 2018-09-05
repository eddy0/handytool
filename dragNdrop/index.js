const e = sel => document.querySelector(sel)

const es = sel => document.querySelectorAll(sel)

const clearAll = (sel) => {
    let items = es(`.${sel}`)
    items.forEach((item) => {
        item.remove()
    })
}

const log = console.log.bind(console)

let dragged
let over
let isDragging = false
let x
let y

document.addEventListener('mousedown', (event) => {
    let self = event.target
    if (self.classList.contains('list-item')) {
        let rect = event.target.getBoundingClientRect()
        x = event.clientX
        y = event.clientY
        dragged = event.target
        isDragging = true
    }
})


document.addEventListener('mousemove', (event) => {
    if (isDragging && dragged) {
        let mouseY = event.clientY
        let mouseX = event.clientX
        let offsetX = mouseX - x
        let offsetY = mouseY - y
        let styles = (`
            transform: translate(${offsetX}px, ${offsetY}px);
            z-index: 999;
            pointer-events:none;
        `)
        dragged.style.cssText = styles
    }
})

document.addEventListener('mouseup', (event) => {
    // dragged.style.style = ''
    isDragging = false
})

const bindDragEvent = (item) => {
    item.addEventListener('mousemove', (event) => {
        if (isDragging) {
            // log('mouseover', event.target, isDragging)
            // item.style.pointerEvents = 'none'
            let height = dragged.offsetHeight
            item.style.transform = `translateY(-${height}px)`
            item.style.transition = 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
        }
    })
}

const __main = () => {
    let items = es('.list-item')
    items.forEach((item) => {
        bindDragEvent(item)
    })

}

__main()