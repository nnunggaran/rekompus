/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import swal from 'sweetalert';
import {
  selectAkreditasiItem,
  selectJenisKampusItem,
  selectJenjangItem,
  selectKelasItem,
  selectKotaItem,
  selectPmbItem,
} from '../templates/list-kampus-creator';
import { heroText, createListKampusItemTemplate } from '../templates/template-creator';
import renderPagination from '../../utils/pagination';
import RekompusSource from '../../data/rekompus-source';
import { deleteCookie } from '../../utils/cookie';

const ListKampus = {
  async render() {
    return `
        <div class="hero-text container-fluid">
        </div>
        <section class="search-bar container-fluid bg-info pt-2 pb-2">
            <label class="visually-hidden" for="searchField">Search</label>
            <div class="input-group mb-2">
                <div class="input-group-text">
                    <i class="fas fa-magnifying-glass"></i>
                </div>
                <input type="text" class="form-control" id="searchField" placeholder="Masukkan nama kampus / jurusan">
            </div>
            <div class="filter-bar">
                <select name="jenisKampus" id="jenisKampus" class="form-control">
                <option value="" selected >Jenis Kampus</option>
                </select>

                <select name="kota" id="kota" class="form-control">
                <option value="" selected>Kota</option>
                </select>

                <select name="kelas" id="kelas" class="form-control">
                <option value="" selected>Kelas</option>
                </select>

                <select name="akreditasi" id="akreditasi" class="form-control">
                <option value="" selected>Akreditasi</option>
                </select>

                <select name="jenjang" id="jenjang" class="form-control">
                <option value="" selected>Jenjang</option>
                </select>

                <select name="pmb" id="pmb" class="form-control">
                <option value="" selected>Status PMB</option>
                </select>
            </div>
            <div class="filter-button mt-2">
              <button class="btn btn-success fs-5" id="filterButton">
              <i class="fa fa-filter"></i> Filter</button>
              <button class="btn btn-danger fs-5" id="resetButton">
              <i class="fa fa-arrow-rotate-back" aria-hidden="true"></i> Reset</button>
            </div>
        </section>
        <section id="list-kampus" class="container-fluid">
            <div class="row my-2 pt-2 pb-2 bg-light shadow border border-1-gray list-kampus-container rounded">
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
            
        </section>
        <div id="loading-container">
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    scrollTo({ top: 0 });
    loadingContainer.classList.add('show');

    const checkMe = await RekompusSource.aboutUser();
    if (checkMe.status === 401) {
      swal({
        icon: 'error',
        title: 'Unauthorized!',
        text: 'Harap login terlebih dahulu!',
        timer: 2000,
      }).then(() => {
        const removeDataLogin = async () => {
          const logout = RekompusSource.logoutUser();
          deleteCookie('jwt');
          deleteCookie('idUser');
          deleteCookie('name');
          deleteCookie('email');
          deleteCookie('role');
        };
        removeDataLogin();
        window.location.href = '/#/login';
      });
    }

    const heroEl = document.querySelector('.hero-text');
    heroEl.innerHTML = heroText('Cari Kampus Impianmu');

    const selectJenisKampusEl = document.querySelector('select#jenisKampus');
    selectJenisKampusEl.innerHTML += selectJenisKampusItem();

    const selectKotaEl = document.querySelector('select#kota');
    selectKotaEl.innerHTML += selectKotaItem();

    const selectKelasEl = document.querySelector('select#kelas');
    selectKelasEl.innerHTML += selectKelasItem();

    const selectAkreditasiEl = document.querySelector('select#akreditasi');
    selectAkreditasiEl.innerHTML += selectAkreditasiItem();

    const selectJenjangEl = document.querySelector('select#jenjang');
    selectJenjangEl.innerHTML += selectJenjangItem();

    const selectPmbEl = document.querySelector('select#pmb');
    selectPmbEl.innerHTML += selectPmbItem();

    const filterButton = document.getElementById('filterButton');
    const resetButton = document.getElementById('resetButton');

    const prev = document.getElementById('previous');
    const next = document.getElementById('next');
    const first = document.getElementById('first');
    const last = document.getElementById('last');
    const ulPageNumber = document.getElementById('pageNumbers');
    const kampusList = document.querySelector('.list-kampus-container');
    const kampuss = await RekompusSource.listKampus();

    const searchField = document.getElementById('searchField');

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
      kampusList,
      index,
      maxRowPerPage,
      pageNumberEl,
      createListKampusItemTemplate,
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
      kampusList.innerHTML = '';
      index -= 1;
      renderPagination(
        kampuss,
        kampusList,
        index,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplate,
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
      kampusList.innerHTML = '';
      index += 1;
      renderPagination(
        kampuss,
        kampusList,
        index,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplate,
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
      kampusList.innerHTML = '';
      index = 1;
      renderPagination(
        kampuss,
        kampusList,
        index,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplate,
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
      kampusList.innerHTML = '';
      index = Math.ceil(kampuss.length / maxRowPerPage);
      renderPagination(
        kampuss,
        kampusList,
        index,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplate,
      );
    });

    function unselect() {
      selectJenisKampusEl.options.selectedIndex = 0;
      selectKotaEl.options.selectedIndex = 0;
      selectKelasEl.options.selectedIndex = 0;
      selectAkreditasiEl.options.selectedIndex = 0;
      selectJenjangEl.options.selectedIndex = 0;
      selectPmbEl.options.selectedIndex = 0;
    }

    function hiddenPagination() {
      ulPageNumber.parentElement.classList.add('hide');
    }

    function showPagination() {
      ulPageNumber.parentElement.classList.remove('hide');
    }

    resetButton.addEventListener('click', async (e) => {
      searchField.value = '';
      kampusList.innerHTML = '';
      unselect();
      renderPagination(
        kampuss,
        kampusList,
        index = 1,
        maxRowPerPage,
        pageNumberEl,
        createListKampusItemTemplate,
      );
      showPagination();
    });

    filterButton.addEventListener('click', async (e) => {
      e.preventDefault();

      const allData = await kampuss;
      const jenisKampus = selectJenisKampusEl.value;
      const kota = selectKotaEl.value;
      const kelasTersedia = selectKelasEl.value;
      const akreditasiKampus = selectAkreditasiEl.value;
      const jenjang = selectJenjangEl.value;
      const pmb = selectPmbEl.value;

      let tempKampus = [...allData];

      if (searchField.value.trim() !== '') {
        const tempUniv = [];
        tempKampus.forEach((univ) => {
          if (univ.name.toLowerCase().includes(e.target.value.toLowerCase(), 5)) {
            tempUniv.push(univ);
            return;
          }

          univ.jurusan.forEach((prodi) => {
            if (prodi.namaJurusan.toLowerCase()
              .includes(e.target.value.toLowerCase())) {
              tempUniv.push(univ);
            }
          });
        });

        tempKampus = [];
        tempUniv.forEach((data) => {
          tempKampus.push(data);
        });
      }

      if (jenisKampus) {
        const filterJenisKampus = tempKampus.filter((item) => item.jenisKampus === jenisKampus);

        tempKampus = [];
        filterJenisKampus.forEach((data) => {
          tempKampus.push(data);
        });
      }

      if (kota) {
        const filterKota = tempKampus
          .filter((item) => item.city.toLowerCase() === kota.toLowerCase());

        tempKampus = [];
        filterKota.forEach((data) => {
          tempKampus.push(data);
        });
      }

      if (kelasTersedia) {
        const tempData = [];
        tempKampus.forEach((data) => {
          data.kelasTersedia.forEach((kelas) => {
            if (kelas.toLowerCase() === kelasTersedia.toLowerCase()) {
              tempData.push(data);
            }
          });
        });

        tempKampus = [];
        tempData.forEach((data) => {
          tempKampus.push(data);
        });
      }

      if (akreditasiKampus) {
        const filterAkreditasi = tempKampus
          .filter((item) => item.akreditasiKampus.toLowerCase() === akreditasiKampus.toLowerCase());

        tempKampus = [];
        filterAkreditasi.forEach((data) => {
          tempKampus.push(data);
        });
      }

      if (jenjang) {
        const tempData = [];
        tempKampus.forEach((data) => {
          data.jurusan.forEach((prodi) => {
            if (prodi.jenjang.toLowerCase() === jenjang.toLowerCase()) {
              tempData.push(data);
            }
          });
        });

        tempKampus = [];
        tempData.forEach((data) => {
          tempKampus.push(data);
        });
      }

      if (pmb) {
        const filterPmb = tempKampus
          .filter((item) => item.statusPmb.toLowerCase() === pmb.toLowerCase());

        tempKampus = [];
        filterPmb.forEach((data) => {
          tempKampus.push(data);
        });
      }

      if (tempKampus.length > 0) {
        hiddenPagination();
        kampusList.innerHTML = '';
        tempKampus.forEach((data) => {
          kampusList.innerHTML += createListKampusItemTemplate(data);
        });
      } else {
        hiddenPagination();
        kampusList.innerHTML = `
        <div class="container-fluid">
          <h2 class="text-center">Tidak ada data!</h2>
          <div class="d-flex">
          <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
          </div>
          
        </div>
      `;
      }
    });

    searchField.addEventListener('keyup', async (e) => {
      enabledNextLast();
      kampusList.innerHTML = '';

      if (e.target.value.trim() === '') {
        showPagination();
        renderPagination(
          kampuss,
          kampusList,
          index,
          maxRowPerPage,
          pageNumberEl,
          createListKampusItemTemplate,
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
        kampusList.innerHTML = '';
        hiddenPagination();
        tempUniv.forEach((item) => {
          kampusList.innerHTML += createListKampusItemTemplate(item);
        });
      } else {
        hiddenPagination();
        kampusList.innerHTML = `
        <div class="container-fluid">
          <h2 class="text-center">Tidak ada data!</h2>
          <div class="d-flex">
          <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
          </div>
        </div>
      `;
      }
    });

    loadingContainer.classList.remove('show');
  },
};

export default ListKampus;
