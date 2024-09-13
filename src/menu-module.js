let appetizerMealsList = [
    "Edamame - Lightly salted, steamed soybeans.", 
    "Shishito Peppers - Charred shishito peppers tossed with sea salt and citrus zest.", 
    "Agedashi Tofu - Crispy tofu served in a warm, savory dashi broth with grated daikon and green onions.", 
    "Hamachi Carpaccio - Thinly sliced yellowtail drizzled with yuzu soy sauce, topped with jalapeño and microgreens.",
    "Wagyu Tataki - Seared wagyu beef served with ponzu sauce and garnished with garlic chips and scallions"
];
let sushiMealsList = [
    "Maguro (Tuna) - $6", 
    "Hamachi (Yellowtail) - $5", 
    "Sake (Salmon) - $5", 
    "Hotate (Scallop) - $7",
    "Unagi (Freshwater Eel) - $6"
];
let SignatureRolls = [
    "Kurohana Roll - Spicy tuna and avocado inside, topped with seared salmon, crispy tempura flakes, and house-made eel sauce. - $18", 
    "Matsuri Roll - Shrimp tempura, cucumber, and tobiko topped with slices of fresh tuna and drizzled with yuzu mayo. - $20", 
    "Dragon Roll - Grilled unagi, cucumber, and avocado topped with mango slices and sweet unagi sauce. - $22", 
    "Sunset Roll - Crab, avocado, and cucumber topped with salmon, lemon slices, and a light ponzu glaze. - $19",
    "Zen Garden Roll (Vegetarian) - Shiso leaf, pickled radish, cucumber, and avocado wrapped in soy paper, served with a yuzu sesame dressing. - $16"
];
let mainCourses = [
    "Miso-Glazed Black Cod - A tender fillet of black cod marinated in a sweet miso glaze, served with a side of pickled vegetables. - $28", 
    "Wagyu Sukiyaki - A simmering pot of thinly sliced wagyu beef, tofu, mushrooms, and vegetables in a sweet soy broth. Served with a raw egg for dipping. - $38", 
    "Katsu Curry - Breaded pork cutlet served with a rich Japanese curry sauce over steamed rice. - $22",
    "Tempura Udon - Thick udon noodles served in a savory broth with shrimp and vegetable tempura on the side. - $20"
];
let desserts = [
    "Matcha Tiramisu - A creamy layered dessert infused with Japanese green tea. - $10", 
    "Mochi Ice Cream Trio - Chewy rice dough filled with your choice of matcha, strawberry, or mango ice cream. - $9", 
    "Yuzu Sorbet - A refreshing citrus sorbet with a hint of mint. - $8"
];
let beverages = [
    "Green Tea (Hot or Iced) - $4", 
    "House-Made Yuzu Lemonade - $6",
    "Sake Flight - A curated selection of three premium sakes. - $18",
    "Japanese Whiskey Selection – Starting at $15"
];
export function generateMenu(){ 
    let content = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Menu of Yakitori Japan:";
    content.appendChild(title);

    content.appendChild(generateMeals("Appetizers",appetizerMealsList));
    content.appendChild(generateMeals("Nigiri & Sushi",sushiMealsList));
    content.appendChild(generateMeals("Signature Rolls",SignatureRolls));
    content.appendChild(generateMeals("Main Courses",mainCourses));
    content.appendChild(generateMeals("Desserts",desserts));

    return content;
};

function generateMeals(title,meallist){
    const container = document.createElement("div");
    const subTitle = document.createElement("h2");
    subTitle.textContent = title;
    container.appendChild(subTitle)

    const list = document.createElement("ul");
    for (let i = 0; i < meallist.length; ++i) {
        let li = document.createElement('li');
        li.innerText = meallist[i];
        list.appendChild(li);
    }
    container.appendChild(list);
    return container;
}

