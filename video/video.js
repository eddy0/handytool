const getVideo = () => {
    const video = e('video')
    navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((media) => {
        log(media)
        video.srcObject = media
        video.play()
    }).catch((err) => alert('please allow the webcam to operate it'))
}

const rgbSplit = (pixels) => {
    for (var i = 0; i < pixels.data.length; i+= 4) {
        pixels.data[i - 150] = pixels.data[i + 0]
        pixels.data[i + 500] = pixels.data[i + 1]
        pixels.data[i - 550] = pixels.data[i + 2]
    }

    return pixels
}

const drawCanvas = () => {
    const video = e('video')
    const canvas = e('canvas')
    const ctx = canvas.getContext('2d')

    video.addEventListener('canplay', () => {
        const w = video.videoWidth
        const h = video.videoHeight
        canvas.width = w
        canvas.height = h
        log(w, h)

        setInterval(() => {
            ctx.drawImage(video, 0, 0, w, h)

            let pixels = ctx.getImageData(0, 0, w, h)

            // pixels = rgbSplit(pixels)

            ctx.globalAlpha = 0.05

            ctx.putImageData(pixels, 0, 0)


        }, 30)
    })
}



const __main = () => {
    getVideo()
    drawCanvas()
}

__main()
