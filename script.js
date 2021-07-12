var bg = document.getElementById("bg");

function buttonPress() {
    if (getComputedStyle(bg).animation.includes("fel")) {
        bg.style.animation = "le 0.7s";
        bg.style.animationFillMode = "forwards";
    } else {
        bg.style.animation = "fel 0.7s";
        bg.style.animationFillMode = "forwards";
    }
}