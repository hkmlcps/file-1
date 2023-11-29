input.onGesture(Gesture.LogoUp, function () {
    _1.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    _1.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    _1.change(LedSpriteProperty.X, -1)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(game.score())
    basic.pause(100)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(_4)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    _1.change(LedSpriteProperty.X, 1)
})
let _4 = 0
let _3 = 0
let _1: game.LedSprite = null
_4 = 0
basic.showLeds(`
    . . . . .
    # . # . #
    # # # . #
    # . # . #
    . . . . .
    `)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
_1 = game.createSprite(2, 2)
let _2 = game.createSprite(randint(0, 10), randint(0, 10))
basic.forever(function () {
    if (12 < game.score()) {
        game.setScore(0)
        _3 = 10
        for (let index = 0; index < 9; index++) {
            _3 += -1
            basic.showNumber(_3)
            basic.pause(1000)
        }
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . . .
            . # . # .
            . # # # .
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        _4 += 1
        basic.clearScreen()
        _1.set(LedSpriteProperty.X, 2)
        _1.set(LedSpriteProperty.Y, 2)
    }
})
basic.forever(function () {
    if (_1.isTouching(_2)) {
        game.addScore(1)
        _2.delete()
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 16, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        _2 = game.createSprite(randint(0, 10), randint(0, 10))
    }
    if (_4 == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        for (let index = 0; index < 3; index++) {
            music.play(music.stringPlayable("B - B - B - B - ", 235), music.PlaybackMode.UntilDone)
        }
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(5000)
        basic.clearScreen()
        game.setScore(0)
        _4 = 0
        _1.set(LedSpriteProperty.X, 2)
        _1.set(LedSpriteProperty.Y, 2)
    }
})
