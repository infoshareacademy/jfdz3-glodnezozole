const pressed = [];
const secretCode = 'pig';
window.addEventListener('keyup', (e) => {
pressed.push(e.key);
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
if(pressed.join('').includes(secretCode)){
	pigGame()
}
});


function pigGame() {


//set width and height variables for game
var width = window.innerWidth;
var height = window.innerHeight;
//create game object and initialize the canvas
var game = new Phaser.Game(width, height, Phaser.AUTO, null, {preload: preload, create: create, update: update});

//initialize some variables
var player;
var food;
var cursors;
var speed = 500;
var score = 0;
var scoreText;
var background;
var backgroundSpeed = 4;
var enemies;

function preload() {
	//set background color of canvas
	game.stage.backgroundColor = '#eee';

	//load assets
	game.load.image('background', 'asset/tlo_male.png');
	game.load.image('player', 'asset/swinia_solo_mala_100.png');
	game.load.image('food', 'asset/moneta_mala.png');
	game.load.image('enemy', 'asset/chmura_mala.png');
}
    function addFood() {
        food.create(width*Math.random(), height*Math.random(), 'food');
        food.create(width*Math.random(), height*Math.random(), 'food');
        food.create(width*Math.random(), height*Math.random(), 'food');
        food.create(width*Math.random(), height*Math.random(), 'food');


        //set the anchors of their sprites to the center
        // for (var i in food.children) {
        //     food.children[i].anchor.set(0.5);
        // }
        //enable physics for the food
        game.physics.enable(food, Phaser.Physics.ARCADE);

    }
    function create() {

	//start arcade physics engine
	game.physics.startSystem(Phaser.Physics.ARCADE);
    //initialize keyboard arrows for the game controls
	cursors = game.input.keyboard.createCursorKeys();
    //add background sprite
	background = game.add.tileSprite(0, height*0.41,width,600, 'background');
    //add player sprite
	player = game.add.sprite(width*0.5, height*0.5, 'player');
    //set anchor point to center of the sprite
	player.anchor.set(0.5);
    //enable physics for the player body
	game.physics.enable(player, Phaser.Physics.ARCADE);

	//make the player collide with the bounds of the world
	player.body.collideWorldBounds = true;
    //create a group called food and add 4 food pieces to the game
    // addFood();

	//create a group called enemies
	enemies = game.add.group();
	enemies.enableBody = true;
	enemies.physicsBodyType = Phaser.Physics.ARCADE;

	food = game.add.group();

	createEnemies();
	addFood();
	//place score text on the screen
	scoreText = game.add.text(5, 3, score);
}
function update() {
	game.physics.arcade.overlap(player, enemies, collisionHandler, null, this);
	//moving back ground
    background.tilePosition.x -= backgroundSpeed;
	//move the player up and down based on keyboard arrows
	if (cursors.up.isDown) {
		player.body.velocity.y = -speed;
	}
	else if (cursors.down.isDown) {
		player.body.velocity.y = speed;
	}
	else {
		player.body.velocity.y = 0;
	}

	//move the player right and left based on keyboard arrows
	if (cursors.left.isDown) {
		player.body.velocity.x = -speed;
	}
	else if (cursors.right.isDown) {
		player.body.velocity.x = speed;
	}
	else {
		player.body.velocity.x = 0;
	}

	//call eatFood function when the player and a piece of food overlap
	game.physics.arcade.overlap(player, food, eatFood);
}

	//eatFood function
	function eatFood(player, food) {
        //remove the piece of food
	food.kill();
        //update the score
        score++;
        if( (score) % 4 == 0){
    	addFood();
}
	scoreText.text = score;
    }
var enemiesArr = [];
//place enemies
function createEnemies() {
	for (var x = 0; x<1; x++) {
		for (var y = 0; y<Math.ceil(Math.random()*15); y++) {
			var enemy = enemies.create(x*700,y*200, 'enemy');
			enemy.anchor.setTo(Math.random(), Math.random())
			enemiesArr.push(enemy);
		}
	}

	enemies.x = 2000;
	enemies.y = 80;
	var tween = game.add.tween(enemies).to({ x: -10 }, 3000, 'Linear', true, 0).onComplete.add(function(){enemiesArr.forEach(function (e) {
		e.destroy();
    }); createEnemies(); } );

}


    function  collisionHandler(player, enemy) {
	player.kill();
	alert("Game Over! Your score is " +score)
}
}