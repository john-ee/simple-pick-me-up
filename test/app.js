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
	const preObject = document.getElementById('Capteur');

	//Create references
	const dbRefObject = firebase.database().ref().child('Capteur').child('LIGHT');


	//Sync object changes
	dbRefObject.on('value', snap => console.log(snap.val()));




}());