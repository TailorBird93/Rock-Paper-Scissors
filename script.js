
function computerPlay (min,max){
    return Math.floor(Math.random() * (max-min+1) + min);

}
console.log (computerPlay(1,3));