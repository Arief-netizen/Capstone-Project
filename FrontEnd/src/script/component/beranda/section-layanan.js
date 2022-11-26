class SectionLayanan extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = ` <div class="section layanan">
    <div class="d-lg-flex flex-lg-row">
      <div class="sub-section">
        <img src="./asset/img/vector3.png" alt="gambar1" />
      </div>
      <div class="sub-section" style="text-align: center">
        <span id="subtitle">Layanan Kami</span>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 mt-3 mb-3">
            <div class="card item-layanan">
              <div class="card-body">
                <img
                  class="card-img rounded-circle"
                  alt="gambar"
                  src="./asset/img/icon_layanan_cek_kesehatan.png"
                />
                <p class="card-title">Cek Kesehatan</p>
                <p class="card-description">
                  Cek kesehatan akan membantu anda untuk mengetahui tingkat
                  kemungkinan anda terserang penyakit stroke.
                </p>
                <button class="card-button"><a class="text-white" href="./input-page.html">Mulai Cek</a></button>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 mt-3 mb-3">
            <div class="card item-layanan">
              <div class="card-body">
                <img
                  class="card-img rounded-circle"
                  alt="gambar"
                  src="./asset/img/article_icon.jpg"
                />
                <p class="card-title">Artikel Kesehatan</p>
                <p class="card-description">
                  Artikel akan membantu anda untuk mendapatkan informasi
                  seputar stroke dan informasi kesehatan lainnya.
                </p>
                <button class="card-button"><a class="text-white" href="./artikel-page.html">Baca Artikel</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
}
customElements.define("section-layanan", SectionLayanan);
