import { heroText } from '../templates/template-creator';

const DashboardAdmin = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    </section>
    <section class="container-fluid bg-info">
      <section class="head-profile mt-2">
        <div class="card border-orange bg-light">
          <div class="row alert-info m-3">
            <div class="col-md-2 p-3">
              <img src="./favicon.png" alt="" class="thumb-img-detail">
            </div>
            <div class="col-md-5 p-3 my-auto ml-auto">
              <h4 class="fw-bold text-muted">Nama Admin</h4>
              <p class="fw-bold text-muted">Alamat</p>
            </div>
            <div class="col-md-5 p-3 my-auto">
              <a href="/#/edit-profile-admin/:id" class="link text-dark text-decoration-none fs-5 py-2 fw-bold">
                <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                  dirimu</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="card my-3">
        <div class="card-header alert-info">
          <div class="d-flex justify-content-around alert-info py-2">
            <h4><i class="fa fa-school"></i> Kampus</h4>            
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="card" id="kampusList">
                <div class="card-header bg-primary d-flex justify-content-between p-3">
                  <div class="input-group w-50">
                    <div class="input-group-text">
                      <i class="fas fa-magnifying-glass"></i>
                    </div>
                    <input type="search" class="form-control p-2 fs-6" id="kampusField" placeholder="Cari kampus">
                  </div>
                  <div class="button-add-kampus">
                    <a href="/#/add-kampus" class="btn alert-success p-2 px-3 fs-5 fw-bold shadow"><i class="fa fa-plus-square"
                        aria-hidden="true"></i> Kampus</a>
                  </div>
                </div>
                <div class="card-body bg-light">
                  <div class="row mt-2 pt-2 pb-2 list-kampus-container">
                    <div class="col-md-12 mb-3">
                      <div class="card border-orange">
                        <div class="card-body d-flex">
                          <div class="thumb-container row">
                            <div class="col-md-1 my-2">
                              <a href="#">
                                <img src="./favicon.png" alt="" class="thumb-img">
                              </a>
                            </div>
                            <div class="col-md-3 my-2">
                              <h4 class="fw-bold"><a href="#/kampus/:id" class="text-dark text-decoration-none">Nama
                                  Kampus</a></h4>
                              <p><i class="fas fa-location-dot" aria-hidden="true"></i> Kota</p>
                              <span class="alert alert-info p-1">Akreditasi A</span>
                              <span class="alert alert-info p-1">PTN</span>
                            </div>
                            <div class="col-md-2 my-2">
                              <h4><u>Kelas Tersedia</u></h4>
                              Reguler<br>
                              Karyawan<br>
                              Online<br>
                              Umum<br>
                            </div>
                            <div class="col-md-2 my-2">
                              <h4><u>Jurusan</u></h4>
                              Teknik Informatika<br>
                              Sistem Informasi<br>
                              Ilmu Hukum<br>
                              <a href="#/kampus/:id"><button class="btn alert-info ">Selengkapnya</button></a>
                            </div>
                            <div class="col-md-2 my-2">
                              <h4><u>Status PMB</u></h4>
                              <p><span class="alert alert-success text-white p-1">Dibuka</span></p>
                            </div>
                            <div class="col-md-2 my-2 d-flex align-items-center justify-content-around">
                              <a href="#/info-kampus/:id" class="text-info"><i class="fa fa-circle-info fa-4x"></i></a>
                              <a href="#/delete-kampus/:id" class="text-danger"><i class="fa fa-trash fa-4x"
                                  aria-hidden="true"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="pagination pagination-md justify-content-center mt-2">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">Previous</span>
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>

                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    
    `;
  },

  async afterRender() {
    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Dashboard Admin');

    const btnKampusList = document.getElementById('btnKampusList');
    const btnUsersList = document.getElementById('btnUsersList');

    const kampusList = document.getElementById('kampusList');
    const usersList = document.getElementById('usersList');

    btnKampusList.addEventListener('click', (e) => {
      e.preventDefault();
      usersList.classList.remove('show');
      btnUsersList.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnKampusList.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });
    btnUsersList.addEventListener('click', (e) => {
      e.preventDefault();
      kampusList.classList.remove('show');
      btnKampusList.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnUsersList.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });
  },
};

export default DashboardAdmin;
