const fristName = document.getElementById("fristName"),
    lastName = document.getElementById("lastName"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message");

const popupContainer = document.querySelector(".popup-container"),
    form = document.querySelector("form"),
    spinner = document.querySelector(".spinner");

fristName.addEventListener("keyup", () => {
    function validateName(name) {
        const namePattern = /^[A-Za-z\- ]+$/;
        return namePattern.test(name) && name.trim() !== "";
    }

    if (validateName(fristName.value)) {
        fristName.style.borderBottomColor = "#0050ff";
    } else {
        fristName.style.borderBottomColor = "#EF5771";
    }
});

lastName.addEventListener("keyup", () => {
    function validateName(name) {
        const namePattern = /^[A-Za-z\- ]+$/;
        return namePattern.test(name) && name.trim() !== "";
    }

    if (validateName(lastName.value)) {
        lastName.style.borderBottomColor = "#0050ff";
    } else {
        lastName.style.borderBottomColor = "#EF5771";
        console.log("not valid l name");
    }
});

email.addEventListener("keyup", () => {
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    if (validateEmail(email.value)) {
        email.style.borderBottomColor = "#0050ff";
    } else {
        email.style.borderBottomColor = "#EF5771";
    }
});

function handleClick() {
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function validateName(name) {
        const namePattern = /^[A-Za-z\- ]+$/;
        return namePattern.test(name) && name.trim() !== "";
    }

    if (validateEmail(email.value)) {
        email.style.borderBottomColor = "#0050ff";
    } else {
        email.style.borderBottomColor = "#EF5771";
    }

    if (validateName(fristName.value)) {
        fristName.style.borderBottomColor = "#0050ff";
    } else {
        fristName.style.borderBottomColor = "#EF5771";
    }

    if (validateName(lastName.value)) {
        lastName.style.borderBottomColor = "#0050ff";
    } else {
        lastName.style.borderBottomColor = "#EF5771";
    }

    if (
        validateEmail(email.value) &&
        validateName(fristName.value) &&
        validateName(lastName.value)
    ) {
        spinner.style.display = "inline-block";
        sendEmail();
    }
}

async function sendEmail() {
    const params = {
        from_name: `${fristName.value} ${lastName.value}`,
        email: email.value,
        to_name: "ahmed",
        subject: subject.value,
        message: message.value,
    };

    await emailjs
        .send("service_37a1cot", "template_42tin8f", {
            from_name: params.from_name,
            to_name: params.to,
            email: params.email,
            subject: params.subject,
            message: params.message,
        })
        .then(
            function () {
                spinner.style.display = "none";
                popupContainer.style.display = "block";
                form.classList.add("hidden");
            },
            function (error) {
                console.error("Error sending email: ", error);
            }
        );
}


function closePopup() {
    popupContainer.style.display = "none";
    form.classList.remove("hidden");
    const formInputs = document.querySelectorAll("form input");
    formInputs.forEach((input) => {
        input.style.borderBottomColor = "";
        input.value = "";
    });
    const formTextarea = document.querySelector("form textarea");
    formTextarea.value = "";
}