/* eslint-disable no-restricted-syntax */
import UrlParser from '../../routes/url-parser';
import RekompusSource from '../../data/rekompus-source';
import { createKampusDetailFormWithSubmit, heroText } from '../templates/template-creator';
import { getCookie } from '../../utils/cookie';

const EditKampus = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    </section>
    <section class="container-fluid bg-info" id="updateKampus">
    </section>
    <div id="loading-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('show');
    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Edit Kampus');

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

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const kampus = await RekompusSource.detailKampus(url.id);
    const kampusContainer = document.getElementById('updateKampus');
    kampusContainer.innerHTML = createKampusDetailFormWithSubmit(kampus);

    loadingContainer.classList.remove('show');

    const idLogo = document.getElementById('idLogo');
    const logoKampus = document.getElementById('postLogoKampus');
    const previewLogo = document.getElementById('previewLogo');
    previewLogo.classList.add('d-flex', 'w-75', 'mx-auto');

    logoKampus.addEventListener('change', () => {
      const [file] = logoKampus.files;
      if (file) {
        const showLogo = `<img src="${URL.createObjectURL(file)}" class="w-100 mx-auto"/>`;
        previewLogo.innerHTML = showLogo;
      }
    });

    const formLogo = document.getElementById('uploadLogo');
    formLogo.addEventListener('reset', (e) => {
      e.preventDefault();
      logoKampus.value = '';
      previewLogo.innerHTML = '';
    });
    formLogo.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData();
      for (const file of logoKampus.files) {
        formData.append('pictureid', file);
      }
      const postLogo = await RekompusSource.uploadLogo(
        idLogo.value,
        formData,
      );
      console.log('post logo', postLogo);

      if (postLogo.status === 200) {
        swal({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Berhasil mengunggah logo kampus!',
        }).then(() => {
          window.location.reload();
        });
      }
    });

    const idKampus = document.getElementById('idKampus').value;
    const namaKampus = document.getElementById('namaKampus');
    const deskripsiKampus = document.getElementById('deskripsi');
    const akreditasiKampus = document.getElementById('akreditasiKampus');
    const statusPmb = document.getElementById('statusPMB');
    const kota = document.getElementById('kota');
    const cbReguler = document.getElementById('Reguler');
    const cbKaryawan = document.getElementById('Karyawan');
    const cbOnline = document.getElementById('Online');

    const formUpdate = document.getElementById('formUpdateKampus');
    formUpdate.addEventListener('submit', (e) => {
      e.preventDefault();
      const kelasTersedia = [];

      if (cbReguler.checked) {
        kelasTersedia.push('Reguler');
      }

      if (cbKaryawan.checked) {
        kelasTersedia.push('Karyawan');
      }

      if (cbOnline.checked) {
        kelasTersedia.push('Online');
      }

      const formData = {
        name: namaKampus.value,
        description: deskripsiKampus.value,
        city: kota.value,
        akreditasiKampus: akreditasiKampus.value,
        statusPmb: statusPmb.value,
        kelasTersedia,
      };

      const putUpdateData = RekompusSource.updateKampus(idKampus, formData);
    });
  },
};

export default EditKampus;
