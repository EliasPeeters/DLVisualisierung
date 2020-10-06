var buttonState = 0;

function moveButton() {
    if (buttonState === 1) {
        document.getElementById('mover').style.left = '0px';
        document.getElementById('mover').innerHTML = 'Aktuell';
        buttonState = 0;
        reDrawEverything();
    } else if (buttonState === 0) {
        document.getElementById('mover').style.left = '130px';
        document.getElementById('mover').innerHTML = 'Zukunft';
        buttonState = 1;
        reDrawEverything();
    }
}
