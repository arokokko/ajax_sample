let inputRub = document.getElementById('rub'),
inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', (e) => {
    if (isNaN(e.target.value)) {
        inputUsd.value = "Input a number";    //проверка на ввод чисел
        return false;
    }
    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4 && request.status == 200) {
                    resolve(this.response);
                }
                else {
                    reject();
                }
                
            };
        });
    }

    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => inputUsd.value = "Что-то пошло не так");


});