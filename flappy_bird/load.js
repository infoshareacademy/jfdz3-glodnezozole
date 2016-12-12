var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#ffffff';
        this.game.load.image('bird', 'assets/swinia_solo_mala_100.png');
        this.game.load.image('pipe', 'assets/chmura_mala.png');
        this.game.load.audio('jump', 'assets/jump.wav');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};