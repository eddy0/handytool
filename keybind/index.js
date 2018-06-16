
const e = (sel) => document.querySelector(sel)
const es = (sel) => document.querySelectorAll(sel)

const log = console.log.bind(console)

const mapper = () => {
    const map = {
        'a': {
            link: 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav',
        },
        's': {
            link: 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav',
        },
        'd': {
            link: 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav',
        },
        'f': {
            link: 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav',
        },
        'g': {
            link: 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav',
        },
        'h': {
            link: 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav',
        },
        'j': {
            link: 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav',
        },
        'k': {
            link: 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav',
        },
    }
    return map
}


const playSound = (source) => {
    let audio = e('audio')
    audio.src = source.link
    audio.play()
}

const bindKeyClickEvent = () => {
    const keys = e('.key-list')
    window.addEventListener('click', (event) => {
        const key = event.target.dataset.key
        let map = mapper()
        let keys = Object.keys(map)
        if (keys.includes(key)) {
            playSound(map[key])
        }
    })
}

const toggleAnimation = (key) => {
    const list = es('.key-item')
    for (var i = 0; i < list.length; i++) {
        let item = list[i]
        let k = item.dataset.key
        if ( k === key ) {
            item.classList.toggle('active')
        }
    }
}

const bindKeyUpEvent = () =>{
    const keys = e('.key-list')

    window.addEventListener('keydown', (event) => {
        event.preventDefault()
        const key = event.key
        let map = mapper()
        let keys = Object.keys(map)
        if (keys.includes(key)) {
            toggleAnimation(key)
        }
    })

    window.addEventListener('keyup', (event) => {
        event.preventDefault()
        const key = event.key
        let map = mapper()
        let keys = Object.keys(map)
        if (keys.includes(key)) {
            toggleAnimation(key)
            playSound(map[key])
        }
    })
}

const __main = () => {
    bindKeyClickEvent()
    bindKeyUpEvent()

}


__main()
