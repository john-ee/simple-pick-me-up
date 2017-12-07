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
	const txtEmail = document.getElementById('inputEmail');
	const txtPassword = document.getElementById('inputPassword');
	const btnLogin = document.getElementById('btnSignIn');
	const btnRegister = document.getElementById('btnRegister');
	const btnSignOut = document.getElementById('btnSignOut');

	//Add login event
	btnLogin.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email,
			pass);

		promise.catch(e => console.log(e.message));

	});

	//Add login event
	btnRegister.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email,
			pass);

		promise.catch(e => console.log(e.message));

	});

	btnSignOut.addEventListener('click', e => {
		firebase.auth().signOut();
	});

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			btnSignOut.classList.remove('hide');
			document.location.href='file:///home/simeoni/Documents/Web/mapage.html';
		}
		else{
			console.log("Can't log in");
			btnSignOut.classList.add('hide');
		}
	});

}());