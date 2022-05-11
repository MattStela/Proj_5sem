let experience = document.getElementById('professional_experience');
let about = document.getElementById('about_text');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function getData() {
  fetch("../Scripts/data/dadosColaboradores.json").then(res => {
    return res.json()
  }).then(jsonData => {
    showAbout(jsonData);
    showExperience(jsonData);
    return 0
  })
}

async function showAbout(data) {
  about.innerHTML = `
    <li> ${data[id].name.split(' ')[0]} ,${data[id].about.age} </li>
    <li> ${data[id].about.role}  </li>
  `
}

async function showExperience(data) {
  data[id].experience.forEach(element => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    experience.appendChild(li)
  });
}

getData()
