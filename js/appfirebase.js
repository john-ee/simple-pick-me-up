(function() {

	//Init Firebase
	const config = {
	    apiKey: "AIzaSyCa2WkqUPFA75dVje_Xqv0EVW4bHJaQoh0",
	    authDomain: "iot-project-1e8b6.firebaseapp.com",
	    databaseURL: "https://iot-project-1e8b6.firebaseio.com/",
	    storageBucket: "gs://iot-project-1e8b6.appspot.com/",
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
			document.location.href='file:///home/simeoni/Documents/Web/signin.html';
		}
	});

}());