import artikelData from "./component/artikel/artikel-data.js";

const artikel = () => {
  const searchArtikelByKeyword = (keyword) => {
    let filtered = [];
    for (let artikel of artikelData) {
      if (
        artikel.judul.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      ) {
        filtered.push(artikel);
      }
    }
    return filtered;
  };
  const renderArtikel = (allArtikel) => {
    const artikelList = document.querySelector("artikel-list");
    artikelList.artikels = allArtikel;
    console.log(artikelList.artikels);
  };
  const showResponseMessage = (message = "Data gagal dimuat") => {
    alert(message);
  };
  //   document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-keyword");
  const searchButton = document.getElementById("searchArtikelButton");
  const linkDetailArtikel = document.getElementById("link-detail-artikel");
  if (searchInput.value == "") {
    renderArtikel(artikelData);
  }
  searchButton.addEventListener("click", (e) => {
    console.log(artikelData);
    const keyword = searchInput.value;
    if (keyword != "") {
      const selectedArtikel = searchArtikelByKeyword(keyword);
      if (selectedArtikel.length < 1) {
        showResponseMessage("Data tidak ditemukan");
      } else {
        renderArtikel(selectedArtikel);
      }
    } else if (keyword === "") {
      renderArtikel(artikelData);
    }
    e.preventDefault();
  });
  linkDetailArtikel.addEventListener("click", () => {
    // e.preventDefault();
    console.log("detail diklik");
    console.log(window.location);
  });
  //   });

  console.log("tes");
  console.log(window.location);
};
export default artikel;
