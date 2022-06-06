import { jurusanRekomendasi, kampusBerdasarkanLokasi, kampusRekomendasi } from '../templates/home-creator';

const Homepage = {
  async render() {
    return `
    <section class="hero container-fluid row">
      <div class="col-md-6">
          <p class="welcome-text">Selamat Datang di Rekompus</p>
          <h1>Rekomendasi Kampus dan Jurusan Impianmu</h1>
          <p class="desc-text">Temukan Rekomendasi Kampus dan Jurusan Impianmu di Rekompus sekarang juga.<br>
              Daftar sekarang gratis!</p>
          <a href="#kampus-rekomendasi">
              <button class="btn btn-info text-white">Eksplor</button>
          </a>
      </div>
      <div class="col-md-6">
          <img src="./images/hero-image.png" alt="" class="hero-image">
      </div>
    </section>
    <section id="kampus-rekomendasi" class="container-fluid mt-5">
    </section>
    <section id="jurusan-rekomendasi" class="container-fluid mt-5">
    </section>
    <section id="lokasi-kampus" class="container-fluid mt-5">
    </section>
    `;
  },

  async afterRender() {
    const kampusRekomendasiEl = document.querySelector('#kampus-rekomendasi');
    kampusRekomendasiEl.innerHTML = kampusRekomendasi();
    const jurusanRekomendasiEl = document.querySelector('#jurusan-rekomendasi');
    jurusanRekomendasiEl.innerHTML = jurusanRekomendasi();
    const lokasiKampusEl = document.querySelector('#lokasi-kampus');
    lokasiKampusEl.innerHTML = kampusBerdasarkanLokasi();
  },
};

export default Homepage;
