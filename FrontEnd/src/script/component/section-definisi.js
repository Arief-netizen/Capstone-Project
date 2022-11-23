class SectionDefinisi extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<div class="section">
      <div class="d-lg-flex flex-lg-row">
        <div class="sub-section">
          <img src="./asset/img/vector1.png" alt="gambar1" />
        </div>
        <div class="sub-section">
          <span class="" id="subtitle"
            >Kurangi tingkat stroke di Indonesia dengan Healthcare</span
          >
          <p class="description">
            Healthcare hadir sebagai aplikasi yang akan membantu anda untuk
            mendiagnosis tingkat kerawanan terserang penyakit stroke. Dengan
            diagnosis lebih awal, harapannya anda mampu melaksanakan beberapa
            treatment yang telah kami sarankan untuk mencegah terkena stroke
            secara lebih lanjut.
          </p>
          <button>Mulai Cek Kesehatan</button>
        </div>
      </div>
    </div>`;
  }
}
customElements.define("section-definisi", SectionDefinisi);
