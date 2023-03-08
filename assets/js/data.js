/* ---------------------------------- index --------------------------------- */

const indexData = [
  {
    title: "window : Interaction project with Wilson Oreyema",
    clientName: "THE NORTH FACE",
    genre: "Philanthropy",
    thumbnail: "./assets/img/thumbnail-1.jpg",
  },
  {
    title: "VISION QUEST",
    clientName: "GOLDWIN × Spiber",
    genre: "Branding / Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
  },
  {
    title: "THINK SOUTH FOR THE NEXT 2020",
    clientName: "THE NORTH FACE",
    genre: "Philanthropy",
    thumbnail: "./assets/img/thumbnail-1.jpg",
  },
  {
    title: "ZIP EXPLORATION",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
  },
  {
    title: "Couture Spring Summer 2021",
    clientName: "YUIMA NAKAZATO",
    genre: "Presentation Movie",
    thumbnail: "./assets/img/thumbnail-1.jpg",
  },
  {
    title: "Mountain Flagship EC",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
  },
  {
    title: "Alex Honnold : The Imagination",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-1.jpg",
  },
  {
    title: "Driving with Nature",
    clientName: "LAND ROVER SHIZUOKA",
    genre: "Branding",
    thumbnail: "./assets/img/thumbnail-2.jpg",
  },
  {
    title: "EUGENE STUDIO “After the rainbow”",
    clientName: "MUSEUM OF CONTEMPORARY ART TOKYO",
    genre: "Tether Movie",
    thumbnail: "./assets/img/thumbnail-1.jpg",
  },
  {
    title: "Branding Visual",
    clientName: "THE SHARE HOTELS",
    genre: "Branding",
    thumbnail: "./assets/img/thumbnail-2.jpg",
  },
  {
    title: "Run Flagship EC",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-1.jpg",
  },
  {
    title: "Branding Movie",
    clientName: "cado",
    genre: "Branding",
    thumbnail: "./assets/img/thumbnail-2.jpg",
  },
  {
    title: "Ichiro Yamaguchi : Interview",
    clientName: "cado",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-1.jpg",
  },
  {
    title: "RYOHEI KANEDA Collection",
    clientName: "NIKE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
  },
  {
    title: "PLAY EARTH KIDS",
    clientName: "THE NORTH FACE",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-1.jpg",
  },
  {
    title: "Wedding Style Collection",
    clientName: "SIRI SIRI",
    genre: "Advertisement",
    thumbnail: "./assets/img/thumbnail-2.jpg",
  },
];

// render
const indexList = document.querySelector("#index-list");

const renderIndex = (data) => {
  data.forEach((item) => {
    let article = `
        <a href="./works.html" class="p-index__item">
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
