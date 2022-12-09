class ArtikelItem extends HTMLElement {
  set artikel(artikelItem) {
    this._artikel = artikelItem;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card item-artikel">
            <img
            style="height:250px"
            class="card-img-top"
            alt="gambar"
            src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/09/09061925/Mengenal-Golden-Period-dalam-penanganan-stroke.jpg.webp"
            />
            <div class="card-body">
            <p class="card-title" style="color: #0e0e0e">
            Mengenal Golden Period dalam Penanganan Stroke
            </p>
            <p class="card-description">09 September 2022</p>
            <a style="text-decoration:none;"id="link-detail-artikel" href="/Mengenal_Golden_Period_dalam_Penanganan_Stroke" style="text-align: end">Selengkapnya</a>
            </div>
        </div>
        <br>
        <div class="card item-artikel">
            <img
            style="height:250px"
            class="card-img-top"
            alt="gambar"
            src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/560524_22-8-2022_12-39-10.webp"
            />
            <div class="card-body">
            <p class="card-title" style="color: #0e0e0e">
            Masih Muda, Bisa Juga Kena Stroke
            </p>
            <p class="card-description">22 Agustus 2022</p>
            <a style="text-decoration:none;"id="link-detail-artikel" href="/Masih_Muda_Bisa_Juga_Kena_Stroke" style="text-align: end">Selengkapnya</a>
            </div>
        </div>
        <br>
        <div class="card item-artikel">
            <img
            style="height:250px"
            class="card-img-top"
            alt="gambar"
            src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/2558_22-8-2022_12-4-43.webp"
            />
            <div class="card-body">
            <p class="card-title" style="color: #0e0e0e">
            Inilah Perbedaan antara Stroke Hemoragik dan Stroke Iskemik
            </p>
            <p class="card-description">22 Agustus 2022</p>
            <a style="text-decoration:none;"id="link-detail-artikel" href="/Inilah_Perbedaan_antara_Stroke_Hemoragik_dan_Stroke_Iskemik" style="text-align: end">Selengkapnya</a>
            </div>
        </div>
        <br>
        <div class="card item-artikel">
            <img
            style="height:250px"
            class="card-img-top"
            alt="gambar"
            src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/460219_18-8-2022_11-17-17.webp"
            />
            <div class="card-body">
            <p class="card-title" style="color: #0e0e0e">
            Jangan Main-Main dengan Stroke Ringan, Ini 4 Cara Mengatasinya
            </p>
            <p class="card-description">22 Agustus 2022</p>
            <a style="text-decoration:none;"id="link-detail-artikel" href="/Jangan_Main_Main_dengan_Stroke_Ringan_Ini_4_Cara_Mengatasinya" style="text-align: end">Selengkapnya</a>
            </div>
        </div>
        <br>
        <div class="card item-artikel">
            <img
            style="height:250px"
            class="card-img-top"
            alt="gambar"
            src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/631823_22-8-2022_11-42-4.webp"
            />
            <div class="card-body">
            <p class="card-title" style="color: #0e0e0e">
            Faktor Risiko TIA (Transient Ischaemic Attack)
            </p>
            <p class="card-description">22 Agustus 2022</p>
            <a style="text-decoration:none;"id="link-detail-artikel" href="/Faktor_Risiko_TIA_Transient_Ischaemic_Attack" style="text-align: end">Selengkapnya</a>
            </div>
        </div>
        <br>
        <div class="card item-artikel">
            <img
            style="height:250px"
            class="card-img-top"
            alt="gambar"
            src="https://www.cdc.gov/stroke/images/Stroke-Medical-Illustration.jpg?_=77303"
            />
            <div class="card-body">
            <p class="card-title" style="color: #0e0e0e">
            About Stroke ? (Bahasa Inggris)
            </p>
            <p class="card-description">2022</p>
            <a style="text-decoration:none;"id="link-detail-artikel" href="/About_Stroke_Bahasa_Inggris" style="text-align: end">Selengkapnya</a>
            </div>
        </div>
        <br>
        <div class="card item-artikel">
            <img
            style="height:250px"
            class="card-img-top"
            alt="gambar"
            src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1589838507/attached_image/stroke-0-alodokter.jpg"
            />
            <div class="card-body">
            <p class="card-title" style="color: #0e0e0e">
            Apa itu Stroke?
            </p>
            <p class="card-description">09 Mei 2022</p>
            <a style="text-decoration:none;"id="link-detail-artikel" href="/Apa_itu_Stroke" style="text-align: end">Selengkapnya</a>
            </div>
        </div>`;
  }
}

customElements.define("artikel-item", ArtikelItem);
