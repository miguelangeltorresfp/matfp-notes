# HANDLING EXIF DATA IMAGE ORIENTATION

* Reference Images for testing: 8 posibles rotaciones - [link](https://www.galloway.me.uk/2012/01/uiimageorientation-exif-orientation-sample-images/)

* Demo de las posibles rotaciones - [link](https://jsfiddle.net/wunderbart/dtwkfjpg/)
* Demo de las posibles rotaciones - [link](https://jsfiddle.net/u9fqnL0s/)

* Solución completa extrayendo la rotación de EXIF y corrigiendo dicha rotación:
  [link](https://gist.github.com/patotoma/59dc40554a935ab98764c1dcdce5856a)
  [link](https://gist.github.com/mindplay-dk/72f47c1a570e870a375bd3dbcb9328fb)

* La solución de rotación - [link](https://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images/20600801)
* La solución para extraer la rotación de EXIF data - [link](https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side/32490603#32490603)
* Esta solución no es completa porque no tiene en cuenta las rotaciones de espejor ( mirror )