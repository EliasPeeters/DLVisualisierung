let innerCircleRadius = 250;

let centerX = 400;
let centerY = 400;
let outerCircleRadius = 150;

var shopsListCords = [];
var dlListCords = [];

var shopsRadius = 35;
var dlRadius = 25;

var canvasTop = 10000;
var canvasLeft = 20;

var ottoLogoSize = 100;
var shadowRadius = 5;

var moveX = 0;
var moveY = 0;



function calculateSize() {

    let size = window.innerHeight - 100 ;
    let canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';

    ctx.canvas.height = size;
    ctx.canvas.width = size;



    centerX = size / 2;
    centerY = size / 2;

    outerCircleRadius = size * 0.1875;
    innerCircleRadius = size * 0.3125;

    dlRadius = size / 32;
    shopsRadius = size / 23;

    ottoLogoSize = size / 5;

    canvasTop = parseInt(canvas.style.top.substring(0, canvas.style.top.length - 2));
    canvasLeft = parseInt(canvas.style.left.substring(0, canvas.style.left.length - 2));

    canvasTop += moveY;
    canvasLeft += moveX;
    sideBarSize(size);
    settingsBox(size);
}

function setImages() {
    let shops = document.getElementsByClassName('SHOP');
    let dl = document.getElementsByClassName('DL');

    let dl2 = [];
    dl2.push(storage[0]);
    for (var i = 1; i < storage.length; i++) {
            if (buttonState === 0) {
                if (storage[i][1] === 1) {
                    dl2.push(storage[i]);
                } else {
                    document.getElementById(storage[i][0]).style.visibility = 'hidden';
                    document.getElementById(storage[i][0]).style.opacity = '0';
                }
            } else {
                dl2.push(storage[i]);
                document.getElementById(storage[i][0]).style.visibility = 'visible';
                document.getElementById(storage[i][0]).style.opacity = '1';
            }
    }

    console.log(dl2);

    let angleForEachShop = 360/shops.length;
    let angleForEachDL = 360/(dl2.length-1);

    for (var i = 0; i < shops.length; i++) {

        let x = centerX + innerCircleRadius * Math.sin(angleForEachShop*i* ( Math.PI / 180 ));
        let y = centerY + innerCircleRadius * Math.cos(angleForEachShop*i* ( Math.PI / 180 ));
        let id = shops[i].id;
        shops[i].style.position = 'absolute';
        //shops[i].style.left = x-shopsRadius+canvasLeft-shadowRadius + "px";
        shops[i].style.left = x-shopsRadius-shadowRadius+canvasLeft + "px";
        //shops[i].style.top = y-shopsRadius+canvasTop-shadowRadius + "px";
        shops[i].style.top = y-shopsRadius-shadowRadius+canvasTop + "px";
        shops[i].height = shopsRadius*2;
        shops[i].width = shopsRadius*2;
        shopsListCords.push([id, x, y]);
    }

    for (var i = 1; i < dl2.length; i++) {
        let x = centerX + outerCircleRadius * Math.sin(angleForEachDL*i* ( Math.PI / 180 ));
        let y = centerY + outerCircleRadius * Math.cos(angleForEachDL*i* ( Math.PI / 180 ));
        var element = document.getElementById(dl2[i][0]);
        let id = element.id;
        element.style.position = 'absolute';
        element.style.left = x-dlRadius+canvasLeft-shadowRadius + "px";
        element.style.top = y-dlRadius+canvasTop-shadowRadius + "px";
        element.height = dlRadius*2;
        element.width = dlRadius*2;
        //element.style.borderColor = 'rgba(240, 128, 128, 1)';
        dlListCords.push([id, x, y])

    }

    /*

    for (var i = 0; i < dl.length; i++) {

        let x = centerX + outerCircleRadius * Math.sin(angleForEachDL*i* ( Math.PI / 180 ));
        let y = centerY + outerCircleRadius * Math.cos(angleForEachDL*i* ( Math.PI / 180 ));
        let id = dl[i].id;
        dl[i].style.position = 'absolute';
        dl[i].style.left = x-dlRadius+canvasLeft-shadowRadius + "px";
        dl[i].style.top = y-dlRadius+canvasTop-shadowRadius + "px";
        dl[i].height = dlRadius*2;
        dl[i].width = dlRadius*2;
        dlListCords.push([id, x, y])
    }
    */

    var ottoLogo = document.getElementById('OTTO');
    ottoLogo.width = ottoLogoSize;
    ottoLogo.style.left = centerX-ottoLogoSize/3 + 'px';
    ottoLogo.style.top = centerY+((ottoLogoSize/2.5)/2) + 'px';



}

function sideBarSize(canvasSize) {
    document.getElementById('sideBox').style.left = canvasSize + 40 + 'px'
    document.getElementById('sideBox').style.height = canvasSize -30-250 + 'px';
}

function settingsBox(canvasSize) {
    document.getElementById('controller').style.left = canvasSize + 40 + 'px';
}

window.onresize = function () {
    reDrawEverything();
};

function reDrawEverything() {
    calculateSize();
    drawBackground();
    setImages();
}

window.onload = function () {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    calculateSize();
    drawBackground();

    setImages();



/*
    for (var i = 0; i < images.length; i++) {
        ctx.beginPath();
        ctx.arc(60+i*110, 60, 55, 0, 2 * Math.PI);
        ctx.fillStyle = 'lightblue';
        ctx.fill();
        ctx.drawImage(images[i], 10+i*110, 10, 100, 100);
    }
*/
};

function press(input, type) {
    clear();
    var leftString = document.getElementById(input).style.left;
    var leftInt = parseInt(leftString.substring(0, leftString.length - 2));

    var topString = document.getElementById(input).style.top;
    topString = topString.substring(0, topString.length - 2);
    var topInt = parseInt(topString);

    var heightInt = parseInt(document.getElementById(input).height);

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    document.getElementById('sideBox').innerHTML = shopscontent;
    if (type === 'SHOP') {
        if (shops[input] === undefined) {
            document.getElementById('heading').innerHTML = input;
        } else {
            document.getElementById('heading').innerHTML = shops[input].title;
            document.getElementById('verysmall').innerHTML = shops[input].verysmall;
            document.getElementById('small').innerHTML = shops[input].small;
            document.getElementById('medium').innerHTML = shops[input].medium;
            document.getElementById('big').innerHTML = shops[input].big;
            document.getElementById('verybig').innerHTML = shops[input].verybig;
        }
    } else {
        document.getElementById('heading').innerHTML = input;
    }


    var counter;
    if (type === 'DL') {


        for (var i = 1; i < storage.length; i++) {
            if (storage[i][0] === input) {
                counter = i - 1;
                break;
            }
        }

        for (var i = 0; i < storage[counter].length; i++) {
            if (storage[counter + 1][i] === 1) {
                for (var ii = 0; ii < shopsListCords.length; ii++) {
                    if (storage[0][i] === shopsListCords[ii][0]) {

                        ctx.beginPath();
                        ctx.moveTo((leftInt-canvasLeft+heightInt/2)+moveX, (topInt-canvasTop+heightInt/2)+moveY);
                        ctx.lineTo(shopsListCords[ii][1]+moveX, shopsListCords[ii][2]+moveY);
                        ctx.strokeStyle = '#C8C8C8';
                        ctx.stroke();

                        document.getElementById(shopsListCords[ii][0]).style.borderColor = 'rgba(240, 128, 128, 1)';
                        break;
                    }
                }
            }
        }
    } else if (type === 'SHOP') {
        for (var i = 1; i<storage[0].length; i++) {
            if (storage[0][i] === input) {
                counter = i;
                break;
            }
        }

        for (var i = 1; i<storage.length; i++) {
            if (storage[i][counter] === 1) {
                console.log(storage[i][0]);
                for (var ii = 0;  ii < dlListCords.length; ii++) {
                    if (storage[i][0] === dlListCords[ii][0]) {
                        ctx.beginPath();
                        ctx.moveTo((leftInt-canvasLeft+heightInt/2)+moveX, (topInt-canvasTop+heightInt/2)+moveY);
                        ctx.lineTo(dlListCords[ii][1]+moveX, dlListCords[ii][2]+moveY);
                        ctx.strokeStyle = '#C8C8C8';
                        ctx.stroke();

                        document.getElementById(dlListCords[ii][0]).style.borderColor = 'rgba(240, 128, 128, 1)';
                        break;
                    }
                }
            }
        }
        console.log(counter);
    }


    document.getElementById(input).style.borderColor = 'rgba(173, 216, 230, 1)';
    drawBackground();

}

function clear() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.clearRect(0, 0, c.width, c.height);

    var imagesSHOP = document.getElementsByClassName("SHOP");
    for (var i = 0; i < imagesSHOP.length; i++) {
        imagesSHOP[i].style.borderColor = 'rgba(240, 128, 128, 0)';
    }
    var imagesDL = document.getElementsByClassName("DL");
    for (var i = 0; i < imagesDL.length; i++) {
        imagesDL[i].style.borderColor = 'rgba(240, 128, 128, 0)';
    }


}

function drawBackground() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.arc(centerX+moveX, centerY+moveY, innerCircleRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#969696';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX+moveX, centerY+moveY, outerCircleRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#969696';
    ctx.stroke();

}

function reset() {
    clear();
    drawBackground();
    document.getElementById('sideBox').innerHTML = '';
}
