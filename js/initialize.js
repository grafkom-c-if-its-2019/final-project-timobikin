var views, stats;
// buat papan pingpong dan desainnya diatas
function createPlayBottom() {
    var planeGeometry = new THREE.PlaneGeometry(10, 18, 10, 10);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0x006600 });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);

    var centerlineGeometry = new THREE.PlaneGeometry(9, 0.5, 10, 10);
    var centerlineMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var centerline = new THREE.Mesh(centerlineGeometry, centerlineMaterial);
    centerline.position.z = .02;
    scene.add(centerline);

    var centerCircleGeometry = new THREE.CircleGeometry(4.0, 50);
    var centerCircleMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var centerCircle = new THREE.Mesh(centerCircleGeometry, centerCircleMaterial);
    centerCircle.position.z = .01;
    scene.add(centerCircle);

    var centerCircleGeometry2 = new THREE.CircleGeometry(3.5, 50);
    var centerCircleMaterial2 = new THREE.MeshLambertMaterial({ color: 0x006600 });
    var centerCircle2 = new THREE.Mesh(centerCircleGeometry2, centerCircleMaterial2);
    centerCircle2.position.z = .015;
    scene.add(centerCircle2);
}
//buat tembok & panggung penonton
function createBoundingWalls() {
    var leftWall1 = new THREE.BoxGeometry(1, 18, 0.25);
    var wallMaterial = new THREE.MeshLambertMaterial({ color: 0xBBBBBB });
    var wall1 = new THREE.Mesh(leftWall1, wallMaterial);
    wall1.position.x = -5;
    wall1.position.z = 0.125;
    scene.add(wall1);

    var edges1 = new THREE.EdgesHelper(wall1, 0x5555555);
    scene.add(edges1);

    var leftWall1_2 = new THREE.BoxGeometry(0.75, 18, 0.25);
    var wallMaterial = new THREE.MeshLambertMaterial({ color: 0xBBBBBB });
    var wall1_2 = new THREE.Mesh(leftWall1_2, wallMaterial);
    wall1_2.position.x = -5.125;
    wall1_2.position.z = 0.375;
    scene.add(wall1_2);

    var edges1_2 = new THREE.EdgesHelper(wall1_2, 0x5555555);
    scene.add(edges1_2);

    var leftWall1_3 = new THREE.BoxGeometry(0.5, 18, 0.25);
    var wallMaterial = new THREE.MeshLambertMaterial({ color: 0xBBBBBB });
    var wall1_3 = new THREE.Mesh(leftWall1_3, wallMaterial);
    wall1_3.position.x = -5.25;
    wall1_3.position.z = 0.625;
    scene.add(wall1_3);

    var edges1_3 = new THREE.EdgesHelper(wall1_3, 0x5555555);
    scene.add(edges1_3);

    var leftWall1_4 = new THREE.BoxGeometry(0.25, 18, 0.25);
    var wallMaterial = new THREE.MeshLambertMaterial({ color: 0xBBBBBB });
    var wall1_4 = new THREE.Mesh(leftWall1_4, wallMaterial);
    wall1_4.position.x = -5.375;
    wall1_4.position.z = 0.875;
    scene.add(wall1_4);

    var edges1_4 = new THREE.EdgesHelper(wall1_4, 0x5555555);
    scene.add(edges1_4);

    var rightWall1 = new THREE.BoxGeometry(1, 18, 0.25);
    var wall2 = new THREE.Mesh(rightWall1, wallMaterial);
    wall2.position.x = 5;
    wall2.position.z = 0.125;
    scene.add(wall2);

    var edges2 = new THREE.EdgesHelper(wall2, 0x555555);
    scene.add(edges2);

    var rightWall2_2 = new THREE.BoxGeometry(0.75, 18, 0.25);
    var wallMaterial = new THREE.MeshLambertMaterial({ color: 0xBBBBBB });
    var wall2_2 = new THREE.Mesh(rightWall2_2, wallMaterial);
    wall2_2.position.x = 5.125;
    wall2_2.position.z = 0.375;
    scene.add(wall2_2);

    var edges2_2 = new THREE.EdgesHelper(wall2_2, 0x5555555);
    scene.add(edges2_2);

    var rightWall2_3 = new THREE.BoxGeometry(0.5, 18, 0.25);
    var wallMaterial = new THREE.MeshLambertMaterial({ color: 0xBBBBBB });
    var wall2_3 = new THREE.Mesh(rightWall2_3, wallMaterial);
    wall2_3.position.x = 5.25;
    wall2_3.position.z = 0.625;
    scene.add(wall2_3);

    var edges2_3 = new THREE.EdgesHelper(wall2_3, 0x5555555);
    scene.add(edges2_3);

    var rightWall2_4 = new THREE.BoxGeometry(0.25, 18, 0.25);
    var wallMaterial = new THREE.MeshLambertMaterial({ color: 0xBBBBBB });
    var wall2_4 = new THREE.Mesh(rightWall2_4, wallMaterial);
    wall2_4.position.x = 5.375;
    wall2_4.position.z = 0.875;
    scene.add(wall2_4);

    var edges2_4 = new THREE.EdgesHelper(wall2_4, 0x5555555);
    scene.add(edges2_4);
}
// buat blok p1 & p2
function createPaddles() {
    var opponentPaddle = new THREE.BoxGeometry(2, .5, 1);
    var oppMaterial = new THREE.MeshLambertMaterial({ color: 0x000066 });
    paddle2 = new THREE.Mesh(opponentPaddle, oppMaterial);
    paddle2.position.y = 9;
    paddle2.position.z = 0.5;
    scene.add(paddle2);

    var edges2 = new THREE.EdgesHelper(paddle2, 0x000000);
    scene.add(edges2);

    var playerPaddle = new THREE.BoxGeometry(2, .5, 1);
    var plMaterial = new THREE.MeshLambertMaterial({ color: 0x660000 });
    paddle1 = new THREE.Mesh(playerPaddle, plMaterial);
    paddle1.position.y = -9;
    paddle1.position.z = 0.5;
    scene.add(paddle1);

    var edges1 = new THREE.EdgesHelper(paddle1, 0x000000);
    scene.add(edges1);
}
// buat bola pong
function createBall() {
    var ballSphere = new THREE.SphereGeometry(0.3, 50);
    var ballMaterial = new THREE.MeshLambertMaterial({ color: 0xFFB6C1 });
    ball = new THREE.Mesh(ballSphere, ballMaterial);
    ball.position.z = 0.5;
    scene.add(ball);
}
// load efek suara
function loadSounds() {
    applause1 = new Audio('assets/applause1.mp3');
    applause2 = new Audio('assets/applause2.mp3');
    applause3 = new Audio('assets/applause3.mp3');
    one = new Audio('assets/1.mp3');
    two = new Audio('assets/2.mp3');
    three = new Audio('assets/3.mp3');
    four = new Audio('assets/4.mp3');
}
// buat papan pong
function createScoreBoard() {
    var planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xDDDDDD });
    var scoreBoard1 = new THREE.Mesh(planeGeometry, planeMaterial);
    scoreBoard1.position.x = -8;
    scoreBoard1.position.y = 6;
    scoreBoard1.position.z = 1;
    scoreBoard1.rotation.x = 25 * Math.PI / 180;
    scene.add(scoreBoard1);

    var planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xDDDDDD });
    var scoreBoard2 = new THREE.Mesh(planeGeometry, planeMaterial);
    scoreBoard2.position.x = 8;
    scoreBoard2.position.y = 6;
    scoreBoard2.position.z = 1;
    scoreBoard2.rotation.x = 25 * Math.PI / 180;
    scene.add(scoreBoard2);

    var textGeometry1 = new THREE.TextGeometry("Player Score",
        {
            size: 0.4,
            height: 0.2,
            curveSegments: 10,
            bevelEnabled: false
        });
    var textMaterial1 = new THREE.MeshLambertMaterial({ color: 0xFF0022 });
    var scoreLabel1 = new THREE.Mesh(textGeometry1, textMaterial1);
    scoreLabel1.position.x = -9.5;
    scoreLabel1.position.y = 7.5;
    scoreLabel1.position.z = 1.8;
    scoreLabel1.rotation.x = 45 * Math.PI / 180;
    scene.add(scoreLabel1);

    var textGeometry2 = new THREE.TextGeometry("Computer Score",
        {
            size: 0.4,
            height: 0.2,
            curveSegments: 10,
            bevelEnabled: false
        });
    var textMaterial2 = new THREE.MeshLambertMaterial({ color: 0x0022FF });
    var scoreLabel2 = new THREE.Mesh(textGeometry2, textMaterial2);
    scoreLabel2.position.x = 6;
    scoreLabel2.position.y = 7.5;
    scoreLabel2.position.z = 1.8;
    scoreLabel2.rotation.x = 45 * Math.PI / 180;
    scene.add(scoreLabel2);
}
// buat penonton
function createCrowd() {
    var yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
    var lavenderMaterial = new THREE.MeshLambertMaterial({ color: 0xFF00FF });
    var cyanMaterial = new THREE.MeshLambertMaterial({ color: 0x00FFFF });
    var blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000FF });
    var greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00FF00 });
    var redMaterial = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    var blackMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var whiteMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var orangeMaterial = new THREE.MeshLambertMaterial({ color: 0xFF6600 });
    var purpleMaterial = new THREE.MeshLambertMaterial({ color: 0x4B0082 });

    var boxGeometry = new THREE.BoxGeometry(0.25, 0.25, 0.25);

    var num1rowRightx = 4.625;
    var num2rowRightx = 4.875;
    var num3rowRightx = 5.125;
    var num4rowRightx = 5.375;
    var num1rowLeftx = -4.625;
    var num2rowLeftx = -4.875;
    var num3rowLeftx = -5.125;
    var num4rowLeftx = -5.375

    var num1rowz = 0.375;
    var num2rowz = 0.625;
    var num3rowz = 0.875;
    var num4rowz = 1.125;

    spectator01 = new THREE.Mesh(boxGeometry, redMaterial);
    spectator01.position.x = num3rowRightx;
    spectator01.position.y = -7;
    spectator01.position.z = num3rowz;
    scene.add(spectator01);

    spectator02 = new THREE.Mesh(boxGeometry, greenMaterial);
    spectator02.position.x = num4rowRightx;
    spectator02.position.y = 7;
    spectator02.position.z = num4rowz;
    scene.add(spectator02);

    spectator03 = new THREE.Mesh(boxGeometry, purpleMaterial);
    spectator03.position.x = num2rowRightx;
    spectator03.position.y = 2;
    spectator03.position.z = num2rowz;
    scene.add(spectator03);

    spectator04 = new THREE.Mesh(boxGeometry, cyanMaterial);
    spectator04.position.x = num1rowRightx;
    spectator04.position.y = -5;
    spectator04.position.z = num1rowz;
    scene.add(spectator04);

    spectator05 = new THREE.Mesh(boxGeometry, cyanMaterial);
    spectator05.position.x = num2rowRightx;
    spectator05.position.y = 5;
    spectator05.position.z = num2rowz;
    scene.add(spectator05);

    spectator06 = new THREE.Mesh(boxGeometry, yellowMaterial);
    spectator06.position.x = num1rowRightx;
    spectator06.position.y = 0;
    spectator06.position.z = num1rowz;
    scene.add(spectator06);

    spectator07 = new THREE.Mesh(boxGeometry, yellowMaterial);
    spectator07.position.x = num2rowRightx;
    spectator07.position.y = -2;
    spectator07.position.z = num2rowz;
    scene.add(spectator07);

    spectator08 = new THREE.Mesh(boxGeometry, lavenderMaterial);
    spectator08.position.x = num1rowRightx;
    spectator08.position.y = -3;
    spectator08.position.z = num1rowz;
    scene.add(spectator08);

    spectator09 = new THREE.Mesh(boxGeometry, blueMaterial);
    spectator09.position.x = num4rowRightx;
    spectator09.position.y = -8;
    spectator09.position.z = num4rowz;
    scene.add(spectator09);

    spectator10 = new THREE.Mesh(boxGeometry, purpleMaterial);
    spectator10.position.x = num3rowRightx;
    spectator10.position.y = -4.5;
    spectator10.position.z = num3rowz;
    scene.add(spectator10);

    spectator11 = new THREE.Mesh(boxGeometry, blackMaterial);
    spectator11.position.x = num3rowRightx;
    spectator11.position.y = -7.5;
    spectator11.position.z = num3rowz;
    scene.add(spectator11);

    spectator12 = new THREE.Mesh(boxGeometry, whiteMaterial);
    spectator12.position.x = num3rowRightx;
    spectator12.position.y = 7.5;
    spectator12.position.z = num3rowz;
    scene.add(spectator12);

    spectator13 = new THREE.Mesh(boxGeometry, blueMaterial);
    spectator13.position.x = num2rowRightx;
    spectator13.position.y = 2.5;
    spectator13.position.z = num2rowz;
    scene.add(spectator13);

    spectator14 = new THREE.Mesh(boxGeometry, yellowMaterial);
    spectator14.position.x = num1rowRightx;
    spectator14.position.y = -5.5;
    spectator14.position.z = num1rowz;
    scene.add(spectator14);

    spectator15 = new THREE.Mesh(boxGeometry, orangeMaterial);
    spectator15.position.x = num1rowRightx;
    spectator15.position.y = 5.5;
    spectator15.position.z = num1rowz;
    scene.add(spectator15);

    spectator16 = new THREE.Mesh(boxGeometry, blackMaterial);
    spectator16.position.x = num4rowRightx;
    spectator16.position.y = 0.5;
    spectator16.position.z = num4rowz;
    scene.add(spectator16);

    spectator17 = new THREE.Mesh(boxGeometry, whiteMaterial);
    spectator17.position.x = num2rowRightx;
    spectator17.position.y = -2.5;
    spectator17.position.z = num2rowz;
    scene.add(spectator17);

    spectator18 = new THREE.Mesh(boxGeometry, lavenderMaterial);
    spectator18.position.x = num1rowRightx;
    spectator18.position.y = -6;
    spectator18.position.z = num1rowz;
    scene.add(spectator18);

    spectator19 = new THREE.Mesh(boxGeometry, blueMaterial);
    spectator19.position.x = num4rowRightx;
    spectator19.position.y = -1;
    spectator19.position.z = num4rowz;
    scene.add(spectator19);

    spectator20 = new THREE.Mesh(boxGeometry, lavenderMaterial);
    spectator20.position.x = num3rowRightx;
    spectator20.position.y = 6.5;
    spectator20.position.z = num3rowz;
    scene.add(spectator20);

    spectator21 = new THREE.Mesh(boxGeometry, greenMaterial);
    spectator21.position.x = num1rowLeftx;
    spectator21.position.y = -7;
    spectator21.position.z = num1rowz;
    scene.add(spectator21);

    spectator22 = new THREE.Mesh(boxGeometry, purpleMaterial);
    spectator22.position.x = num2rowLeftx;
    spectator22.position.y = 7;
    spectator22.position.z = num2rowz;
    scene.add(spectator22);

    spectator23 = new THREE.Mesh(boxGeometry, cyanMaterial);
    spectator23.position.x = num4rowLeftx;
    spectator23.position.y = 2;
    spectator23.position.z = num4rowz;
    scene.add(spectator23);

    spectator24 = new THREE.Mesh(boxGeometry, cyanMaterial);
    spectator24.position.x = num3rowLeftx;
    spectator24.position.y = -5;
    spectator24.position.z = num3rowz;
    scene.add(spectator24);

    spectator25 = new THREE.Mesh(boxGeometry, yellowMaterial);
    spectator25.position.x = num4rowLeftx;
    spectator25.position.y = 5;
    spectator25.position.z = num4rowz;
    scene.add(spectator25);

    spectator26 = new THREE.Mesh(boxGeometry, yellowMaterial);
    spectator26.position.x = num3rowLeftx;
    spectator26.position.y = 0;
    spectator26.position.z = num3rowz;
    scene.add(spectator26);

    spectator27 = new THREE.Mesh(boxGeometry, greenMaterial);
    spectator27.position.x = num4rowLeftx;
    spectator27.position.y = -2;
    spectator27.position.z = num4rowz;
    scene.add(spectator27);

    spectator28 = new THREE.Mesh(boxGeometry, blueMaterial);
    spectator28.position.x = num3rowLeftx;
    spectator28.position.y = -3;
    spectator28.position.z = num3rowz;
    scene.add(spectator28);

    spectator29 = new THREE.Mesh(boxGeometry, purpleMaterial);
    spectator29.position.x = num2rowLeftx;
    spectator29.position.y = -8;
    spectator29.position.z = num2rowz;
    scene.add(spectator29);

    spectator30 = new THREE.Mesh(boxGeometry, blackMaterial);
    spectator30.position.x = num1rowLeftx;
    spectator30.position.y = -4.5;
    spectator30.position.z = num1rowz;
    scene.add(spectator30);

    spectator31 = new THREE.Mesh(boxGeometry, whiteMaterial);
    spectator31.position.x = num1rowLeftx;
    spectator31.position.y = -7.5;
    spectator31.position.z = num1rowz;
    scene.add(spectator31);

    spectator32 = new THREE.Mesh(boxGeometry, blueMaterial);
    spectator32.position.x = num1rowLeftx;
    spectator32.position.y = 7.5;
    spectator32.position.z = num1rowz;
    scene.add(spectator32);

    spectator33 = new THREE.Mesh(boxGeometry, yellowMaterial);
    spectator33.position.x = num4rowLeftx;
    spectator33.position.y = 2.5;
    spectator33.position.z = num4rowz;
    scene.add(spectator33);

    spectator34 = new THREE.Mesh(boxGeometry, orangeMaterial);
    spectator34.position.x = num3rowLeftx;
    spectator34.position.y = -5.5;
    spectator34.position.z = num3rowz;
    scene.add(spectator34);

    spectator35 = new THREE.Mesh(boxGeometry, blackMaterial);
    spectator35.position.x = num3rowLeftx;
    spectator35.position.y = 5.5;
    spectator35.position.z = num3rowz;
    scene.add(spectator35);

    spectator36 = new THREE.Mesh(boxGeometry, whiteMaterial);
    spectator36.position.x = num2rowLeftx;
    spectator36.position.y = 0.5;
    spectator36.position.z = num2rowz;
    scene.add(spectator36);

    spectator37 = new THREE.Mesh(boxGeometry, lavenderMaterial);
    spectator37.position.x = num4rowLeftx;
    spectator37.position.y = -2.5;
    spectator37.position.z = num4rowz;
    scene.add(spectator37);

    spectator38 = new THREE.Mesh(boxGeometry, blueMaterial);
    spectator38.position.x = num3rowLeftx;
    spectator38.position.y = -6;
    spectator38.position.z = num3rowz;
    scene.add(spectator38);

    spectator39 = new THREE.Mesh(boxGeometry, redMaterial);
    spectator39.position.x = num2rowLeftx;
    spectator39.position.y = -1;
    spectator39.position.z = num2rowz;
    scene.add(spectator39);

    spectator40 = new THREE.Mesh(boxGeometry, redMaterial);
    spectator40.position.x = num1rowLeftx;
    spectator40.position.y = 6.5;
    spectator40.position.z = num1rowz;
    scene.add(spectator40);
}
function onDocumentMouseDown(event) {
    event.preventDefault();
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
}
function onDocumentMouseMove(event) {
    var mouseXBefore = mouseX;
    mouseX = event.clientX + (WIDTH / 2);
    var posOrNeg = (mouseX > mouseXBefore) ? 1 : -1;
    if (!(paddle1.position.x <= -3.5) && !(paddle1.position.x >= 3.5)) {
        paddle1.position.x += (PLAYERSPEED * posOrNeg);
    }
    else if (paddle1.position.x <= -3.5) {
        paddle1.position.x = -3.49;
    }
    else if (paddle1.position.x >= 3.5) {
        paddle1.position.x = 3.49;
    }
}
function onDocumentMouseUp(event) {
    document.removeEventListener('mousemove', onDocumentMouseMove, false);
    document.removeEventListener('mouseup', onDocumentMouseUp, false);
}
function onDocumentTouchStart(event) {
    if (event.touches.length === 1) {
        event.preventDefault();
    }
}
function onDocumentTouchMove(event) {
    var mouseXBefore = mouseX;
    if (event.touches.length === 1 && !(paddle1.position.x <= -3.5) && !(paddle1.position.x >= 3.5)) {
        event.preventDefault();
        mouseX = event.touches[0].pageX;
        var posOrNeg = (mouseX > mouseXBefore) ? 1 : -1;
        paddle1.position.x += (PLAYERSPEED * posOrNeg);
    }
    else if (event.touches.length === 1 && paddle1.position.x <= -3.5) {
        paddle1.position.x = -3.49;
    }
    else if (event.touches.length === 1 && paddle1.position.x >= 3.5) {
        paddle1.position.x = 3.49;
    }
}
// init scene
function init() {
    WIDTH = (window.innerWidth) * 0.97;
    HEIGHT = window.innerHeight;

    loadSounds();

    scene = new THREE.Scene();

    // camera = new THREE.PerspectiveCamera( 35, WIDTH / HEIGHT, 5, 100 );
    // camera.position.x = 0; //0
    // camera.position.y = -25; //-25
    // camera.position.z = 10; //10
    // camera.lookAt( scene.position );

    camera = new THREE.PerspectiveCamera(35, WIDTH / HEIGHT, 5, 100);
    camera.position.set(0, -25, 10);
    // camera.position.x = 0;
    // camera.position.y = -25;
    // camera.position.z = 10;
    camera.lookAt(scene.position);

    topCamera = new THREE.PerspectiveCamera(35, WIDTH / HEIGHT, 5, 100);
    topCamera.position.set(0, 25, 10);
    // topCamera.position.x = 0;
    // topCamera.position.y = 25;
    // topCamera.position.z = 10;
    // topCamera.rotation.y = 180 * (Math.PI / 180);
    // topCamera.rotateOnAxis(180 * Math.PI / 180);
    // topCamera.lookAt (scene.position);
    topCamera.up = new THREE.Vector3(0, 0, 1);
    topCamera.lookAt(new THREE.Vector3(0, 0, 0));


    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMapEnabled = true;


    // buat papan pong bagian bawah
    createPlayBottom();

    // buat dinding papan
    createBoundingWalls();

    // buat blok pemain
    createPaddles();

    // buat bola
    createBall();

    // buat papan skor
    createScoreBoard();

    // tambah spotlight untuk bayangan
    var dirLight = new THREE.DirectionalLight(0xFFFFFF);
    dirLight.position.set(0, -40, 30);
    dirLight.shadowCameraNear = 20;
    dirLight.shadowCameraFar = 50;
    dirLight.castShadow = true;
    dirLight.intensity = 1.5;
    scene.add(dirLight);

    var dirLight2 = new THREE.DirectionalLight(0xFFFFFF);
    dirLight2.position.set(0, 40, 30);
    dirLight2.shadowCameraNear = 20;
    dirLight2.shadowCameraFar = 50;
    dirLight2.castShadow = true;
    dirLight2.intensity = 1.5;
    scene.add(dirLight2);

    document.body.appendChild(renderer.domElement);

    p1ScoreOld = p1Score;
    p2ScoreOld = p2Score;

    updateScore();
    createCrowd();

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    render();
}