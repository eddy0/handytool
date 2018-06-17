const mapper = () => {
    let m = ['color', 'brightness', 'blur', 'border-radius']
    return m
}

const manupilate = () => {
    let list = mapper()
    for (var i = 0; i < list.length; i++) {
        let input = e(`#${list[i]}`)
        input.addEventListener('input', () => {
            // log('input', input, input.value, input.name)
            let value = input.value + input.dataset.unit
            let span = input.closest('.control__wrapper').querySelector('span')
            span.innerHTML = value
            document.documentElement.style.setProperty(`--${input.name}`, value)
        })
    }
}

const __main = () => {
    manupilate()
}

__main()
