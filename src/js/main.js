const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");

});

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});




/* VIDEO LOGIC */

const videos=[
    {
        id: "PeQCfZWFh2A",
    },
    {
        id: "gILYbE-59KI",
    },
    {
        id: "HZSIgCE6IGU",
    },
    {
        id: "kS1mjUJXBEY",
    },
    {
        id: "o3qDinjwbFc",
    }

];

const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videos-container');
const bNext = document.querySelector('#next');
const bPrev = document.querySelector('#prev');
let current = 0;

bNext.addEventListener('click', (e) => {
    let changed=current;
    current = current + 1  < videos.length ? current + 1: current;
    if(current != changed){
    renderCurrentVideo(videos[current].id);
}
});

bPrev.addEventListener('click', (e) => {
    let changed=current;
    current = current - 1 >= 0 ? current - 1 :current;
    if(current != changed){
    renderCurrentVideo(videos[current].id);
    }
});

/* FUNCTION CALL */
renderCurrentVideo(videos[current].id);
renderVideo();

function renderCurrentVideo(id){
    currentContainer.innerHTML = `<div class="hipervideo"><iframe width="100% auto" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}

function renderVideo(){
    const html = videos.map((video, index) => {
        return `<div class ="item">
        <a href="#" data-id="${index}">
            <img src="http://img.youtube.com/vi/${video.id}/mqdefault.jpg"
        </a>
        </div>`;
    });

    videosContainer.innerHTML = html.join("");

    document.querySelectorAll('.item a').forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const id = +item.getAttribute("data-id");
            current = id;
            renderCurrentVideo(videos[current].id);
        });
    });
}




