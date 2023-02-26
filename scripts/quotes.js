let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
    [
        '"A guy once said, sometimes it needs a real man to become the best girl"',
        '"I have no idea"',
        '"2 + 2 is 4 - 1 that\'s 3 quick math"',
        'IKIGAI',
    ];


function shuffle(){
    var randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuotes;
}
btn.addEventListener('click', function(){
    var randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuotes;
})

window.onload = shuffle;