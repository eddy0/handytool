
/**
 * class need to be nav, alse need to has a head
 */

class StickyNav {
    constructor() {
        this.nav = e('nav')
        this.header = e('header')
        this.init()
        this.sticky()
    }

    init() {
        let t = (`
            <style>
                body.nav--sticky nav {
                    position: fixed;
                    width: 100%;
                    transition: all 0.2s ease;
                    box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
                }
            </style>
        `)
        document.head.insertAdjacentHTML('beforeend', t)
    }

    sticky() {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= this.header.offsetHeight) {
                this.header.style.paddingBottom = `${this.nav.offsetHeight}px`
                document.body.classList.add('nav--sticky')
            } else {
                this.header.style = ''
                document.body.classList.remove('nav--sticky')

            }

        })

    }
}


const __main = () => {
    new StickyNav()
}

__main()
