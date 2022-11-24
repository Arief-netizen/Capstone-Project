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
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav" style="padding-top: 10px">
          <li class="nav-item">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="./index.html"
              style="color: #041562"
              >Beranda</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#tentangKami"
              style="color: #041562"
              >Tentang Kami</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="./input-cek.html"
              style="color: #041562"
              >Cek Kesehatan</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#artikel"
              style="color: #041562"
              >Artikel Kesehatan</a
            >
          </li>
        </ul>
      </div>
    </nav>`;
  }
}
customElements.define("app-bar", AppBar);
