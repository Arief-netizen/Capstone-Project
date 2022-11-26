import "./artikel-list.js";
import "./artikel-seacrhbar.js";
class ArtikelPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="section">
      <artikel-seacrhbar></artikel-seacrhbar>
      <artikel-list class="row artikel-list mt-5 mb-5"></artikel-list>
    </div>   
      `;
  }
}
customElements.define("artikel-page", ArtikelPage);
