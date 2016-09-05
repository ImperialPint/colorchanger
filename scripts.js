var randomButton = $('.randomButton');
var resetButton = $('.resetButton');



function rando() {
  return Math.floor(Math.random() * 255) + 1;
}

function changeBackground(color) {
  return $('body').css("background-color", color);
}

function generateRandomColor(){
  var color = 'rgb('+ rando() +','+ rando() +','+ rando() +')';
  if (color === 'rgb(255, 255, 255)') {
    return generateRandomColor();
  }
  return color;
}

randomButton.on('click', function(){
  changeBackground(generateRandomColor());
});

resetButton.on('click', function(){
  changeBackground('white');
});
