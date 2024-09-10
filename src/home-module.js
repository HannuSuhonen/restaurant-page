import chefImgFile from "../assets/images/chef.jpg";

let content = document.getElementById("content");

export function generateHome(){ 
    const title = document.createElement("h1");
    title.textContent = "Yakitori Japan!";
    content.appendChild(title);

    const subtitle = document.createElement("h2");
    subtitle.textContent = "Welcome to Yakitori Japan, where tradition meets innovation in every bite."
    content.appendChild(subtitle);
    
    const chefImg = document.createElement("img");
    chefImg.src = chefImgFile
    content.appendChild(chefImg);

    const firstParagrah = document.createElement("p")
    firstParagrah.textContent = "Nestled in the heart of Sotenbori, Yakitori Japan invites you on a culinary journey through Japan's rich flavors and timeless traditions. Our head chef, Hiroshi Tanaka, brings over 20 years of experience and a passion for perfection to every dish he creates. Trained in the renowned kitchens of Tokyo, Chef Hiroshi combines traditional techniques with modern flair, crafting an exquisite menu that honors the essence of Japanese cuisine while embracing fresh, seasonal ingredients";
    content.appendChild(firstParagrah);

    const secondParagrah = document.createElement("p")
    secondParagrah.textContent = "From the delicate slices of sashimi to the artfully rolled sushi, each plate is a testament to Chef Hiroshi's dedication to his craft. At Kurohana Sushi, every meal is more than just food; it's an experience designed to delight the senses and bring you closer to the heart of Japan.";
    content.appendChild(secondParagrah);

    const thirdParagrah = document.createElement("p")
    thirdParagrah.textContent = "Join us for an unforgettable dining experience where the artistry of Japanese cooking comes alive on your plate.";
    content.appendChild(thirdParagrah);
};

