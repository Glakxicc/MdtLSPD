const btn1 = document.querySelector(".item1");
btn1.addEventListener(
  "click",
  () => (document.querySelector(".mdt-container").innerHTML = generatePage()),
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generatePage() {
  return `
    <div class="mdt-container">
      <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>
      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />
        <button class="item1 active">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>
        <button class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>
        <button class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>
        <button class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>
        <hr />
        <button class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>
        <button class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>
        <button class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>
        <hr />
        <button class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>
        <button class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>
        <button class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>
        <button class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>
        <button class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>
        <button class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
    </div>
  </body>
</html>
`;
}
