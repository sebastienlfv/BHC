// IMAGE


// DESIGN

function openLogo(){
    document.getElementById('onglet-logo').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-logo').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-logo-mobile').style.display = "block";
            document.getElementById('btn-logo').style.display = "none";
            document.getElementById('btn-banniere').style.marginTop= "400px";
            if(document.getElementById('onglet-logo-mobile').style.display = "block"){
                document.getElementById('onglet-banniere-mobile').style.display = "none";
                document.getElementById('btn-banniere').style.display = "flex";
                document.getElementById('btn-affiches').style.marginTop = "0px";

                document.getElementById('onglet-affiche-mobile').style.display = "none";
                document.getElementById('btn-affiches').style.display = "flex";
                document.getElementById('btn-streampack').style.marginTop = "0px";

                document.getElementById('onglet-streampack-mobile').style.display = "none";
                document.getElementById('btn-streampack').style.display = "flex";
                document.getElementById('btn-esport').style.marginTop = "0px";

                document.getElementById('onglet-esport-mobile').style.display = "none";
                document.getElementById('btn-esport').style.display = "flex";
                document.getElementById('page2-services').style.marginBottom = "0px";
            }
        }
    }
}

function closeAllOngletLogoMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-logo-mobile').style.display = "none";
    document.getElementById('btn-logo').style.display = "flex";
    document.getElementById('btn-banniere').style.marginTop= "0px";
}

function closeAllOngletLogo(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-logo').style.display = "none";
}

function openBanniere(){
    document.getElementById('onglet-banniere').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-banniere').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-banniere-mobile').style.display = "block";
            document.getElementById('btn-banniere').style.display = "none";
            document.getElementById('btn-affiches').style.marginTop= "300px";
            if(document.getElementById('onglet-banniere-mobile').style.display = "block"){

                document.getElementById('onglet-logo-mobile').style.display = "none";
                document.getElementById('btn-logo').style.display = "flex";
                document.getElementById('btn-banniere').style.marginTop = "0px";

                document.getElementById('onglet-affiche-mobile').style.display = "none";
                document.getElementById('btn-affiches').style.display = "flex";
                document.getElementById('btn-streampack').style.marginTop = "0px";

                document.getElementById('onglet-streampack-mobile').style.display = "none";
                document.getElementById('btn-streampack').style.display = "flex";
                document.getElementById('btn-esport').style.marginTop = "0px";

                document.getElementById('onglet-esport-mobile').style.display = "none";
                document.getElementById('btn-esport').style.display = "flex";
                document.getElementById('page2-services').style.marginBottom = "0px";
            }
        }
    }
}

function closeAllOngletBanniereMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-banniere-mobile').style.display = "none";
    document.getElementById('btn-banniere').style.display = "flex";
    document.getElementById('btn-affiches').style.marginTop= "0px";
}

function closeAllOngletBanniere(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-banniere').style.display = "none";
}

function openAffiches(){
    document.getElementById('onglet-affiches').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-affiches').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-affiche-mobile').style.display = "block";
            document.getElementById('btn-affiches').style.display = "none";
            document.getElementById('btn-streampack').style.marginTop= "300px";
            if(document.getElementById('onglet-affiche-mobile').style.display = "block"){

                document.getElementById('onglet-logo-mobile').style.display = "none";
                document.getElementById('btn-logo').style.display = "flex";
                document.getElementById('btn-banniere').style.marginTop = "0px";

                document.getElementById('onglet-banniere-mobile').style.display = "none";
                document.getElementById('btn-banniere').style.display = "flex";
                document.getElementById('btn-affiches').style.marginTop = "0px";

                document.getElementById('onglet-streampack-mobile').style.display = "none";
                document.getElementById('btn-streampack').style.display = "flex";
                document.getElementById('btn-esport').style.marginTop = "0px";

                document.getElementById('onglet-esport-mobile').style.display = "none";
                document.getElementById('btn-esport').style.display = "flex";
                document.getElementById('page2-services').style.marginBottom = "0px";
            }
        }
    }
}

function closeAllOngletAfficheMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-affiche-mobile').style.display = "none";
    document.getElementById('btn-affiches').style.display = "flex";
    document.getElementById('btn-streampack').style.marginTop= "0px";
}

function closeAllOngletAffiches(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-affiches').style.display = "none";
}

function openStreampack(){
    document.getElementById('onglet-streampack').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-streampack').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-streampack-mobile').style.display = "block";
            document.getElementById('btn-streampack').style.display = "none";
            document.getElementById('btn-esport').style.marginTop= "300px";
            if(document.getElementById('onglet-streampack-mobile').style.display = "block"){

                document.getElementById('onglet-logo-mobile').style.display = "none";
                document.getElementById('btn-logo').style.display = "flex";
                document.getElementById('btn-banniere').style.marginTop = "0px";

                document.getElementById('onglet-banniere-mobile').style.display = "none";
                document.getElementById('btn-banniere').style.display = "flex";
                document.getElementById('btn-affiches').style.marginTop = "0px";

                document.getElementById('onglet-affiche-mobile').style.display = "none";
                document.getElementById('btn-affiches').style.display = "flex";
                document.getElementById('btn-streampack').style.marginTop = "0px";

                document.getElementById('onglet-esport-mobile').style.display = "none";
                document.getElementById('btn-esport').style.display = "flex";
                document.getElementById('page2-services').style.marginBottom = "0px";
            }
        }
    }
}

function closeAllOngletStreampackMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-streampack-mobile').style.display = "none";
    document.getElementById('btn-streampack').style.display = "flex";
    document.getElementById('btn-esport').style.marginTop= "0px";
}

function closeAllOngletStreampack(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-streampack').style.display = "none";
}

function openEsport(){
    document.getElementById('onglet-esport').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-esport').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-esport-mobile').style.display = "block";
            document.getElementById('btn-esport').style.display = "none";
            document.getElementById('page2-services').style.marginBottom = "250px";
            if(document.getElementById('onglet-esport-mobile').style.display = "block"){

                document.getElementById('onglet-logo-mobile').style.display = "none";
                document.getElementById('btn-logo').style.display = "flex";
                document.getElementById('btn-banniere').style.marginTop = "0px";

                document.getElementById('onglet-banniere-mobile').style.display = "none";
                document.getElementById('btn-banniere').style.display = "flex";
                document.getElementById('btn-affiches').style.marginTop = "0px";

                document.getElementById('onglet-affiche-mobile').style.display = "none";
                document.getElementById('btn-affiches').style.display = "flex";
                document.getElementById('btn-streampack').style.marginTop = "0px";

                document.getElementById('onglet-streampack-mobile').style.display = "none";
                document.getElementById('btn-streampack').style.display = "flex";
                document.getElementById('btn-esport').style.marginTop = "0px";
            }
        }
    }
}

function closeAllOngletEsportMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-esport-mobile').style.display = "none";
    document.getElementById('btn-esport').style.display = "flex";
    document.getElementById('btn-streampack').style.marginTop= "0px";
    document.getElementById('page2-services').style.marginBottom = "0px"
}

function closeAllOngletEsport(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-esport').style.display = "none";
}

// CONSULTING


function openDossier(){
    document.getElementById('onglet-dossier').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-dossier').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-dossier-mobile').style.display = "block";
            document.getElementById('btn-dossier').style.display = "none";
            document.getElementById('btn-conseil').style.marginTop = "650px";
            if(document.getElementById('onglet-dossier-mobile').style.display = "block"){

                document.getElementById('onglet-conseil-mobile').style.display = "none";
                document.getElementById('btn-conseil').style.display = "flex";
                document.getElementById('btn-event').style.marginTop = "0px";

                document.getElementById('onglet-projet-mobile').style.display = "none";
                document.getElementById('btn-event').style.display = "flex";
                document.getElementById('page3-services').style.marginBottom = "0px";
            }
        }
    }
}

function closeAllOngletDossierMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-dossier-mobile').style.display = "none";
    document.getElementById('btn-dossier').style.display = "flex";
    document.getElementById('btn-conseil').style.marginTop = "0px";
}

function closeAllOngletDossier(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-dossier').style.display = "none";
}

function openConseil(){
    document.getElementById('onglet-conseil').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-conseil').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-conseil-mobile').style.display = "block";
            document.getElementById('btn-conseil').style.display = "none";
            document.getElementById('btn-event').style.marginTop = "550px";
            if(document.getElementById('onglet-conseil-mobile').style.display = "block"){

                document.getElementById('onglet-dossier-mobile').style.display = "none";
                document.getElementById('btn-dossier').style.display = "flex";
                document.getElementById('btn-conseil').style.marginTop = "0px";

                document.getElementById('onglet-projet-mobile').style.display = "none";
                document.getElementById('btn-event').style.display = "flex";
                document.getElementById('page3-services').style.marginBottom = "0px";
            }
        }
    }
}

function closeAllOngletConseilMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-conseil-mobile').style.display = "none";
    document.getElementById('btn-conseil').style.display = "flex";
    document.getElementById('btn-event').style.marginTop = "0px";
}

function closeAllOngletConseil(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-conseil').style.display = "none";
}

function openEvent(){
    document.getElementById('onglet-event').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-event').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-projet-mobile').style.display = "block";
            document.getElementById('btn-event').style.display = "none";
            document.getElementById('page3-services').style.marginBottom = "450px";
            if(document.getElementById('onglet-projet-mobile').style.display = "block"){

                document.getElementById('onglet-dossier-mobile').style.display = "none";
                document.getElementById('btn-dossier').style.display = "flex";
                document.getElementById('btn-conseil').style.marginTop = "0px";

                document.getElementById('onglet-conseil-mobile').style.display = "none";
                document.getElementById('btn-conseil').style.display = "flex";
                document.getElementById('btn-event').style.marginTop = "0px";
            }
        }
    }
}

function closeAllOngletProjetMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-projet-mobile').style.display = "none";
    document.getElementById('btn-event').style.display = "flex";
    document.getElementById('page3-services').style.marginBottom = "0px"
}

function closeAllOngletEvent(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-event').style.display = "none";
}

// WEB


function openVitrine(){
    document.getElementById('onglet-vitrine').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-vitrine').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-vitrine-mobile').style.display = "block";
            document.getElementById('btn-vitrine').style.display = "none";
            document.getElementById('btn-ecommerce').style.marginTop = "550px";
            if(document.getElementById('onglet-vitrine-mobile').style.display = "block"){
                
                document.getElementById('onglet-ecommerce-mobile').style.display = "none";
                document.getElementById('btn-ecommerce').style.display = "flex";
                document.getElementById('page4-services').style.marginBottom = "0px";
            }
        }
    }
}

function closeAllOngletVitrineMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-vitrine-mobile').style.display = "none";
    document.getElementById('btn-vitrine').style.display = "flex";
    document.getElementById('btn-ecommerce').style.marginTop = "0px";
}

function closeAllOngletVitrine(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-vitrine').style.display = "none";
}

function openEcommerce(){
    document.getElementById('onglet-ecommerce').style.display = "flex";
    document.getElementById('close-onglet-service').style.display = "flex";

    if ("matchMedia" in window){
        if(window.matchMedia("(max-width:1000px)").matches){
            document.getElementById('onglet-ecommerce').style.display = "none";
            document.getElementById('close-onglet-service').style.display = "none";
            document.getElementById('onglet-ecommerce-mobile').style.display = "block";
            document.getElementById('btn-ecommerce').style.display = "none";
            document.getElementById('page4-services').style.marginBottom = "300px";
            if(document.getElementById('onglet-ecommerce-mobile').style.display = "block"){
                
                document.getElementById('onglet-vitrine-mobile').style.display = "none";
                document.getElementById('btn-vitrine').style.display = "flex";
                document.getElementById('btn-ecommerce').style.marginTop = "0px";
            }
        }
    }
}

function closeAllOngletEcommerceMobile(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-ecommerce-mobile').style.display = "none";
    document.getElementById('btn-ecommerce').style.display = "flex";
    document.getElementById('page4-services').style.marginBottom = "0px";
}

function closeAllOngletEcommerce(){
    document.getElementById('close-onglet-service').style.display = "none";
    document.getElementById('onglet-ecommerce').style.display = "none";
}


// const btnVitrine = document.getElementById('btn-vitrine');
// const btnEcommerce = document.getElementById('btn-ecommerce');

// btnVitrine.onclick = () => document.getElementById('onglet-vitrine').style.display = "flex";
// btnEcommerce.onclick = () => document.getElementById('onglet-ecommerce').style.display = "flex";


// ANCRE DESIGN

// ANCRE STREAMPACK


function changeToStreampack05(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/stream_pack-05-1.webp";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche pleine.png";
}


function changeToDarkwin(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Darkwin.webp";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('ancre-streampack').style.marginTop = "2px";
}

function changeToInsaw(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Insaw.webp";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('ancre-streampack').style.marginTop = "2px";
}

function changeToKalax(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Kalax.webp";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('ancre-streampack').style.marginTop = "3px";
}

function changeToNature(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Nature.webp";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('ancre-streampack').style.marginTop = "5px";
}

function changeToRed(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_ReD.webp";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('ancre-streampack').style.marginTop = "5px";
}

function changeToValorant(){
    document.getElementById('AncreDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-streampack').src="images/services/page2/details/steampack/Streampack_Valorant.webp";
    document.getElementById('AncreInsaw').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreNature').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreValorant').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreStreampack05').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('ancre-streampack').style.marginTop = "5px";
}

// ANCRE BANNIERE

// function changeToDeathrow(){
//     document.getElementById('AncreAgrios').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('img-banniere').src="images/services/page2/details/banniere/Banniere_Deathrow.png";
//     document.getElementById('AncreDeathrow').src="images/accueil/Ancre/blanche pleine.png";
//     document.getElementById('AncreInsawBanniere').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('AncreTestBanniere').src="images/accueil/Ancre/blanche vide.png";
// }

// // function changeToAgrios(){
// //     document.getElementById('AncreAgrios').src="images/accueil/Ancre/blanche pleine.png";
// //     document.getElementById('img-banniere').src="images/services/page2/details/banniere/Bannière_Agrios.webp";
// //     document.getElementById('AncreDeathrow').src="images/accueil/Ancre/blanche vide.png";
// //     document.getElementById('AncreInsawBanniere').src="images/accueil/Ancre/blanche vide.png";
// //     document.getElementById('AncreTestBanniere').src="images/accueil/Ancre/blanche vide.png";
// // }

function changeToInsawBanniere(){
    // document.getElementById('AncreAgrios').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-banniere').src="images/services/page2/details/banniere/Bannière_Insaw.png";
    // document.getElementById('AncreDeathrow').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreInsawBanniere').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreTestBanniere').src="images/accueil/Ancre/blanche vide.png";
}

function changeToTestBanniere(){
    // document.getElementById('AncreAgrios').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-banniere').src="images/services/page2/details/banniere/Bannière_Test.png";
    // document.getElementById('AncreDeathrow').src="images/accueil/Ancre/blanche vide.png";
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
    document.getElementById('img-esport').src="images/services/page2/details/esport/Esport_Venasty-1.webp";
    document.getElementById('AncreEsportVenasty').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreEsportDeathrow').src="images/accueil/Ancre/blanche vide.png";
}

function changToEsportDeathrow(){
    document.getElementById('AncreEsportUbiteam').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-esport').src="images/services/page2/details/esport/Esport_Deathrow 1.png";
    document.getElementById('AncreEsportVenasty').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreEsportDeathrow').src="images/accueil/Ancre/blanche pleine.png";
}

// ANCRE LOGO

function changeToLogoDynastie(){
    document.getElementById('AncreLogoDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-logo').src="images/services/page2/details/logo/Logo_Dynastie.webp";
    document.getElementById('AncreLogoDysnastie').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreLogoEyxoo').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoNotEldrie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoSN').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoZiakCorp').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('ancre-logo').style.marginTop = "8px";
}

function changeToLogoDarkwin(){
    document.getElementById('AncreLogoDarkwin').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-logo').src="images/services/page2/details/logo/Logo_DarkWin_1.webp";
    document.getElementById('AncreLogoDysnastie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoEyxoo').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoNotEldrie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoSN').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoZiakCorp').src="images/accueil/Ancre/blanche vide.png";
}

function changeToLogoEyxoo(){
    document.getElementById('AncreLogoDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-logo').src="images/services/page2/details/logo/Logo_Eyxoo.webp";
    document.getElementById('AncreLogoDysnastie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoEyxoo').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreLogoKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoNotEldrie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoSN').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoZiakCorp').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('ancre-logo').style.marginTop = "8px";
}

function changeToLogoKalax(){
    document.getElementById('AncreLogoDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-logo').src="images/services/page2/details/logo/Logo_Kalax.webp";
    document.getElementById('AncreLogoDysnastie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoEyxoo').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoKalax').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreLogoNotEldrie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoSN').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoZiakCorp').src="images/accueil/Ancre/blanche vide.png";
}

function changeToLogoNotEldrie(){
    document.getElementById('AncreLogoDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-logo').src="images/services/page2/details/logo/Logo_NotEldrie.webp";
    document.getElementById('AncreLogoDysnastie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoEyxoo').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoNotEldrie').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreLogoRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoSN').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoZiakCorp').src="images/accueil/Ancre/blanche vide.png";
}

function changeToLogoReD(){
    document.getElementById('AncreLogoDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-logo').src="images/services/page2/details/logo/Logo_ReD.webp";
    document.getElementById('AncreLogoDysnastie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoEyxoo').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoNotEldrie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoRed').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreLogoSN').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoZiakCorp').src="images/accueil/Ancre/blanche vide.png";
}

function changeToLogoSN(){
    document.getElementById('AncreLogoDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-logo').src="images/services/page2/details/logo/Logo_SN.webp";
    document.getElementById('AncreLogoDysnastie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoEyxoo').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoNotEldrie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoSN').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreLogoZiakCorp').src="images/accueil/Ancre/blanche vide.png";
}

function changeToLogoZiakCorp(){
    document.getElementById('AncreLogoDarkwin').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-logo').src="images/services/page2/details/logo/Logo_ZiakCorp.webp";
    document.getElementById('AncreLogoDysnastie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoEyxoo').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoKalax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoNotEldrie').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoRed').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoSN').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreLogoZiakCorp').src="images/accueil/Ancre/blanche pleine.png";
}

// ANCRE AFFICHE

// const mediaQueries1800 = window.matchMedia('min-width: 1800px');


function changeToAfficheConanExile(){
    document.getElementById('AncreConanExile').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-affiche').src="/images/services/page2/details/affiche/Affiche_ConanExile-1.webp";
    document.getElementById('AncreDraz').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreMax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreAfficheVenasty').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-affiche').style.paddingLeft = "60px";
    document.getElementById('img-affiche').style.paddingRight = "60px";
}

function changeToAfficheDraz(){
    document.getElementById('AncreConanExile').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-affiche').src="/images/services/page2/details/affiche/Affiche_Draz.png";
    document.getElementById('AncreDraz').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('AncreMax').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreAfficheVenasty').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('img-affiche').style.paddingLeft = "60px";
    document.getElementById('img-affiche').style.paddingRight = "60px";
}

// function changeToAfficheMax(){
//     document.getElementById('AncreConanExile').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('img-affiche').src="/images/services/page2/details/affiche/Affiche_Max-Verstappen.png";
//     document.getElementById('AncreDraz').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('AncreMax').src="images/accueil/Ancre/blanche pleine.png";
//     document.getElementById('AncreAfficheVenasty').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('img-affiche').style.width = "343px";
//     document.getElementById('img-affiche').style.height = "485px";
//     document.getElementById('img-affiche').style.paddingLeft = "288.5px";
//     document.getElementById('img-affiche').style.paddingRight = "288.5px";

// }

// function changeToAfficheAfficheVenasty(){
//     document.getElementById('AncreConanExile').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('img-affiche').src="/images/services/page2/details/affiche/Affiche_Venasty.png";
//     document.getElementById('AncreDraz').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('AncreMax').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('AncreAfficheVenasty').src="images/accueil/Ancre/blanche pleine.png";
//     document.getElementById('img-affiche').style.width = "343px";
//     document.getElementById('img-affiche').style.height = "485px";
//     document.getElementById('img-affiche').style.paddingLeft = "288.5px";
//     document.getElementById('img-affiche').style.paddingRight = "288.5px";
// }


// ANCRE PAGE CONSULTING

// ANCRE DOSSIER

// function changeToDossierEvent(){
//     document.getElementById('AncreVenastyEvent').src="images/accueil/Ancre/blanche pleine.png";
//     document.getElementById('img-dossier').src="images/services/page3/img produits/dossier-Event.webp";
//     document.getElementById('AncreMarcheR6').src="images/accueil/Ancre/blanche vide.png";
//     document.getElementById('AncreOnesEsport').src="images/accueil/Ancre/blanche vide.png";
// }

function changeToDossierEtdMarche(){
    document.getElementById('AncreMarcheR6').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-dossier').src="images/services/page3/img produits/étude-de-marché.webp";
    // document.getElementById('AncreVenastyEvent').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreOnesEsport').src="images/accueil/Ancre/blanche vide.png";
}

function changeToOnestEsport(){
    document.getElementById('AncreOnesEsport').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-dossier').src="images/services/page3/img produits/OnestEsport.png";
    // document.getElementById('AncreVenastyEvent').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreMarcheR6').src="images/accueil/Ancre/blanche vide.png";
}

// ANCRE CONSEIL

function changeToStratCom(){
    document.getElementById('AncreStratCom').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-stratcom').src="images/services/page3/img produits/tableau-stratégie-communication.webp";
    document.getElementById('AncreMarketing').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreOptiOrga').src="images/accueil/Ancre/blanche vide.png";
}

function changeToMarketing(){
    document.getElementById('AncreMarketing').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-stratcom').src="images/services/page3/img produits/Stratégie-Marketing.webp";
    document.getElementById('AncreStratCom').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreOptiOrga').src="images/accueil/Ancre/blanche vide.png";
}

function changeToOptiOrga(){
    document.getElementById('AncreOptiOrga').src="images/accueil/Ancre/blanche pleine.png";
    document.getElementById('img-stratcom').src="images/services/page3/img produits/optimisation-de-lorganisation.webp";
    document.getElementById('AncreStratCom').src="images/accueil/Ancre/blanche vide.png";
    document.getElementById('AncreMarketing').src="images/accueil/Ancre/blanche vide.png";
}