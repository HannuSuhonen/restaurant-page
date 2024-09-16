import "./styles.css"
import { generateHome } from "./home-module";
import { generateMenu } from "./menu-module";
import { generateAbout } from "./about-module";

let content = document.getElementById("content");
content.appendChild(generateHome());

(function initButtonListeners(){
    let homeBtn = document.querySelector(".home-button");
    homeBtn.addEventListener("click", () => {
        updatePageContent(generateHome());
    });
    
    let menuBtn = document.querySelector(".menu-button");
    menuBtn.addEventListener("click", () => {
        updatePageContent(generateMenu());
    });

    let aboutBtn = document.querySelector(".about-button");
    aboutBtn.addEventListener("click", () => {
        updatePageContent(generateAbout());
    });
})();

function updatePageContent(div){
    content.innerHTML = "";
    content.appendChild(div);
}

