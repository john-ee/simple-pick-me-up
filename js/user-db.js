firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    console.log(user.email);
    console.log(user.displayName);

    const emailValue = document.getElementById('email');
    const nameValue = document.getElementById('name');
    //uid = user.uid;
    emailValue.textContent = user.email;
    nameValue.textContent = user.displayName;

  }
})
