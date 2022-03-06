const imageDiv = document.getElementById('img-projet');
const arrowRight = document.getElementById('right_arrow');
const arrowLeft = document.getElementById('right_left');
const titreProjet = document.getElementById('projet-h3');

const slideNumber = document.getElementById('arrowSlide');

function modifyRight() {
    if (slideNumber.firstChild.nodeValue == '1/4'){
        slideNumber.firstChild.nodeValue = '2/4'
        imageDiv.style.backgroundImage= 'url("images/accueil/fondprojet/affiche_start.webp")'
        titreProjet.firstChild.nodeValue = 'AFFICHE'
    } else if (slideNumber.firstChild.nodeValue == '2/4') {
        slideNumber.firstChild.nodeValue = '3/4'
        imageDiv.style.backgroundImage= 'url("images/accueil/fondprojet/streampack_red.webp")'
        titreProjet.firstChild.nodeValue = 'STREAMPACK'
    } else if (slideNumber.firstChild.nodeValue == '3/4') {
        slideNumber.firstChild.nodeValue = '4/4'
        imageDiv.style.backgroundImage= 'url("images/accueil/fondprojet/structure_ubiteam.webp")'
        titreProjet.firstChild.nodeValue = 'ESPORT'
    }
}

function modifyLeft() {
    if (slideNumber.firstChild.nodeValue == '4/4'){
        slideNumber.firstChild.nodeValue = '3/4'
        imageDiv.style.backgroundImage= 'url("images/accueil/fondprojet/streampack_red.webp")'
        titreProjet.firstChild.nodeValue = 'STREAMPACK'
    } else if (slideNumber.firstChild.nodeValue == '3/4') {
        slideNumber.firstChild.nodeValue = '2/4'
        imageDiv.style.backgroundImage= 'url("images/accueil/fondprojet/affiche_start.webp")'
        titreProjet.firstChild.nodeValue = 'AFFICHE'
    } else if (slideNumber.firstChild.nodeValue == '2/4') {
        slideNumber.firstChild.nodeValue = '1/4'
        imageDiv.style.backgroundImage= 'url("images/accueil/fondprojet/projet-streampack-1.webp")'
        titreProjet.firstChild.nodeValue = 'STREAMPACK'
    }
}