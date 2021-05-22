let parallaxContainer = window.getComputedStyle(document.querySelector(".parallax-img"));
let parallaxImg = parallaxContainer.getPropertyValue("height").toString();

let bg = document.querySelector(".bg");
let moon = document.querySelector(".moon");
let mountain = document.querySelector(".mountain");
let road = document.querySelector(".road");
let parallaxText = document.querySelector(".parallax-text");
let parallaxVanish = document.querySelector(".parallax");

window.addEventListener("scroll", () => {
    let shift = window.scrollY;

    bg.style.top = shift * 0.3 + "px";
    moon.style.left = shift * -0.5 + "px";
    mountain.style.top = shift * 0.3 + "px";
    road.style.top = shift * 0.3 + "px";
    parallaxVanish.style.paddingTop = shift * 0.3 + "px";
    let parallaxTopStyle = (parallaxText.style.top = shift * 1 + "px");

    parseInt(parallaxTopStyle) > 300
        ? (parallaxText.style.display = "none")
        : (parallaxText.style.display = "block");
});
document.addEventListener("DOMContentLoaded", () => {
    let imgStyle = window.getComputedStyle(document.querySelector(".parallax-img"));
    let imgHeight = imgStyle.getPropertyValue("height").toString();

    console.log(imgHeight);
    document.querySelector(".parallax").style.height = imgHeight;
});
