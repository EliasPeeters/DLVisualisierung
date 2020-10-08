function setImagesNew() {
    let firstCircle = [];
    let secondCircle = [];
    let thirdCircle = [];

    let allDLNames = Object.keys(dl);
    let allShopsNames = Object.keys(shops);
    let allWaWisNames = Object.keys(wawis)

    if (futureVisible) {
        for (var i = 0; i < allDLNames.length; i++) {
          firstCircle.push(dl[allDLNames[i]]);
        }
        for (var i = 0; i < allShopsNames.length; i++) {
          if (shops[allShopsNames[i]].angebundenZukunft === true) {
            firstCircle.push(shops[allShopsNames[i]])
          }
        }
        for (var i = 0; i < allWaWisNames.length; i++) {
          if (wawis[allWaWisNames[i]].angebundenZukunft === true) {
            firstCircle.push(wawis[allWaWisNames[i]])
          }
        }
    }
}
