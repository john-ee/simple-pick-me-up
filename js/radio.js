 var radio = require('radio.json');


function testFunction() {
	alert("Hello world!");
}


var myData = JSON.parse(radio);
alert(myData[0].artist);
alert(myData[0].title);
alert(myData[0].album);
alert(myData[0].cover);
alert(myData[0].buy_link);
alert(myData[0].started_at);
alert(myData[0].end_at);
alert(myData[0].duration);	


// var data = $.getJSON('https://www.radioking.com/widgets/currenttrack.php?radio=116593&format=json', function(data) {
//     //data is the JSON string
//     console.log("success");
// });

// function getJSONP(url, success) {

//     var ud = '_' + +new Date,
//         script = document.createElement('script'),
//         head = document.getElementsByTagName('head')[0] 
//                || document.documentElement;

//     window[ud] = function(data) {
//         head.removeChild(script);
//         success && success(data);
//     };

//     script.src = url.replace('callback=?', 'callback=' + ud);
//     head.appendChild(script);

// }

// getJSONP('https://www.radioking.com/widgets/currenttrack.php?radio=116593&format=json', function(data){
//     console.log(data);
// });  