var randomButton = $('.randomButton');
var resetButton = $('.resetButton');



function rando() {
  return Math.floor(Math.random() * 254) + 1;
}

function generateRandomColor(){
  console.log(rando());
  console.log(rando());
  console.log(rando());
  $('body').css("background-color", 'rgb('+ rando() +','+ rando() +','+ rando() +')');
}

randomButton.on('click', function(){
  generateRandomColor();
});
