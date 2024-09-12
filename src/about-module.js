import chefImgFile from "../assets/images/chef.jpg";

// let content = document.getElementById("content");

export function generateAbout(){ 
    let content = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "History of Yakitori Japan:";
    content.appendChild(title);

    return content;
};
