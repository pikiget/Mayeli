document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".paper");
    const button = document.querySelector("button");
    let flipped = false;

    // Aplicamos la clase de bienvenida al inicio
    card.classList.add("welcome");

    button.addEventListener("click", function () {
        gsap.to(card, {
            duration: 0.5,
            y: -200,  // Mueve el cartel hacia arriba
            opacity: 0,
            ease: "power2.inOut",
            onComplete: () => {
                if (!flipped) {
                    card.innerHTML = "Mayeli, siempre enfrentas la vida con alegría y sigues avanzando, incluso cuando el camino se vuelve difícil. Eres una persona admirable, con una gran fortaleza y un corazón enorme. Me alegra que formes parte de la familia y que podamos compartir momentos juntos. De verdad, te admiro y te aprecio mucho. 💜✨";
                    card.classList.remove("welcome");
                    card.classList.add("final-message");
                    button.textContent = "Volver";
                } else {
                    card.innerHTML = "Hoy celebramos la fuerza, la valentía y la determinación de todas las mujeres. 💜 Da la vuelta y descubre un mensaje especial para ti. ✨";
                    card.classList.remove("final-message");
                    card.classList.add("welcome");
                    button.textContent = "Click aquí";
                }
                flipped = !flipped;

                // Hace aparecer la nueva carta con rebote
                gsap.fromTo(card, 
                    { y: 200, opacity: 0, scale: 0.8 },
                    { duration: 0.8, y: 0, opacity: 1, scale: 1, ease: "elastic.out(1, 0.5)" }
                );
            }
        });
    });
});


// Animación de corazones y chocolates flotantes
document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.getElementById("heart-container");

    function createFloatingElement() {
        const element = document.createElement("div");
        element.classList.add("heart");

        // Alternar entre corazón y chocolate
        element.innerHTML = Math.random() > 0.5 ? "💜" : "🍫";

        element.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en el ancho
        element.style.animationDuration = Math.random() * 2 + 3 + "s"; // Diferentes velocidades
        element.style.fontSize = Math.random() * 1.5 + 1 + "rem"; // Tamaño aleatorio
        heartContainer.appendChild(element);

        // Eliminar el elemento después de la animación
        setTimeout(() => {
            element.remove();
        }, 5000);
    }

    // Generar corazones y chocolates cada 500ms
    setInterval(createFloatingElement, 500);
});
