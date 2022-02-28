function changeAvis() {
    if (document.getElementById('avis1').style.display = "flex"){
        document.getElementById('avis1').style.display = "none";
        document.getElementById('avis2').style.display = "none";
        document.getElementById('avis3').style.display = "flex";
        document.getElementById('avis4').style.display = "flex";
    } else if(document.getElementById('avis3').style.display = "flex"){
        document.getElementById('avis1').style.display = "flex";
        document.getElementById('avis2').style.display = "flex";
        document.getElementById('avis3').style.display = "none";
        document.getElementById('avis4').style.display = "none";
    }
}