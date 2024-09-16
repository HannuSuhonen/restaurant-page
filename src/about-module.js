import chefImgFile from "../assets/images/chef.jpg";

// let content = document.getElementById("content");

export function generateAbout(){ 
    let content = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Hours of Operation";
    content.appendChild(title);

    const para = document.createElement("p")
    para.classList.add("newline");
    para.textContent = "Monday - Friday \n Lunch: 12:00 PM - 3:00 PM \n Dinner: 5:30 PM - 10:00 PM \nSaturday \n Dinner Dinner: 5:30 PM - 10:30 PM \nSunday \n Closed"
    content.appendChild(para);

    return content;
};
