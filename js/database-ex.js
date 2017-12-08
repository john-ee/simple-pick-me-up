function valueInput(newValue, ID){
	document.getElementById(ID).value = newValue;
}


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


	//Get element
	const lightList = document.getElementById('lightList');
	const tempList = document.getElementById('tempList');
	const humList = document.getElementById('humList');
	const noiseList = document.getElementById('noiseList');

	//Create references
	database = firebase.database();

	var refLight = database.ref();
	var refTemp = database.ref();
	var refSound = database.ref();
	var refHum = database.ref();

	refSound.on('child_added', snap => {

		console.log(snap.val());
		var scores = snap.val();
		var keys = Object.keys(scores);
		// console.log(keys);

		for(var i = keys.length-1; i >= 0; i--) {
			// console.log('valuuuuuuuuuuuuuuuuuues');
			var k = keys[i];
			var data = scores[k].arduino2.Sound.data;
			var timestamp = scores[k].arduino2.Sound.time;
			// console.log(data);
			const li = document.createElement('li');
			li.innerText=data;
			li.id = snap.key;
			noiseList.appendChild(li);
			if(i == keys.length-1){
				valueInput( Math.round(scores[k].arduino2.Sound.data), 'valueNoise');			}
		}


	});

	refSound.on('child_changed', snap => {
		const liChanged = document.getElementById(snap.key);
		liChanged.innerText=snap.val();
	});

	refSound.on('child_removed', snap => {

		const liToRemove = document.getElementById(snap.key);
		liToRemove.remove();
	});

	//Sync list changes
	refLight.on('child_added', snap => {

		//console.log(snap.val());
		var scores = snap.val();
		var keys = Object.keys(scores);


		for(var i = keys.length-1; i >= 0; i--) {
			// console.log('valuuuuuuuuuuuuuuuuuues');
			//console.log(keys.length - 1,i, keys[i]);
			var k = keys[i];
			var data = scores[k].arduino2.Light.data;
			var timestamp = scores[k].arduino2.Light.time;
			// console.log(data);
			const li = document.createElement('li');
			li.innerText=data;
			li.id = snap.key;
			lightList.appendChild(li);
			if(i == keys.length-1){
				// console.log(scores[k].light.data);
				valueInput(Math.round(scores[k].arduino2.Light.data), 'valueLight');

			}
		}
	});

	refLight.on('child_changed', snap => {

		const liChanged = document.getElementById(snap.key);
		liChanged.innerText=snap.val();
	});
	refLight.on('child_removed', snap => {

		const liToRemove = document.getElementById(snap.key);
		liToRemove.remove();
	});


	//Sync list changes
	refTemp.on('child_added', snap => {

		//console.log(snap.val());
		var scores = snap.val();
		var keys = Object.keys(scores);


		for(var i = keys.length-1; i >= 0; i--) {
			// console.log('valuuuuuuuuuuuuuuuuuues');
			//console.log(keys.length - 1,i, keys[i]);
			var k = keys[i];
			var data = scores[k].arduino2.Temperature.data;
			var timestamp = scores[k].arduino2.Temperature.time;
			// console.log(data);
			const li = document.createElement('li');
			li.innerText=data;
			li.id = snap.key;
			tempList.appendChild(li);
			if(i == keys.length-1){
				// console.log(scores[k].light.data);
				valueInput(Math.round(scores[k].arduino2.Temperature.data), 'valueTemp');

			}
		}
	});

	refTemp.on('child_changed', snap => {

		const liChanged = document.getElementById(snap.key);
		liChanged.innerText=snap.val();
	});
	refTemp.on('child_removed', snap => {

		const liToRemove = document.getElementById(snap.key);
		liToRemove.remove();
	});


	//Sync list changes
	refHum.on('child_added', snap => {

		//console.log(snap.val());
		var scores = snap.val();
		var keys = Object.keys(scores);


		for(var i = keys.length-1; i >= 0; i--) {
			// console.log('valuuuuuuuuuuuuuuuuuues');
			//console.log(keys.length - 1,i, keys[i]);
			var k = keys[i];
			var data = scores[k].arduino2.Humidity.data;
			var timestamp = scores[k].arduino2.Humidity.time;
			// console.log(data);
			const li = document.createElement('li');
			li.innerText=data;
			li.id = snap.key;
			humList.appendChild(li);
		}
	});

	refHum.on('child_changed', snap => {

		const liChanged = document.getElementById(snap.key);
		liChanged.innerText=snap.val();
	});
	refHum.on('child_removed', snap => {

		const liToRemove = document.getElementById(snap.key);
		liToRemove.remove();
	});



	$('#valueNoise').wrap('<div class="round" />').each(function(){
		var $input = $(this);
		var $div = $input.parent();
		var min = $input.data('min');
		var max = $input.data('max');
		var ratio = ($input.val() - min)/(max - min);
		var color = $input.data('color') ? $input.data('color') : "#f1c40f"

		var $circle = $('<canvas width="200px" height="200px" />');
		var $color = $('<canvas width="200px" height="200px" />');
		$div.append($circle);
		$div.append($color);
		var ctx = $circle[0].getContext('2d');

		ctx.beginPath();
		ctx.arc(100,100,85,0,2*Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= "#FFF";
		ctx.shadowOffsetX = 2;
		ctx.shadowBlur=10;
		ctx.shadowColor = "rgba(0,0,0,0.1)";
		ctx.stroke();


		var ctx = $color[0].getContext('2d');

		ctx.beginPath();
		ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= color;
		ctx.stroke();

		refSound.on('child_added', snap => {

			// console.log(snap.val());
			var scores = snap.val();
			var keys = Object.keys(scores);
			// console.log(keys);

			for(var i = 0; i < keys.length; i++) {
				// console.log('valuuuuuuuuuuuuuuuuuues');
				var k = keys[i];
				var data = scores[k].arduino2.Sound.data;
				// console.log(data);

				if(i == keys.length-1){
					ctx.clearRect(0,0,200,200);
					ctx.beginPath();
					//valueInput(scores[k].arduino2.Sound.data, 'valueNoise');
					ratio = (scores[k].arduino2.Sound.data - min)/(max - min);
					ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
					ctx.lineWidth=20;
					ctx.strokeStyle = color;
					ctx.stroke();

				}
			}
		});
	});


	$('#valueLight').wrap('<div class="round" />').each(function(){
		var $input = $(this);
		var $div = $input.parent();
		var min = $input.data('min');
		var max = $input.data('max');
		var ratio = ($input.val() - min)/(max - min);
		var color = $input.data('color') ? $input.data('color') : "#f1c40f"

		var $circle = $('<canvas width="200px" height="200px" />');
		var $color = $('<canvas width="200px" height="200px" />');
		$div.append($circle);
		$div.append($color);
		var ctx = $circle[0].getContext('2d');

		ctx.beginPath();
		ctx.arc(100,100,85,0,2*Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= "#FFF";
		ctx.shadowOffsetX = 2;
		ctx.shadowBlur=10;
		ctx.shadowColor = "rgba(0,0,0,0.1)";
		ctx.stroke();


		var ctx = $color[0].getContext('2d');

		ctx.beginPath();
		ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= color;
		ctx.stroke();

		refLight.on('child_added', snap => {

			// console.log(snap.val());
			var scores = snap.val();
			var keys = Object.keys(scores);
			// console.log(keys);

			for(var i = 0; i < keys.length; i++) {
				// console.log('valuuuuuuuuuuuuuuuuuues');
				var k = keys[i];
				var data = scores[k].arduino2.Light.data;
				// console.log(data);

				if(i == keys.length-1){
					ctx.clearRect(0,0,200,200);
					ctx.beginPath();
					//valueInput(scores[k].arduino2.Light.data, 'valueLight');
					ratio = (scores[k].arduino2.Light.data - min)/(max - min);
					ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
					ctx.lineWidth=20;
					ctx.strokeStyle = color;
					ctx.stroke();

				}
			}
		});
	});


	$('#valueTemp').wrap('<div class="round" />').each(function(){
		var $input = $(this);
		var $div = $input.parent();
		var min = $input.data('min');
		var max = $input.data('max');
		var ratio = ($input.val() - min)/(max - min);
		var color = $input.data('color') ? $input.data('color') : "#f1c40f"

		var $circle = $('<canvas width="200px" height="200px" />');
		var $color = $('<canvas width="200px" height="200px" />');
		$div.append($circle);
		$div.append($color);
		var ctx = $circle[0].getContext('2d');

		ctx.beginPath();
		ctx.arc(100,100,85,0,2*Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= "#FFF";
		ctx.shadowOffsetX = 2;
		ctx.shadowBlur=10;
		ctx.shadowColor = "rgba(0,0,0,0.1)";
		ctx.stroke();


		var ctx = $color[0].getContext('2d');

		ctx.beginPath();
		ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= color;
		ctx.stroke();

		refLight.on('child_added', snap => {

			// console.log(snap.val());
			var scores = snap.val();
			var keys = Object.keys(scores);
			// console.log(keys);

			for(var i = 0; i < keys.length; i++) {
				// console.log('valuuuuuuuuuuuuuuuuuues');
				var k = keys[i];
				var data = scores[k].arduino2.Temperature.data;
				// console.log(data);

				if(i == keys.length-1){
					ctx.clearRect(0,0,200,200);
					ctx.beginPath();
					//valueInput(scores[k].arduino2.Temperature.data, 'valueTemp');
					ratio = (scores[k].arduino2.Temperature.data - min)/(max - min);
					ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
					ctx.lineWidth=20;
					ctx.strokeStyle = color;
					ctx.stroke();

				}
			}
		});
	});

	$('#valueHum').wrap('<div class="round" />').each(function(){
		var $input = $(this);
		var $div = $input.parent();
		var min = $input.data('min');
		var max = $input.data('max');
		var ratio = ($input.val() - min)/(max - min);
		var color = $input.data('color') ? $input.data('color') : "#f1c40f"

		var $circle = $('<canvas width="200px" height="200px" />');
		var $color = $('<canvas width="200px" height="200px" />');
		$div.append($circle);
		$div.append($color);
		var ctx = $circle[0].getContext('2d');

		ctx.beginPath();
		ctx.arc(100,100,85,0,2*Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= "#FFF";
		ctx.shadowOffsetX = 2;
		ctx.shadowBlur=10;
		ctx.shadowColor = "rgba(0,0,0,0.1)";
		ctx.stroke();


		var ctx = $color[0].getContext('2d');

		ctx.beginPath();
		ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= color;
		ctx.stroke();

		refLight.on('child_added', snap => {

			// console.log(snap.val());
			var scores = snap.val();
			var keys = Object.keys(scores);
			// console.log(keys);

			for(var i = 0; i < keys.length; i++) {
				// console.log('valuuuuuuuuuuuuuuuuuues');
				var k = keys[i];
				var data = scores[k].arduino2.Humidity.data;
				// console.log(data);

				if(i == keys.length-1){
					ctx.clearRect(0,0,200,200);
					ctx.beginPath();
					//valueInput(scores[k].arduino2.Humidity.data, 'valueHum');
					ratio = (scores[k].arduino2.Humidity.data - min)/(max - min);
					ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
					ctx.lineWidth=20;
					ctx.strokeStyle = color;
					ctx.stroke();

				}
			}
		});
	});


}());
