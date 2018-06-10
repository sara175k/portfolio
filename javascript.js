/*zoom billed*/
function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
    e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
    x = offsetX / zoomer.offsetWidth * 100;
    y = offsetY / zoomer.offsetHeight * 100;
    zoomer.style.backgroundPosition = x + "20% " + y + "20%";
}

/*forside*/

<script>
    var elements = document.getElementsByClassName("column");
var i;

function one() {
    for (i = 0; i< elements.length; i++) {
        elements [i].style.flex = "100%";
    }
}

function two(){
    for (i = 0; i< elements.length; i++;){
        elements[i].style.flex = "50%";
    }
}
