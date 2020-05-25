namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 
4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 
e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 
4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 
e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 
4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 
e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 
4 e 4 e 4 e 4 e 4 e 4 e 4 e 4 e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. a . . . a . . . a . . . a . . 
a a . . a a . . a a . . a a . . 
a a . . a a . . a a . . a a . . 
. a a . . a a . . a a . . a a . 
. a a . . a a . . a a . . a a . 
a a . . a a . . a a . . a a . . 
a a . . a a . . a a . . a a . . 
. a a . . a a . . a a . . a a . 
. a a . . a a . . a a . . a a . 
a a . . a a . . a a . . a a . . 
a a . . a a . . a a . . a a . . 
. a a . . a a . . a a . . a a . 
. a a . . a a . . a a . . a a . 
a a . . a a . . a a . . a a . . 
`
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy > -10) {
        mySprite.vy = -20
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (is_facing_left) {
        projectile = sprites.createProjectileFromSprite(img`
. . 6 6 6 . . 
. 6 . . . 6 . 
6 . . . . . 6 
6 . . . . . 6 
6 . . . . . 6 
. 6 . . . 6 . 
. . 6 6 6 . . 
`, mySprite, -50, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. . 6 6 6 . . 
. 6 . . . 6 . 
6 . . . . . 6 
6 . . . . . 6 
6 . . . . . 6 
. 6 . . . 6 . 
. . 6 6 6 . . 
`, mySprite, 50, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
4 f 4 f 4 f 4 . . . . 
4 f 4 f 4 f 4 . . f 4 
1 1 4 f 4 f 4 f 4 f 4 
f 1 4 f 4 f 4 f 4 f 4 
1 1 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 . . f 4 
4 f 4 f 4 f 4 . . . . 
`)
    is_facing_left = true
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . . 4 f 4 f 4 f 4 
4 f . . 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 f 4 1 1 
4 f 4 f 4 f 4 f 4 1 f 
4 f 4 f 4 f 4 f 4 1 1 
4 f . . 4 f 4 f 4 f 4 
. . . . 4 f 4 f 4 f 4 
`)
    is_facing_left = false
})
let projectile: Sprite = null
let is_facing_left = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
4 f 4 f 4 f 4 . . . . 
4 f 4 f 4 f 4 . . f 4 
1 1 4 f 4 f 4 f 4 f 4 
f 1 4 f 4 f 4 f 4 f 4 
1 1 4 f 4 f 4 f 4 f 4 
4 f 4 f 4 f 4 . . f 4 
4 f 4 f 4 f 4 . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(8)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite, 10, 0)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000903090303030903090308010801010108010801`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. 2 . 2 2 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,sprites.builtin.coral1,sprites.builtin.coral5,sprites.builtin.coral0,sprites.builtin.coral2,sprites.builtin.coral3,myTiles.tile2,myTiles.tile3,myTiles.tile4],
            TileScale.Sixteen
        ))
is_facing_left = true
game.onUpdate(function () {
    if (!(controller.up.isPressed())) {
        mySprite.ay = 30
    }
})
forever(function () {
	
})
