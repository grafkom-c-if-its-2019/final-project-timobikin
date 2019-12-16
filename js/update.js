// gerakin bola & blok pemain, skor
function moveBallAndMaintainPaddles() {

    ball.position.x += xDir;
    ball.position.y += yDir;

    if (Key.isDown(Key.LEFT)) {
        if (!(paddle1.position.x <= -3.5)) {
            paddle1.position.x -= PLAYERSPEED;
        }
    }
    else if (Key.isDown(Key.RIGHT)) {
        if (!(paddle1.position.x >= 3.5)) {
            paddle1.position.x += PLAYERSPEED;
        }
    }

    if (Key.isDown(Key.D)) {
        if (!(paddle2.position.x <= -3.5)) {
            paddle2.position.x -= COMPSPEED;
        }
    }
    else if (Key.isDown(Key.A)) {
        if (!(paddle2.position.x >= 3.5)) {
            paddle2.position.x += COMPSPEED;
        }
    }
//camera
    if (Key.isDown(Key.D)) {
        if (!(topCamera.position.x <= -3.5)) {
            topCamera.position.x -= CAMSPEED;
        }
    }
    else if (Key.isDown(Key.A)) {
        if (!(topCamera.position.x >= 3.5)) {
            topCamera.position.x += CAMSPEED;
        }
    }

    if (Key.isDown(Key.LEFT)) {
        if (!(camera.position.x <= -3.5)) {
            camera.position.x -= CAMSPEED;
        }
    }
    else if (Key.isDown(Key.RIGHT)) {
        if (!(camera.position.x >= 3.5)) {
            camera.position.x += CAMSPEED;
        }
    }
//end camera
    if (ball.position.x <= -4) {
        ball.position.x = -3.9;
        xDir = -xDir;
        three.play();
    }
    else if (ball.position.x >= 4) {
        ball.position.x = 3.9;
        xDir = -xDir;
        four.play();
    }
    var paddleCollisionDetect = Math.abs(paddle2.position.x - ball.position.x);
    if (ball.position.y < -8.5 && yDir < 0) {
        yDir = BALLSPEED;
        BALLSPEED+=0.01
        // console.log(BALLSPEED);

        var paddleCollisionDetect = Math.abs(paddle1.position.x - ball.position.x);
        if (paddleCollisionDetect <= 1.45) {
            if (paddleCollisionDetect >= 0.9) {
                if (paddle1.position.x < ball.position.x) {
                    xDir = Math.abs(5 * xDir);
                    xDir = (xDir >= 0.1) ? 0.1 : 0.08;
                }
                else {
                    xDir = -Math.abs(5 * xDir);
                    xDir = (xDir <= -0.1) ? -0.1 : -0.08;
                }
            }
            else if (paddleCollisionDetect >= 0.4) {
                if (paddle1.position.x < ball.position.x) {
                    xDir = Math.abs(3 * xDir);
                    xDir = (xDir >= 0.05) ? 0.05 : 0.03;
                }
                else {
                    xDir = -Math.abs(3 * xDir);
                    xDir = (xDir <= -0.05) ? -0.05 : -0.03;
                }
            }
            else {
                if (paddle1.position.x < ball.position.x) {
                    xDir = Math.abs(0.8 * xDir);
                }
                else {
                    xDir = -Math.abs(0.8 * xDir);
                }
            }
            one.play();
        }
        else {
            ball.position.x = paddle1.position.x;
            ball.position.y = -8;
            p2Score++;
            var applause = Math.floor((Math.random() * 3) + 1);
            // <!-- Sound FX provided by SoundBible.com and were not altered. -->
            switch (applause) {
                case 1:
                    {
                        applause1.volume = 0.2;                        
                        applause1.play();
                        break;
                    }
                case 2:
                    {
                        applause2.volume = 0.2;
                        applause2.play();
                        break;
                    }
                default:
                    {
                        applause3.volume = 0.2;
                        applause3.play();
                    }
            }
        }
    }
    else if (ball.position.y > 8.5 && yDir > 0) {
        yDir = -BALLSPEED;

        if (paddleCollisionDetect <= 1.45) {
            if (paddleCollisionDetect >= 0.9) {
                if (paddle2.position.x < ball.position.x) {
                    xDir = Math.abs(5 * xDir);
                    xDir = (xDir >= 0.1) ? 0.1 : 0.08;
                }
                else {
                    xDir = -Math.abs(5 * xDir);
                    xDir = (xDir <= -0.1) ? -0.1 : -0.08;
                }
            }
            else if (paddleCollisionDetect >= 0.4) {
                if (paddle2.position.x < ball.position.x) {
                    xDir = Math.abs(3 * xDir);
                    xDir = (xDir >= 0.05) ? 0.05 : 0.03;
                }
                else {
                    xDir = -Math.abs(3 * xDir);
                    xDir = (xDir <= -0.05) ? -0.05 : -0.03;
                }
            }
            else {
                if (paddle2.position.x < ball.position.x) {
                    xDir = Math.abs(0.8 * xDir);
                }
                else {
                    xDir = -Math.abs(0.8 * xDir);
                }
            }
            two.play();
        }
        else {
            ball.position.x = paddle2.position.x;
            ball.position.y = 8;
            p1Score++;
            // PLAYERSPEED -= 0.002;
            var applause = Math.floor((Math.random() * 3) + 1);
            // <!-- Sound FX provided by SoundBible.com and were not altered. -->
            switch (applause) {
                case 1:
                    {
                        applause1.volume = 0.2;
                        applause1.play();
                        break;
                    }
                case 2:
                    {
                        applause2.volume = 0.2;
                        applause2.play();
                        break;
                    }
                default:
                    {
                        applause3.volume = 0.2;
                        applause3.play();
                    }
            }
        }
    }
    // if ( paddleCollisionDetect < COMPSPEED )
    // {
    // 	paddle2.position.x = ball.position.x;
    // }
    // else if( (paddle2.position.x < ball.position.x) )
    // {
    // 	if( !(paddle2.position.x >= 3.5) )
    // 	{
    // 		paddle2.position.x += COMPSPEED;
    // 	}
    // }
    // else
    // {	
    // 	if( !(paddle2.position.x <= -3.5) )
    // 	{
    // 		paddle2.position.x -= COMPSPEED;
    // 	}
    // }
}


// Creates both scores, updating only when a score changes.
function updateScore() {
    scene.remove(scoreObject1);
    scene.remove(scoreObject1A);
    scene.remove(scoreObject2);
    scene.remove(scoreObject2A);

    if (p1Score > 0 && p1Score < 10) {
        p1Score = "0" + Number(p1Score);
    }
    if (p2Score > 0 && p2Score < 10) {
        p2Score = "0" + Number(p2Score);
    }

    var scoreObjectGeometry1 = new THREE.TextGeometry(p1Score,
        {
            size: 2,
            height: 0.4,
            curveSegments: 10,
            bevelEnabled: false
        });
    var scoreObjectMaterial1 = new THREE.MeshLambertMaterial({ color: 0xFF0022 });
    scoreObject1 = new THREE.Mesh(scoreObjectGeometry1, scoreObjectMaterial1);
    scoreObject1.position.x = -4.5;
    scoreObject1.position.y = 23;
    scoreObject1.position.z = 2.5;
    scoreObject1.rotation.x = 60 * Math.PI / 180;
    scene.add(scoreObject1);

    scoreObject1A = new THREE.Mesh(scoreObjectGeometry1, scoreObjectMaterial1);
    scoreObject1A.position.x = -1.5;
    scoreObject1A.position.y = -23;
    scoreObject1A.position.z = 2.5;
    scoreObject1A.rotation.x = 120 * Math.PI / 180;
    scoreObject1A.rotation.y = 180 * Math.PI/180;
    scene.add(scoreObject1A);

    var scoreObjectGeometry2 = new THREE.TextGeometry(p2Score,
        {
            size: 2,
            height: 0.4,
            curveSegments: 10,
            bevelEnabled: false
        });
    var scoreObjectMaterial2 = new THREE.MeshLambertMaterial({ color: 0x0022FF });
    scoreObject2 = new THREE.Mesh(scoreObjectGeometry2, scoreObjectMaterial2);
    scoreObject2.position.x = 4.5;
    scoreObject2.position.y = -23;
    scoreObject2.position.z = 2.5;
    scoreObject2.rotation.x = 120 * Math.PI / 180;
    scoreObject2.rotation.y = 180 * Math.PI/180;
    scene.add(scoreObject2);

    scoreObject2A = new THREE.Mesh(scoreObjectGeometry2, scoreObjectMaterial2);
    scoreObject2A.position.x = 1.5;
    scoreObject2A.position.y = 23;
    scoreObject2A.position.z = 2.5;
    scoreObject2A.rotation.x = 60 * Math.PI / 180;
    scene.add(scoreObject2A);

    if (p1Score == 10 || p2Score == 10) {
        ball.position.x = 0;
        ball.position.y = 0;
        BALLSPEED = 0;
        yDir = 0
        xDir = 0;
        location.replace("gameover.html");
    }
}
// Udates the crowd. Normal speedsimulates random movement. Fast speed for point scored.
function updateCrowd() {
    var spectatorChosen = Math.floor((Math.random() * 10) + 1);

    switch (spectatorChosen) {
        case 1:
            {
                if (spectatorFlag[0] == 0) {
                    spectator01.position.z += 0.1;
                    spectator05.position.z += 0.1;
                    spectator09.position.z += 0.1;
                    spectator13.position.z += 0.1;
                    spectatorFlag[0] = 1;
                }
                else {
                    spectator01.position.z -= 0.1;
                    spectator05.position.z -= 0.1;
                    spectator09.position.z -= 0.1;
                    spectator13.position.z -= 0.1;
                    spectatorFlag[0] = 0;
                }
            }
        case 2:
            {
                if (spectatorFlag[1] == 0) {
                    spectator02.position.z += 0.115;
                    spectator06.position.z += 0.115;
                    spectator10.position.z += 0.115;
                    spectator14.position.z += 0.115;
                    spectatorFlag[1] = 1;
                }
                else {
                    spectator02.position.z -= 0.115;
                    spectator06.position.z -= 0.115;
                    spectator10.position.z -= 0.115;
                    spectator14.position.z -= 0.115;
                    spectatorFlag[1] = 0;
                }
            }
        case 3:
            {
                if (spectatorFlag[2] == 0) {
                    spectator03.position.z += 0.09;
                    spectator07.position.z += 0.09;
                    spectator11.position.z += 0.09;
                    spectator15.position.z += 0.09;
                    spectatorFlag[2] = 1;
                }
                else {
                    spectator03.position.z -= 0.09;
                    spectator07.position.z -= 0.09;
                    spectator11.position.z -= 0.09;
                    spectator15.position.z -= 0.09;
                    spectatorFlag[2] = 0;
                }
            }
        case 4:
            {
                if (spectatorFlag[3] == 0) {
                    spectator04.position.z += 0.08;
                    spectator08.position.z += 0.08;
                    spectator12.position.z += 0.08;
                    spectator16.position.z += 0.08;
                    spectatorFlag[3] = 1;
                }
                else {
                    spectator04.position.z -= 0.08;
                    spectator08.position.z -= 0.08;
                    spectator12.position.z -= 0.08;
                    spectator16.position.z -= 0.08;
                    spectatorFlag[3] = 0;
                }
            }
        case 5:
            {
                if (spectatorFlag[4] == 0) {
                    spectator17.position.z += 0.125;
                    spectator18.position.z += 0.125;
                    spectator19.position.z += 0.125;
                    spectator20.position.z += 0.125;
                    spectatorFlag[4] = 1;
                }
                else {
                    spectator17.position.z -= 0.125;
                    spectator18.position.z -= 0.125;
                    spectator19.position.z -= 0.125;
                    spectator20.position.z -= 0.125;
                    spectatorFlag[4] = 0;
                }
            }
        case 6:
            {
                if (spectatorFlag[5] == 0) {
                    spectator37.position.z += 0.1;
                    spectator25.position.z += 0.1;
                    spectator29.position.z += 0.1;
                    spectator33.position.z += 0.1;
                    spectatorFlag[5] = 1;
                }
                else {
                    spectator37.position.z -= 0.1;
                    spectator25.position.z -= 0.1;
                    spectator29.position.z -= 0.1;
                    spectator33.position.z -= 0.1;
                    spectatorFlag[5] = 0;
                }
            }
        case 7:
            {
                if (spectatorFlag[6] == 0) {
                    spectator22.position.z += 0.115;
                    spectator38.position.z += 0.115;
                    spectator30.position.z += 0.115;
                    spectator34.position.z += 0.115;
                    spectatorFlag[6] = 1;
                }
                else {
                    spectator22.position.z -= 0.115;
                    spectator38.position.z -= 0.115;
                    spectator30.position.z -= 0.115;
                    spectator34.position.z -= 0.115;
                    spectatorFlag[6] = 0;
                }
            }
        case 8:
            {
                if (spectatorFlag[7] == 0) {
                    spectator23.position.z += 0.09;
                    spectator27.position.z += 0.09;
                    spectator40.position.z += 0.09;
                    spectator35.position.z += 0.125;
                    spectatorFlag[7] = 1;
                }
                else {
                    spectator23.position.z -= 0.09;
                    spectator27.position.z -= 0.09;
                    spectator40.position.z -= 0.09;
                    spectator35.position.z -= 0.09;
                    spectatorFlag[7] = 0;
                }
            }
        case 9:
            {
                if (spectatorFlag[8] == 0) {
                    spectator24.position.z += 0.08;
                    spectator28.position.z += 0.08;
                    spectator32.position.z += 0.08;
                    spectator36.position.z += 0.08;
                    spectatorFlag[8] = 1;
                }
                else {
                    spectator24.position.z -= 0.08;
                    spectator28.position.z -= 0.08;
                    spectator32.position.z -= 0.08;
                    spectator36.position.z -= 0.08;
                    spectatorFlag[8] = 0;
                }
            }
        case 10:
            {
                if (spectatorFlag[9] == 0) {
                    spectator21.position.z += 0.125;
                    spectator26.position.z += 0.125;
                    spectator39.position.z += 0.125;
                    spectator31.position.z += 0.125;
                    spectatorFlag[9] = 1;
                }
                else {
                    spectator21.position.z -= 0.125;
                    spectator26.position.z -= 0.125;
                    spectator39.position.z -= 0.125;
                    spectator31.position.z -= 0.125;
                    spectatorFlag[9] = 0;
                }
            }
    }
}

function reset() {
    this._pressed[37] = false;
    this._pressed[39] = false;
    this._pressed[65] = false;
    this._pressed[68] = false;
}

// var angle = 0
// 	radius = 10;
var pause=0;
var flag=0;
// Render loop continuously updates screen at 60 FPS
function render() {

    // console.log(pause,flag);
    
    
    if (crowdCounter % 10 == 0) {
        updateCrowd();
    }

    if (p1ScoreOld < 10 && p2ScoreOld < 10) {
        // console.log(BALLSPEED);

        if(Key.isDown(Key.ENTER)){
            if(pause==0)
            {
                pause=1;
                alert("Paused");
                requestAnimationFrame(render);    
            }
            else{
                requestAnimationFrame(render);
            }

        }
        else{
            pause=0;
            requestAnimationFrame(render);
        }

        bg.loop = true;
        bg.volume = 0.3;
        bg.play();
        moveBallAndMaintainPaddles();
        if (p1Score != p1ScoreOld) {
            updateScore();
            updateCrowd();
            BALLSPEED = 0.22;		// bola 
            // alert("Player 1 scored !! Press any key to continue");
        }
        else if (p2Score != p2ScoreOld) {
            updateScore();
            updateCrowd();
            BALLSPEED = 0.22;		// bola 
            // alert("Player 2 scored !! Press any key to continue");
            // reset();
        }

        renderer.render(scene, camera);
        p1ScoreOld = p1Score;
        p2ScoreOld = p2Score;
        crowdCounter++;
    }
    else {
        bg.loop = false;
        bg.pause();
    }
    var SCREEN_W, SCREEN_H;
    SCREEN_W = window.innerWidth;
    SCREEN_H = window.innerHeight;

    var left, bottom, width, height;

    left = 1; bottom = 1; width = 0.5 * SCREEN_W - 2; height = SCREEN_H - 2;
    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);
    renderer.enableScissorTest(true);
    topCamera.aspect = width / height;
    topCamera.updateProjectionMatrix();
    renderer.render(scene, topCamera);

    left = 0.5 * SCREEN_W + 1; bottom = 1; width = 0.5 * SCREEN_W - 2; height = SCREEN_H - 2;
    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);
    renderer.enableScissorTest(true);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
}
