let cWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
let cHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);


let btp1;
let btp2;
let btc;
let switcher = false;
let devices = [];

function preload() {
    btp1 = new BTPeripheral(1, 'red', 'http://127.0.0.1/music/Piano Man.mp4');
    btp2 = new BTPeripheral(2, 'green', 'http://127.0.0.1/music/We Didnt Start the Fire.mp4');
    btc = new BTCentral(1, 100, 40, createAudio());
}

function setup() {
    createCanvas(cWidth, cHeight);
    devices.push(btp1);
    devices.push(btp2);
    devices.push(btc);
}

function mousePressed() {
    btp1.turnOnOff();
    btp2.turnOnOff();
    btc.turnOnOff();

}

function draw() {
    background(255);
    frameRate(100);
    btp1.connect(devices);
    btp2.connect(devices);
    for (let device of devices) {
        device.show();
    }
}