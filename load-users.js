var listElm = document.getElementById('container');
var users = [];

var loadFromApi = function(pos) {
    ///ТУ УТ УУ ТУ
    return fetch('https://raw.githubusercontent.com/ElvenVillage/besthack-front/master/test.js')
}

var pos = 0;
var loadMore = function() {
    loadFromApi(pos).then(response => response.json()).then( (response) => {
        for (var i = 0; i < response.length; i++) {
           var div = document.createElement('div');
           div.className = 'columns';
           var div1 = document.createElement('div')
           div1.className = 'column is-2';
           var imgFigure = document.createElement('figure');
           imgFigure.className = 'image is-64x64';
           var img = document.createElement('img');
           img.className = 'is-rounded';
           img.src = response[i].img;
           imgFigure.appendChild(img);
           div1.appendChild(imgFigure);
           var div2 = document.createElement('div');
           div2.className = 'column is-4';
           var username = document.createElement('div');
           username.innerText = response[i].username;
           div2.appendChild(username);
           var profileDiv = document.createElement('div');
            profileDiv.className = 'column is-3';
            var profileLink = document.createElement('a');
            profileLink.style.color = 'black';
            profileLink.href = '#';
            profileLink.innerText = 'Профиль'
            var chatDiv = document.createElement('div');
            chatDiv.className = 'column is-3';
            var chatLink = document.createElement('a');
            chatLink.style.color = 'black'
            chatLink.href = '#';
            chatLink.innerText = 'Чат'
            chatDiv.appendChild(chatLink);
            profileDiv.appendChild(profileLink);

            div.appendChild(div1); div.appendChild(div2);
            div.appendChild(profileDiv); div.appendChild(chatDiv);

            listElm.appendChild(div);
        }
        pos += response.length;
    }
)}


listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});


loadMore();