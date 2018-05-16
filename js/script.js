var block1BcgColor = document.querySelector('.block-1');
block1BcgColor.onclick = function() {
block1BcgColor.style.backgroundColor = 'brown';
}
var blockTwoColor = document.querySelector('.block-2');
blockTwoColor.onclick = function() {
blockTwoColor.style.borderColor = 'white';
}
var blockThree = document.querySelector('.block-3');
blockThree.onclick = function() {
blockThree.innerHTML = 'Hi there! i want to learn JavaScript';
blockThree.style.color = 'white';
}
var blockFour = document.querySelector('.block-4');
blockFour.onclick = function() {
blockFour.style.color='yellow';
}
var blockFive = document.querySelector('.block-5');
blockFive.onclick = function() {
blockFive.style.transform = 'rotate(127deg)';
}
var blockSix = document.querySelector('.block-6');
blockSix.onclick = function() {
blockSix.style.visibility = 'hidden';//display = 'none';
}

/*var usrName = prompt('Who are you');
if (usrName == 'Admin') {
  var pass = prompt('enter ypur pass');
  if (pass == 'password'){
    alert('Access granted')
  }else if (pass == null){
    alert('Access canceled');
  }else{
    alert('Acess denied');
  }
}else if (usrName == null){
  alert('Please enter your username')
}else{
  alert('Incorrect username');
}*/
