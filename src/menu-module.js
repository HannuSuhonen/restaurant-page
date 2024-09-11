import chefImgFile from "../assets/images/chef.jpg";

// let content = document.getElementById("content");

export function generateMenu(){ 
    let content = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Menu of Yakitori Japan:";
    content.appendChild(title);

    return content;
};

