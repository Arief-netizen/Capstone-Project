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
        <ul class="navbar-nav" role="tablist" style="padding-top: 10px">
          <li class="nav-item">
            <a
              id="nav-beranda"
              class="nav-link active"
              data-toggle="tab"
              href="#beranda"
              >Beranda</a
            >
          </li>
          <li class="nav-item">
            <a
              id="nav-tentang-kami"
              class="nav-link"
              data-toggle="tab"
              href="#tentangKami"
              >Tentang Kami</a
            >
          </li>
          <li class="nav-item">
            <a
              id="nav-input"
              class="nav-link"
              data-toggle="tab"
              href="#input"
              
              >Cek Kesehatan</a
            >
          </li>
          <li class="nav-item">
            <a
              id="nav-artikel"
              class="nav-link"
              data-toggle="tab"
              href="#artikel"
              >Artikel Kesehatan</a
            >
          </li>
        </ul>
      </div>
    </nav>`;
  }
}
customElements.define("app-bar", AppBar);
