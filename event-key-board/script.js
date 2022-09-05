
document.onkeyup = keyEvent;
function keyEvent(e) {
  if (e.keyCode == 38 ){
    document.getElementById('release').innerHTML = 'Up Arrow - Key up';
  }
  else if (e.keyCode == 40){
    document.getElementById('release').innerHTML = 'Down Arrow - Key up';
  }  
  else if (e.keyCode == 37){
    document.getElementById('release').innerHTML = 'Left Arrow - Key up' ;
  }  
  else if (e.keyCode == 39){
    document.getElementById('release').innerHTML = 'Right Arrow - Key up';
  }  
  else if (e.keyCode == 32){
    document.getElementById('release').innerHTML = 'Space - Key up';
  }  
  else if (e.keyCode == 13){
    document.getElementById('release').innerHTML = 'Enter - Key up';
  }  
  else if (e.keyCode == 8){
    document.getElementById('release').innerHTML = 'Backspace - Key up';
  }  
  else if (e.keyCode == 16){
    document.getElementById('release').innerHTML = 'Shift - Key up';
  }  
  else if (e.keyCode == 17){
    document.getElementById('release').innerHTML = 'CTRL - Key up';
  }  
};

document.onkeydown = teclado;
function teclado(e) {
  if (e.keyCode == 38 ){
    document.getElementById('info').innerHTML = ' Up Arrow - Key down';
    
  }
  else if (e.keyCode == 40){
    document.getElementById('info').innerHTML = 'Down Arrow - Key down ';
  }  
  else if (e.keyCode == 37){
    document.getElementById('info').innerHTML = 'Left Arrow - Key down ';
  }  
  else if (e.keyCode == 39){
    document.getElementById('info').innerHTML = 'Right Arrow - Key down ';
  }  
  else if (e.keyCode == 32){
    document.getElementById('info').innerHTML = 'Space - Key down ';
  }  
  else if (e.keyCode == 13){
    document.getElementById('info').innerHTML = 'Enter - Key down ';
  }  
  else if (e.keyCode == 8){
    document.getElementById('info').innerHTML = 'Backspace - Key down ';
  }  
  else if (e.keyCode == 16){
    document.getElementById('info').innerHTML = 'Shift - Key down ';
  }  
  else if (e.keyCode == 17){
    document.getElementById('info').innerHTML = '(CTRL - Key down ';
  }  
  
};
