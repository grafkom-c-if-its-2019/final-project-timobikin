var renderer;				// Objek yang auto-update
var scene;					// Objek three.js
var camera;
var WIDTH;					// lebar layar
var HEIGHT;					// tinggi layar
var COMPSPEED = 0.15;		// player 2
var PLAYERSPEED = 0.15;		// player 1
var BALLSPEED = 0.22;		// bola 
var xDir = 0.03;			// arah x bola
var yDir = BALLSPEED;		// arah y bola
var scoreObject1;			// skor player 1
var scoreObject1A;			// skor player 1
var scoreObject2;			// skor player 2
var scoreObject2A;			// skor player 2
var p1Score = "00";			// skor baru p1
var p2Score = "00";			// skor baru p2
var p1ScoreOld;				// skor lama p1
var p2ScoreOld;				// skor lama p2
var crowdCounter = 0;		// kekc
var spectator01;			// spectator
var spectator02;			// spektator
var spectator03;			// spektator
var spectator04;			// spektator
var spectator05;			// spektator
var spectator06;			// spektator
var spectator07;			// spektator
var spectator08;			// spektator
var spectator09;			// spektator
var spectator10; 			// spektator
var spectator11;			// spektator
var spectator12;			// spektator
var spectator13;			// spektator
var spectator14;			// spektator
var spectator15;			// spektator
var spectator16;			// spektator
var spectator17;			// spektator
var spectator18;			// spektator
var spectator19;			// spektator
var spectator20;			// spektator
var spectator21;			// spektator
var spectator22;			// spektator
var spectator23;			// spektator
var spectator24;			// spektator
var spectator25; 			// spektator
var spectator26;			// spektator
var spectator27;			// spektator
var spectator28;			// spektator
var spectator29;			// spektator
var spectator30; 			// spektator
var spectator31;			// spektator
var spectator32;			// spektator
var spectator33;			// spektator
var spectator34;			// spektator
var spectator35;			// spektator
var spectator36;			// spektator
var spectator37;			// spektator
var spectator38;			// spektator
var spectator39;			// spektator
var spectator40;			// spektator
var spectatorFlag = [0];	// posisi original spektator
var paddle1;				// blok p1
var paddle2;				// blok p2
var ball;					// bola
var applause1;				// suara efek penonton
var applause2;				// suara efek penonton
var applause3;				// suara efek penonton
var one;					// suara efek pantulan bola p1
var two;					// suara efek pantulan bola p2
var three;					// suara efek bola nabrak tembok kiri
var four;					// suara efek bola nabrak tembok kanan
var mouseX = 0;				// gerak blok