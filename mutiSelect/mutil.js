const __main = () => {
    // get all input
    const inputs = es('.todo-item input')
    for (var i = 0; i < inputs.length; i++) {
        let input = inputs[i]
        input.addEventListener('click', (event) => {
            // use isBetween check the status between checked,
            // first set to true, last set to false
            let isBetween = false
            if (event.shiftKey === true) {
                inputs.forEach((item) => {
                    if (item.checked) {
                        isBetween = !isBetween
                    }

                    if (isBetween) {
                        item.checked = true
                    }
                })
            }
        })
    }
}

__main()
