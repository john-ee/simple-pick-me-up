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
			document.location.href='index.html';
		}
		else{
			console.log("Can't log in");
			btnSignOut.classList.add('hide');
		}
	});

}());
