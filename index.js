//dynamic height for parallaxContainer
let parallaxContainer = window.getComputedStyle(document.querySelector(".parallax-img"));
let parallaxImg = parallaxContainer.getPropertyValue("height").toString();

//parallax effect for pngs
let bg = document.querySelector(".bg");
let moon = document.querySelector(".moon");
let mountain = document.querySelector(".mountain");
let road = document.querySelector(".road");

//dynamic vanishing for text
let parallaxText = document.querySelector(".parallax-text");
let parallaxVanish = document.querySelector(".parallax");
let beforeStyle = window.getComputedStyle(document.querySelector(".parallax", "::before"));
let marginTopBefore = beforeStyle.getPropertyValue("margin-top");
console.log(marginTopBefore);

document.addEventListener("DOMContentLoaded", () => {
    let imgStyle = window.getComputedStyle(document.querySelector(".parallax-img"));
    let imgHeight = imgStyle.getPropertyValue("height").toString();

    // console.log(imgHeight);
    document.querySelector(".parallax").style.height = imgHeight;
});

window.addEventListener("scroll", () => {
    let shift = window.scrollY;
    marginTopBefore = shift * 1.2 + "px";

    bg.style.top = shift * 0.3 + "px";
    moon.style.left = shift * -0.2 + "vh";
    mountain.style.top = shift * 0.3 + "px";
    road.style.top = shift * 0.3 + "px";
    parallaxVanish.style.paddingTop = shift * 0.3 + "px";

    let parallaxTopStyle = (parallaxText.style.top = shift * 1 + "px");

    //responsive ajustments
    parseInt(parallaxTopStyle) > 310
        ? (parallaxText.style.display = "none")
        : (parallaxText.style.display = "block");

    if (parseInt(parallaxContainer.width) < 835 && parseInt(parallaxTopStyle) > 190) {
        parallaxText.style.display = "none";
    } else if (parseInt(parallaxContainer.width) < 525 && parseInt(parallaxTopStyle) > 90) {
        parallaxText.style.display = "none";
    }
});
