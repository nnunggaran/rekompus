import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { heroText, createKampusDetailForm } from '../templates/template-creator';
import { getCookie } from '../../utils/cookie';

const InfoKampus = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    </section>
    <section class="container-fluid bg-info" id="infoKampus">
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
    heroTextEl.innerHTML = heroText('Info Kampus');

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
    const kampusContainer = document.getElementById('infoKampus');
    kampusContainer.innerHTML = createKampusDetailForm(kampus);
    const btnDeleteKampus = document.querySelector('.delete-item');
    const namaKampus = kampus.map((item) => item.name);
    loadingContainer.classList.remove('show');
    scrollTo({ top: 0 });
    btnDeleteKampus.addEventListener('click', (e) => {
      e.preventDefault();
      const kampusItem = e.target.parentElement.id;
      removeKampus(kampusItem);
    });
    function removeKampus(id) {
      const deleteKampus = (data) => {
        const delKampus = RekompusSource.deleteKampus(data);
        return delKampus;
      };
      swal({
        title: 'Yakin ingin menghapus?',
        text: `Anda akan menghapus kampus ${namaKampus}`,
        icon: 'warning',
        buttons: [
          'Batalkan',
          'Konfirmasi',
        ],
        dangerMode: true,
      }).then((isConfirm) => {
        if (isConfirm) {
          deleteKampus(id);
          swal({
            icon: 'success',
            title: 'Berhasil!',
            text: `Berhasil menghapus kampus ${namaKampus}!`,
          }).then(
            window.location.href = `/#/admin/${getCookie('email')}`,
          );
        } else {
          swal({
            icon: 'success',
            title: 'Sukses Membatalkan',
            text: `Berhasil membatalkan penghapusan kampus ${namaKampus}.`,
          });
        }
      });
    }
  },
};

export default InfoKampus;
