function vegetarianMenu(menu) {
    const menuNode = document.querySelector("#menu");
    const vegetarianOptions = menu.filter(
        (option) => option.isVegetarian === true
    );
    vegetarianOptions.forEach((option) => {
        let dish = document.createElement("li");
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    })
}

const menu = [
    {
        name: "Chicken parmesan",
        isVegetarian: false
    },
    {
        name: "Stuffed shells",
        isVegetarian: true
    },
    {
        name: "Spaghetti and meatballs",
        isVegetarian: false,
    },
    {
        name: "Tiramisu",
        isVegetarian: true,
    }
]

vegetarianMenu(menu);