firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    console.log(user.email);
    console.log(user.displayName);

    const emailValue = document.getElementById('email');
    const nameValue = document.getElementById('name');
    //uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
    const li = document.createElement('li');
    li.innerText = user.email;
    emailValue.appendChild(li);
    const li2 = document.createElement('li');
    li2.innerText = user.displayName;
    nameValue.appendChild(li2);
  }

})
