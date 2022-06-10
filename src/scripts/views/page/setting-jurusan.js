/* eslint-disable no-shadow */
import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { createSettingJurusanContainerTemplate, heroText } from '../templates/template-creator';

const SettingJurusan = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    </section>
    <section class="container-fluid bg-info" id="setting-jurusan">
    </section>
    <div id="loading-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>`;
  },

  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('show');
    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Jurusan Setting');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jurusan = await RekompusSource.detailKampus(url.id);
    const jurusanContainer = document.getElementById('setting-jurusan');
    jurusanContainer.innerHTML = createSettingJurusanContainerTemplate(jurusan);
    const btnAddJurusan = document.getElementById('btnAddJurusan');
    const btnJurusanList = document.getElementById('btnJurusanList');

    const addJurusan = document.getElementById('addJurusan');
    const jurusanList = document.getElementById('jurusanList');
    btnAddJurusan.addEventListener('click', (e) => {
      e.preventDefault();
      jurusanList.classList.remove('show');
      btnJurusanList.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnAddJurusan.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');

      const formAddJurusan = document.getElementById('formJurusan');
      const fieldNamaJurusan = document.getElementById('namaJurusan');
      const selectJenjang = document.getElementById('jenjang');
      const fieldDeskripsiJurusan = document.getElementById('deskripsiJurusan');
      const cbReguler = document.getElementById('Reguler');
      const cbKaryawan = document.getElementById('Karyawan');
      const cbOnline = document.getElementById('Online');
      const sppReguler = document.getElementById('sppReguler');
      const sppKaryawan = document.getElementById('sppKaryawan');
      const sppOnline = document.getElementById('sppOnline');
      const fieldPelajaran = document.getElementById('pelajaran');
      const prospekKarir = document.getElementById('prospekKarir');

      formAddJurusan.addEventListener('submit', (e) => {
        e.preventDefault();
      });
    });
    btnJurusanList.addEventListener('click', (e) => {
      e.preventDefault();
      addJurusan.classList.remove('show');
      btnAddJurusan.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnJurusanList.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });

    loadingContainer.classList.remove('show');
  },
};

export default SettingJurusan;
