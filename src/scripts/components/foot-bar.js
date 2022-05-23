class footBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="py-5">
        <div class="row">
          <div class="col-3 test">
            <h5 class="title-footer">Rekompus</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><p>Rekompus membantu siswa mencari referensi kampus dan jurusannya di seluruh  Indonesia.</p></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"></a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"></a></li>
              <li class="nav-item mb-2"><p>Rekompus Workspace<br>Jl. Jend Sudirman Kav 52<br> Jakarta Selatan 12190<br><br>contact@rekompus.id</p></li>
            </ul>
          </div>
  
          <div class="col-3 test">
            <h5>Fitur</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Rekomendasi Kampus</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Cari Kampus</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Cari Jurusan</a></li>
            </ul>
          </div>
  
          <div class="col-2 test">
            <h5>Sosial Media</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Instagram</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><i class="fa-brands fa-facebook-square"></i>Facebook</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Twitter</a></li>
            </ul>
          </div>
  
          <div class="col-4 test">
            <h5>Tim Capstone CPSG-27</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-1"><p>F2013B057 - Nosef Nunggaran</p></li>
              <li class="nav-item mb-1"><p>F2209A172 - Nurul Huda</p></li>
              <li class="nav-item mb-1"><p>F2009A039 - Raihan Putro Maulana Rizky</p></li>
              <li class="nav-item mb-1"><p>F7290A258 - Zahra Amalia Nur Sabrina</p></li>
            </ul>
          </div>
        </div>
      </footer> 
        `;
  }
}

customElements.define('foot-bar', footBar);
