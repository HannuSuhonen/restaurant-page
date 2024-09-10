import chefImgFile from "../assets/images/chef.jpg";

let content = document.getElementById("content");
export function generateHome(){ 
    const title = document.createElement("h1");
    title.textContent = "Yakitori Japan!";
    content.appendChild(title);

    const chefImg = document.createElement("img");
    chefImg.src = chefImgFile
    content.appendChild(chefImg);
};

