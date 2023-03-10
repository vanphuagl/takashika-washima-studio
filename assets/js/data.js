/* ---------------------------------- index --------------------------------- */

const indexData = [
  {
    title: "window : Interaction project with Wilson Oreyema",
    clientName: "THE NORTH FACE",
    genre: "Philanthropy",
    thumbnail: "./assets/img/thumbnail-1.jpg",
    link: "./works-slide.html",
  },
  {
    title: "VISION QUEST",
    clientName: "GOLDWIN × Spiber",
    genre: "Branding / Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
    link: "./works-scroll.html",
  },
  {
    title: "THINK SOUTH FOR THE NEXT 2020",
    clientName: "THE NORTH FACE",
    genre: "Philanthropy",
    thumbnail: "./assets/img/thumbnail-1.jpg",
    link: "./works-slide.html",
  },
  {
    title: "ZIP EXPLORATION",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Couture Spring Summer 2021",
    clientName: "YUIMA NAKAZATO",
    genre: "Presentation Movie",
    thumbnail: "./assets/img/thumbnail-1.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Mountain Flagship EC",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Alex Honnold : The Imagination",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-1.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Driving with Nature",
    clientName: "LAND ROVER SHIZUOKA",
    genre: "Branding",
    thumbnail: "./assets/img/thumbnail-2.jpg",
    link: "./works-slide.html",
  },
  {
    title: "EUGENE STUDIO “After the rainbow”",
    clientName: "MUSEUM OF CONTEMPORARY ART TOKYO",
    genre: "Tether Movie",
    thumbnail: "./assets/img/thumbnail-1.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Branding Visual",
    clientName: "THE SHARE HOTELS",
    genre: "Branding",
    thumbnail: "./assets/img/thumbnail-2.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Run Flagship EC",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-1.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Branding Movie",
    clientName: "cado",
    genre: "Branding",
    thumbnail: "./assets/img/thumbnail-2.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Ichiro Yamaguchi : Interview",
    clientName: "cado",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-1.jpg",
    link: "./works-slide.html",
  },
  {
    title: "RYOHEI KANEDA Collection",
    clientName: "NIKE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
    link: "./works-slide.html",
  },
  {
    title: "PLAY EARTH KIDS",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-1.jpg",
    link: "./works-slide.html",
  },
  {
    title: "Wedding Style Collection",
    clientName: "SIRI SIRI",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
    link: "./works-slide.html",
  },
];

// render
const indexList = document.querySelector("#index-list");

const renderIndex = (data) => {
  data.forEach((item) => {
    let article = `
        <a href="${item.link}" class="p-index__item">
            <h2>${item.title}</h2>
            <div class="p-index__brand">
                <p class="p-index__client">${item.clientName}</p>
                <span>|</span>
                <p class="p-index__genre">${item.genre}</p>
            </div>

            <figure class="p-index__thumbnail">
                <img src="${item.thumbnail}"
                    alt="${item.title}">
            </figure>
        </a>
      `;
    indexList.insertAdjacentHTML("beforeend", article);
  });
};

renderIndex(indexData);
