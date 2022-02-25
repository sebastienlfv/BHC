const imageDiv = document.getElementById('img-projet');
const arrowRight = document.getElementById('right_arrow');
const arrowLeft = document.getElementById('right_left');
const titreProjet = document.getElementById('projet-h3');

const slideNumber = document.getElementById('arrowSlide');

function modifyRight() {
    if (slideNumber.firstChild.nodeValue == '1/4'){
        slideNumber.firstChild.nodeValue = '2/4'
        imageDiv.style.backgroundImage= 'url("images/services/page2/details/esport/Esport_Venasty-1.webp")'
        titreProjet.firstChild.nodeValue = 'ESPORT'
    } else if (slideNumber.firstChild.nodeValue == '2/4') {
        slideNumber.firstChild.nodeValue = '3/4'
        imageDiv.style.backgroundImage= 'url("images/services/page2/details/steampack/Streampack_Darkwin.png")'
        titreProjet.firstChild.nodeValue = 'STREAMPACK'
    } else if (slideNumber.firstChild.nodeValue == '3/4') {
        slideNumber.firstChild.nodeValue = '4/4'
        imageDiv.style.backgroundImage= 'url("images/services/page2/details/affiche/Affiche_ConanExile-1.webp")'
        titreProjet.firstChild.nodeValue = 'AFFICHE'
    }
}

function modifyLeft() {
    if (slideNumber.firstChild.nodeValue == '4/4'){
        slideNumber.firstChild.nodeValue = '3/4'
        imageDiv.style.backgroundImage= 'url("images/services/page2/details/steampack/Streampack_Darkwin.png")'
        titreProjet.firstChild.nodeValue = 'STREAMPACK'
    } else if (slideNumber.firstChild.nodeValue == '3/4') {
        slideNumber.firstChild.nodeValue = '2/4'
        imageDiv.style.backgroundImage= 'url("images/services/page2/details/esport/Esport_Venasty-1.webp")'
        titreProjet.firstChild.nodeValue = 'ESPORT'
    } else if (slideNumber.firstChild.nodeValue == '2/4') {
        slideNumber.firstChild.nodeValue = '1/4'
        imageDiv.style.backgroundImage= 'url("images/services/page2/fond-stream-survol 1.png")'
        titreProjet.firstChild.nodeValue = 'STREAMPACK'
    }
}