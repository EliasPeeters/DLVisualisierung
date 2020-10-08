var buttonState = 0;
var buttonStateWaWi = 0;
var futureVisible = false;
var wawiVisible = false;

function moveButton() {
    if (buttonState === 1) {
        document.getElementById('mover').style.left = '0px';
        document.getElementById('mover').innerHTML = 'Aktuell';
        buttonState = 0;
        futureVisible = false;
        reDrawEverything();
    } else if (buttonState === 0) {
        document.getElementById('mover').style.left = '130px';
        document.getElementById('mover').innerHTML = 'Zukunft';
        buttonState = 1;
        futureVisible = true;
        reDrawEverything();
    }
    reset();
}

function moveButtonWaWi() {
    if (buttonStateWaWi === 1) {
        document.getElementById('moverWaWi').style.left = '0px';
        buttonStateWaWi = 0;
        wawiVisible = false;
        reDrawEverything();
    } else if (buttonStateWaWi === 0) {
        document.getElementById('moverWaWi').style.left = '130px';
        buttonStateWaWi = 1;
        wawiVisible = true;
        reDrawEverything();
    }
    reset();
}
