function valueInput(newValue, ID){
	document.getElementById(ID).value = newValue;
}



(function($){

	// $('input.round').wrap('<div class="round" />').each(function(){
	// 	var $input = $(this);
	// 	var $div = $input.parent();
	// 	var min = $input.data('min');
	// 	var max = $input.data('max');
	// 	var ratio = ($input.val() - min)/(max - min);
	// 	var color = $input.data('color') ? $input.data('color') : "#f1c40f"

	// 	var $circle = $('<canvas width="200px" height="200px" />');
	// 	var $color = $('<canvas width="200px" height="200px" />');
	// 	$div.append($circle);
	// 	$div.append($color);
	// 	var ctx = $circle[0].getContext('2d');

	// 	ctx.beginPath();
	// 	ctx.arc(100,100,85,0,2*Math.PI);
	// 	ctx.lineWidth=20;
	// 	ctx.strokeStyle= "#FFF";
	// 	ctx.shadowOffsetX = 2;
	// 	ctx.shadowBlur=10;
	// 	ctx.shadowColor = "rgba(0,0,0,0.1)";
	// 	ctx.stroke();


	// 	var ctx = $color[0].getContext('2d');

	// 	ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
	// 	ctx.lineWidth=20;
	// 	ctx.strokeStyle= color;
	// 	ctx.stroke();
	// });

	// var input = document.getElementById('valueNoise').value;
	// var refresh = document.getElementById('refresh');

	// //Log out event
	// refresh.addEventListener('click', e => {
	// 	var nb = Math.round(Math.random() * 100);
	// 	valueInput(nb ,'valueNoise');
	// });

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

		ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= color;
		ctx.stroke();
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

		ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= color;
		ctx.stroke();
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

		ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= color;
		ctx.stroke();
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

		ctx.arc(100,100,85, -1/2*Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth=20;
		ctx.strokeStyle= color;
		ctx.stroke();
	});

	var input = document.getElementById('valueNoise').value;
	var refresh = document.getElementById('refresh');

	//Log out event
	refresh.addEventListener('click', e => {
		var nb = Math.round(Math.random() * 100);
		valueInput(nb ,'valueNoise');
	});



})(jQuery);