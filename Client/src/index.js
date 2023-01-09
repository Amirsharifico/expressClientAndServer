let url = "http://localhost:3000/";

function readLocalPort() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("changable").innerText = data[1].name;
    });
}
