class FooterHealthcare extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="inner-footer">
    <span class="logo-white">Healthcare</span>
    <div class="d-md-flex flex-md-row text-white">
      <div class="sub-section">
        <p class="pb-3 pt-2">Jl. XXX, Indonesia</p>
      </div>
      <div class="sub-section">
        <p class="pb-2 pt-2" style="font-weight: 700">NAVIGASI</p>
        <p class="pb-2"><a class="text-white"href="./index.html">Beranda</a></p>
        <p class="pb-2"><a class="text-white"href="./about-page.html">Tentang Kami</a></p>
        <p class="pb-2"><a class="text-white"href="./input-page.html">Cek Kesehatan</a></p>
        <p class="pb-2"><a class="text-white"href="./artikel-page.html">Artikel Kesehatan</a></p>
      </div>
      <div class="sub-section">
        <p class="pb-2 pt-2" style="font-weight: 700">KONTAK KAMI</p>
        <p class="pb-2"><a class="text-white"href="./index.html">Nikolas Edo</a></p>
        <p class="pb-2"><a class="text-white"href="./about-page.html">Tentang Kami</a></p>
        <p class="pb-2"><a class="text-white"href="./input-page.html">Cek Kesehatan</a></p>
        <p class="pb-2"><a class="text-white"href="./artikel-page.html">Artikel Kesehatan</a></p>
      </div>
      <div class="sub-section">
      <p class="pb-3 pt-2">Jl. XXX, Indonesia</p>
      <p class="pb-2"><a class="text-white"href="./about-page.html">Tentang Kami</a></p>
      <p class="pb-2"><a class="text-white"href="./privacy-polici.html">Kebijakan Privasi</a></p>
    </div>


      <div class="sub-section">
        <p class="pb-2 pt-2" style="font-weight: 700">Hubungi Kami</p>
        <p class="pb-1">
          <i class="fa-sharp fa-solid fa-envelope"></i> healtcare@gmail.com
        </p>
        <p class="pb-1">
          <i class="fa-sharp fa-solid fa-phone-flip"></i> +6285XXXXXXXX
        </p>
      </div>
    </div>
    </div>
    
    <hr>
    <p class="text-white text-center pt-3">Copyright &#169; 2022 - Healthcare. All Right Reserved</p>
      `;
  }
}
customElements.define("footer-healthcare", FooterHealthcare);
