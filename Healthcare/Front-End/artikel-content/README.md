!!! Problem di halaman Artikel Kesehatan

Ini aku bikin konten artikelnya mulai dari artikel-1 sampai artikel-7 sendiri-sendiri karena aku nggk tau solvenya gimana (nggk bisa menuju ke halaman artikel-detail.html)
Karena di file artikel-item.js ada code ```href="./artikel-detail.html?judul=${this._artikel.judul}"```
nah Python @app.route nya nggak bisa menjalankan code ...```?judul=${this._artikel.judul}```
jadinya ke render Page Not Found :(
Jadi mungkin ini jalan satu-satunya biar detail artikelnya bisa tampil.

Sekarang cuman problem di halaman Artikel Kesehatan
Tolong koreksi tata letaknya yaa :), aku nggk tau kenapa bisa duplicate gituu.

*info = 
          
          - tidak bisa support import import modul/file, bisa diganti dengan (contoh) (harus tetap di folder static):
             <script src="{{ url_for('static', filename='js/component/app-bar.js') }}" ></script>
             atau bisa lihat di file script-js.html

          - semua alur perpindahan halaman harus setting @app.route dulu di file app.py. Jika tidak, jadinya Page Not Found.
