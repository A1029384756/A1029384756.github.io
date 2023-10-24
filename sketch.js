/** @type {GameController} */
let game_controller
/** @type {SpriteManager} */
let sprite_manager

/** @type {Level[]} */
let levels

const TILE_SIZE = 8

function preload() {
  sprite_manager = new SpriteManager()
  let tiles = /** @type {Image[]} */ ([])
  loadImage('/assets/cavernas.png', (img) => {
    for (let y = 0; y < img.height; y += TILE_SIZE) {
      for (let x = 0; x < img.width; x += TILE_SIZE) {
        tiles.push(img.get(x, y, TILE_SIZE, TILE_SIZE))
      }
    }
  })
  sprite_manager.add_spritesheet('tilemap', tiles)

  loadImage('/assets/player_idle.png', (img) => {
    sprite_manager.add_sprite('player_idle', img, 10)
  })
  loadImage('/assets/player_run.png', (img) => {
    sprite_manager.add_sprite('player_run', img, 8)
  })
  loadImage('/assets/player_jump.png', (img) => {
    sprite_manager.add_sprite('player_jump', img, 3)
  })
  loadImage('/assets/player_fall.png', (img) => {
    sprite_manager.add_sprite('player_fall', img, 6)
  })
  loadImage('/assets/player_land.png', (img) => {
    sprite_manager.add_sprite('player_land', img, 9)
  })
  loadImage('/assets/player_roll.png', (img) => {
    sprite_manager.add_sprite('player_roll', img, 7)
  })
  loadImage('/assets/player_jab.png', (img) => {
    sprite_manager.add_sprite('player_jab', img, 8)
  })
  loadImage('/assets/player_uppercut.png', (img) => {
    sprite_manager.add_sprite('player_uppercut', img, 8)
  })

  loadImage('/assets/Goblin_attack.png', (img) => {
    sprite_manager.add_sprite('Goblin_attack', img, 8)
  })
  loadImage('/assets/Goblin_damaged.png', (img) => {
    sprite_manager.add_sprite('Goblin_damaged', img, 4)
  })
  loadImage('/assets/Goblin_death.png', (img) => {
    sprite_manager.add_sprite('Goblin_death', img, 4)
  })
  loadImage('/assets/Goblin_idle.png', (img) => {
    sprite_manager.add_sprite('Goblin_idle', img, 4)
  })
  loadImage('/assets/Goblin_run.png', (img) => {
    sprite_manager.add_sprite('Goblin_run', img, 8)
  })

  loadImage('/assets/title_card.png', (img) => {
    sprite_manager.add_sprite('title_card', img, 1)
  })
  loadImage('/assets/play_button.png', (img) => {
    sprite_manager.add_sprite('play_button', img, 2)
  })
  loadImage('/assets/tutor_button.png', (img) => {
    sprite_manager.add_sprite('tutor_button', img, 2)
  })
  loadImage('/assets/back_button.png', (img) => {
    sprite_manager.add_sprite('back_button', img, 2)
  })
  loadImage('/assets/tutorial_screen.png', (img) => {
    sprite_manager.add_sprite('tutorial_screen', img, 1)
  })

  let img = createGraphics(CANVAS_WIDTH + 10, CANVAS_HEIGHT + 10)
  img.background(BACKGROUND_COLOR)
  sprite_manager.add_sprite('background', img)

  levels = /** @type {Level[]} */ (loadJSON('/assets/levels.json'))
}

function setup() {
  game_controller = new GameController()
  game_controller.setup_game()
}

function draw() {
  game_controller.frame()
}
