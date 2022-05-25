import {
  selectAkreditasiItem,
  selectJenjangItem,
  selectJurusanItem,
  selectKelasItem,
  selectPmbItem,
  selectProvinsiItem,
} from '../templates/list-kampus-creator';
import { heroText, listKampusItem } from '../templates/template-creator';
import data from '../../data/data.json';

const ListKampus = {
  async render() {
    return `
        <div class="hero-text container-fluid">
        </div>
        <section class="search-bar container-fluid bg-info pt-2 pb-2">
            <label class="visually-hidden" for="autoSizingInputGroup">Search</label>
            <div class="input-group mb-2">
                <div class="input-group-text">
                    <i class="fas fa-magnifying-glass"></i>
                </div>
                <input type="search" class="form-control" id="autoSizingInputGroup" placeholder="Masukkan nama kampus">
            </div>
            <div class="filter-bar">
                <select name="jurusan" id="jurusan" class="form-control">
                <option value="" selected >Jurusan</option>
                </select>

                <select name="provinsi" id="provinsi" class="form-control">
                <option value="" selected>Provinsi</option>
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
        </section>
        <section id="list-kampus" class="container-fluid">
            <div class="row mt-2 pt-2 pb-2 bg-info list-kampus-container">
            </div>
            <nav aria-label="Page navigation example mb-2">
                    <ul class="pagination pagination-sm justify-content-center">
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
            </nav>
            
        </section>
    `;
  },

  async afterRender() {
    const heroEl = document.querySelector('.hero-text');
    heroEl.innerHTML = heroText('Cari Kampus Impianmu');
    const selectJurusanEl = document.querySelector('select#jurusan');
    selectJurusanEl.innerHTML += selectJurusanItem();
    const selectProvinsiEl = document.querySelector('select#provinsi');
    selectProvinsiEl.innerHTML += selectProvinsiItem();
    const selectKelasEl = document.querySelector('select#kelas');
    selectKelasEl.innerHTML += selectKelasItem();
    const selectAkreditasiEl = document.querySelector('select#akreditasi');
    selectAkreditasiEl.innerHTML += selectAkreditasiItem();
    const selectJenjangEl = document.querySelector('select#jenjang');
    selectJenjangEl.innerHTML += selectJenjangItem();
    const selectPmbEl = document.querySelector('select#pmb');
    selectPmbEl.innerHTML += selectPmbItem();
    const listKampusContainer = document.querySelector('.list-kampus-container');
    const showListKampus = listKampusItem(data, listKampusContainer);
    showListKampus();
  },
};

export default ListKampus;
