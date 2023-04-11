enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Money = SpriteKind.create()
    export const money2 = SpriteKind.create()
    export const money3 = SpriteKind.create()
    export const money4 = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const money5 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const money6 = SpriteKind.create()
    export const enemy4 = SpriteKind.create()
    export const money7 = SpriteKind.create()
    export const money8 = SpriteKind.create()
    export const enemy5 = SpriteKind.create()
}
function quest_8 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money2, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money3, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money4, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money5, effects.spray, 100)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
        fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
        ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
        f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
        ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
        ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
        ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
        ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
        fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
        ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
        bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
        bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
        bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
        3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
        333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
        cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
        cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
        cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
        bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
        dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
        dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
        dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
        ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
        ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
        d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
        333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
        33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
        33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
        d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
        ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
        b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
        bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
        bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
        dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
        dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
        dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
        3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
        33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer0)
    game.showLongText("here again?", DialogLayout.Top)
    MC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MC.setPosition(1, 68)
    controller.moveSprite(MC, 100, 0)
    animation.setAction(MC, ActionKind.Jumping)
    Info_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    animation.runImageAnimation(
    Info_ghost,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    animation.setAction(Info_ghost, ActionKind.Jumping)
    Info_ghost.setPosition(-3, 68)
    Info_ghost.follow(MC, 80)
    MONEY = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.money6)
    animation.runImageAnimation(
    MONEY,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    MONEY.setPosition(159, 68)
    myEnemy = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, SpriteKind.enemy4)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . . e e e f e 2 b f f f d c . 
        . . e e 2 2 d f 2 1 1 1 1 b c . 
        . . e e 2 2 d f e e c c c . . . 
        . . b 1 1 d e 2 e e c . . . . . 
        . . f f f f d d f . . . . . . . 
        f f f f f f d d . . . . . . . . 
        f f f . f f f e . . . . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e 2 2 b f f f d c . 
        . e e 2 2 d f e 2 1 1 1 1 b c . 
        . e e 2 2 d f e e e c c c . . . 
        . b 1 1 e e 2 2 e e c . . . . . 
        . . f d d 2 2 2 f f f d d . . . 
        e e f d d e e e . f f d d . . . 
        e e e f f f f f . . . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `],
    500,
    true
    )
    myEnemy.setPosition(0, 15)
    myEnemy.follow(MONEY, 80)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    MC.y += -20
    pause(100)
    MC.y = 68
})
function quest_2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2, effects.spray, 100)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer0)
    MC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MC.setPosition(13, 68)
    controller.moveSprite(MC, 100, 0)
    Info_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    animation.runImageAnimation(
    Info_ghost,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    animation.setAction(Info_ghost, ActionKind.Jumping)
    Info_ghost.setPosition(5, 68)
    Info_ghost.follow(MC, 40)
    MONEY = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Money)
    animation.runImageAnimation(
    MONEY,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    MONEY.setPosition(142, 68)
    if (-110 < info.score()) {
        game.showLongText("Get me more!!!", DialogLayout.Top)
    } else if (false) {
        game.showLongText("Get my money!!!", DialogLayout.Top)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.money6, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 100)
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(5)
    quest_5()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.money4, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 100)
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(5)
    quest_7()
})
function quest_5 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money2, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money3, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money4, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2, effects.spray, 100)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
        fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
        ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
        f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
        ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
        ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
        ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
        ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
        fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
        ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
        bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
        bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
        bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
        3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
        333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
        cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
        cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
        cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
        bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
        dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
        dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
        dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
        ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
        ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
        d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
        333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
        33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
        33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
        d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
        ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
        b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
        bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
        bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
        dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
        dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
        dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
        3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
        33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer0)
    game.showLongText("Strange...but money.", DialogLayout.Top)
    game.showLongText("Money.", DialogLayout.Top)
    game.showLongText("Get my money!!!!", DialogLayout.Top)
    MC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MC.setPosition(1, 68)
    controller.moveSprite(MC, 100, 0)
    animation.setAction(MC, ActionKind.Jumping)
    Info_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    animation.runImageAnimation(
    Info_ghost,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    animation.setAction(Info_ghost, ActionKind.Jumping)
    Info_ghost.setPosition(-3, 68)
    Info_ghost.follow(MC, 80)
    MONEY = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.money4)
    animation.runImageAnimation(
    MONEY,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    MONEY.setPosition(159, 68)
    myEnemy = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, SpriteKind.enemy2)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . . e e e f e 2 b f f f d c . 
        . . e e 2 2 d f 2 1 1 1 1 b c . 
        . . e e 2 2 d f e e c c c . . . 
        . . b 1 1 d e 2 e e c . . . . . 
        . . f f f f d d f . . . . . . . 
        f f f f f f d d . . . . . . . . 
        f f f . f f f e . . . . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e 2 2 b f f f d c . 
        . e e 2 2 d f e 2 1 1 1 1 b c . 
        . e e 2 2 d f e e e c c c . . . 
        . b 1 1 e e 2 2 e e c . . . . . 
        . . f d d 2 2 2 f f f d d . . . 
        e e f d d e e e . f f d d . . . 
        e e e f f f f f . . . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `],
    500,
    true
    )
    myEnemy.setPosition(0, 15)
    myEnemy.follow(MONEY, 45)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.money3, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 100)
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(10)
    quest_3()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.money8, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 100)
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(10)
    quest_2()
})
function quest_3 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.spray, 100)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
        9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
        999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
        9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
        99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
        999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
        9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
        9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
        999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
        99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
        99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
        99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
        999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
        999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
        999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
        99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
        99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
        9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
        999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
        9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
        999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
        999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
        999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
        99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
        999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
        99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
        999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
        99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
        99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99cc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993999999999999999993399999999999
        9999999999999999999999939999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993339333399999999999999993393999ccc9c9
        99999c99999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999c99cc
        9999cc93399999999993333333999999999999999999999999999999993399999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b3399ccc99c
        99c9933333cc9999999333333399999999999999999999999999999993333399999999999999999999999999999999999999999999999999999999999993335553339999999999993333553339cc9999
        9cc93333333399999993335333339999999999999999cc99999ccc99933333399cc999999999999999999999999999999999cc999999999cc99999999993335533339999999999999335553339ccc999
        cc9c93353333cc999993355533399999cc9999999999cc99999999933355333999999999cc9cc999999cc99999999c999999cc9999c9999ccc99999999999333333999999c9999993333533c99ccccc9
        c99cc3555339cc99c93333533333c999cc99cc9999999999999999933353333999999999c999c99999999999c9999c999999999999c9999c9999999cccc93333333cc999ccc99999333333ccccccccc9
        9cc9333333399cc99933333333399999999cc999999c999999cc999333333399999999c9999999999cc99999cc99999c999c9cc9999cc99999ccc99cccc97333739cc9999cc999999333333cccccc999
        9ccc33333339cc99999933333399999cc99999999c999999999999933333339c9cc999c99c9999999cc9999999c999cc99999999999cc9999999c999cc9977777799c9999cc999cc999979399cc9cc99
        ccccc977339ccc99997797777c99999cc99999999c9999999a9999993933339999c999999c99c999999999cc9cc999c999cc99999969999999999999999977777999cc9999c999cc999777799cc9cc99
        cc997777799c979997779777799999999aa79c9977999777aa9977c797737777799999c9999cc9999997799c9aa997c999779c79996979cc977cc7aa9c9997779997cc9999c99999779777799cc9cc99
        c779777779777777979777777797c7796a7797c977797777aaaaa77797777777779977c9977999779c977779a6a97777997797799969797c977c779a6c7797797777c77c77999c7a7aa777cc99cccc99
        9777977779777a7777c777797797c779aaa77777777777777777777777777777777c77c777777777777777777aa777777777777777aa777777777aa7aa777777777777777777997a7a7779979c7797c9
        9779977777777aa77777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777aa77777777777777777777777777a777777cc7797c9
        777777777777777777777777777777a777777777777777777777777777a777777777777777777777aa7777777777777777777aa777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777a77777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777777a777777777777777777777777777
        7777777777777777777777777777777777777777aa7777777777777777a7777777777777777777777777777777777a77777777777777777777777777777777777777a777777777777777777777777777
        77777777777777777aa777777777777777777777aa77777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777a777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777777777777aa777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777
        77777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777777777777777777
        777777aa77777777777777777aa777777777a7777777aa777777777777a77777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777
        777777aa7777777777777777777777777777a777777777777777777777aa777777777777777777777777777777777777777777aa777777777777777777777777777777777aa777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777b77777777777777777777777777777777777777777777777777777777777777777aa7777777
        77777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777aa777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer0)
    game.showLongText("Get my money!!!", DialogLayout.Top)
    MC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MC.setPosition(1, 68)
    controller.moveSprite(MC, 100, 0)
    animation.setAction(MC, ActionKind.Jumping)
    while (controller.left.isPressed()) {
        animation.runImageAnimation(
        MC,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        500,
        true
        )
    }
    while (controller.right.isPressed()) {
        animation.runImageAnimation(
        MC,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        500,
        true
        )
    }
    Info_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    animation.runImageAnimation(
    Info_ghost,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    animation.setAction(Info_ghost, ActionKind.Jumping)
    Info_ghost.setPosition(-3, 68)
    Info_ghost.follow(MC, 80)
    MONEY = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.money2)
    animation.runImageAnimation(
    MONEY,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    MONEY.setPosition(151, 68)
    myEnemy = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    myEnemy.setPosition(-1, 0)
    myEnemy.follow(MONEY, 40)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Money, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    quest_2()
    info.changeScoreBy(-10)
})
function quest_4 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.spray, 100)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.showLongText("A stranger approaches ", DialogLayout.Top)
    myEnemy = sprites.create(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.NPC)
    game.showLongText("May I have 100 dollars", DialogLayout.Bottom)
    story.showPlayerChoices("yes", "no", "take a million")
    if (story.checkLastAnswer("yes")) {
        game.showLongText("Thank you kind stranger", DialogLayout.Bottom)
        info.changeScoreBy(-100)
        game.showLongText("That was a stupid financial decision...for you! ", DialogLayout.Top)
        quest_5()
    } else if (story.checkLastAnswer("no")) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.showLongText("oh ok...", DialogLayout.Bottom)
        animation.runImageAnimation(
        myEnemy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . b d b c . . . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . d d 5 1 1 1 1 1 1 1 5 d d . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . . . c b d b c . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . 1 1 . . . 1 1 1 . . . . . . 
            . . 1 1 . 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . . 1 1 1 . . . . 1 . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        pause(500)
        info.changeScoreBy(-10)
        info.changeLifeBy(-1)
        game.showLongText("Did you just get robbed?", DialogLayout.Top)
        game.showLongText("...ouch", DialogLayout.Top)
        game.showLongText("Well, you still have to make me some more money kid.", DialogLayout.Top)
        quest_5()
    } else if (story.checkLastAnswer("take a million")) {
        sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 500)
        game.showLongText("Wait!!!", DialogLayout.Top)
        game.showLongText("My money!!!!!", DialogLayout.Top)
        game.showLongText("NOOOOOO!!!!!!", DialogLayout.Top)
        info.changeScoreBy(-1000000)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        MC = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        MC.setPosition(1, 68)
        controller.moveSprite(MC, 100, 0)
        MONEY = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.money3)
        animation.runImageAnimation(
        MONEY,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        500,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.money6, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    Bizzaro_2()
    info.changeScoreBy(-80)
})
function quest_7 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy3, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money3, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.money4, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2, effects.spray, 100)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
        ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
        fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
        fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
        ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
        f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
        ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
        ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
        fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
        fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
        ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
        fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
        fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
        ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
        ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
        fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
        ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
        bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
        bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
        bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
        bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
        3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
        333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
        cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
        cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
        cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
        bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
        dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
        dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
        dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
        ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
        ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
        ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
        ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
        d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
        333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
        33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
        33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
        d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
        ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
        b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
        bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
        bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
        b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
        dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
        dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
        dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
        dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
        3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
        33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer0)
    game.showLongText("a time loop?", DialogLayout.Top)
    MC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MC.setPosition(1, 68)
    controller.moveSprite(MC, 100, 0)
    animation.setAction(MC, ActionKind.Jumping)
    Info_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    animation.runImageAnimation(
    Info_ghost,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    animation.setAction(Info_ghost, ActionKind.Jumping)
    Info_ghost.setPosition(-3, 68)
    Info_ghost.follow(MC, 80)
    MONEY = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.money5)
    animation.runImageAnimation(
    MONEY,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    MONEY.setPosition(159, 68)
    myEnemy = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, SpriteKind.enemy3)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . . e e e f e 2 b f f f d c . 
        . . e e 2 2 d f 2 1 1 1 1 b c . 
        . . e e 2 2 d f e e c c c . . . 
        . . b 1 1 d e 2 e e c . . . . . 
        . . f f f f d d f . . . . . . . 
        f f f f f f d d . . . . . . . . 
        f f f . f f f e . . . . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e 2 2 b f f f d c . 
        . e e 2 2 d f e 2 1 1 1 1 b c . 
        . e e 2 2 d f e e e c c c . . . 
        . b 1 1 e e 2 2 e e c . . . . . 
        . . f d d 2 2 2 f f f d d . . . 
        e e f d d e e e . f f d d . . . 
        e e e f f f f f . . . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `],
    500,
    true
    )
    myEnemy.setPosition(0, 15)
    myEnemy.follow(MONEY, 70)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(-50)
    info.changeLifeBy(-2)
    game.showLongText("wow he hit you pretty hard.", DialogLayout.Top)
    quest_2()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    true
    )
})
function Bizzaro_2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2, effects.spray, 100)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer0)
    MC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MC.setPosition(13, 68)
    controller.moveSprite(MC, 100, 0)
    Info_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    animation.runImageAnimation(
    Info_ghost,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    animation.setAction(Info_ghost, ActionKind.Jumping)
    Info_ghost.setPosition(5, 68)
    Info_ghost.follow(MC, 40)
    MONEY = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.money7)
    animation.runImageAnimation(
    MONEY,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    MONEY.setPosition(142, 68)
    if (-110 < info.score()) {
        game.showLongText("Get my money!!!", DialogLayout.Top)
    } else if (false) {
        game.showLongText("This is strange, it's almost as if the universe... ", DialogLayout.Top)
        game.showLongText("doesn't want you specifically to get money.", DialogLayout.Top)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.money7, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(-10)
    bizzaro3()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.money2, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 100)
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(10)
    quest_4()
})
sprites.onOverlap(SpriteKind.enemy3, SpriteKind.money5, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(-50)
    info.changeLifeBy(0)
    game.showLongText("try it again", DialogLayout.Top)
    quest_7()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    true
    )
})
info.onScore(0, function () {
    game.gameOver(true)
    effects.none.endScreenEffect()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy4, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    sprites.destroy(MC, effects.disintegrate, 100)
    info.changeScoreBy(5)
    quest_5()
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.money4, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(-50)
    info.changeLifeBy(-2)
    game.showLongText("try it again", DialogLayout.Top)
    quest_5()
})
function quest_6 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money)
    sprites.destroyAllSpritesOfKind(SpriteKind.money2)
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555ffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555ffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555ffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555ffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555ffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555ffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555fffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555fffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555ffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555fffff5555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555
        5555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555
        5555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555
        5555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555
        5555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555ffffff5555555555555555555555555555555555555555555
        5555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555555555fffffff5555555555555555555555555555555555555555555
        5555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555555555555ffffffff5555555555555555555555555555555555555555555
        5555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555555555555fffffff55555555555555555555555555555555555555555555
        5555555555555555555555555555fffffff5555555555555555555555555555555555555555555555555555555555555555555555555ffffffff55555555555555555555555555555555555555555555
        5555555555555555555555555555fffffff5555555555555555555555555555555555555555555555555555555555555555555555555fffffff555555555555555555555555555555555555555555555
        55555555555555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555fffffff5555555555555555555555555555555555555555555555
        55555555555555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555fffffff5555555555555555555555555555555555555555555555
        555555555555555555555555555555fffffff5555555555555555555555555555555555555555555555555555555555555555555555ffffff55555555555555555555555555555555555555555555555
        555555555555555555555555555555fffffffff555555555555555555555555555555555555555555555555555555555555555555ffffffff55555555555555555555555555555555555555555555555
        5555555555555555555555555555555ffffffffff555555555555555555555555555555555555555555555555555555555555fffffffffff555555555555555555555555555555555555555555555555
        5555555555555555555555555555555ffffffffffffff5555555555555555555555555555555555555555555555555555fffffffffffffff555555555555555555555555555555555555555555555555
        55555555555555555555555555555555fffffffffffff555555555555555555555555555555555555555555555555fffffffffffffffffff555555555555555555555555555555555555555555555555
        555555555555555555555555555555555ffffffffffffffffff55555555555555555555555555555555555555fffffffffffffffffffffff555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffff5555555fffffffffffffffffffffff555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555555555555555555555
        55555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555555555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffff5555555555555555555555555555555555555555555555555555555555555555555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `)
    game.showLongText("well, you figured it out.", DialogLayout.Top)
    game.showLongText("Money isn't real", DialogLayout.Top)
    game.gameOver(true)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    quest_1()
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy5, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 100)
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(-800)
})
function quest_1 () {
    scene.setBackgroundImage(img`
        eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
        222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
        222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
        222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
        e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
        eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
        2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
        2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
        2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
        eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
        eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
        eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
        eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
        eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
        eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
        eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
        eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
        eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
        eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
        eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
        eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
        eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
        eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
        eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
        eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
        eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
        eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
        eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
        eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
        ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
        ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
        eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
        eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
        eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
        eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
        eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
        eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
        eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
        ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
        ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
        e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
        e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
        eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
        eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
        ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
        ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
        e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
        e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
        22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
        22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
        222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
        2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
        2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
        222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
        222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
        222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
        22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
        22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
        22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
        2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
        2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
        2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
        ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
        eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
        eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
        2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
        222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
        22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
        222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
        eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
        222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
        222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
        222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
        222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
        222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
        222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
        222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
        222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
        222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
        222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
        222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
        222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
        2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
        2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
        222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
        222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
        2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
        222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
        222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
        222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
        222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
        2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
        22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
        22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
        22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
        22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
        22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
        222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
        222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
        222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
        222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
        222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
        222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
        `)
    Info_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fdffff1fff1f......
        ......fdf11ff11fdf......
        ......fff22ff22fff......
        ......fcf11ff11fcf......
        .......fbfff1ffbf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    animation.setAction(Info_ghost, ActionKind.Jumping)
    animation.stopAnimation(animation.AnimationTypes.All, Info_ghost)
    game.showLongText("you still owe me money for that sandwich.", DialogLayout.Top)
    game.showLongText("Here's the bill,I'll put you to work for it.", DialogLayout.Top)
    game.showLongText("yes(A) or no (B)", DialogLayout.Top)
    game.showLongText("It wasn't really a choice anyway!", DialogLayout.Top)
    info.setScore(-110)
    info.setLife(5)
    quest_2()
}
function bizzaro3 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    sprites.destroyAllSpritesOfKind(SpriteKind.Money, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile, effects.spray, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.spray, 100)
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffddd2222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffdddd22222222222222222222222222222222222222222222222222222222222
        2222222222222222222222dd222222222222222222222222222222222222222222222222222222222222222222fffffffffddd2222222222222222222222222222222222222222222222222222222222
        2222222222222222222ffddddd222222222222222222222222222222222222222222222222222222222222222ffffffffffffdd222222222222222222222222222222222222222222222222222222222
        222222222222222222fffffffdd2222222222222222222222222222222222222222222222222222222dddddddffffffffffffdd222222222222222222222222222222222222222222222222222222222
        222222222222222222ffffffffd22222222222222222222222222222222222222222222222222222ddddddddddfffffffffffddf22222222222222222222222222222222222222222222222222222222
        22222222222222222fffffffffddf21ddd2222222222222222222222222222222222222222222222ddffffffdfffffffffffffdfff222222222222222222222222222222222222222222222222222222
        22222222222222222fffffffffddffddddddddd2222222222222222222222222222222222222222ddffffffffffffffffffffffffff2ddd2222222222222222222222222222222222222222222222222
        22222222222222222fffffffffddffffffffddddd22222222222222222222222222222222222221ddffffffffffffffffffffffffffdddddd22222222222222222222222222222222222222222222222
        222222221ddddddddffffffffffdffffffffdddddf222222222222222222222222222222222222ddffffffffffffffffffffffffffddfffddd2222222222222222222222222222222222222222222222
        2222222dddddddddddfffffffffffffffffffffffff222222222222222222222222222222222221dffffffffffffffffffffffffffddffffdd2222222222222222222222222222222222222222222222
        2222221ddffffffffddfffffffffffffffffffffffff22222222222222222222222222222222ddddffffffffddfffffffffffffffffffffffdd222222222222222222222222222222222222222222222
        222222ddffffffffffffffffffffffffffffffffffff2222222222222222222222222222222dddfddffffffddffffffffffffffffffffffffdd222222222222222222222222222222222222222222222
        22222ddfffffffffffffffffffffffffffffffffffff222222222222222222222222222222dddffffffffffddffffffffffffffffffffffffdd222222222222222222222222222222222222222222222
        22222ddffffffffffffffffffffffddfffffffffffff222222222222222222222222222222ddfffffffffffffffffffffffffffffffffffffdd222222222222222222222222222222222222222222222
        22222ffffffffffffffffffffffffddfffffffffffff222222222222222222222222222222dfffffffffffffffffffffffffffffffffffffdd2222222222222222222222222222222222222222222222
        22222fffffffffffffffffffffffffddffffffffffbf222222222222222222222222222222dfffffffffffffffffffffffffffffffffffffdd2222222222222222222222222222222222222222222222
        222222ffffffffffffffffffffffffddffbbbfffbbb2222222222222222222222222222222ffffffffffffffffffffffffffddfffffffffdd222222222222222222222222ffdddd22222222222222222
        222222ffffffffffffffffffffffffddbbbbbbbbbb22222222222222222222222222222222ffffffffffffffffffffffffffddfffffffffdf2222222222222222222222fffffddddd222222222222222
        2222222fbbffffffffffbbbffffffbbb2222211222222222222222222222222222222222222fffffffffffffffffffffffffddfffffffffff222222222222222222222fffffffffddd22fffff2222222
        22222222bbbbbbbbbbbbbbbbbbbbbbb222222222222222222222222222222222222222222222bbbbbbbbbbbfffffffffffffddffffffffff22222222222222222dddddffffffffffdddffffdd1122222
        2222222221bbbbbbbbbb2221bbbbb12222222222222222222222222222222222222222222222bbbbbbbbbbbbbfffffffffffddbbbbbbbbb22222222222222222dddddddddffffffffddffffdddd12222
        222222222222222222222222211122222222222222222222222222222222222222222222222222222222222bbbbfffffffbbdbbbbbbb2222222222222222222fdffffffddffffffffddfffffffdd2222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bbbbbbbbbbbb2222222222222222222d22222ffffffffffffffffffffffffffffdd2222
        2222222222222222222222222222222222222222222222222222222222ddddd22222222222222222222222222222bbbbb2222222222222222222ddddddddddffffffffffffffffffffffffffffdd1222
        222222222222222222222222222222222222222222222222dddddddddddddddddd2222222222222222222222222222222222222222222222222dddfffffdddddffffffffffffffffffffffffffdd2222
        2222222222222222222222222222222222222222222222ffdddfffddddffffffdddd22222222222222222222222222222222222222222222222fffffffffffddffffffffffffffffffffffffffdd2222
        222222222222222222222222222222222222dddddddddffffffffffddfffffffffddd2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffdd12222
        2222222222222222222222222222222222fddddddfdddddfffffffffffffffffffffddff2222222222222222222222222222222222222222222ffffffffffffffffffffffffddfffffffffffdd122222
        22222222222222222222222222222222fffffffffffffddddffffffffffffffffffffdffffffdd2222222222222222222222222222222222222ffffffffffffffffffffffffddfffffffffffd1122222
        22222222222222222222222222222221ddfffffffffffffddffffffffffffffffffffdffffffdddd222222222222222222222222222222222222fffffffffffffffffffffdddddfffffffffb12222222
        22222222222222222222222222fdddddddddfffffffffffffffffffffffffffffffffffffffffffdd222222222222222222222222222222222222bbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbb22222222
        2222222222222222222222222fffffffffffffffffffffffffffffffffffffddffffffffffffffffdd22222222222222222222222222222222222bbb2222222bbbbbbbbbbbb22222222bbb2222222222
        2222222222222222222222222fffffffffffffffffffffffffffffffffffffddfffffffffffffffffd222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222fffffffffffffffffffffffffffffffffffffffddffffffffffffffffd222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222ffffffffffffffffffffffffffffffffffffffddfffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222fffffffffffbbbbbffffddffffbbbbbbbbbbffdffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222fbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff2222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222bbbbbbbbb2222222bb2222222222222222222bbbbbbbbbbbbbbbb22222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        222c222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22cc22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222a22222222222222222aa22222222222
        22222222222222222222222a222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222aaa2aaaa2222222222222222aa2a222ccc2c2
        22222c222222222222222aaa2a2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222aaaaaa9aa2222222222222aaaaaa2222c22cc
        2222cc2aa2222222222aaaaaaa22222222222222222222222222222222aa2222222222222222222222222222222222222222222222222222222222222222aaa5aaa2222222222222aaaaabaa22ccc22c
        22c22aaaaacc2222222aaaaaaa2222222222222222222222222222222aaaaa2222222222222222222222222222222222222222222222222222222222222aaa555aaa222222222222aaaa55aaa2cc2222
        2cc2aaaaaaaa2222222aaa5aaaaa2222222222222222cc22222ccc222aaaaaa22cc222222222222222222222222222222222cc222222222cc2222222222aaa55aaaa2222222222222aa555aaa2ccc222
        cc9c9aa5aaaacc22222aa555aaa22222cc2222222222cc222222222aaa55aaa222222222cc2cc222222cc22222222c222222cc2222c2222ccc22222222222aaaaaa222222c222222aaaa5aac22ccccc2
        c99cca555aa9cc22c2aaaa5aaaaac222cc22cc22222222222222222aaa5aaaa222222222c222c22222222222c2222c222222222222c2222c2222222cccc2aaaaaaacc222ccc22222aaaaaaccccccccc2
        9cc9aaaaaaa99cc222aaaaaaaaa22222222cc222222c222222cc222aaaaaaa22222222c2222222222cc22222cc22222c222c2cc2222cc22222ccc22cccc2daaada9cc2222cc222222aaaaaacccccc222
        9cccaaaaaaa9cc222222aaaaaa22222cc22222222c2222222222222aaaaaaa2c2cc222c22c2222222cc2222222c222cc22222222222cc2222222c222cc22dddddd99c2222cc222cc2222d9a99cc9cc22
        ccccc9ddaa9ccc2222dd9ddddc22222cc22222222c2222222a222222a9aaaa2222c222222c22c222222222cc2cc222c222cc222222622222222222222222ddddd999cc2222c222cc222dddd99cc9cc22
        cc99ddddd99c9d222ddd9dddd22222222aad2c22dd222dddaa22ddcd9ddaddddd22222c2222cc222222dd22c2aa22dc222dd2cd22262d2cc2ddccdaa2c222ddd999dcc2222c22222dd2dddd99cc9cc22
        cdd9ddddd9dddddd2d9ddddddd2dcdd26add2dc2ddd2ddddaaaaaddd9ddddddddd22ddc22dd222dd2c2dddd9a6a2dddd22dd2dd22262d2dc2ddcdd9a6cdd2dd9ddddcddcdd222cdadaadddcc99cccc22
        9ddd9dddd9dddaddddcdddd9dd2dcdd2aaaddddddddddddddddddddddddddddddddcddcddddddddddddddddddaadddddddddddddddaadddddddddaadaadddddddddddddddddd22dadaddd99d9cdd9dc2
        9dd99ddddddddaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaddddddddddddddaaddddddddddddddddddddddddddaddddddccdd9dc2
        ddddddddddddddddddddddddddddddadddddddddddddddddddddddddddadddddddddddddddddddddaadddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddaddddddddddddddddddddddddddaadddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddaddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddaaddddddddddddddddaddddddddddddddddddddddddddddddddddaddddddddddddddddddddddddddddddddddddddaddddddddddddddddddddddddddd
        dddddddddddddddddaadddddddddddddddddddddaaddddddddaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddadddddddddddddddaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaadddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddddddaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddaadddddddddddddddddaadddddddddadddddddaaddddddddddddaddddddddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddaaddddddddddddddddddddddddddddadddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddddddaadddddddddddddddddddddddddddddddddaaddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddaadddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer0)
    game.showLongText("yikes maybe next time pay off your debts kid.", DialogLayout.Top)
    MC = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MC.setPosition(1, 68)
    controller.moveSprite(MC, 100, 0)
    animation.setAction(MC, ActionKind.Jumping)
    Info_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    animation.runImageAnimation(
    Info_ghost,
    [img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
    animation.setAction(Info_ghost, ActionKind.Jumping)
    Info_ghost.setPosition(2, -1)
    Info_ghost.follow(MC, 80)
    MONEY = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.money8)
    animation.runImageAnimation(
    MONEY,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    500,
    true
    )
    MONEY.setPosition(35, -3)
    myEnemy = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f 7 7 . . . . . . . . f f f 
        f f 7 7 . . 7 7 . . . f 7 f f 7 
        f f 7 3 7 7 3 7 7 f f f f f 7 . 
        f f f 3 f 7 3 f 7 f f f 7 7 7 . 
        . 7 f f f f f f 7 f f 7 7 7 7 . 
        . 7 f f f f f f 7 f f 7 7 7 7 . 
        7 f 1 f f f 1 f f f 7 7 7 7 7 . 
        7 f f f f f f f f 7 7 7 7 7 . . 
        f f 7 f f f 7 f f f f f 7 . . . 
        f f 1 f f f 1 f f f f f 7 7 . . 
        . f f f f f f f f f 7 f . . . . 
        . . f f f f f f f 7 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.enemy5)
    animation.runImageAnimation(
    myEnemy,
    [img`
        f f f . . . . . . . . f f f . . 
        7 f f 7 f . . . . . . 7 7 f f . 
        . 7 f f 7 f . . . . . . 7 7 f f 
        . 7 7 7 f f . . . . . . 7 f 7 f 
        . 7 7 f f 7 f . 7 7 . 7 7 f f f 
        . 7 f f 7 f f 7 7 3 7 7 7 7 f f 
        . 7 f 7 7 f f 7 f 3 7 f 7 b f f 
        . . 7 7 7 f f 7 f 1 f f f 1 7 . 
        . . . 7 7 7 7 f f 1 f f f 1 7 . 
        . . . . 7 7 f f f f f f f f f 7 
        . . . . f f f f f 7 1 f f 1 f 7 
        . . . 7 f f f f f f 1 f f 1 f f 
        . . 7 7 f f f f f f 2 2 2 2 f f 
        . . . . f 7 f f f f 2 2 2 2 f . 
        . . . . . f 7 f f f f f f f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . 7 7 f f f 
        7 f f 7 f . . . 7 7 . 7 7 7 f f 
        . 7 f f f f f 7 7 3 7 7 3 7 f f 
        . 7 7 7 f f f 7 f 3 7 f 3 7 f f 
        . 7 7 b 7 f f 7 f f f f f f 7 f 
        . 7 b b 7 f f 7 f 1 f f f 1 7 7 
        . 7 b 7 7 7 f f f f f f f f f 7 
        . . 7 7 7 7 7 f f 7 1 f f 1 f 7 
        . . . 7 f f f f f f 1 f f 1 f 7 
        . . . 7 f f f f f f f f f f f f 
        . . 7 7 f f f f f f 2 2 2 2 f f 
        . . . . f 7 f f f 2 2 2 2 2 f . 
        . . . . . f 7 f f f 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 7 . 7 7 . . . 
        . . . . . . 7 7 7 3 7 7 3 f . . 
        . . . . . 7 7 7 f 3 7 f 3 7 f . 
        . . . . f f f f f f f f f f 7 f 
        . . . . f f f f f 1 f f f 1 7 7 
        . . . f f f 7 f f f f f f f f 7 
        . . . f f f f f f 7 1 f f 1 f 7 
        . . . f f f 7 7 f f 1 f f 1 f f 
        . . . 7 7 7 7 f f f f f f f f f 
        . . 7 7 7 f f f f f 2 2 2 2 f f 
        . . . 7 f f 7 7 f 2 2 2 2 2 f . 
        . . 7 f f 7 7 f f b 2 2 2 f . . 
        . 7 7 7 7 7 f f f f f f f . . . 
        7 7 7 7 . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . 7 f f 7 f . . . . . . . 7 f f 
        . . 7 f f 7 f . . . . . . 7 7 f 
        . . 7 7 7 f f . . . . . . . f 7 
        . . 7 7 f f f f . . . . . f f 7 
        . . 7 f f 7 f f 7 7 . 7 7 f f f 
        . . 7 f 7 7 f f 7 7 7 7 7 f f f 
        . . . 7 7 7 f c f 3 7 7 3 7 f . 
        . . . 7 7 7 7 f f 3 7 f 3 f 7 . 
        . . . . 7 7 f f f f f f f f 7 7 
        . . . 7 f f f f 1 1 f f f 1 1 7 
        . . 7 7 f f f f f f f f f f f f 
        . . . . f f f f f 7 f f f 7 f f 
        . . . . f 7 f f f 1 f f f 1 f . 
        . . . . . f 7 f f f f f f f . . 
        . . . . . . f f f f f f f . . . 
        `],
    500,
    true
    )
    myEnemy.setPosition(4, 45)
    myEnemy.follow(MC, 60)
}
sprites.onDestroyed(SpriteKind.money3, function (sprite) {
    quest_6()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.money5, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 100)
    sprites.destroy(MONEY, effects.disintegrate, 100)
    info.changeScoreBy(5)
    quest_8()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(MONEY, effects.disintegrate, 100)
    quest_2()
    info.changeScoreBy(-10)
    info.changeLifeBy(-1)
})
let myEnemy: Sprite = null
let MONEY: Sprite = null
let Info_ghost: Sprite = null
let MC: Sprite = null
scene.setBackgroundColor(1)
scene.setBackgroundColor(15)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
effects.starField.startScreenEffect(1000)
story.printText("press \"menu\" to start", 80, 100, 1, 15, story.TextSpeed.VeryFast)
