let pointsSpan = document.querySelector('.point-cost'); 
let points = parseFloat(pointsSpan.innerHTML); 

function incrementPoints() {
    points += 10;
    pointsSpan.innerHTML = points;
}

// Event listener for pressing "F"
document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'f') {
        points *= 2; 
        pointsSpan.innerHTML = points; 
    }
});
