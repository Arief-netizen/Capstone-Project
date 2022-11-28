import artikelData from "./component/artikel/artikel-data.js";
const main = () => {
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

  // const findArtikelByTitle = (title) => {
  //   let searchedArtikel;
  //   for (let artikel of artikelData) {
  //     if (artikel.judul.toLocaleLowerCase() == title) {
  //       searchedArtikel = artikel;
  //     }
  //   }
  // };
  // Render function
  const renderArtikel = (allArtikel) => {
    const artikelList = document.querySelector("artikel-list");
    artikelList.artikels = allArtikel;
    console.log(artikelList.artikels);
  };
  const showResponseMessage = (message = "Check Your Internet Connection") => {
    alert(message);
  };
  document.addEventListener("DOMContentLoaded", () => {
    const linkDetailArtikel = document.getElementById("link-detail-artikel");
    const searchInput = document.getElementById("search-keyword");
    const searchButton = document.getElementById("searchArtikelButton");
    if (searchInput.value == "") {
      renderArtikel(artikelData);
    }
    // linkDetailArtikel.addEventListener("click", (judul) => {
    //   console.log(judul);
    //   const artikelDetail = document.querySelector("artikel-detail");
    //   artikelDetail.artikel = findArtikelByTitle(judul);
    // });
    searchButton.addEventListener("click", () => {
      const keyword = searchInput.value;
      if (keyword != "") {
        const selectedArtikel = searchArtikelByKeyword(keyword);
        if (selectedArtikel.length < 1) {
          showResponseMessage("Data tidak ditemukan");
        } else {
          renderArtikel(selectedArtikel);
        }
      }
    });
  });
};
export default main;
