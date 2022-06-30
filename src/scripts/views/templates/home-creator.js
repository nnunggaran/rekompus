/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import CONFIG from '../../globals/config';

const kampusPrice = (data) => data[0].kelas[0].biayaSPP;

const kampusRekomendasi = (kampus) => {
  const container = `
  <h2 class="text-center text-white mb-3">Rekomendasi Kampus</h2>
  <div class="row bg-light shadow mx-auto pt-2 pb-2 br border border-1 border-gray">
  `;

  const tampilkanSemua = `
    <h4 class="text-center mt-2"><a href="/#/kampus" class="fw-bold fs-3">Tampilkan Semua</a>
        </h4>
    </div>
  `;

  let x = null;
  let y = null;

  const randomizeKampus = () => {
    const randomKampus = () => Math.ceil(Math.random() * 10);

    const check = randomKampus();

    if (check >= 8) {
      x = 4, y = 7;
    } else if (check >= 6) {
      x = 3, y = 6;
    } else if (check >= 4) {
      x = 2, y = 5;
    } else if (check >= 2) {
      x = 1, y = 4;
    } else if (check >= 1) {
      x = 0, y = 3;
    }
  };

  randomizeKampus();

  let loopData = '';
  const data = kampus
    .filter((item) => item.akreditasiKampus === 'A' || item.akreditasiKampus === 'Unggul')
    .slice(x, y)
    .forEach((item) => {
      loopData += `<div class="col-md-6 col-lg-4 mb-3">
            <div class="card shadow-sm">
                <div class="card-body d-flex">
                    <div class="thumb-container d-flex">
                        <div class="w-20">
                            <img src="${item.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${item.pictureId}` : './images/default-school.png'}" alt="${item.name}" class="thumb-img">
                        </div>
                        <div class="w-80">
                            <h4 class="ms-2" style="height:60px">${item.name}</h4>
                            <span class="ms-2 alert alert-info d-inline-block rounded-pill py-1 px-2 my-1">Akeditasi: ${item.akreditasiKampus}</span>
                            <span class="ms-2 alert alert-info d-inline-block rounded-pill py-1 px-3 my-1">${item.jenisKampus}</span>
                            <p class="ms-2 mt-2 mb-0">Biaya kuliah mulai: ${kampusPrice(item.jurusan)}</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer btn-dblue rounded-bottom">
                    <a href="/#/kampus/${item.id}">
                        <button class="btn btn-dblue w-100 fs-5">Detail</button>
                    </a>
                </div>
            </div>
        </div>
    `;
    });
  const result = `${container} ${loopData} ${tampilkanSemua}`;
  return result;
};

const jurusanRekomendasi = (kampus) => {
  const container = `
    <h2 class="text-center mb-3">Rekomendasi Jurusan</h2>
    <div class="row bg-light shadow mx-auto pt-2 pb-2 br border border-1 border-gray">
  `;

  let x = null;
  let y = null;

  const randomizeKampus = () => {
    const randomKampus = () => Math.ceil(Math.random() * 10);

    const check = randomKampus();

    if (check >= 8) {
      x = 4, y = 7;
    } else if (check >= 6) {
      x = 3, y = 6;
    } else if (check >= 4) {
      x = 2, y = 5;
    } else if (check >= 2) {
      x = 1, y = 4;
    } else if (check >= 1) {
      x = 0, y = 3;
    }
  };

  randomizeKampus();

  let loopJurusan = '';

  const data = kampus
    .filter((item) => item.akreditasiKampus === 'A' || item.akreditasiKampus === 'Unggul')
    .slice(x, y)
    .forEach((item) => {
      const nestedItemJurusan = (dataKampus, jurusan) => {
        const filterJurusan = jurusan
          .filter((object) => object.akreditasi === 'A' || object.akreditasi === 'Unggul' || object.akreditasi === 'B' || object.akreditasi === 'Sangat Baik')
          .slice(0, 1)
          .map((object) => `
        <div class="col-md-6 col-lg-4 mb-3">
            <div class="card shadow-sm">
                <div class="card-body d-flex">
                    <div class="thumb-container d-flex">
                        <div class="w-20">
                            <img src="${dataKampus.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${dataKampus.pictureId}` : './images/default-school.png'}" alt="" class="thumb-img">
                        </div>
                        <div class="w-80">
                            <h4 class="ms-2" style="height:60px">${object.namaJurusan}</h4>
                            <span class="ms-2 alert alert-info d-inline-block rounded-pill py-1 px-2 my-1">Akreditasi: ${object.akreditasi}</span>
                            <span class="ms-2 alert alert-info d-inline-block rounded-pill py-1 px-3 my-1">${dataKampus.jenisKampus}</span>
                            <p class="ms-2 mt-2 mb-0">Biaya SPP: ${object.kelas[0].biayaSPP}</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer btn-dblue rounded-bottom">
                    <a href="/#/kampus/${dataKampus.id}/jurusan/${object.id}">
                        <button class="btn btn-dblue w-100 fs-5">Detail</button>
                    </a>
                </div>
            </div>
        </div>
        `);
        return filterJurusan;
      };
      loopJurusan += nestedItemJurusan(item, item.jurusan);
    });

  const result = `${container} ${loopJurusan}`;
  return result;
};

const kampusBerdasarkanLokasi = (kampus) => {
  const container = `
  <h2 class="text-center text-white mb-3">Kampus berdasarkan lokasi</h2>
  <div class="row bg-light shadow mx-auto pt-2 pb-2 br border border-1 border-gray">
  `;

  const loopKotaBandung = document.createElement('div');
  loopKotaBandung.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaJakarta = document.createElement('div');
  loopKotaJakarta.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaSurabaya = document.createElement('div');
  loopKotaSurabaya.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaMalang = document.createElement('div');
  loopKotaMalang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaDepok = document.createElement('div');
  loopKotaDepok.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaMakassar = document.createElement('div');
  loopKotaMakassar.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaPadang = document.createElement('div');
  loopKotaPadang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaSemarang = document.createElement('div');
  loopKotaSemarang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaPalembang = document.createElement('div');
  loopKotaPalembang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaBanjarmasin = document.createElement('div');
  loopKotaBanjarmasin.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaBandaAceh = document.createElement('div');
  loopKotaBandaAceh.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaManado = document.createElement('div');
  loopKotaManado.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaKupang = document.createElement('div');
  loopKotaKupang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaBandarLampung = document.createElement('div');
  loopKotaBandarLampung.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaSurakarta = document.createElement('div');
  loopKotaSurakarta.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaBogor = document.createElement('div');
  loopKotaBogor.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaMedan = document.createElement('div');
  loopKotaMedan.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaBengkulu = document.createElement('div');
  loopKotaBengkulu.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaPekanbaru = document.createElement('div');
  loopKotaPekanbaru.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaTanjungPinang = document.createElement('div');
  loopKotaTanjungPinang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaJambi = document.createElement('div');
  loopKotaJambi.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaPangkalPinang = document.createElement('div');
  loopKotaPangkalPinang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaPontianak = document.createElement('div');
  loopKotaPontianak.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaSamarinda = document.createElement('div');
  loopKotaSamarinda.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaPalangkaraya = document.createElement('div');
  loopKotaPalangkaraya.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaTanjungSelor = document.createElement('div');
  loopKotaTanjungSelor.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaSerang = document.createElement('div');
  loopKotaSerang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaYogyakarta = document.createElement('div');
  loopKotaYogyakarta.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaDenpasar = document.createElement('div');
  loopKotaDenpasar.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaMataram = document.createElement('div');
  loopKotaMataram.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaGorontalo = document.createElement('div');
  loopKotaGorontalo.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaMamuju = document.createElement('div');
  loopKotaMamuju.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaPalu = document.createElement('div');
  loopKotaPalu.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaKendari = document.createElement('div');
  loopKotaKendari.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaTernate = document.createElement('div');
  loopKotaTernate.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaAmbon = document.createElement('div');
  loopKotaAmbon.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaManokwari = document.createElement('div');
  loopKotaManokwari.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaJayapura = document.createElement('div');
  loopKotaJayapura.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');

  const templateItemKota = (univ, length, filterCity) => `
    <div class="card shadow-sm">
        <div class="card-header alert-info text-center mb-0 pb-0">
            <h4>${univ.city}</h4>
            <p class="text-muted">${length} Kampus Tersedia</p>
        </div>
        
        <a data-bs-toggle="modal" data-bs-target="#${univ.city}" style="cursor:pointer;">
        <img src="./favicon.png" alt="" class="full-img rounded-bottom">
        </a>
    </div>

    <div class="modal fade" id="${univ.city}" tabindex="-1" aria-labelledby="${univ.city}Label" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header alert alert-info">
            <span class="py-1 px-2 mx-auto text-center w-100">
              <h5 class="modal-title" id="${univ.city}Label">Data Kampus Kota ${univ.city}</h5>
            </span>
            <button type="button" class="btn btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body row">
            ${loopJurusan(filterCity)}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const loopJurusan = (univ) => {
    let result = '';
    const data = univ.forEach((item) => {
      result += `
      <div class="col-lg-6 mb-3">
        <div class="card shadow-sm">
            <div class="card-body d-flex">
                <div class="thumb-container d-flex">
                    <div class="w-20">
                        <img src="${item.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${item.pictureId}` : './images/default-school.png'}" alt="${item.name}" class="thumb-img">
                    </div>
                    <div class="w-80">
                        <h4 class="ms-2" style="height:60px">${item.name}</h4>
                        <span class="ms-2 alert alert-info d-inline-block rounded-pill py-1 px-2 my-1">Akeditasi: ${item.akreditasiKampus}</span>
                        <span class="ms-2 alert alert-info d-inline-block rounded-pill py-1 px-3 my-1">${item.jenisKampus}</span>
                        <p class="ms-2 mt-2 mb-0">Biaya kuliah mulai: ${kampusPrice(item.jurusan)}</p>
                    </div>
                </div>
            </div>
            <div class="card-footer btn-dblue rounded-bottom">
                <a href="/#/kampus/${item.id}">
                    <button data-bs-dismiss="modal" class="btn btn-dblue w-100 fs-5">Detail</button>
                </a>
            </div>
        </div>
      </div>`;
    });
    return result;
  };

  const kotaBandung = kampus.filter((univ) => univ.city.toLowerCase() === 'bandung');

  kotaBandung.forEach((univ) => {
    loopKotaBandung.innerHTML = templateItemKota(univ, kotaBandung.length, kotaBandung);
  });

  const kotaJakarta = kampus.filter((univ) => univ.city.toLowerCase() === 'jakarta');

  kotaJakarta.forEach((univ) => {
    loopKotaJakarta.innerHTML = templateItemKota(univ, kotaJakarta.length, kotaJakarta);
  });

  const kotaSurabaya = kampus.filter((univ) => univ.city.toLowerCase() === 'surabaya');

  kotaSurabaya.forEach((univ) => {
    loopKotaSurabaya.innerHTML = templateItemKota(univ, kotaSurabaya.length, kotaSurabaya);
  });

  const kotaMalang = kampus.filter((univ) => univ.city.toLowerCase() === 'malang');

  kotaMalang.forEach((univ) => {
    loopKotaMalang.innerHTML = templateItemKota(univ, kotaMalang.length, kotaMalang);
  });

  const kotaDepok = kampus.filter((univ) => univ.city.toLowerCase() === 'depok');

  kotaDepok.forEach((univ) => {
    loopKotaDepok.innerHTML = templateItemKota(univ, kotaDepok.length, kotaDepok);
  });

  const kotaMakassar = kampus.filter((univ) => univ.city.toLowerCase() === 'makassar');

  kotaMakassar.forEach((univ) => {
    loopKotaMakassar.innerHTML = templateItemKota(univ, kotaMakassar.length, kotaMakassar);
  });

  const kotaPadang = kampus.filter((univ) => univ.city.toLowerCase() === 'padang');

  kotaPadang.forEach((univ) => {
    loopKotaPadang.innerHTML = templateItemKota(univ, kotaPadang.length, kotaPadang);
  });

  const kotaSemarang = kampus.filter((univ) => univ.city.toLowerCase() === 'semarang');

  kotaSemarang.forEach((univ) => {
    loopKotaSemarang.innerHTML = templateItemKota(univ, kotaSemarang.length, kotaSemarang);
  });

  const kotaPalembang = kampus.filter((univ) => univ.city.toLowerCase() === 'palembang');

  kotaPalembang.forEach((univ) => {
    loopKotaPalembang.innerHTML = templateItemKota(univ, kotaPalembang.length, kotaPalembang);
  });

  const kotaBanjarmasin = kampus.filter((univ) => univ.city.toLowerCase() === 'banjarmasin');

  kotaBanjarmasin.forEach((univ) => {
    loopKotaBanjarmasin.innerHTML = templateItemKota(univ, kotaBanjarmasin.length, kotaBanjarmasin);
  });

  const kotaBandaAceh = kampus.filter((univ) => univ.city.toLowerCase() === 'banda aceh');

  kotaBandaAceh.forEach((univ) => {
    loopKotaBandaAceh.innerHTML = templateItemKota(univ, kotaBandaAceh.length, kotaBandaAceh);
  });

  const kotaManado = kampus.filter((univ) => univ.city.toLowerCase() === 'manado');

  kotaManado.forEach((univ) => {
    loopKotaManado.innerHTML = templateItemKota(univ, kotaManado.length, kotaManado);
  });

  const kotaKupang = kampus.filter((univ) => univ.city.toLowerCase() === 'kupang');

  kotaKupang.forEach((univ) => {
    loopKotaKupang.innerHTML = templateItemKota(univ, kotaKupang.length, kotaKupang);
  });

  const kotaBandarLampung = kampus.filter((univ) => univ.city.toLowerCase() === 'bandar lampung');

  kotaBandarLampung.forEach((univ) => {
    loopKotaBandarLampung.innerHTML = templateItemKota(univ, kotaBandarLampung.length, kotaBandarLampung);
  });

  const kotaSurakarta = kampus.filter((univ) => univ.city.toLowerCase() === 'surakarta');

  kotaSurakarta.forEach((univ) => {
    loopKotaSurakarta.innerHTML = templateItemKota(univ, kotaSurakarta.length, kotaSurakarta);
  });

  const kotaBogor = kampus.filter((univ) => univ.city.toLowerCase() === 'bogor');

  kotaBogor.forEach((univ) => {
    loopKotaBogor.innerHTML = templateItemKota(univ, kotaBogor.length, kotaBogor);
  });

  const kotaMedan = kampus.filter((univ) => univ.city.toLowerCase() === 'medan');

  kotaMedan.forEach((univ) => {
    loopKotaMedan.innerHTML = templateItemKota(univ, kotaMedan.length, kotaMedan);
  });

  const kotaBengkulu = kampus.filter((univ) => univ.city.toLowerCase() === 'bengkulu');

  kotaBengkulu.forEach((univ) => {
    loopKotaBengkulu.innerHTML = templateItemKota(univ, kotaBengkulu.length, kotaBengkulu);
  });

  const kotaPekanbaru = kampus.filter((univ) => univ.city.toLowerCase() === 'pekanbaru');

  kotaPekanbaru.forEach((univ) => {
    loopKotaPekanbaru.innerHTML = templateItemKota(univ, kotaPekanbaru.length, kotaPekanbaru);
  });

  const kotaTanjungPinang = kampus.filter((univ) => univ.city.toLowerCase() === 'tanjung pinang');

  kotaTanjungPinang.forEach((univ) => {
    loopKotaTanjungPinang.innerHTML = templateItemKota(univ, kotaTanjungPinang.length, kotaTanjungPinang);
  });

  const kotaJambi = kampus.filter((univ) => univ.city.toLowerCase() === 'jambi');

  kotaJambi.forEach((univ) => {
    loopKotaJambi.innerHTML = templateItemKota(univ, kotaJambi.length, kotaJambi);
  });

  const kotaPangkalPinang = kampus.filter((univ) => univ.city.toLowerCase() === 'pangkal pinang');

  kotaPangkalPinang.forEach((univ) => {
    loopKotaPangkalPinang.innerHTML = templateItemKota(univ, kotaPangkalPinang.length, kotaPangkalPinang);
  });

  const kotaPontianak = kampus.filter((univ) => univ.city.toLowerCase() === 'pontianak');

  kotaPontianak.forEach((univ) => {
    loopKotaPontianak.innerHTML = templateItemKota(univ, kotaPontianak.length, kotaPontianak);
  });

  const kotaSamarinda = kampus.filter((univ) => univ.city.toLowerCase() === 'samarinda');

  kotaSamarinda.forEach((univ) => {
    loopKotaSamarinda.innerHTML = templateItemKota(univ, kotaSamarinda.length, kotaSamarinda);
  });

  const kotaPalangkaraya = kampus.filter((univ) => univ.city.toLowerCase() === 'palangkaraya');

  kotaPalangkaraya.forEach((univ) => {
    loopKotaPalangkaraya.innerHTML = templateItemKota(univ, kotaPalangkaraya.length, kotaPalangkaraya);
  });

  const kotaTanjungSelor = kampus.filter((univ) => univ.city.toLowerCase() === 'tanjung selor');

  kotaTanjungSelor.forEach((univ) => {
    loopKotaTanjungSelor.innerHTML = templateItemKota(univ, kotaTanjungSelor.length, kotaTanjungSelor);
  });

  const kotaSerang = kampus.filter((univ) => univ.city.toLowerCase() === 'serang');

  kotaSerang.forEach((univ) => {
    loopKotaSerang.innerHTML = templateItemKota(univ, kotaSerang.length, kotaSerang);
  });

  const kotaYogyakarta = kampus.filter((univ) => univ.city.toLowerCase() === 'yogyakarta');

  kotaYogyakarta.forEach((univ) => {
    loopKotaYogyakarta.innerHTML = templateItemKota(univ, kotaYogyakarta.length, kotaYogyakarta);
  });

  const kotaDenpasar = kampus.filter((univ) => univ.city.toLowerCase() === 'denpasar');

  kotaDenpasar.forEach((univ) => {
    loopKotaDenpasar.innerHTML = templateItemKota(univ, kotaDenpasar.length, kotaDenpasar);
  });

  const kotaMataram = kampus.filter((univ) => univ.city.toLowerCase() === 'mataram');

  kotaMataram.forEach((univ) => {
    loopKotaMataram.innerHTML = templateItemKota(univ, kotaMataram.length, kotaMataram);
  });

  const kotaGorontalo = kampus.filter((univ) => univ.city.toLowerCase() === 'gorontalo');

  kotaGorontalo.forEach((univ) => {
    loopKotaGorontalo.innerHTML = templateItemKota(univ, kotaGorontalo.length, kotaGorontalo);
  });

  const kotaMamuju = kampus.filter((univ) => univ.city.toLowerCase() === 'mamuju');

  kotaMamuju.forEach((univ) => {
    loopKotaMamuju.innerHTML = templateItemKota(univ, kotaMamuju.length, kotaMamuju);
  });

  const kotaPalu = kampus.filter((univ) => univ.city.toLowerCase() === 'palu');

  kotaPalu.forEach((univ) => {
    loopKotaPalu.innerHTML = templateItemKota(univ, kotaPalu.length, kotaPalu);
  });

  const kotaKendari = kampus.filter((univ) => univ.city.toLowerCase() === 'kendari');

  kotaKendari.forEach((univ) => {
    loopKotaKendari.innerHTML = templateItemKota(univ, kotaKendari.length, kotaKendari);
  });

  const kotaTernate = kampus.filter((univ) => univ.city.toLowerCase() === 'ternate');

  kotaTernate.forEach((univ) => {
    loopKotaTernate.innerHTML = templateItemKota(univ, kotaTernate.length, kotaTernate);
  });

  const kotaAmbon = kampus.filter((univ) => univ.city.toLowerCase() === 'ambon');

  kotaAmbon.forEach((univ) => {
    loopKotaAmbon.innerHTML = templateItemKota(univ, kotaAmbon.length, kotaAmbon);
  });

  const kotaManokwari = kampus.filter((univ) => univ.city.toLowerCase() === 'manokwari');

  kotaManokwari.forEach((univ) => {
    loopKotaManokwari.innerHTML = templateItemKota(univ, kotaManokwari.length, kotaManokwari);
  });

  const kotaJayapura = kampus.filter((univ) => univ.city.toLowerCase() === 'jayapura');

  kotaJayapura.forEach((univ) => {
    loopKotaJayapura.innerHTML = templateItemKota(univ, kotaJayapura.length, kotaJayapura);
  });

  const result = `${container} ${loopKotaBandung.outerHTML} ${loopKotaJakarta.outerHTML} ${loopKotaSurabaya.outerHTML} ${loopKotaMalang.outerHTML} ${loopKotaDepok.outerHTML} ${loopKotaMakassar.outerHTML} ${loopKotaPadang.outerHTML} ${loopKotaSemarang.outerHTML} ${loopKotaPalembang.outerHTML} ${loopKotaBanjarmasin.outerHTML} ${loopKotaBandaAceh.outerHTML} ${loopKotaManado.outerHTML} ${loopKotaKupang.outerHTML} ${loopKotaBandarLampung.outerHTML} ${loopKotaSurakarta.outerHTML} ${loopKotaBogor.outerHTML} ${loopKotaMedan.outerHTML} ${loopKotaBengkulu.outerHTML} ${loopKotaPekanbaru.outerHTML} ${loopKotaYogyakarta.outerHTML} ${loopKotaDenpasar.outerHTML} ${loopKotaMataram.outerHTML} ${loopKotaGorontalo.outerHTML} ${loopKotaMamuju.outerHTML} ${loopKotaPalu.outerHTML} ${loopKotaKendari.outerHTML} ${loopKotaTernate.outerHTML} ${loopKotaAmbon.outerHTML} ${loopKotaManokwari.outerHTML} ${loopKotaJayapura.outerHTML}`;
  return result;
};

export {
  kampusRekomendasi,
  jurusanRekomendasi,
  kampusBerdasarkanLokasi,
};
