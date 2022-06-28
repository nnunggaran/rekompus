import KampusSource from '../../data/rekompus-source';
import { getCookie } from '../../utils/cookie';
import { heroText } from '../templates/template-creator';

const DashboardUser = {
  async render() {
    return `
    <div class="hero-text container-fluid">
    </div>
    <div class="container-fluid bg-info">
      <div class="head-profile mt-2">
        <div class="card border-orange bg-light">
          <div class="row alert-info m-3">
            <div class="col-md-2 p-3">
              <img src="./images/default-profile.png" alt="" class="thumb-img-detail">
            </div>
            <div class="col-md-5 p-3 my-auto ml-auto">
              <h4 class="fw-bold text-muted">${getCookie('name')}</h4>
              <p class="fw-bold text-muted">${getCookie('email')}</p>
            </div>
            <div class="col-md-5 p-3 my-auto">
              <button type="button" class="btn btn-dblue rounded fs-4" data-bs-toggle="modal" data-bs-target="#aboutMe">
              <i class="fa fa-info-circle fa-lg text-white"></i> Tentangmu
              </button>
            </div>
          </div>
        </div>

      </div>
        <div class="card my-3">
          <div class="card-header alert-info">
            <div class="d-flex justify-content-around alert-info py-2">
              <a class="text-decoration-none text-muted border-bottom border-info border-2 fw-bold text-center" role="button" data-bs-toggle="collapse" href="#/dashboard/#kampusFavorite"
                aria-expanded="true" data-bs-target="#kampusFavorite" 
                aria-controls="kampusFavorite" id="btnKampusFavorite">
                <h4>Kampus Favorite</h4>
              </a>
              <a class="text-decoration-none text-muted text-center" role="button" data-bs-toggle="collapse" href="#/dashboard/#jurusanFavorite"
                data-bs-target="#jurusanFavorite" aria-expanded="true" aria-controls="jurusanFavorite"
                id="btnJurusanFavorite">
                <h4>Jurusan Favorite</h4>
              </a>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="collapse show" id="kampusFavorite">
                  <div class="card-body">
                    <div class="row list-kampus-favorite">
                      <div class="col-md-12 mb-3">
                        <div class="card border-orange">
                          <div class="card-body d-flex">
                            <div class="thumb-container row">
                              <div class="col-sm-6 col-md-1">
                                <a href="#/kampus/:id">
                                  <img src="./favicon.png" alt="" class="thumb-img">
                                </a>
                              </div>
                              <div class="col-sm-6 col-md-3">
                                <h4 class="fw-bold"><a href="#/kampus/:id" class="text-dark">Nama Universitas</a></h4>
                                <p><i class="fas fa-location-dot" aria-hidden="true"></i> Kota</p>
                                <span class="alert alert-info p-0 ps-1 pe-1 mb-3">Akreditasi A</span>
                                <span class="alert alert-info p-0 ps-1 pe-1">PTN</span>
                              </div>
                              <div class="col-sm-6 col-md-2">
                                <h4><u>Kelas Tersedia</u></h4>
                                Reguler<br>
                                Karyawan<br>
                                Online<br>
                                Umum
                              </div>
                              <div class="col-sm-6 col-md-2">
                                <h4><u>Jurusan</u></h4>
                                Teknik Informatika<br>
                                Sistem Informasi<br>
                                Ilmu Hukum<br>
                                <a href="#"><button class="btn alert-info p-2">Selengkapnya</button></a>
                              </div>
                              <div class="col-sm-6 col-md-2">
                                <h4><u>Status PMB</u></h4>
                                <p><span class="alert alert-success text-white p-1">Dibuka</span></p>
                              </div>
                              <div class="col-sm-6 col-md-2 d-flex align-items-center justify-content-around">
                                <a href="#/kampus/:id" class="text-info"><i
                                    class="fa fa-circle-info fa-4x"></i></a>
                                <a href="#/delete-kampus-favorite/:id" class="text-danger"><i class="fa fa-trash fa-4x"
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
            <div class="col-md-12">
              <div class="collapse" id="jurusanFavorite">
                <div class="card-body">
                  <div class="row list-jurusan-favorite">
                    <div class="col-md-12 mb-3">
                      <div class="card border-orange">
                        <div class="card-body d-flex">
                          <div class="thumb-container row justify-content-center">
                            <div class="col-sm-6 col-md-3 my-2">
                              <h4 class="fw-bold"><a href="#/jurusan/id" class="text-dark">Nama Program Studi</a></h4>
                            </div>
                            <div class="col-sm-6 col-md-2 my-2">
                              <a href="#/jurusan/id">
                                <img src="./favicon.png" alt="" class="thumb-img-detail">
                              </a>
                            </div>
                            <div class="col-sm-6 col-md-2 my-2">
                              <h4><u>Akreditasi</u></h4>
                              <h2>A</h2>
                            </div>
                            <div class="col-sm-6 col-md-2 my-2">
                              <h4><u>Kelas Tersedia</u></h4>
                              Reguler<br>
                              Karyawan<br>
                              Online<br>
                            </div>
                            <div class="col-sm-12 col-md-2 d-flex align-items-center justify-content-around my-2">
                              <a href="#/jurusan/:id" class="text-info"><i
                                  class="fa fa-circle-info fa-4x"></i></a>
                              <a href="#/delete-jurusan-favorite/:id" class="text-danger"><i class="fa fa-trash fa-4x"
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
      </div>
      <div class="modal fade" id="aboutMe" tabindex="-1" aria-labelledby="modalAboutMeLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header alert alert-info">
            <h5 class="modal-title" id="modalAboutMeLabel">Data Dirimu</h5>
            <button type="button" class="btn btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="name" class="fw-bold">Nama</label>
              <p>${getCookie('name')}</p>
              <label for="email" class="fw-bold">Email</label>
              <p>${getCookie('email')}</p>
              <label for="role" class="fw-bold">Role</label>
              <p>${getCookie('role') === null ? 'USER' : 'USER'}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          </div>
        </div>
      </div>
    </div>
    `;
  },
  async afterRender() {
    const heroEl = document.querySelector('.hero-text');
    heroEl.innerHTML = heroText('Yuk lihat Kampus dan Jurusan Favoritmu!');

    const btnKampusFavorite = document.getElementById('btnKampusFavorite');
    const btnJurusanFavorite = document.getElementById('btnJurusanFavorite');

    const kampusFavorite = document.getElementById('kampusFavorite');
    const jurusanFavorite = document.getElementById('jurusanFavorite');

    btnKampusFavorite.addEventListener('click', (e) => {
      e.preventDefault();
      jurusanFavorite.classList.remove('show');
      btnJurusanFavorite.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnKampusFavorite.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });
    btnJurusanFavorite.addEventListener('click', (e) => {
      e.preventDefault();
      kampusFavorite.classList.remove('show');
      btnKampusFavorite.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnJurusanFavorite.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });

    scrollTo({ top: 0 });
  },
};

export default DashboardUser;
