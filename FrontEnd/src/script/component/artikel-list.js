import "./artikel-item.js";
import artikelData from "../artikel-data.js";

class ArtikelList extends HTMLElement {
  connectedCallback() {
    this._artikel_list = artikelData;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this._artikel_list.forEach((artikel) => {
      const artikelItemElement = document.createElement("artikel-item");
      artikelItemElement.artikel = artikel;
      artikelItemElement.className = "col-lg-3 col-md-6 col-sm-12 mb-4";
      this.appendChild(artikelItemElement);
    });
  }
}
customElements.define("artikel-list", ArtikelList);
