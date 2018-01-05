//create JS button
// var button= document.createElement('button');
// button.textContent= "Submit";
// button.setAttribute('onclick', 'getInfo()');
// document.body.appendChild(button);

//create variables
var userInfo = document.getElementById('username');
var commentInfo= document.getElementById('comment');
var commentsDiv = document.getElementById('comments');

//create function for the button
function getInfo(){
  // *if/else for the submit button until there is user text input. Why not working?*
  if(userInfo.value == '' || commentInfo.value == ''){
    return;
  }
  var newDiv= document.createElement('div');
  var newH5 = document.createElement('h5');
  var newP= document.createElement('p');
  //creating delete button for specific comment
  var newBtn = document.createElement('button');

  newDiv.appendChild(newH5);
  newDiv.appendChild(newP);
  newDiv.appendChild(newBtn);
  newDiv.setAttribute ("style", "text-align: center");
  newH5.innerText= "Username: " + userInfo.value;
  newP.innerText= "Comment: " + commentInfo.value;
  //give delete button text content
  newBtn.innerText = 'Delete Comment';
  //giving the delete button an onclick attribute which causes it to run deleteComment() with "this" as an argument (it's THIS element--the specific button which is clicked)
  newBtn.setAttribute('onclick', 'deleteComment(this)');

  //append the new comment and all its content to the comments div
  commentsDiv.appendChild(newDiv);
};

//this clears all comments, runs when the CLEAR button at the top is clicked
function clearInfo(){
  userInfo.value= "";
  commentInfo.value= "";
  //Empties the content of the comments div, so all comments are cleared
  commentsDiv.innerHTML = '';
};

//this deletes a specific comment, runs when a delete comment button is clicked
function deleteComment(thisButton) {
  //"thisButton" is my chosen placeholder for the "this" variable defined in the button's onclick attribute, which refers to the button element which was clicked on
  //containingDiv, then, is the PARENT of the button we clicked on (in other words, it's the newDiv div which contains the comment H5, the comment P, and the delete comment button)
  var containingDiv = thisButton.parentNode;
  //we want to remove containingDiv to delete the comment, so we use the remove method on the element
  containingDiv.remove();
};
