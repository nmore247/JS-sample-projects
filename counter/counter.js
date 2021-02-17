let counter = 0;



function count() {
    counter++;
    document.querySelector('#value').innerHTML = counter;

}

function decr() {
    counter--;
    document.querySelector('#value').innerHTML = counter;

}


function reset() {
    counter = 0;
    document.querySelector('#value').innerHTML = counter;

}



document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#incr').onclick = count;
    document.querySelector('#decr').onclick = decr;
    document.querySelector('#reset').onclick = reset;
});