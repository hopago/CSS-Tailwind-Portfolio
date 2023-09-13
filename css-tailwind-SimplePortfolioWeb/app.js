const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body");
const moon = document.querySelector("#moon")

hamburger.addEventListener("click", () => {

    let hamburgerChildren = [];

    for(let i = 0; i < hamburger.childNodes.length; i++) {
        if(i % 2 === 1) {
            hamburgerChildren.push(hamburger.childNodes[i]);
        }
    }

    menu.classList.toggle("hidden");
    hamburgerChildren.forEach(child => {
        child.classList.toggle("bg-black");
        child.classList.toggle("bg-white");
    });

});

hLinks.forEach(link => 
    link.addEventListener("click", () => {
        let hamburgerChildren = [];

        for(let i = 0; i < hamburger.childNodes.length; i++) {
            if(i % 2 === 1) {
                hamburgerChildren.push(hamburger.childNodes[i]);
            }
        }
    
        menu.classList.toggle("hidden");
        hamburgerChildren.forEach(child => {
            child.classList.toggle("bg-black");
            child.classList.toggle("bg-white");
        });
    })
);

moon.addEventListener("click", () => {
    body.classList.toggle("dark");
});