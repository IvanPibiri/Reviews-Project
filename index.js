// local data
const reviews = [
    {
        id: 1,
        name: "michael golprit",
        job: "actor",
        img: "https://i.postimg.cc/7LbRk6mt/pexels-andrea-piacquadio-845457.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
        id: 2,
        name: "carla kensington",
        job: "waitress",
        img: "https://i.postimg.cc/vmjNHsKY/pexels-andrea-piacquadio-762080.jpg",
        text: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet."
    },
    {
        id: 3,
        name: "serge baguette",
        job: "ux designer",
        img: "https://i.postimg.cc/pXt3FPLy/pexels-andrea-piacquadio-927451.jpg",
        text: "Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam."
    },
    {
        id: 4,
        name: "lucia parosside",
        job: "singer",
        img: "https://i.postimg.cc/1tqY8dxp/pexels-pixabay-354951.jpg",
        text: "Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. "
    }
];

// elements to change dinamically
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// buttons to change review
const prevBtn =document.querySelector(".prev-btn");
const nextBtn =document.querySelector(".next-btn");
const randomBtn =document.querySelector(".random-btn");

// starting review from the array
let currentItem = 0;

// function that shows the first item when content is loaded
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// function to show every property of every object of the array with data
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// function to show next item of the array
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    };
    showPerson(currentItem);
});

// function to show previous item of the array
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    };
    showPerson(currentItem);
});

// function to show random item of the array
randomBtn.addEventListener('click', function() {
    rndItem = Math.floor(Math.random() * reviews.length);
    showPerson(rndItem);
})

