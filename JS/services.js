// IMAGE




// DESIGN

const btnLogo = document.getElementById('btn-logo');
const btnBanniere = document.getElementById('btn-banniere');
const btnAffiches = document.getElementById('btn-affiches');
const btnStreampack = document.getElementById('btn-streampack');
const btnEsport = document.getElementById('btn-esport');

btnLogo.onclick = () => document.getElementById('onglet-logo').style.display = "flex";
btnBanniere.onclick = () => document.getElementById('onglet-banniere').style.display = "flex";
btnAffiches.onclick = () => document.getElementById('onglet-affiches').style.display = "flex";
btnStreampack.onclick = () => document.getElementById('onglet-streampack').style.display = "flex";
btnEsport.onclick = () => document.getElementById('onglet-esport').style.display = "flex";

// CONSULTING

const btnDossier = document.getElementById('btn-dossier');
const btnConseil = document.getElementById('btn-conseil');
const btnEvent = document.getElementById('btn-event');

btnDossier.onclick = () => document.getElementById('onglet-dossier').style.display = "flex";
btnConseil.onclick = () => document.getElementById('onglet-conseil').style.display = "flex";
btnEvent.onclick = () => document.getElementById('onglet-event').style.display = "flex";

// WEB


const btnVitrine = document.getElementById('btn-vitrine');
const btnEcommerce = document.getElementById('btn-ecommerce');

btnVitrine.onclick = () => document.getElementById('onglet-vitrine').style.display = "flex";
btnEcommerce.onclick = () => document.getElementById('onglet-ecommerce').style.display = "flex";


// ANCRE DESIGN

// ANCRE STREAMPACK


function changeToStreampack05(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/stream_pack-05 1.png";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche pleine.png";
}

function changeToDarkwin(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Darkwin.png";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
}

function changeToInsaw(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Insaw.png";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
}

function changeToKalax(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Kalax.png";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
}

function changeToNature(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Nature.png";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
}

function changeToRed(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_ReD.png";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
}

function changeToValorant(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Valorant.png";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
}

// ANCRE BANNIERE

function changeToDeathrow(){
    document.getElementById('AncreAgrios').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-banniere').src="images/services/page2/details/banniere/Banniere_Deathrow.png";
    document.getElementById('AncreDeathrow').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreInsawBanniere').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreTestBanniere').src="images/accueil/Ancre/blanche vide.png";
}

function changeToAgrios(){
    document.getElementById('AncreAgrios').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-banniere').src="images/services/page2/details/banniere/Bannière_Agrios.png";
    document.getElementById('AncreDeathrow').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreInsawBanniere').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreTestBanniere').src="images/accueil/Ancre/blanche vide.png";
}

function changeToInsawBanniere(){
    document.getElementById('AncreAgrios').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-banniere').src="images/services/page2/details/banniere/Bannière_Insaw.png";
    document.getElementById('AncreDeathrow').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreInsawBanniere').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreTestBanniere').src="images/accueil/Ancre/blanche vide.png";
}

function changeToTestBanniere(){
    document.getElementById('AncreAgrios').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-banniere').src="images/services/page2/details/banniere/Bannière_Test.png";
    document.getElementById('AncreDeathrow').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreInsawBanniere').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreTestBanniere').src="images/accueil/Ancre/blanche pleine.png";
}

// ANCRE ESPORT

function changToEsportUbiteam(){
    document.getElementById('AncreEsportUbiteam').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-esport').src="images/services/page2/details/esport/Esport_Ubiteam 1.png";
    document.getElementById('AncreEsportVenasty').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreEsportDeathrow').src="images/accueil/Ancre/blanche vide.png";
}

function changToEsportVenasty(){
    document.getElementById('AncreEsportUbiteam').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-esport').src="images/services/page2/details/esport/Esport_Venasty 1.png";
    document.getElementById('AncreEsportVenasty').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreEsportDeathrow').src="images/accueil/Ancre/blanche vide.png";
}

function changToEsportDeathrow(){
    document.getElementById('AncreEsportUbiteam').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-esport').src="images/services/page2/details/esport/Esport_Deathrow 1.png";
    document.getElementById('AncreEsportVenasty').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreEsportDeathrow').src="images/accueil/Ancre/blanche pleine.png";
}



// ANCRE PAGE CONSULTING

// ANCRE DOSSIER

function changeToDossierEvent(){
    document.getElementById('AncreVenastyEvent').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-dossier').src="images/services/page3/img produits/Dossier-Event.jpg";
    document.getElementById('AncreMarcheR6').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreOnesEsport').src="images/accueil/Ancre/blanche vide.png";
}

function changeToDossierEtdMarche(){
    document.getElementById('AncreMarcheR6').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-dossier').src="images/services/page3/img produits/Etude-de-marché.jpg";
    document.getElementById('AncreVenastyEvent').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreOnesEsport').src="images/accueil/Ancre/blanche vide.png";
}

function changeToOnestEsport(){
    document.getElementById('AncreOnesEsport').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-dossier').src="images/services/page3/img produits/OnestEsport.png";
    document.getElementById('AncreVenastyEvent').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreMarcheR6').src="images/accueil/Ancre/blanche vide.png";
}

// ANCRE CONSEIL

function changeToStratCom(){
    document.getElementById('AncreStratCom').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-stratcom').src="images/services/page3/img produits/Stratégie-Communication.jpg";
    document.getElementById('AncreMarketing').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreOptiOrga').src="images/accueil/Ancre/blanche vide.png";
}

function changeToMarketing(){
    document.getElementById('AncreMarketing').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-stratcom').src="images/services/page3/img produits/Stratégie-Marketing.jpg";
    document.getElementById('AncreStratCom').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreOptiOrga').src="images/accueil/Ancre/blanche vide.png";
}

function changeToOptiOrga(){
    document.getElementById('AncreOptiOrga').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-stratcom').src="images/services/page3/img produits/Optimisation-Orga.jpg";
    document.getElementById('AncreStratCom').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreMarketing').src="images/accueil/Ancre/blanche vide.png";
}