function showImage(id) {
  document.getElementById(id).style.visibility = 'visible';
  document.getElementById(id).style.opacity = '1';
}

function hideImage(id) {
  document.getElementById(id).style.visibility = 'hidden';
  document.getElementById(id).style.opacity = '0';
}

function placeImages(inputArray, circleRadius, imageRadius) {
    let angle = 360/Object.keys(inputArray).length;
    var arrayNames = Object.keys(inputArray);

    for (var i = 0; i < arrayNames.length; i++) {
        let x = centerX + circleRadius * Math.sin(angle*i* ( Math.PI / 180 ));
        let y = centerY + circleRadius * Math.cos(angle*i* ( Math.PI / 180 ));

        var element = document.getElementById(arrayNames[i]);
        element.style.position = 'absolute';
        showImage(element.id);
        element.style.left = x-imageRadius-shadowRadius+canvasLeft + "px";
        element.style.top = y-imageRadius-shadowRadius+canvasTop + "px";
        element.height = imageRadius*2;
        element.width = imageRadius*2;
        var type = inputArray[arrayNames[i]].type
        if (type === 'SHOP') {
            shops[arrayNames[i]].x = x;
            shops[arrayNames[i]].y = y;
        } else if (type === 'DL') {
            dl[arrayNames[i]].x = x;
            dl[arrayNames[i]].y = y;
        } else if (type === 'WaWi') {
            wawi[arrayNames[i]].x = x;
            wawi[arrayNames[i]].y = y;
        }
    }


}


function setImagesNew() {
    let firstCircle = {};
    let secondCircle = {};
    let thirdCircle = {};

    let firstRadius = outerCircleRadius;
    let secondRadius = innerCircleRadius;
    let thirdRadius = wawiCircleRadius;

    let firstCircleImageRadius = dlRadius;
    let secondCircleImageRadius = shopsRadius;
    let thirdCircleImageRadius = wawiRadius;

    let allDLNames = Object.keys(dl);
    let allShopsNames = Object.keys(shops);
    let allWaWisNames = Object.keys(wawi)

    if (futureVisible) {
        for (var i = 0; i < allDLNames.length; i++) {
          firstCircle[allDLNames[i]]=(dl[allDLNames[i]]);
          firstCircle[allDLNames[i]].type = 'DL';
          showImage(allDLNames[i]);
        }
        for (var i = 0; i < allShopsNames.length; i++) {
          if (shops[allShopsNames[i]].angebundenZukunft === true) {
            firstCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
            firstCircle[allShopsNames[i]].type = 'SHOP';
          } else {
            secondCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
            secondCircle[allShopsNames[i]].type = 'SHOP';
          }
        }
        for (var i = 0; i < allWaWisNames.length; i++) {
          if (wawi[allWaWisNames[i]].angebundenZukunft === true) {
            firstCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
            firstCircle[allWaWisNames[i]].type = 'WaWi';
          } else {
            thirdCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
            thirdCircle[allWaWisNames[i]].type = 'WaWi';
          }
        }
    } else {
        for (var i = 0; i < allDLNames.length; i++) {
          console.log()
            if (dl[allDLNames[i]].angebunden) {
                firstCircle[allDLNames[i]]=(dl[allDLNames[i]]);
                firstCircle[allDLNames[i]].type = 'DL';
            } else {
              hideImage(allDLNames[i]);
            }
        }
        for (var i = 0; i < allShopsNames.length; i++) {
            if (shops[allShopsNames[i]].angebunden) {
                firstCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
                firstCircle[allShopsNames[i]].type = 'SHOP';
            } else {
                secondCircle[allShopsNames[i]]=(shops[allShopsNames[i]]);
                secondCircle[allShopsNames[i]].type = 'SHOP';
            }
        }
        for (var i = 0; i < allWaWisNames.length; i++) {
          if (wawi[allWaWisNames[i]].angebunden === true) {
            firstCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
            firstCircle[allWaWisNames[i]].type = 'WaWi';
          } else {
            thirdCircle[allWaWisNames[i]]=(wawi[allWaWisNames[i]]);
            thirdCircle[allWaWisNames[i]].type = 'WaWi';
          }
        }
    }

    let angelFirstCircle = 360/Object.keys(firstCircle).length;
    let angelSecondCircle = 360/Object.keys(secondCircle).length;
    let angelThirdCircle = 360/Object.keys(thirdCircle).length;

    if (wawiVisible) {
      for (var i = 0; i < Object.keys(thirdCircle).length; i++) {
        var name = Object.keys(thirdCircle)[i]
        showImage(name);
      }
      placeImages(thirdCircle, thirdRadius, thirdCircleImageRadius);
    } else {
      for (var i = 0; i < Object.keys(thirdCircle).length; i++) {
        var name = Object.keys(thirdCircle)[i]
        hideImage(name);
      }
    }

    placeImages(firstCircle, firstRadius, firstCircleImageRadius);
    placeImages(secondCircle, secondRadius, secondCircleImageRadius);


}
