/* eslint-disable array-callback-return */
import RekompusSource from '../../data/rekompus-source';
import { getCookie } from '../../utils/cookie';
import { heroText, createListKampusItemTemplateDashboardAdmin } from '../templates/template-creator';
import renderPagination from '../../utils/pagination';

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
      </section>
      <section class="card my-3">
        <div class="card-header alert-info">
          <div class="d-flex justify-content-around alert-info py-2">
            <h4><i class="fa fa-school"></i> Kampus</h4>            
          </div>
        </div>
        <div class="card-body p-0">
          <div class="row">
            <div class="col-md-12">
              <div class="card" id="kampusList">
                <div class="card-header bg-primary p-2">
                  <div class="row justify-content-between">
                    <div class="col-sm-12 col-md-9 col-lg-9 my-1">
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="fas fa-magnifying-glass"></i>
                        </div>
                        <input type="text" class="form-control p-2 fs-5 fw-bold" id="searchField" placeholder="Cari kampus / jurusan">
                      </div>
                    </div>
                    <div class="button-add-kampus col-sm-12 col-md-3 col-lg-3 my-1 ms-auto">
                      <a href="/#/add-kampus" class="btn alert-success p-2 px-3 fs-5 fw-bold shadow w-100"><i class="fa fa-plus-square"
                          aria-hidden="true"></i> Kampus</a>
                    </div>
                  </div>
                </div>
                <div class="card-body bg-light">
                  <div class="row mt-2 pt-2 pb-2 list-kampus-container">
                    
                  </div>
                  <nav aria-label="Page navigation example mb-2">
                    <ul class="pagination pagination-md justify-content-center mt-2" id="pageNumbers">
                      <li class="page-item">
                        <button class="page-link" href="#" aria-label="Halaman Awal" id="first">
                          <span aria-hidden="true"><< First</span>
                        </button>
                      </li>
                      <li class="page-item">
                        <button class="page-link" href="#" aria-label="Halaman Sebelumnya" id="previous">
                          <span aria-hidden="true">< Prev</span>
                        </button>
                      </li>
                      <li class="page-item mx-1">
                        <button class="page-link bg-primary" href="#" aria-label="Nomor Halaman" disabled>
                          <span aria-hidden="true" id="page-number" class="text-white"></span>
                        </button>
                      </li>
                      <li class="page-item">
                        <button class="page-link" href="#" aria-label="Halaman Selanjutnya" id="next">
                          <span aria-hidden="true">Next ></span>
                        </button>
                      </li>
                      <li class="page-item">
                        <button class="page-link" href="#" aria-label="Halaman Akhir" id="last">
                          <span aria-hidden="true">Last >></span>
                        </button>
                      </li>
                    </ul>
                </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
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
              <p>${getCookie('role')}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          </div>
        </div>
      </div>
    </div>
    <div id="loading-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    const heroTextEl = document.querySelector('.hero-text');
    scrollTo({ top: 0 });
    loadingContainer.classList.add('show');
    heroTextEl.innerHTML = heroText('Dashboard Admin');
    if (getCookie('email').length === 0 && getCookie('jwt').length === 0) {
      swal({
        icon: 'error',
        title: 'Unauthorized!',
        text: 'Harap login terlebih dahulu!',
        timer: 2000,
      }).then(() => {
        window.location.href = '/#/login';
      });
    }

    if (getCookie('role') !== 'ADMIN') {
      swal({
        icon: 'error',
        title: 'Unauthorized!',
        text: 'Anda tidak memiliki akses halaman ini!',
        timer: 2000,
      }).then(() => {
        window.location.href = '/#/login';
      });
    }

    const prev = document.getElementById('previous');
    const next = document.getElementById('next');
    const first = document.getElementById('first');
    const last = document.getElementById('last');
    const ulPageNumber = document.getElementById('pageNumbers');
    const kampusContainer = document.querySelector('.list-kampus-container');
    const searchField = document.getElementById('searchField');

    const kampuss = await RekompusSource.listKampus();
    if (kampuss.length === 0) {
      kampusContainer.innerHTML = `
      <div class="container-fluid">
        <h2 class="text-center">Tidak ada data!</h2>
        <div class="d-flex">
        <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
        </div>
        
      </div>
      `;
    }

    let index = 1;
    const maxRowPerPage = 5;
    const pageNumberEl = document.getElementById('page-number');

    function disabledPrevFirst() {
      prev.disabled = true;
      first.disabled = true;
      prev.classList.add('bg-gray', 'text-muted');
      first.classList.add('bg-gray', 'text-muted');
    }

    function disabledNextLast() {
      next.disabled = true;
      last.disabled = true;
      next.classList.add('bg-gray', 'text-muted');
      last.classList.add('bg-gray', 'text-muted');
    }

    function enabledPrevFirst() {
      prev.disabled = false;
      first.disabled = false;
      prev.classList.remove('bg-gray', 'text-muted');
      first.classList.remove('bg-gray', 'text-muted');
    }

    function enabledNextLast() {
      next.disabled = false;
      last.disabled = false;
      next.classList.remove('bg-gray', 'text-muted');
      last.classList.remove('bg-gray', 'text-muted');
    }

    disabledPrevFirst();

    renderPagination(
      kampuss,
      kampusContainer,
      index,
      maxRowPerPage,
      pageNumberEl,
      createListKampusItemTemplateDashboardAdmin,
    );

    prev.addEventListener('click', () => {
      if (index === 1) {
        disabledPrevFirst();
        return;
      }

      if (index <= 2) {
        disabledPrevFirst();
      }

      enabledNextLast();
      kampusContainer.innerHTML = '';
      index -= 1;
      renderPagination(
        kampuss,
        kampusContainer,
        index,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplateDashboardAdmin,
      );
    });

    next.addEventListener('click', () => {
      if (index === Math.ceil(kampuss.length / maxRowPerPage)) {
        disabledNextLast();
        return;
      }

      if (index >= Math.ceil(kampuss.length / maxRowPerPage) - 1) {
        disabledNextLast();
      }

      enabledPrevFirst();
      kampusContainer.innerHTML = '';
      index += 1;
      renderPagination(
        kampuss,
        kampusContainer,
        index,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplateDashboardAdmin,
      );
    });

    first.addEventListener('click', () => {
      if (index === 1) {
        disabledPrevFirst();
        return;
      }

      if (index <= 1) {
        disabledPrevFirst();
      }

      disabledPrevFirst();
      enabledNextLast();
      kampusContainer.innerHTML = '';
      index = 1;
      renderPagination(
        kampuss,
        kampusContainer,
        index,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplateDashboardAdmin,
      );
    });

    last.addEventListener('click', () => {
      if (index === Math.ceil(kampuss.length / maxRowPerPage)) {
        disabledNextLast();
        return;
      }

      if (index >= Math.ceil(kampuss.length / maxRowPerPage) - 1) {
        disabledNextLast();
      }

      disabledNextLast();
      enabledPrevFirst();
      kampusContainer.innerHTML = '';
      index = Math.ceil(kampuss.length / maxRowPerPage);
      renderPagination(
        kampuss,
        kampusContainer,
        index,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplateDashboardAdmin,
      );
    });

    function hiddenPagination() {
      ulPageNumber.parentElement.classList.add('hide');
    }

    function showPagination() {
      ulPageNumber.parentElement.classList.remove('hide');
    }

    searchField.addEventListener('keyup', async (e) => {
      enabledNextLast();
      kampusContainer.innerHTML = '';

      if (e.target.value.trim() === '') {
        showPagination();
        renderPagination(
          kampuss,
          kampusContainer,
          index,
          maxRowPerPage,
          pageNumberEl,
          createListKampusItemTemplateDashboardAdmin,
        );
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
        kampusContainer.innerHTML = '';
        hiddenPagination();
        tempUniv.forEach((item) => {
          kampusContainer.innerHTML += createListKampusItemTemplateDashboardAdmin(item);
        });
      } else {
        hiddenPagination();
        kampusContainer.innerHTML = `
        <div class="container-fluid">
          <h2 class="text-center">Tidak ada data!</h2>
          <div class="d-flex">
          <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
          </div>
        </div>
      `;
      }
    });

    kampusContainer.addEventListener('click', (e) => {
      if (e.target.parentElement.parentElement.className === 'text-danger delete-item') {
        console.log(e.target);
        const kampusItem = e.target.parentElement.parentElement.parentElement.dataset.id;
        const itemName = e.target.parentElement.parentElement.parentElement.dataset.name;
        removeKampus(kampusItem, itemName);
      }
    });

    const removeKampus = async (data, name) => {
      const deleteKampus = async (item, itemName) => {
        const delKampus = await RekompusSource.deleteKampus(item);
        swal({
          icon: 'success',
          title: 'Berhasil menghapus!',
          text: `Anda berhasil menghapus kampus ${itemName}`,
        }).then(async () => {
          window.location.reload();
        });
      };
      swal({
        title: 'Yakin ingin menghapus?',
        text: `Anda akan menghapus kampus ${name}`,
        icon: 'warning',
        buttons: [
          'Batalkan',
          'Konfirmasi',
        ],
        dangerMode: true,
      }).then((isConfirm) => {
        if (isConfirm) {
          deleteKampus(data, name);
        } else {
          swal({
            icon: 'success',
            title: 'Sukses Membatalkan',
            text: `Berhasil membatalkan penghapusan kampus ${name}.`,
          });
        }
      });
    };
    loadingContainer.remove('show');
  },
};

export default DashboardAdmin;
