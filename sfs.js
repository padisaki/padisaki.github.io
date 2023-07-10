document.getElementById("button").addEventListener("click", submitButton)

function submitButton() {
    let name = document.getElementById("name").value;
    let fees = document.getElementById("fees").value;
    let exam = document.getElementById("exam").value;

    if (name.length < 5 || name == Number(name)) {
        alert(`Incorrect name`)
    }

    if (fees < 4000 && exam <70) {
        alert(`You are not eligible to graduate.Pay outstanding fees and retake examination`)
    }

    if (fees == 4000 && exam >= 70) {
        alert(`You are eligible to graduate. Book an appointment for your certificate`)
    }

    if (fees == 4000 && exam < 70) {
        alert(`You are not eligible to graduate. Retake the examination`)
    }

    if (fees < 4000 && exam > 70) {
        alert(`You are not eligible to graduate. Pay outstanding fees`)
    }
}