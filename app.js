//load text file with fetch

document.querySelector("#button1").addEventListener("click", loadData);

function loadData() {

    fetch("data.txt")
        // .then((response) =>{
        //     return response.text();
        // })
        .then((response) => response.text())
        .then((data) => {
            document.querySelector("#result").innerHTML = data;
        });
}

//load json file with fetch

document.querySelector("#button2").addEventListener("click", loadJson);

function loadJson() {
    fetch("employees.json")
        .then((response) => response.json())
        .then((json) => {
            let html = "";
            json.forEach(person => {
                html += `
                    <li>
                        ${person.name} - ${person.job}
                    </li>
                `
            });
            document.querySelector("#result").innerHTML = html;
        });
}


//load api file with fetch

document.querySelector("#button3").addEventListener("click" , loadAPI);
function loadAPI() {
    fetch("https://picsum.photos/list")
        .then((response) => response.json())
        .then((images) => {
            let html = "";
            images.forEach(image => {
                html += `
                    <li>
                        <a href="${image.post_url}">view image</a>
                    </li>
                `
            });
            document.querySelector("#result").innerHTML = html;
        })
}
