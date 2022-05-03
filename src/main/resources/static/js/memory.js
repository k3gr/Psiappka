var game = document.getElementById('game');
var result = document.getElementById('result');
var tensId = document.getElementById('tens');
var secondsId = document.getElementById('seconds');
var imagesArray = ["dog1", "dog2", "dog3", "dog4", "dog5", "dog6"];
var resultsArray = [];
var counter = 0;
var seconds = 0;
var tens = 0;
var Interval;

var clone = imagesArray.slice(0);
var cards = imagesArray.concat(clone);

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
    return o;
}
shuffle(cards);

for (var i = 0; i < cards.length; i++) {
    card = document.createElement('div');
    card.dataset.item = cards[i];
    card.dataset.view = "card";
    game.appendChild(card);

    card.onclick = function () {

        if (this.className != 'flipped' && this.className != 'correct'){
            this.className = 'flipped';
            var result = this.dataset.item;
            resultsArray.push(result);
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        }

        if (resultsArray.length > 1) {

            if (resultsArray[0] === resultsArray[1]) {
                check("correct");
                counter ++;
                win();
                resultsArray = [];
            } else {
                check("reverse");
                resultsArray = [];
            }

        }

    }

};


var check = function(className) {

    var x = document.getElementsByClassName("flipped");
    setTimeout(function() {

        for(var i = (x.length - 1); i >= 0; i--) {
            x[i].className = className;
        }

    },500);

}

var win = function () {

    if(counter === 6) {
        clearInterval(Interval);
        result.innerHTML = seconds + ":" + tens;
    }

}

function startTimer () {
    tens++;

    if(tens < 9){
        tensId.innerHTML = "0" + tens;
    }

    if (tens > 9){
        tensId.innerHTML = tens;

    }

    if (tens > 99) {
        seconds++;
        secondsId.innerHTML = "0" + seconds;
        tens = 0;
        tensId.innerHTML = "00";
    }

    if (seconds > 9){
        secondsId.innerHTML = seconds;
    }

}

