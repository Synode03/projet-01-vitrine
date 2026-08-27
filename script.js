const message = document.querySelector("#message-contact");
const bouton = document.querySelector("button");
bouton.addEventListener("click", function() {
    if (message.textContent === "") {
        message.textContent = "Merci de m'avoir contacté !";
        message.classList.add("visible");
     } else {
        message.textContent = "";
        message.classList.remove("visible");
    }
});