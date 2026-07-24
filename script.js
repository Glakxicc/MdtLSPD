function homePage() {
  const home = `
    <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1 active">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>

      <div class="mdt-first-content">
        <div class="mdt-first-content-left">
          <div class="header-content">
            <h2>Agent en service</h2>
            <p>x/x</p>
          </div>
          <span> Affiche 2 etiquettes d'agents sur la meme ligne </span> <br />
          <button>Voir la liste complête ></button>
        </div>
        <div class="mdt-first-content-right">
          <div class="header-content">
            <h2>Unité déployée</h2>
            <p>x/∞</p>
          </div>
          <span> Affiche 2 etiquettes d'agents sur la meme ligne </span> <br />
          <button>Voir la liste complête ></button>
        </div>
      </div>
      <div class="mdt-second-content">
        <div class="mdt-second-content-left">
          <h2>Messagerie Unité</h2>
          <span>
            Affiche une etiquettes par ligne de notification avec un apercu msg
          </span>
          <br />
          <button>Voir la liste complête ></button>
        </div>
        <div class="mdt-second-content-right">
          <h2>Messagerie Civil</h2>
          <span>
            Affiche une etiquettes par ligne de notification avec un apercu msg
          </span>
          <br />
          <button>Voir la liste complête ></button>
        </div>
      </div>
      <div class="mdt-right-sidebar">
        <div class="mdt-sidebar-right-top">
          <h3>Ma licence</h3>
          <p>
            Inscrit depuis le : Date <br />
            Numéro de licence : 7chiffres <br />
            Numéro de matricule : X <br />
          </p>
          <hr />
          <p>
            Secteur de travail : Los Santos <br />
            Formation : <br />
            Niveau des permis : <br />
            Unité Spécialisé :
          </p>
        </div>
        <div class="mdt-sidebar-right-mid">
          <h3>Civils recherchés</h3>
          <p>Etiquette des individues recherche par ligne</p>
          <br />
          <button>Voir la liste complête ></button>
        </div>
        <div class="mdt-sidebar-right-bottom">
          <h3>Renfort demandé</h3>
          <p>Etiquette des individues recherche par ligne</p>
          <br />
          <button>Voir la liste complête ></button>
        </div>
`;
  document.querySelector(".mdt-container").innerHTML = home;
}

function unitPage() {
  const unit = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2 active">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = unit;
}

function sectorPage() {
  const sector = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3 active">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = sector;
}

function cameraPage() {
  const camera = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4 active">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = camera;
}

function vehiculePage() {
  const vehicule = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5 active">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = vehicule;
}

function citizenPage() {
  const citizens = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6 active">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = citizens;
}

function recordPage() {
  const record = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7 active">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = record;
}

function rulesPage() {
  const rules = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8 active">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = rules;
}

function formaPage() {
  const forma = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9 active">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = forma;
}

function mirandaPage() {
  const miranda = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="miradanPage()" class="item10 active">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = miranda;
}

function amendmentPage() {
  const amendment = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11 active">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = amendment;
}

function licencesPage() {
  const licences = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12 active">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = licences;
}

function settingsPage() {
  const settings = `
        <div class="mdt-header">
        <p class="header-text">Matricule - Prenom Nom - Grade - Date</p>
        <div class="right-zone">
          <button class="service-box">En service</button>
          <button class="cross-box">X</button>
        </div>
      </div>

      <div class="mdt-left-sidebar">
        <img src="./img/logo.png" alt="Logo" class="logo" />

        <button onclick="homePage()" class="item1">
          <img src="./img/home.png" alt="Accueil" class="icon" />
          <p>Accueil</p>
        </button>

        <button onclick="unitPage()" class="item2">
          <img src="./img/unite.png" alt="Unite" class="icon" />
          <p>Unité</p>
        </button>

        <button onclick="sectorPage()" class="item3">
          <img src="./img/sector.png" alt="Secteur" class="icon" />
          <p>Secteur</p>
        </button>

        <button onclick="cameraPage()" class="item4">
          <img src="./img/camera.png" alt="Camera" class="icon" />
          <p>Caméra</p>
        </button>

        <hr />

        <button onclick="vehiculePage()" class="item5">
          <img src="./img/vehicule.png" alt="Vehicule" class="icon" />
          <p>Vehicules</p>
        </button>

        <button onclick="citizenPage()" class="item6">
          <img src="./img/citizen.png" alt="Citoyens" class="icon" />
          <p>Citoyens</p>
        </button>

        <button onclick="recordPage()" class="item7">
          <img src="./img/casier.png" alt="Reglements" class="icon" />
          <p>Casier</p>
        </button>

        <hr />

        <button onclick="rulesPage()" class="item8">
          <img src="./img/rules.png" alt="Reglements" class="icon" />
          <p>Règlements</p>
        </button>

        <button onclick="formaPage()" class="item9">
          <img src="./img/formation.png" alt="Formations" class="icon" />
          <p>Formations</p>
        </button>

        <button onclick="mirandaPage()" class="item10">
          <img src="./img/miranda.png" alt="Miranda" class="icon" />
          <p>Miranda</p>
        </button>

        <button onclick="amendmentPage()" class="item11">
          <img src="./img/amendement.png" alt="Amendements" class="icon" />
          <p>Amendements</p>
        </button>

        <button onclick="licencesPage()" class="item12">
          <img src="./img/licences.png" alt="Licences" class="icon" />
          <p>Licences</p>
        </button>

        <button onclick="settingsPage()" class="item13 active">
          <img src="./img/parametre.png" alt="Parametres" class="icon" />
          <p><i>Paramètres</i></p>
        </button>
      </div>
  `;
  document.querySelector(".mdt-container").innerHTML = settings;
}
