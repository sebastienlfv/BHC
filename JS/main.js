let streampack = document.getElementsByClassName("onglet1-page2");
let streampackDetails = document.getElementsByClassName("page-2-services__container__streampack");

streampack.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none"){
        streampackDetails.style.display = "none";
    } else {
        streampackDetails.style.display = "block";
    }
  })