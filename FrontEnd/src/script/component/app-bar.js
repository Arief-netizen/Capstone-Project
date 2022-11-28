class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top navbar-light" id="navbar">
      <span class="navbar-brand nav-logo" style="color: #041562"
        >Healthcare</span
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar" >
        <ul class="navbar-nav"  style="padding-top: 10px text-align:right">
          <li class="nav-item">
            <a
              id="nav-beranda"
              class="nav-link active"
              href="./index.html"
              >Beranda</a
            >
          </li>
          <li class="nav-item">
            <a
              id="nav-tentang-kami"
              class="nav-link"
              href="./about-page.html"
              >Tentang Kami</a
            >
          </li>
          <li class="nav-item">
            <a
              id="nav-input"
              class="nav-link"
              href="./input-page.html"
              
              >Cek Kesehatan</a
            >
          </li>
          <li class="nav-item">
            <a
              id="nav-artikel"
              class="nav-link"
              
              href="./artikel-page.html"
              >Artikel Kesehatan</a
            >
          </li>
        </ul>
      </div>
    </nav>`;
  }
}
customElements.define("app-bar", AppBar);
