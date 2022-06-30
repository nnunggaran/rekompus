/* eslint-disable no-shadow */
import FavoriteJurusanIdb from '../../data/favoritejurusan-idb';
import FavoriteRekompusIdb from '../../data/favoriterekompus-idb';
import { getCookie } from '../../utils/cookie';
import { createListJurusanItemTemplate, createListKampusItemTemplate, heroText } from '../templates/template-creator';

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
                  <div class="bg-primary p-2 rounded">
                    <div class="row justify-content-between">
                      <div class="col-sm-12 my-1">
                        <div class="input-group">
                          <div class="input-group-text">
                            <i class="fas fa-magnifying-glass"></i>
                          </div>
                          <input type="text" class="form-control p-2 fs-5 fw-bold" id="searchFieldKampus" placeholder="Cari kampus / jurusan">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row list-kampus-container">
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="collapse" id="jurusanFavorite">
                <div class="bg-primary p-2 rounded">
                  <div class="row justify-content-between">
                    <div class="col-sm-12 my-1">
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="fas fa-magnifying-glass"></i>
                        </div>
                        <input type="text" class="form-control p-2 fs-5 fw-bold" id="searchFieldJurusan" placeholder="Cari kampus / jurusan">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row list-jurusan-favorite">                    
                  </div>
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

    const listKampusFavorite = document.querySelector('.list-kampus-container');
    const searchFieldKampus = document.getElementById('searchFieldKampus');
    const kampuss = await FavoriteRekompusIdb.getAllRekompuss();
    if (kampuss.length === 0) {
      listKampusFavorite.innerHTML = `
      <div class="container-fluid empty-data">
        <h2 class="text-center">Tidak ada data kampus favorite!</h2>
        <div class="d-flex">
        <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
        </div>
      </div>`;
    } else {
      kampuss.forEach((kampus) => {
        listKampusFavorite.innerHTML += createListKampusItemTemplate(kampus);
      });

      searchFieldKampus.addEventListener('keyup', async (e) => {
        console.log(e.target.value);
        listKampusFavorite.innerHTML = '';

        if (e.target.value.trim() === '') {
          kampuss.forEach((kampus) => {
            listKampusFavorite.innerHTML += createListKampusItemTemplate(kampus);
          });
          return;
        }
        const tempUniv = [];
        const allData = await kampuss;

        allData.forEach((univ) => {
          if (univ.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            tempUniv.push(univ);
            return;
          }

          univ.jurusan.forEach((prodi) => {
            if (prodi.namaJurusan.toLowerCase().includes(e.target.value.toLowerCase())) {
              tempUniv.push(univ);
            }
          });
        });

        if (tempUniv.length > 0) {
          listKampusFavorite.innerHTML = '';
          tempUniv.forEach((item) => {
            listKampusFavorite.innerHTML += createListKampusItemTemplate(item);
          });
        } else {
          listKampusFavorite.innerHTML = `
          <div class="container-fluid">
            <h2 class="text-center">Tidak ada data!</h2>
            <div class="d-flex">
            <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
            </div>
          </div>
        `;
        }
      });
    }

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

    btnJurusanFavorite.addEventListener('click', async (e) => {
      e.preventDefault();
      kampusFavorite.classList.remove('show');
      btnKampusFavorite.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnJurusanFavorite.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
      const listJurusanFavorite = document.querySelector('.list-jurusan-favorite');
      const searchFieldJurusan = document.getElementById('searchFieldJurusan');

      const jurusan = await FavoriteJurusanIdb.getAllJurusan();
      if (jurusan.length === 0) {
        listJurusanFavorite.innerHTML = `
        <div class="container-fluid empty-data">
          <h2 class="text-center">Tidak ada data jurusan favorite!</h2>
          <div class="d-flex">
          <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
          </div>
        </div>;
        `;
      } else {
        listJurusanFavorite.innerHTML = '';
        jurusan.forEach((item) => {
          listJurusanFavorite.innerHTML += createListJurusanItemTemplate(item);
        });
        console.log(jurusan);
      }

      searchFieldJurusan.addEventListener('keyup', async (e) => {
        console.log(e.target.value);
        listJurusanFavorite.innerHTML = '';

        if (e.target.value.trim() === '') {
          jurusan.forEach((item) => {
            listJurusanFavorite.innerHTML += createListJurusanItemTemplate(item);
          });
          return;
        }
        const tempUniv = [];
        const allData = await jurusan;

        allData.forEach((univ) => {
          if (univ.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            tempUniv.push(univ);
            return;
          }

          if (univ.nama_kampus.toLowerCase().includes(e.target.value.toLowerCase())) {
            tempUniv.push(univ);
          }
        });

        if (tempUniv.length > 0) {
          listJurusanFavorite.innerHTML = '';
          tempUniv.forEach((item) => {
            listJurusanFavorite.innerHTML += createListJurusanItemTemplate(item);
          });
        } else {
          listJurusanFavorite.innerHTML = `
          <div class="container-fluid">
            <h2 class="text-center">Tidak ada data!</h2>
            <div class="d-flex">
            <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
            </div>
          </div>
        `;
        }
      });
    });

    scrollTo({ top: 0 });
  },
};

export default DashboardUser;
