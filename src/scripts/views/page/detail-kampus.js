/* eslint-disable no-param-reassign */
import RekompusSource from '../../data/rekompus-source';
import UrlParser from '../../routes/url-parser';
import { getCookie } from '../../utils/cookie';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createKampusDetailTemplate } from '../templates/template-creator';

const DetailKampus = {
  async render() {
    return `
    <section id="detail-kampus" class="row">
    </section>
    ${getCookie('role') !== 'ADMIN' ? '<div id="likeButtonContainer"></div>' : ''}
    <div id="loading-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    `;
  },
  async afterRender() {
    scrollTo({ top: 0 });
    const loadingContainer = document.getElementById('loading-container');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    loadingContainer.classList.add('show');
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
    const kampus = await RekompusSource.detailKampus(url.id);
    const kampusContainer = document.querySelector('#detail-kampus');
    kampusContainer.innerHTML = createKampusDetailTemplate(kampus);
    loadingContainer.classList.remove('show');
    const scrollKampus = document.getElementById('scrollKampus');
    const scrollJurusan = document.getElementById('scrollJurusan');
    const scrollReview = document.getElementById('scrollReview');

    const infoKampus = document.getElementById('info-kampus');
    const jurusanTersedia = document.getElementById('jurusan-tersedia');
    const jurusanLength = document.getElementById('jurusan-length');
    const jurusanField = document.getElementById('jurusanField');
    console.log(kampus[0]);
    console.log(kampus[0].jurusan);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      rekompus: {
        id: kampus[0].id,
        name: kampus[0].name,
        pictureId: kampus[0].pictureId,
        city: kampus[0].city,
        jenisKampus: kampus[0].jenisKampus,
        akreditasiKampus: kampus[0].akreditasiKampus,
        kelasTersedia: kampus[0].kelasTersedia,
        statusPmb: kampus[0].statusPmb,
        jurusan: kampus[0].jurusan.map((item) => item),
      },
    });

    const containerReviews = document.querySelector('.container-reviews');
    const postReview = document.getElementById('postReview');
    const getReview = await RekompusSource.getReview(kampus[0].id);
    const dataReview = getReview;

    function renderReview(data) {
      let listReview = '';
      const review = data.sort((a, b) => {
        if (a.createdAt < b.createdAt) return 1;
        if (a.createdAt > b.createdAt) return -1;
        return 0;
      });

      review.forEach((item) => {
        const templateReview = (comment) => `
          <div class="row my-2">
            <div class="col-3 col-sm-3 col-md-2 col-lg-2">
              <img src="./images/default-profile.png" alt="foto-profil" class="rounded-circle w-100">
            </div>
            <div class="col-9 col-sm-9 col-md-10 col-lg-10">
              <div class="row">
                <div class="col-md-12">
                <h5 class="text-heading">${comment.user.name} </h5>
                </div>
                <div class="col-md-12">
                <p class="text-muted">${comment.comment}</p>
                </div>
                <div class="col-md-12">
                <p class="text-primary">${dateConverter(comment.createdAt)}</p>
                </div>
              </div>
            </div>
          </div>
          <hr>
        `;

        const dateConverter = (date) => {
          const d = new Date(`${date}`);
          const jam = d.getHours();
          const menit = d.getMinutes();
          let hari = d.getDay();
          let bulan = d.getMonth();
          const tanggal = d.getDate();
          const tahun = d.getFullYear();
          switch (hari) {
            case 0:
              hari = 'Minggu';
              break;
            case 1:
              hari = 'Senin';
              break;
            case 2:
              hari = 'Selasa';
              break;
            case 3:
              hari = 'Rabu';
              break;
            case 4:
              hari = 'Kamis';
              break;
            case 5:
              hari = 'Jumat';
              break;
            case 6:
              hari = 'Sabtu';
              break;
            default:
              break;
          }

          switch (bulan) {
            case 0:
              bulan = 'Januari';
              break;
            case 1:
              bulan = 'Februari';
              break;
            case 2:
              bulan = 'Maret';
              break;
            case 3:
              bulan = 'April';
              break;
            case 4:
              bulan = 'Mei';
              break;
            case 5:
              bulan = 'Juni';
              break;
            case 6:
              bulan = 'Juli';
              break;
            case 7:
              bulan = 'Agustus';
              break;
            case 8:
              bulan = 'September';
              break;
            case 9:
              bulan = 'Oktober';
              break;
            case 10:
              bulan = 'November';
              break;
            case 11:
              bulan = 'Desember';
              break;
            default:
              break;
          }
          const result = `${jam}.${menit}\n${hari}, ${tanggal} ${bulan} ${tahun}`;
          return result;
        };

        listReview += templateReview(item);
      });

      return listReview;
    }

    if (dataReview.length > 0) {
      containerReviews.innerHTML = renderReview(dataReview);
    } else {
      containerReviews.innerHTML = `
      <div class="container-fluid">
        <h5 class="text-center">Belum ada review</h5>
        <div class="d-flex">
        <img src="./images/no-data.png" alt="no-data" class="w-50 mx-auto">
        </div>      
      </div>`;
    }

    const createTemplateJurusan = (univ, jurusan) => {
      let dataJurusan = '';
      const newJurusan = jurusan.forEach((item) => {
        dataJurusan += `
          <div class="col-md-12">
            <div class="card border-orange my-2">
              <div class="card-body d-flex m-0 p-2 scroll-x">
                <div class="group-text">
                  <h5 class="text-heading">${item.jenjang} - ${item.namaJurusan}</h5>
                  <span class="alert alert-info rounded-pill p-1 fs-6">Akreditasi: ${item.akreditasi}</span>
                </div>
                <div class="group-text ps-1 ms-auto">
                  <p class="text-muted">Biaya SPP</p>
                  <h6 class="text-heading">${item.kelas[0].biayaSPP ? item.kelas[0].biayaSPP : '<span class="text-danger">No Data</span>'}</h6>
                </div>
              </div>
              <div class="card-footer bg-primary">
                <a href="/#/kampus/${univ.id}/jurusan/${item.id}">
                  <button class="btn btn-primary fw-bold w-100">Detail</button>
                </a>
              </div>
            </div>
          </div> 
          `;
      });

      return dataJurusan;
    };

    kampus.forEach((univ) => {
      jurusanTersedia.innerHTML += createTemplateJurusan(univ, univ.jurusan);
      jurusanLength.innerText = `${univ.jurusan.length} Jurusan ditampilkan`;
    });

    postReview.addEventListener('submit', async (e) => {
      e.preventDefault();
      const txtId = document.getElementById('txtId');
      const txtReview = document.getElementById('txtReview');

      if (getReview.length === 0) {
        const formData = {
          id: '0',
          kampus_id: txtId.value,
          comment: txtReview.value,
        };

        const sendReview = await RekompusSource.postReview(formData);

        if (sendReview) {
          swal({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Berhasil menambahkan komentar!',
            timer: 1500,
          }).then(async () => {
            const newRenderReview = await RekompusSource.getReview(kampus[0].id);
            containerReviews.innerHTML = renderReview(newRenderReview);
          });
        } else {
          swal({
            icon: 'error',
            title: 'Gagal!',
            text: 'Gagal menambahkan komentar!',
            timer: 2000,
          }).then(() => {
            scrollTo({ top: 0 });
          });
          txtReview.value = '';
          return;
        }
      }
      const idParent = await getReview[getReview.length - 1].id;
      const formData = {
        id: idParent,
        kampus_id: txtId.value,
        comment: txtReview.value,
      };

      const sendReview = await RekompusSource.postReview(formData);
      if (sendReview) {
        swal({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Berhasil menambahkan komentar!',
          timer: 1500,
        }).then(async () => {
          const newRenderReview = await RekompusSource.getReview(kampus[0].id);
          containerReviews.innerHTML = renderReview(newRenderReview);
        });
        txtReview.value = '';
      }
    });

    jurusanField.addEventListener('keyup', async (e) => {
      if (e.target.value.trim() === '') {
        jurusanTersedia.innerHTML = '';
        kampus.forEach((univ) => {
          jurusanLength.innerText = `${univ.jurusan.length} Jurusan ditampilkan`;
          jurusanTersedia.innerHTML += createTemplateJurusan(univ, univ.jurusan);
        });
        return;
      }
      const univData = await kampus;
      const tempJurusan = [];
      jurusanTersedia.innerHTML = '';
      univData.forEach((univ) => {
        univ.jurusan.forEach((prodi) => {
          if (prodi.namaJurusan.toLowerCase().includes(e.target.value.toLowerCase())) {
            tempJurusan.push(prodi);
          }
        });
      });

      if (tempJurusan.length > 0) {
        jurusanLength.innerText = `${tempJurusan.length} Jurusan ditampilkan`;
        jurusanTersedia.innerHTML += createTemplateJurusan(kampus, tempJurusan);
      } else {
        jurusanLength.innerText = `${tempJurusan.length} Jurusan ditampilkan`;
        jurusanTersedia.innerHTML = `
        <div class="container-fluid empty-data">
          <h2 class="text-center">Tidak ada data!</h2>
          <div class="d-flex">
          <img src="./images/no-data.png" alt="no-data" class="w-75 mx-auto">
          </div>
          
        </div>
      `;
      }
    });

    scrollKampus.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: infoKampus.offsetTop - 20 });
    });

    scrollJurusan.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: jurusanTersedia.offsetTop - 20 });
    });

    scrollReview.addEventListener('click', (e) => {
      e.preventDefault();
      const mediaQueryLarge = window.matchMedia('(min-width: 760px)');
      const checkMedia = mediaQueryLarge.matches;
      if (checkMedia) {
        window.scrollTo({ top: containerReviews.offsetTop - 50 });
      } else {
        window.scrollTo({
          top: (2 * containerReviews.offsetHeight) + 750,
        });
      }
    });
  },
};

export default DetailKampus;
