function loadJSON(data) {
    let users = document.getElementsById('users');
    users.innerHTML = '<p">ID: ' + data.id + '</p>';
}

window.addEventListener('load', function (event) {
    setTimeout(() => {
        let item = Math.floor(Math.random() * 10 + 1);
        console.log(item);
        fetch('https://jsonplaceholder.typicode.com/users/' + item)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function(data) {
                        console.log(data);
                        let users = document.getElementsById("people");
                        users.innerHTML = '<p">ID: ' + data.id + '</p>';
                    });
                }
            )
            .then(response => response.json(),
            console.log(4))
            .then(json => loadJSON(json))
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
                console.log(2);
                let users = '<p>⚠ Что-то пошло не так</p>';
            })
            .finally(() => {
                console.log(3);
                document.getElementById('preloader').remove();
            });
    }, 2000)
});