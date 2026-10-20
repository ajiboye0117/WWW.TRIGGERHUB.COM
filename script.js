  const form = document.getElementById("bookingForm");

   const whatsappNumber = "2349122289778"; 

   form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const details = document.getElementById("details").value;
    
    const message =
`Hello TRIGGER HUB!

I would like to book a tattoo appointment.

Name: ${name}

Preferred Date: ${date}

Tattoo Details:
${details}

Thank you!`;

    const whatsappMessage = encodeURIComponent(message);
    
    const whatsappLink =
        "https://wa.me/" +
        whatsappNumber + 
        "?text=" +
        whatsappMessage;

    window.open(whatsappLink, "_blank");

});


