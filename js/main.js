//create button
// var button= document.createElement('button');
// button.textContent= "Submit";
// button.setAttribute('onclick', 'getInfo()');
// document.body.appendChild(button);

//create variables
var userInfo = document.getElementById('username');
var commentInfo= document.getElementById('comment');

//create function for the button
function getInfo(){
  var newDiv= document.createElement('div');
  var newH5 = document.createElement('h5');
  var newP= document.createElement('p');

  newDiv.appendChild(newH5);
  newDiv.appendChild(newP);
  newH5.innerText= "Username: " + userInfo.value;
  newP.innerText= "Comment: " + commentInfo.value;

  document.body.appendChild(newDiv);
};

//Delete button. Is this working correctly?
var input= document.getElementById("username")[0];

function deleteInfo(){
  console.log(input.value);
  input.value= "";
};
