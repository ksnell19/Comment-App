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

//Delete button. Is this function working correctly? Do I have to list both variable inputs to delete each?
function deleteInfo(){
  console.log(userInfo.value);
  userInfo.value= "";
  console.log(commentInfo.value);
  commentInfo.value= "";
};
