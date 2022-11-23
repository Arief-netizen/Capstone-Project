class FooterHealthcare extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <span class="logo-white">Healthcare</span>
    <div class="d-md-flex flex-md-row text-white">
      <div class="sub-section">
        <p class="pb-3 pt-2">Jl. XXX, Indonesia</p>
        <p class="pb-2">Tentang Kami</p>
        <p class="pb-2">Kebijakan Privasi</p>
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
    <p class="text-white text-center pt-3">&#169; Healthcare.id, 2022</p>
      `;
  }
}
customElements.define("footer-healthcare", FooterHealthcare);
