
function request() {
    const element = document.getElementById('expression').value;
    console.log(element);
    const encodedInput = encodeURIComponent(element);
    const response = fetch('http://api.mathjs.org/v4/?expr=' + encodedInput)
        .then(function (response) {
            return response.text()
        }).then(function (result) {
            document.getElementById("write").value = result;
        })
} 