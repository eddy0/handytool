const e = sel => document.querySelector(sel)


const random = (start, end) => {
    let num = Math.random() * end - start + 1
    return Math.floor(num)
}


const generateDiv = () => {
    for (let i = 1; i <= 1000; i++) {
        let picker = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = random(0, 15)
            color += picker[index]
        }

        let container = e('.container')
        let t = (`
            <div class="box" style="--color:#${color}"></div>
        `
        )
        container.insertAdjacentHTML('beforeend', t)
    }
}



const __main = () => {
    generateDiv()
}

window.addEventListener('load', () => {
    __main()
})
