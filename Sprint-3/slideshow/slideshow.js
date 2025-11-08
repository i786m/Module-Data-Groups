const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

//dom elements
const image = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

//state
let currentIndex = 0;

//event listeners
forwardBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    image.src = images[currentIndex];
});

backwardBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    image.src = images[currentIndex];
});

window.onload = () => {
    image.src = images[currentIndex];
};
