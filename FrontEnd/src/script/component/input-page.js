class InputPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <div class="section" style="text-align: center">
      <img
        class="rounded-circle"
        src="./asset/img/icon_layanan_cek_kesehatan.png"
        style="width: 10%"
      />
      <p id="subtitle">Cek Kesehatanmu</p>
      <p class="subtitle-description">
        Diagnosa sekarang, dan hindari risikonya
      </p>
      <form
        id = "formCekKesehatan"
        method="GET"
        action="./result-page.html"
        class="mt-5"
        style="text-align: start"
        
        
      >
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="gender">Apa jenis kelamin anda?</label>
              <select class="form-control" id="gender" name="gender">
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>
            <div class="form-group">
              <label for="age">Berapa usia anda saat ini?</label>
              <input
                type="number"
                class="form-control"
                id="age"
                placeholder="Masukkan usia anda saat ini"
                name="age"
              />
            </div>
            <div class="form-group">
              <label for="age"
                >Apakah anda memiliki riwayat tekanan darah tinggi?</label
              >
              <select
                class="form-control"
                id="hypertension"
                name="hypertension"
              >
                <option value="1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
            <div class="form-group">
              <label for="age"
                >Apakah anda memiliki riwayat penyakit jantung?</label
              >
              <select
                class="form-control"
                id="heart_disease"
                name="heart_disease"
              >
                <option value="1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
            <div class="form-group">
              <label for="age">Apakah anda sudah menikah?</label>
              <select
                class="form-control"
                id="ever_married"
                name="ever_married"
              >
                <option value="1">Sudah</option>
                <option value="0">Belum</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="form-group">
              <label>Apa pekerjaan anda saat ini?</label>
              <select class="form-control" id="work_type" name="work_type">
                <option value="children">Anak-anak</option>
                <option value="Govt_jov">PNS</option>
                <option value="Never_worked">Tidak bekerja</option>
                <option value="Private">Swasta</option>
                <option value="Self-employed">Wiraswasta</option>
              </select>
            </div>
            <div class="form-group">
              <label>Pada lingkungan mana anda tinggal?</label>
              <select
                class="form-control"
                id="residence_type"
                name="residence_type"
              >
                <option value="Rural">Pedesaan</option>
                <option value="Urban">Perkotaan</option>
              </select>
            </div>
            <div class="form-group">
              <label for="avg_glucose_level"
                >Berapa rata-rata kadar glukosa dalam darah anda?</label
              >
              <input
                type="number"
                class="form-control"
                id="avg_glucose_level"
                placeholder="Masukkan kadar glukosa dalam darah anda"
                name="avg_glucose_level"
              />
            </div>
            <div class="form-group">
              <label for="avg_glucose_level"
                >Berapa massa indeks tubuh anda?</label
              >
              <input
                type="number"
                class="form-control"
                id="bmi"
                placeholder="Masukkan massa indeks tubuh anda"
                name="bmi"
              />
            </div>
            <div class="form-group">
              <label>Apakah anda seorang perokok?</label>
              <select
                class="form-control"
                id="smoking_status"
                name="smoking_status"
              >
                <option value="1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
          </div>
        </div>
        <button id="cekKesehatanSubmit" type="submit" class="mt-3" style="width: 100%">Kirim</button>
      </form>
    </div>

        `;
  }
}
customElements.define("input-page", InputPage);
