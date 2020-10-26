let innerCircleRadius = 250;

let centerX = 400;
let centerY = 400;
let outerCircleRadius = 150;

let wawiCircleRadius = 100;

var shopsListCords = [];
var dlListCords = [];

var shopsRadius = 35;
var dlRadius = 25;
var wawiRadius = 25;

var canvasTop = 10000;
var canvasLeft = 20;

var ottoLogoSize = 100;
var shadowRadius = 5;

var moveX = 0;
var moveY = 0;

var tutorial = '<h2 class="typing" id="heading">Tutorial</h2><p style="margin-top: 20px" >In dieser Visualisierung kann man die Anbindungen von Diensleistern, Shopsystemen und Warenwirtschaften betrachten.</p><ul style="margin-top: 30px"><li id="bullet1">Einfach auf einen  Kreis klicken.</li><li id="bullet2">In den Einstellungen kannst du dir die zukünftige Anbindung anngucken.</li><li id="bullet3">Auch die Warenwirtschaften kannst du über die Einstellungen aktivieren.</li></ul>'




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


    if (buttonStateWaWi === 0) {
        outerCircleRadius = size * 0.23;
        innerCircleRadius = size * 0.39;
        dlRadius = size / 24;
        shopsRadius = size / 19;
    } else {
        outerCircleRadius = size * 0.1875;
        innerCircleRadius = size * 0.30;
        wawiCircleRadius = size * 0.41;
        wawiRadius = size / 23;
        dlRadius = size / 32;
        shopsRadius = size / 23;
    }


    ottoLogoSize = size / 5;

    canvasTop = parseInt(canvas.style.top.substring(0, canvas.style.top.length - 2));
    canvasLeft = parseInt(canvas.style.left.substring(0, canvas.style.left.length - 2));

    canvasTop += moveY;
    canvasLeft += moveX;
    sideBarSize(size);
    settingsBox(size);
}

function setImages() {
    setImagesNew();
    /*
    let shopsList = document.getElementsByClassName('SHOP');
    let dlList = document.getElementsByClassName('DL');
    let wawiList = document.getElementsByClassName('WaWi');

    let dl2 = [];
    var allDL = Object.keys(dl);
    for (var i = 0; i < allDL.length; i++) {
            if (buttonState === 0) {
                if (dl[allDL[i]].angebunden === true) {
                    dl2.push(allDL[i]);
                } else {
                    document.getElementById(allDL[i]).style.visibility = 'hidden';
                    document.getElementById(allDL[i]).style.opacity = '0';
                }
            } else {
                dl2.push(allDL[i]);
                document.getElementById(allDL[i]).style.visibility = 'visible';
                document.getElementById(allDL[i]).style.opacity = '1';
            }
    }

    var allWaWI = Object.keys(wawi);

    for (var i = 0; i < allWaWI.length; i++) {
        if (wawi[allWaWI[i]].angebunden === true) {
            //alert(allWaWI[i])
        }
    }


    console.log(dl2);



    let angleForEachShop = 360/shopsList.length;
    let angleForEachDL = 360/(dl2.length);
    let angelForWawi = 360/(wawiList.length);

    for (var i = 0; i < shopsList.length; i++) {

        let x = centerX + innerCircleRadius * Math.sin(angleForEachShop*i* ( Math.PI / 180 ));
        let y = centerY + innerCircleRadius * Math.cos(angleForEachShop*i* ( Math.PI / 180 ));
        let id = shopsList[i].id;
        shopsList[i].style.position = 'absolute';
        //shops[i].style.left = x-shopsRadius+canvasLeft-shadowRadius + "px";
        shopsList[i].style.left = x-shopsRadius-shadowRadius+canvasLeft + "px";
        //shops[i].style.top = y-shopsRadius+canvasTop-shadowRadius + "px";
        shopsList[i].style.top = y-shopsRadius-shadowRadius+canvasTop + "px";
        shopsList[i].height = shopsRadius*2;
        shopsList[i].width = shopsRadius*2;
        shopsListCords.push([id, x, y]);
        shops[id].x = x;
        shops[id].y = y;
    }


    for (var i = 0; i < dl2.length; i++) {
        let x = centerX + outerCircleRadius * Math.sin(angleForEachDL*i* ( Math.PI / 180 ));
        let y = centerY + outerCircleRadius * Math.cos(angleForEachDL*i* ( Math.PI / 180 ));
        var element = document.getElementById(dl2[i]);
        let id = element.id;
        element.style.position = 'absolute';
        element.style.left = x-dlRadius+canvasLeft-shadowRadius + "px";
        element.style.top = y-dlRadius+canvasTop-shadowRadius + "px";
        element.height = dlRadius*2;
        element.width = dlRadius*2;
        //element.style.borderColor = 'rgba(240, 128, 128, 1)';
        dlListCords.push([id, x, y])
        dl[id].x = x;
        dl[id].y = y;
    }

    for (var i = 0; i < wawiList.length; i++) {
        if (buttonStateWaWi === 0) {
            wawiList[i].style.visibility = 'hidden';
            wawiList[i].style.opacity = '0';
        } else {
            wawiList[i].style.visibility = 'visible';
            wawiList[i].style.opacity = '1';
            let x = centerX + wawiCircleRadius * Math.sin(angelForWawi*i* ( Math.PI / 180 ));
            let y = centerY + wawiCircleRadius * Math.cos(angelForWawi*i* ( Math.PI / 180 ));
            let = id = wawiList[i].id;
            wawiList[i].style.position = 'absolute';
            wawiList[i].style.left = x-wawiRadius-shadowRadius+canvasLeft + "px";
            wawiList[i].style.top = y-wawiRadius-shadowRadius+canvasTop + "px";
            wawiList[i].height = wawiRadius*2;
            wawiList[i].width = wawiRadius*2;
            wawi[id].x = x;
            wawi[id].y = y;
        }

    }

    */

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
    document.getElementById('sideBox').innerHTML = tutorial;
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

function elementInnerHTML(element, input) {

    if (input !== undefined || input !== "") {
        document.getElementById(element).innerHTML = input
    } else {
        document.getElementById(element).outerHTML = '';
    }
}

function fillsideBox(input, type) {
    if (type === 'SHOP') {
        elementInnerHTML('verysmall', input.verysmall);
        elementInnerHTML('small', input.small);
        elementInnerHTML('medium', input.medium);
        elementInnerHTML('big', input.big);
        elementInnerHTML('verybig', input.verybig);

    } else if (type === 'DL') {
        elementInnerHTML('Shopsystem', input.Shopsystem);
        elementInnerHTML('PimSystem', input.PimSystem);
        elementInnerHTML('WaWi', input.WaWiSystem);
    }

    elementInnerHTML('text', input.text);

    elementInnerHTML('heading', input.title);
    elementInnerHTML('bullet1', input.bullet1);
    elementInnerHTML('bullet2', input.bullet2);
    elementInnerHTML('bullet3', input.bullet3);

    document.getElementById('buttonWebseite').onmousedown = function() {
        window.open(input.url)
    }
}

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

    //sidebox fill
    if (type === 'SHOP') {
        document.getElementById('sideBox').innerHTML = shopscontent;
        if (shops[input] === undefined) {
            document.getElementById('heading').innerHTML = input;
        } else {
            fillsideBox(shops[input], type)
        }
    } else if (type === 'DL'){
        document.getElementById('sideBox').innerHTML = dlcontent;
        fillsideBox(dl[input], type);
    } else if (type === 'WaWi') {
        document.getElementById('sideBox').innerHTML = wawicontent;
    } else {
        document.getElementById('heading').innerHTML = input;
    }


    var counter;
    if (type === 'DL') {

        for (var i = 0; i < dl[input].shopSysteme.length; i++) {
            document.getElementById(dl[input].shopSysteme[i]).style.borderColor = 'rgba(240, 128, 128, 1)';

            ctx.beginPath();
            ctx.moveTo((leftInt-canvasLeft+heightInt/2)+moveX, (topInt-canvasTop+heightInt/2)+moveY);
            var test = dl[input].shopSysteme[i];
            var test2 = shops[dl[input].shopSysteme[i]].x;
            ctx.lineTo(shops[dl[input].shopSysteme[i]].x+moveX, shops[dl[input].shopSysteme[i]].y+moveY);
            ctx.strokeStyle = '#C8C8C8';
            ctx.stroke();
        }
        if (buttonStateWaWi !== 0) {
            for (var i = 0; i < dl[input].WaWi.length; i++) {
                document.getElementById(dl[input].WaWi[i]).style.borderColor = 'rgba(240, 128, 128, 1)';

                ctx.beginPath();
                ctx.moveTo((leftInt-canvasLeft+heightInt/2)+moveX, (topInt-canvasTop+heightInt/2)+moveY);
                ctx.lineTo(wawi[dl[input].WaWi[i]].x+moveX, wawi[dl[input].WaWi[i]].y+moveY);
                ctx.strokeStyle = '#C8C8C8';
                ctx.stroke();
            }
        }


    } else if (type === 'SHOP') {

        var allDLArray  = Object.keys(dl);
        for (var i = 0; i < allDLArray.length; i++) {
            if (!futureVisible && !dl[allDLArray[i]].angebunden) {
                //console.log(allDLArray[i]);
                break;
            }
            for (var ii = 0; ii < dl[allDLArray[i]].shopSysteme.length; ii++) {
                if (dl[allDLArray[i]].shopSysteme[ii] === input) {
                    ctx.beginPath();
                    ctx.moveTo((leftInt-canvasLeft+heightInt/2)+moveX, (topInt-canvasTop+heightInt/2)+moveY);
                    ctx.lineTo(dl[allDLArray[i]].x+moveX, dl[allDLArray[i]].y+moveY);
                    ctx.strokeStyle = '#C8C8C8';
                    ctx.stroke();

                    document.getElementById(allDLArray[i]).style.borderColor = 'rgba(240, 128, 128, 1)';
                }
            }
        }
    } else if (type === 'WaWi') {
        var allDLArray  = Object.keys(dl);

        for (var i = 0; i < allDLArray.length; i++) {
            for (var ii = 0; ii < dl[allDLArray[i]].WaWi.length; ii++) {
                if (dl[allDLArray[i]].WaWi[ii] === input) {
                  ctx.beginPath();
                  ctx.moveTo((leftInt-canvasLeft+heightInt/2)+moveX, (topInt-canvasTop+heightInt/2)+moveY);
                  ctx.lineTo(dl[allDLArray[i]].x+moveX, dl[allDLArray[i]].y+moveY);
                  ctx.strokeStyle = '#C8C8C8';
                  ctx.stroke();

                  document.getElementById(allDLArray[i]).style.borderColor = 'rgba(240, 128, 128, 1)';
                }
            }
        }
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
    var imagesWaWi = document.getElementsByClassName("WaWi");
    for (var i = 0; i < imagesWaWi.length; i++) {
        imagesWaWi[i].style.borderColor = 'rgba(240, 128, 128, 0)';
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

    if (wawiVisible) {
        ctx.beginPath();
        ctx.arc(centerX+moveX, centerY+moveY, wawiCircleRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#969696';
        ctx.stroke();
    }

}

function reset() {
    clear();
    drawBackground();
    document.getElementById('sideBox').innerHTML = tutorial;
}
