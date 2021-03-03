function request() {
    const input = '2+3*sqrt(4)';
    const encodedInput = encodeURIComponent(input);
    const response = fetch('http://api.mathjs.org/v4/?expr=' + encodedInput)
        .then(function(response) {
            return response.text()
        }).then(function (result) {
            console.log(result);
        })
}