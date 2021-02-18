let item = 0
basic.forever(function () {
    basic.clearScreen()
    item = input.compassHeading()
    if (item > 45 && item <= 135) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (item > 135 && item <= 225) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
    } else if (item > 225 && item <= 315) {
        basic.showLeds(`
            . # # # .
            # . . . .
            . # # # .
            . . . . #
            . # # # .
            `)
    } else if (item > 315 || item <= 45) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
    }
})
