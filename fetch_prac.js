function request() {
    const input = '2+3*sqrt(100)';
    const encodedInput = encodeURIComponent(input);
    const response = fetch('http://api.mathjs.org/v4/?expr=' + encodedInput)
        .then(function(response) {
            return response.text()
        }).then(function (result) {
            console.log(result);
        })
}

function request_arrow() {
    const input = '2+3*sqrt(4)';
    const encodedInput = encodeURIComponent(input);
    const response = fetch('http://api.mathjs.org/v4/?expr=' + encodedInput)
        .then(function(response) {
            return response.text()
        }).then(function (result) {
            console.log(result);
        })
}

async function request_async() {
    const input = '2+3*sqrt(4)';
    const encodedInput = encodeURIComponent(input);
    const response = await fetch('http://api.mathjs.org/v4/?expr=' + encodedInput);
    const result = await response.text();
    console.log(result);
}

request();
request_arrow();
request_async();