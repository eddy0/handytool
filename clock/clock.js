const log = console.log.bind(console)

const e = (sel) => document.querySelector(sel)

const parseTime = () => {
    const time = Date.now()
    // let t = new Date(time).toLocaleTimeString('en-US')
    let hour = new Date(time).getHours()
    hour = hour > 12 ? hour - 12 : hour
    const minute = new Date(time).getMinutes()
    const second = new Date(time).getSeconds()
    return {
        hour,
        minute,
        second,
    }
}

const updateClock = (time) => {
    let {hour, minute, second} = time
    let hourPointer = e('.pointer__hour')
    let minutePointer = e('.pointer__minute')
    let secondPointer = e('.pointer__second')
    let secondDeg = 360 / 60 * second
    let minuteDeg = 360 / 60 * minute
    let hourDeg = 360 / 12 * hour + 30 / 60 * minute
    secondPointer.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`
    minutePointer.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`
    hourPointer.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`
    log(secondDeg, minuteDeg, hourDeg)
}


const __main = () => {
    let time = parseTime()
    updateClock(time)
    setInterval(() => {
        let time = parseTime()
        updateClock(time)
    }, 1000)
}

__main()
