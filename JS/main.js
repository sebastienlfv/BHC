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



// ANCRE PAGE CONSULTING

const btnAncreMarcheR6 = document.getElementById('AncreMarcheR6');
const btnAncreVenastyEvent = document.getElementById('AncreVenastyEvent');

btnAncreMarcheR6.onclick = () => document.getElementById('img-dossier').src="";
btnAncreVenastyEvent.onclick = () => document.getElementById('img-dossier').src="http://31.media.tumblr.com/fca646cd8fe87906e605ad7e8d039903/tumblr_mmoz4fWT6U1soh1p8o1_500.png";