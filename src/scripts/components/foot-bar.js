class footBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="row container-fluid">
          <div class="col-md-3 test">
            <h5 class="title-footer">Rekompus</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <p>
                  Rekompus membantu siswa mencari referensi kampus dan jurusannya di seluruh  Indonesia.<br><br>
                  Rekompus Workspace<br>Jl. Jend Sudirman Kav 52<br> Jakarta Selatan 12190<br><br>contact@rekompus.id
                </p>
              </li>
            </ul>
          </div>
  
          <div class="col-md-3 test pt-3">
            <h5>Fitur</h5>
            <ul class="nav flex-column pt-1">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Rekomendasi Kampus</a></li>
              <li class="nav-item mb-2"><a href="#/list-kampus" class="nav-link p-0 text-white">Cari Kampus</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Cari Jurusan</a></li>
            </ul>
          </div>
  
          <div class="col-md-2 test pt-3">
            <h5>Sosial Media</h5>
            <ul class="nav flex-column pt-1">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><i class="fa-brands fa-facebook-square"></i> Facebook</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
            </ul>
          </div>
  
          <div class="col-md-4 test pt-3">
            <h5>Tim Capstone CPSG-27</h5>
            <ul class="nav flex-column pt-1">
              <li class="nav-item mb-2"><a href="https://www.linkedin.com/in/nosef-nunggaran/" class="text-white" target="_blank" rel="noopener noreferrer">F2013B057 - Nosef Nunggaran</a></li>
              <li class="nav-item mb-2"><a href="https://www.linkedin.com/in/nurulhuda-jombang/" class="text-white" target="_blank" rel="noopener noreferrer">F2209A172 - Nurul Huda</a></li>
              <li class="nav-item mb-2"><a href="https://www.linkedin.com/in/raihanputro/" class="text-white" target="_blank" rel="noopener noreferrer">F2009A039 - Raihan Putro Maulana Rizky</a></li>
              <li class="nav-item mb-2"><a href="https://www.linkedin.com/in/zahra-amalia-nur-sabrina-6a6468232/" class="text-white" target="_blank" rel="noopener noreferrer">F7290A258 - Zahra Amalia Nur Sabrina</a></li>
            </ul>
          </div>
        </div>
        `;
  }
}

customElements.define('foot-bar', footBar);
