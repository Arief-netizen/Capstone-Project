class ArtikelSearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <form class="row" action="/action_page.php">
        <div class="col-lg-10 col-md-10 col-sm-12 mb-2">
          <input
            type="text"
            class="form-control"
            id="search-keyword"
            placeholder="Masukkan artikel yang anda cari"
            name="search-keywor"
          />
        </div>
        <button class="col-lg-2 col-md-2 col-sm-12 mb-2" type="submit">
          Cari
        </button>
      </form>
      `;
  }
}
customElements.define("artikel-searchbar", ArtikelSearchBar);
