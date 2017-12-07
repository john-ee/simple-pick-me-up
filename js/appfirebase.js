(function() {

	//Init Firebase
	const config = {
		apiKey: "AIzaSyDGDb7UPuSQ6ZwVrI0zBnSj2tluCqLtbwM",
		authDomain: "pickmeup-b6abc.firebaseapp.com",
		databaseURL: "https://pickmeup-b6abc.firebaseio.com",
		projectId: "pickmeup-b6abc",
		storageBucket: "pickmeup-b6abc.appspot.com",
		messagingSenderId: "787993144427"
	};
	firebase.initializeApp(config);

	//Get element
	const btnSignOut = document.getElementById('btnSignOut');


	

	//Log out event
	btnSignOut.addEventListener('click', e => {
		firebase.auth().signOut();
	});




	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
		}
		else{
			console.log("Can't log in");
			document.location.href='file:///var/www/html/pick-me-up/signin.html';
		}
	});

}());