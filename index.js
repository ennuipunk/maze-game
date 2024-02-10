function numberFromPixels(pixelsString) {
  var numberString = pixelsString.slice(0, -2);
  var number = parseInt(numberString);
  return number;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        var square = document.getElementById('player');
        var leftpx = square.style.left;
        if(leftpx){
            var currentLeft = numberFromPixels(leftpx);
            if(currentLeft < 680){
                var newleft = currentLeft + 20;
            }
            square.style.left = newleft + 'px';
        } else {
            square.style.left = "20px";
        }
    }
    if (event.key === 'a') {
        var square = document.getElementById('player');
        var leftpx = square.style.left;
        if(leftpx){
            var currentLeft = numberFromPixels(leftpx);
            if(currentLeft > 0){
                var newleft = currentLeft - 20;
            }
                square.style.left = newleft + 'px';
        } else {
            square.style.left = "20px";
        }
    }
    if (event.key === 's') {
        var square = document.getElementById('player');
        var toppx = square.style.top;
        if(toppx){
            var currenttop = numberFromPixels(toppx);
            if (currenttop < 680){
                var newtop = currenttop + 20;
            }
            square.style.top = newtop + 'px';
        } else {
            square.style.top = "20px";
        }
    }
    if (event.key === 'w') {
        var square = document.getElementById('player');
        var toppx = square.style.top;
        if(toppx){
            var currenttop = numberFromPixels(toppx);
            if (currenttop >0){
                var newtop = currenttop - 20;
            }
            square.style.top = newtop + 'px';
        } else {
            square.style.top = "20px";
        }
    }
  });