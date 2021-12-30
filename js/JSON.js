
function loadJSON(data) {
    let text = '';
    text += '<p>ID: ' + data.id + '</p>';
    text += '<p>Name: ' + data.name + '</p>';
    text += '<p>Username: ' + data.username + '</p>';
    text += '<p>Geo: ' + data.address.geo.lat + ', ' + data.address.geo.lng + '</p>';
    let people = document.getElementById('people-info');
    people.innerHTML = text;
}

function createPeople(){
    let people = document.getElementById('people-info');
    people.innerHTML = '';
    let preloader = document.getElementById('preloader');
    preloader.style.display = "inline";
    setTimeout(() => {
        let item = Math.floor(Math.random() * 10 + 1);
        fetch('https://jsonplaceholder.typicode.com/users/' + item)
            .then(response => response.json())
            .then(json => loadJSON(json))
            .catch(function(err) {
                people.innerHTML = '<p>⚠ Что-то пошло не так</p>';
            })
            .finally(() => {
                preloader.style.display = 'none';
            });
    }, 1000)
}

window.addEventListener('load', function (event) {
    createPeople();
});