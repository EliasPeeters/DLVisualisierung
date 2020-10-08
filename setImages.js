function showImage(id) {
  document.getElementById(id).style.visibility = 'visible';
  document.getElementById(id).style.opacity = '1';
}

function hideImage(id) {
  document.getElementById(id).style.visibility = 'hidden';
  document.getElementById(id).style.opacity = '0';
}


function setImagesNew() {
    let firstCircle = {};
    let secondCircle = {};
    let thirdCircle = {};

    let allDLNames = Object.keys(dl);
    let allShopsNames = Object.keys(shops);
    let allWaWisNames = Object.keys(wawi)

    if (futureVisible) {
        for (var i = 0; i < allDLNames.length; i++) {
          firstCircle[allDLNames[i]]=(dl[allDLNames[i]]);
          showImage(allDLNames[i]);
        }
        for (var i = 0; i < allShopsNames.length; i++) {
          if (shops[allShopsNames[i]].angebundenZukunft === true) {
            firstCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
          } else {
            secondCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
          }
        }
        for (var i = 0; i < allWaWisNames.length; i++) {
          if (wawi[allWaWisNames[i]].angebundenZukunft === true) {
            firstCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
          } else {
            thirdCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
          }
        }
    } else {
        for (var i = 0; i < allDLNames.length; i++) {
            if (dl[allDLNames[i].angebunden]) {
                firstCircle[allDLNames[i]]=(dl[allDLNames[i]]);
            }
        }
        for (var i = 0; i < allShopsNames.length; i++) {
            if (shops[allShopsNames[i]].angebunden) {
                firstCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
            } else {
                secondCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
            }
        }
        for (var i = 0; i < allWaWisNames.length; i++) {
          if (wawi[allWaWisNames[i]].angebunden === true) {
            firstCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
          } else {
            thirdCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
          }
        }
    }
}
