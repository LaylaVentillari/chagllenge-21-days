
document.onkeyup = keyEvent;
function keyEvent(e) {
  if (e.keyCode == 38 ){
    document.getElementById('release').innerHTML = '(Key up) Up Arrow ';
  }
  else if (e.keyCode == 40){
    document.getElementById('release').innerHTML = '(Key up) Down Arrow';
  }  
  else if (e.keyCode == 37){
    document.getElementById('release').innerHTML = '(Key up) Left Arrow';
  }  
  else if (e.keyCode == 39){
    document.getElementById('release').innerHTML = '(Key up) Right Arrow';
  }  
  else if (e.keyCode == 32){
    document.getElementById('release').innerHTML = '(Key up) Space';
  }  
  else if (e.keyCode == 13){
    document.getElementById('release').innerHTML = '(Key up) Enter';
  }  
  else if (e.keyCode == 8){
    document.getElementById('release').innerHTML = '(Key up) Backspace';
  }  
  else if (e.keyCode == 16){
    document.getElementById('release').innerHTML = '(Key up) Shift';
  }  
  else if (e.keyCode == 17){
    document.getElementById('release').innerHTML = '(Key up) CTRL';
  }  
};

document.onkeydown = teclado;
function teclado(e) {
  if (e.keyCode == 38 ){
    document.getElementById('info').innerHTML = '(Key down) Up Arrow';
    
  }
  else if (e.keyCode == 40){
    document.getElementById('info').innerHTML = '(Key down) Down Arrow';
  }  
  else if (e.keyCode == 37){
    document.getElementById('info').innerHTML = '(Key down) Left Arrow';
  }  
  else if (e.keyCode == 39){
    document.getElementById('info').innerHTML = '(Key down) Right Arrow';
  }  
  else if (e.keyCode == 32){
    document.getElementById('info').innerHTML = '(Key down) Space';
  }  
  else if (e.keyCode == 13){
    document.getElementById('info').innerHTML = '(Key down) Enter';
  }  
  else if (e.keyCode == 8){
    document.getElementById('info').innerHTML = '(Key down) Backspace';
  }  
  else if (e.keyCode == 16){
    document.getElementById('info').innerHTML = '(Key down) Shift';
  }  
  else if (e.keyCode == 17){
    document.getElementById('info').innerHTML = '(Key down)CTRL';
  }  
  
};
