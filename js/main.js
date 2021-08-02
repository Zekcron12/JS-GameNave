function initCanvas(){
  alert('Bienvenidos, dale play para jugar');
	// variable donde almacenamos el canvas.
  const ctx = document.getElementById('my_canvas').getContext('2d');

  // variables donde almacenamos las imagenes sobre una instancia del objeto.
  let backgroundImage = new Image(); //fondo
  let naveImage = new Image(); // nave
  let enemiespic1 = new Image(); // enemigo 1
  let enemiespic2 = new Image(); // enemigo 2
  let enemiespic3 = new Image(); // enemigo 3
  let enemiespic4 = new Image(); // enemigo 4

  // fondo del canvas y la nave principal.
  backgroundImage.src = "img/fondo8.jpg"; // fondo canvas.
  naveImage.src = "img/opcion5.png"; // nava principal.

  // enemigos
  enemiespic1.src = "img/enemigo1.png"; // primera orden.
  enemiespic2.src = "img/enemigo2.png"; // segunda orden.
  enemiespic3.src = "img/enemy4.png"; // tercera orden.
  enemiespic4.src = "img/enemy5.png"; // cuarta orden.
    
  // referencia al tamaño de nuestro canvas
  let cW = ctx.canvas.width; // 800px 
  let cH = ctx.canvas.height;// 600px

  // función que nos va retornar la estructura de nuestros componentes 'naves'.
  let enemyTemplate = function(options){ // llamo options al parametro 
    return {
      id: options.id || '', // atributo name
      x: options.x || '', // posición en el espacio eje x
      y: options.y || '', // posición en el espacio eje y
      w: options.w || '', // atributo largo
      h: options.h || '', // atributo altura
      image: options.image || enemiespic1 // atributo para asginarle una img a los enemigos
    }
  }

  // array donde se le colocan los atributos que se deseen poner a las navas
  let enemies = [
    new enemyTemplate({id: "Pimera Orden Nave Nº 1", x: 100, y: -20, w: 50, h: 30 }),
    new enemyTemplate({id: "Pimera Orden Nave Nº 2", x: 225, y: -20, w: 50, h: 30 }),
    new enemyTemplate({id: "Pimera Orden Nave Nº 3", x: 350, y: -20, w: 80, h: 30 }),
    new enemyTemplate({id: "Pimera Orden Nave Nº 4", x:100,  y:-70,  w:80,  h: 30}),
    new enemyTemplate({id: "Pimera Orden Nave Nº 5", x:225,  y:-70,  w:50,  h: 30}),
    new enemyTemplate({id: "Pimera Orden Nave Nº 6", x:350,  y:-70,  w:50,  h: 30}),
    new enemyTemplate({id: "Pimera Orden Nave Nº 7", x:475,  y:-70,  w:50,  h: 30}),
    new enemyTemplate({id: "Pimera Orden Nave Nº 8", x:600,  y:-70,  w:80,  h: 30}),
    new enemyTemplate({id: "Pimera Orden Nave Nº 9", x:475,  y:-20,  w:50,  h: 30}),
    new enemyTemplate({id: "Pimera Orden Nave Nº 10",x: 600, y: -20, w: 50, h: 30}),

    // Segundo grupo de enemigos
    new enemyTemplate({ id: "Segunda Orden Nº 1", x: 100, y: -220, w: 50, h: 30, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 2", x: 225, y: -220, w: 50, h: 30, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 3", x: 350, y: -220, w: 80, h: 50, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 4", x: 100, y: -270, w: 80, h: 50, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 5", x: 225, y: -270, w: 50, h: 30, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 6", x: 350, y: -270, w: 50, h: 30, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 7", x: 475, y: -270, w: 50, h: 30, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 8", x: 600, y: -270, w: 80, h: 50, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 9", x: 475, y: -200, w: 50, h: 30, image: enemiespic2 }),
    new enemyTemplate({ id: "Segunda Orden Nº 10", x: 600, y: -200, w: 50, h: 30, image: enemiespic2 }),

    //Tercer grupo
    new enemyTemplate({ id: "Tercera Orden Nº 1", x: 100, y: -420, w: 50, h: 30, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 2", x: 225, y: -420, w: 50, h: 30, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 3", x: 350, y: -420, w: 80, h: 50, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 4", x: 100, y: -470, w: 80, h: 50, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 5", x: 225, y: -470, w: 50, h: 30, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 6", x: 350, y: -470, w: 50, h: 30, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 7", x: 475, y: -470, w: 50, h: 30, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 8", x: 600, y: -470, w: 80, h: 50, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 9", x: 475, y: -400, w: 50, h: 30, image: enemiespic3 }),
    new enemyTemplate({ id: "Tercera Orden Nº 10", x: 600, y: -400, w: 50, h: 30, image: enemiespic3 }),

    //Cuarto grupo
    new enemyTemplate({ id: "Cuarta Orden Nº 1", x: 100, y: -720, w: 50, h: 30, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 2", x: 225, y: -720, w: 50, h: 30, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 3", x: 350, y: -720, w: 80, h: 50, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 4", x: 100, y: -770, w: 80, h: 50, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 5", x: 225, y: -770, w: 50, h: 30, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 6", x: 350, y: -770, w: 50, h: 30, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 7", x: 475, y: -770, w: 50, h: 30, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 8", x: 600, y: -770, w: 80, h: 50, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 9", x: 475, y: -700, w: 50, h: 30, image: enemiespic4 }),
    new enemyTemplate({ id: "Cuarta Orden Nº 10", x: 600, y: -700, w: 50, h: 30, image: enemiespic4 }),
  ];

  // funcion donde nos muestra los enemigos en pantalla
	// esto también obliga a los enemigos a comprobar si están golpeando al jugador. 
  let renderEnemies = function (enemyList) {
    // enemyList es un paramatro para nuestro arreglo.
    for (let i = 0; i < enemyList.length; i++) {
      console.log(enemyList[i]);

      // le pasamos los parametros de la nave que queremos que se muestren en pantalla.
      ctx.drawImage(enemyList[i].image, 
      enemyList[i].x, 
      enemyList[i].y += .5, //este .5 es para que los enemigos se muevan hacia abajo.
      enemyList[i].w, 
      enemyList[i].h);

      // detector de cuando el enemigo alcanza la base
      launcher.hitDetectLowerLevel(enemyList[i]);
    }
  }

  // función de atributos de la nave principal
  function Launcher(){
    // ubicación de balas
    this.y = 500, 
    this.x = cW*.5-25, 
    this.w = 100, 
    this.h = 100,   
    this.direccion, 
    this.bg="green", //color de bala
    this.misiles = []; // array para almacenar las balas

    // logica sobre los estilos de mensaje mostrado en el canvas
    this.gameStatus = {
            over: false, 
            message: "",
            fillStyle: 'red',
            font: 'italic bold 36px Arial, sans-serif',
    }

    this.render = function () {
      //movimiento de la nave 
      if(this.direccion === 'left') {
        this.x-=3;
      } else if(this.direccion === 'right'){
          this.x+=3;
      }else if(this.direccion === "downArrow"){
          this.y+=5;
      }else if(this.direccion === "upArrow"){
          this.y-=5;
      }
      
      //agrego el fondo y nave princiapl
      ctx.fillStyle = this.bg;
      ctx.drawImage(backgroundImage, 10, 10); // background image
      ctx.drawImage(naveImage,this.x,this.y, 100, 90); // we need to make sure spaceship is at the same location as the bullets

      //logica de las balas de la nave
      for(let i=0; i < this.misiles.length; i++){
      	//variable m donde toda su logica va almacenar las balas en el array this.misiles
        let m = this.misiles[i];
        //ctx para mostrar en la pantalla con ciertos parametros
        ctx.fillRect(m.x, m.y-=3, m.w, m.h); // direccion
        //deterctor de bala con el enemigo 
        this.hitDetect(this.misiles[i],i);
        //para que cuando llegue una bala al top de pantalla me la elimine
        if(m.y <= 0){ // If a missile goes past the canvas boundaries, remove it
          this.misiles.splice(i,1); // splice that missile out of the misiles array
        }
      }

      // This happens if you win
            if (enemies.length === 0) {
                clearInterval(animateInterval); // Stop the game animation loop
                ctx.fillStyle = 'yellow';
                ctx.font = this.gameStatus.font;
                ctx.fillText('You win!', cW * .5 - 80, 50);
                alert('ganaste');
                location.reload();
                ctx.clearRect(0, 0, canvas.w, canvas.h);
            }
        }

        // funcion que detecta el impacto de bala
        this.hitDetect = function (m, mi) {
          console.log('crush');
          for (let i = 0; i < enemies.length; i++) {
            let e = enemies[i];
            //logica del encuentro del misil y del enemigo sobre los ejes x e y.
            //la bala tiene que ser mas grande (número) en el eje y
            if(m.x+m.w >= e.x && //bala + ancho de bala > enemigo sobre eje x
              m.x <= e.x+e.w && //bala < enemigo + ancho de nave 
              m.y >= e.y && 
              m.y <= e.y+e.h){
            	//si se cumplen las condiciones de arriba, ahora removeme lo siguiente:
              this.misiles.splice(this.misiles[mi],1); // remueve el misil
              enemies.splice(i, 1); // remueve el enemigo
              //nuestra el mensaje en la barra
              document.querySelector('.barra').innerHTML = "Eliminado "+ e.id+ " ";
            }
          }
        }

        // Ask player ship if an enemy has passed or has hit the player ship
        this.hitDetectLowerLevel = function(enemy){
            // If location of ship is greater than 550 then we know it passed lower level
            if(enemy.y > 550){
                this.gameStatus.over = true;
                this.gameStatus.message = 'Enemy(s) have passed!';
            }
            // Esto detecta un choque de la nave con enemigos
            //console.log(this);
            // this.y -> where is spaceship location
            if(enemy.id === 'enemy3'){
                //console.log(this.y);
                console.log(this.x);
            }
            // a) If enemy y is greater than this.y - 25 => then we know there's a collision
            // b) If enemy x is gless than this.x + 45 && enemy x > this.x - 45 then we know theres a collision
            // encuentro de la nave pricipal con el enemigo
            if ((enemy.y < this.y + 25 && enemy.y > this.y - 25) &&
                (enemy.x < this.x + 45 && enemy.x > this.x - 45)) { // Checking if enemy is on the left or right of spaceship
                    this.gameStatus.over = true;
                    this.gameStatus.message = 'You Died!'
                }

            //cuando el parametro de gameStatus.over pase a ser true, detiene el juego
            //¿cuando es true? ... cuando el enemigo alcanza los 550 en el eje y
            if(this.gameStatus.over === true){  
            		//detiene el juego
                clearInterval(animateInterval);
                //le da estilos al mensaje mostrado en pantalla
                ctx.fillStyle = this.gameStatus.fillStyle;
                ctx.font = this.gameStatus.font;
                // ubicacion del mensaje mostrado en pantalla
                ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50); // text x , y
            }
        }
    }
    
  // creo una variable y le coloco la nueva instancia para invocar
  let launcher = new Launcher();

  // funcion que no va mostrar los enemigos que esten por fuera del canvas.
  function animate() {
    ctx.clearRect(0, 0, cW, cH);

  	// invoco a la variable que tiene la instancia Launcher();
    launcher.render();

    //llama a la variable renderEnemies que es una función y le coloca los valores del array enemies
    renderEnemies(enemies);
  } 	
  // ejecuta a la funcion animate cada 8 segundos y lo almacena en un variable.
  let animateInterval = setInterval(animate, 8);
  
  //llamo a los IDs de los botones de pantalla  
  let left_btn  = document.getElementById('left_btn');
  let right_btn = document.getElementById('right_btn');
  let fire_btn  = document.getElementById('fire_btn'); 

  /* -------------------- logica de los botones teclado -------------------- */

  // boton flecha izquierda
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) { // '37' es el Nº del boton izquierda
      launcher.direccion = 'left';
      // logica para que no se mueva más allá del canvas  
      if(launcher.x < cW*.2-130) {
        launcher.x+=0;
        launcher.direccion = '';
      }
    }    
  });
  // cuando se deja de presionar el boton izquierda
  document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37) {
      launcher.x+=0; // ya no se le suma valores de movimiento al eje x.
      launcher.direccion = ''; // la direccion queda como una cadena vacia.
    }
  }); 

  // boton flecha derecha
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 39) {
    	launcher.direccion = 'right';
      if(launcher.x > cW-110){
        launcher.x-=0;
        launcher.direccion = '';
      }
    }
 	});
  // cuando se deja de presionar el boton derecha
  document.addEventListener('keyup', function(event) {
    if(event.keyCode == 39) {
      launcher.x-=0;   
      launcher.direccion = '';
    }
  }); 

  // boton flecha arriba
  document.addEventListener('keydown', function(event){
    if(event.keyCode == 38) {
      launcher.direccion = 'upArrow';  
      if(launcher.y < cH*.2-80){
        launcher.y += 0;
        launcher.direccion = '';
      }
    }
  });
  // cuando se deja de presionar el boton arriba
  document.addEventListener('keyup', function(event){
    if(event.keyCode == 38) {
      launcher.y -= 0;
      launcher.direccion = '';
    }
  });

  // boton flecha abajo
  document.addEventListener('keydown', function(event){
    if(event.keyCode == 40) {
      launcher.direccion = 'downArrow';  
      if(launcher.y > cH - 110){
        launcher.y -= 0;
        launcher.direccion = '';
      }
    }
  });
  // cuando se deja de presionar el boton abajo
  document.addEventListener('keyup', function(event){
    if(event.keyCode == 40) {
      launcher.y += 0;
      launcher.direccion = '';
    }
  });

  // boton de disparar teclado de pantalla
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
      launcher.misiles.push ({
      	x: launcher.x + launcher.w*.5, //para que salga por el centro de la nave 
      	y: launcher.y, 
      	w: 3,
      	h: 10
      });
    }
  });

  // tecla 'p' para volver a jugar 
  document.addEventListener('keydown', function(event){
    if(event.keyCode == 80) {
      location.reload();
    }
  });

  /* -------------------- End - logica de los botones teclado -------------------- */

	/* -------------------- Logica de los botones de pantalla  -------------------- */
  // boton izquierda
  left_btn.addEventListener('mousedown touchstart', function(event) {
    launcher.direccion = 'left';
  });
	left_btn.addEventListener('mouseup', function(event) {
    launcher.direccion = '';
  });

	// boton derecha
  right_btn.addEventListener('mousedown', function(event) {
    launcher.direccion = 'right';
  });
  right_btn.addEventListener('mouseup', function(event) {
    launcher.direccion = '';
  });

  // boton pantalla de disparar balas
  fire_btn.addEventListener('mousedown', function(event) {
    launcher.misiles.push({x: launcher.x + launcher.w*.5, y: launcher.y, w: 3, h: 10});
  });
}

//cuando se inicia la página llama a la función canvas.
window.addEventListener('load', function(event) {
  initCanvas();
});
