function sendMail(){
    var name = document.getElementById("name").value.trim()
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if(!name || !email || !message){
        alert("All fields are required");
    }

    var params = {
        name: name,
        email: email,
        message: message,
    };

    const serviceId = "service_lbm4wjg";
    const templateId = "template_p9qgali";

    emailjs
        .send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.log(err);
            alert("An error occured while sending your message. Please try again.");
        });
}