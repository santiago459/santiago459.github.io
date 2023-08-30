"use strict"
document.addEventListener("DOMContentLoaded", () => {
    const buttonSubmitForm = document.querySelector('.send-msn-footer');
    const submitForm = document.querySelector(".class-input-submit");
    buttonSubmitForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_frfrpwt';
        const textareaValue = document.getElementById('textarea-footer');
        submitForm.value = "enviando...";

        const templateParams = {
            message: textareaValue,
        };
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                submitForm.value = "se envio correctamente";
                setTimeout(() => {
                    submitForm.value = "enviar";
                    textareaValue.value = "";
                }, 1500);
            })
            .catch((error) => {
                alert("ha ocurrido un error al enviar el correo, porfavor reinicie la pagina. " + error)
            });
    });
});