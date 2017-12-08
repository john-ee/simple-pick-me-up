var url = "https://pickmeup-b6abc.firebaseio.com";

function write(evt) {
  var name = $('#name').text();

  firebaseRef.set({Name: name});
  evt.preventDefault();

}

var submit = document.getElementsByTagName('button')[0];

submit.onclick = write;
