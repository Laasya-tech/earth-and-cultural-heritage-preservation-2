// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010c0306080c01010101010101010101010c0306080c0d0d0e0e0e0e02020101010c0306080c0d0d0d0d0d0201010201010c0306080c0c0c0c0c0c0201010201010c03060607070707090c0202020201010b06050505050506080c0c0c0c010101040a0c0c0c0c0c04060707090c01010102020202020c0c0c030606080c0d020102020101020c0c0b050506080c0d0f0102020101070707080c0c03080c0d0f01020201010505050a0c0b060a0c0d02010e0e020202010c0c0c04080c0c0c0c01010e010101010c0c0c0c030707090c010e0e0e0e0e02010c0b07060606080c010e0e01010e01020c040506060606070101010101010101020c0c0405050505`, img`
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
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass3,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
