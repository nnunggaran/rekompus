import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { heroText, createKampusDetailForm } from '../templates/template-creator';

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
      console.log(kampusItem);
      removeKampus(kampusItem);
    });
    function removeKampus(data) {
      const deleteKampus = (item) => {
        const delKampus = RekompusSource.deleteKampus(item);
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
          removeKampus(data);
          swal({
            icon: 'success',
            title: 'Berhasil menghapus!',
            text: 'Anda berhasil menghapus data yang dipilih.',
          }).then(
            deleteKampus(data),
            swal({
              icon: 'success',
              title: 'Berhasil!',
              text: 'Berhasil menghapus kampus!',
            }).then(
              window.location.href = `/#/admin/${sessionStorage.getItem('email')}`,
            ),
          );
        } else {
          swal({
            icon: 'success',
            title: 'Sukses Membatalkan',
            text: 'Berhasil membatalkan penghapusan kampus.',
          });
        }
      });
    }
  },
};

export default InfoKampus;
