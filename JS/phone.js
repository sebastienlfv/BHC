
function openBurger() {
    document.getElementById('burger-content').style.display = "flex";

    if (document.getElementById('burger-content').style.display = "flex"){
        document.getElementById('btn-burger').style.display = "none";
        document.getElementById('close-burger').style.display = "flex";
    }
}

function closeBurger() {
    document.getElementById('burger-content').style.display = "none";

    if (document.getElementById('burger-content').style.display = "none"){
        document.getElementById('btn-burger').style.display = "flex";
        document.getElementById('close-burger').style.display = "none";
    }
}
