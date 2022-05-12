let experience = document.getElementById('professional_experience');
let about = document.getElementById('about_text');
let profileImage = document.getElementById('profile_image_name');
let profileAgeRole = document.getElementById('profile_age_role');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function getDataAndShowProfile() {
  fetch("../Scripts/data/dadosColaboradores.json").then(res => {
    return res.json()
  }).then(jsonData => {
    showAbout(jsonData);
    showExperience(jsonData);
    showProfile(jsonData)
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

async function showProfile(data) {
  profileImage.innerHTML = `
  <img width="45%" src="${data[id].profileImage}" alt="${data[id].name}"><br>
  <p>${data[id].name}</p>
  `;

  profileAgeRole.innerHTML = `
  <p> ${data[id].name.split(' ')[0]} ,${data[id].about.age} </p>
  <p> ${data[id].about.role}  </p>
`
}


getDataAndShowProfile();
