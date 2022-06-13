import RekompusSource from '../../data/rekompus-source';
import { heroText, createListKampusItemTemplateDashboard } from '../templates/template-creator';

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
    <div id="loading-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    `;
  },

  async afterRender() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('show');
    const kampuss = await RekompusSource.listKampus();
    const kampusContainer = document.querySelector('.list-kampus-container');
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

    kampuss.forEach((kampus) => {
      kampusContainer.innerHTML += createListKampusItemTemplateDashboard(kampus, 'admin');
    });

    const btnDeleteKampus = document.querySelectorAll('.delete-item');

    btnDeleteKampus.forEach((delKampus) => {
      delKampus.addEventListener('click', async (e) => {
        e.preventDefault();
        const kampusItem = e.target.parentElement.parentElement.parentElement.dataset.id;
        const itemName = e.target.parentElement.parentElement.parentElement.dataset.name;
        removeKampus(kampusItem, itemName);
      });
    });

    const removeKampus = async (data, name) => {
      const deleteKampus = async (item, itemName) => {
        const delKampus = await RekompusSource.deleteKampus(item);
        swal({
          icon: 'success',
          title: 'Berhasil menghapus!',
          text: `Anda berhasil menghapus kampus ${itemName}`,
        }).then(() => window.location.reload());
        return delKampus;
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
            text: 'Berhasil membatalkan penghapusan kampus.',
          });
        }
      });
    };

    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Dashboard Admin');
    scrollTo({ top: 0 });
    loadingContainer.remove('show');
  },
};

export default DashboardAdmin;
