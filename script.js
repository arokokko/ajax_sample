
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', (e) => {
    if (isNaN(e.target.value)) {
        inputUsd.value = "Input a number";    //проверка на ввод чисел
        return false;
    }
    let request = new XMLHttpRequest();

    // request.open(method, url- путь к серверу, async - по умолчанию true, login, password);

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8' );
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        }
        else {
            inputUsd.value = "Something going wrong!";
        }
    });
});
