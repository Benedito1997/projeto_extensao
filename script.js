function loadAndRedirect(event) {
    event.preventDefault(); 
    let button = document.getElementById("whatsappButton");
    let buttonText = document.getElementById("buttonText");
    let loadingText = document.getElementById("loadingText");

    buttonText.style.display = "none";
    loadingText.style.display = "inline"; 
    button.style.pointerEvents = "none"; 

    setTimeout(() => {
        window.open(button.href, '_blank');
    }, 2000); 
}