
var xhReq = new XMLHttpRequest();
xhReq.open("GET", 'https://www.radioking.com/widgets/currenttrack.php?radio=116593&format=json', false);
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);


// console.log(jsonObject);
// console.log(jsonObject.artist);
// console.log(jsonObject.title);
// console.log(jsonObject.album);
// console.log(jsonObject.cover);
// console.log(jsonObject.buy_link);
// console.log(jsonObject.started_at);
// console.log(jsonObject.end_at);
// console.log(jsonObject.duration);	

document.getElementById("artist_name").innerHTML = jsonObject.artist;
document.getElementById("son_title").innerHTML = jsonObject.title;
document.getElementById("album_name").innerHTML = jsonObject.album;
document.getElementById("cover_link").innerHTML = jsonObject.cover;
document.getElementById("buy").innerHTML = jsonObject.buy_link;
document.getElementById("start").innerHTML = jsonObject.started_at;
document.getElementById("end").innerHTML = jsonObject.end_at;
document.getElementById("son_duration").innerHTML = jsonObject.duration;

document.getElementById("cover_img").src = jsonObject.cover;


