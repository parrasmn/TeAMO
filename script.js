const botonInicio = document.getElementById("botonInicio");
const boton = document.getElementById("Button");
const audio = document.getElementById("audioInicio");
let angulo = 0;
let intervalRotacion;


function reproducirMusica() {
    if (!audio) return;
    audio.volume = 0.5;
    if (audio.paused) {
        audio.play().catch(() => {
            console.log(
                "El navegador bloqueó la reproducción automática."
            );

        });
    }
}

function iniciarIntro() {
    botonInicio.style.display = "none";

    let horizontal = document.getElementById("horizontal");

    if (horizontal) {
        horizontal.style.display = "none";
    }
    let analisis = document.getElementById("analisis");

    if (analisis) {
        analisis.style.display = "none";
    }

    setTimeout(function() {

        let elem = document.getElementById("h1");

        if (elem) {
            elem.style.display = "block";
        }
    }, 100);

    setTimeout(function() {
        let elem = document.getElementById("h2");
        if (elem) {
            elem.style.display = "block";
        }
    }, 2000);

    setTimeout(function() {
        let elem = document.getElementById("h3");
        if (elem) {
            elem.style.display = "block";
        }
    }, 3200);

    setTimeout(function() {

        let elem = document.getElementById("h4");

        if (elem) {
            elem.style.display = "block";
        }

    }, 4200);

    setTimeout(function() {
        let elem3 = document.getElementById("sol");
        if (elem3) {
            elem3.style.display = "block";
        }
        if (boton) {
            boton.style.display = "block";
        }
    }, 4200);

    if (!intervalRotacion) {
        intervalRotacion = setInterval(() => {
            const objeto =
                document.getElementById("sol-img");
            if (!objeto) return;
            angulo += 0.4;
            objeto.style.transform =
                `rotate(${angulo}deg)`;
        }, 100);
    }
    setTimeout(reproducirMusica, 5000);
}

if (botonInicio) {

    botonInicio.addEventListener(
        "click",
        iniciarIntro
    );
}

if (boton) {
    boton.addEventListener("click", function() {
        const enlace =
            boton.getAttribute("data-href");
        window.open(enlace, "_blank");
    });
}