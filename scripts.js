var randomButton = $('.randomButton');
var resetButton = $('.resetButton');



function rando() {
  return Math.floor(Math.random() * 254) + 1;
}

function changeBackground(color) {
  return $('body').css("background-color", color);
}

function generateRandomColor(){
  var color = 'rgb('+ rando() +','+ rando() +','+ rando() +')';
  return color;
}

randomButton.on('click', function(){
  changeBackground(generateRandomColor());
});

resetButton.on('click', function(){
  changeBackground('white');
});
