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
                <div class="card-body d-flex" style="overflow-x: auto;">
                    <div class="thumb-container d-flex">
                        <div class="w-20">
                            <img src="${item.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${item.pictureId}` : './images/default-school.png'}" alt="${item.name}" class="thumb-img" style="width:80px">
                        </div>
                        <div class="w-80">
                            <h4 class="ms-2" style="height:60px; overflow-y: auto;">${item.name}</h4>
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
                <div class="card-body d-flex" style="overflow-x: auto;">
                    <div class="thumb-container d-flex">
                        <div class="w-20">
                            <img src="${dataKampus.pictureId ? `${CONFIG.BASE_IMAGE_URL}/${dataKampus.pictureId}` : './images/default-school.png'}" alt="${dataKampus.name}" class="thumb-img" style="width: 80px;">
                        </div>
                        <div class="w-80">
                            <h4 class="ms-2" style="height:60px; overflow-y: auto;">${object.namaJurusan}</h4>
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
  const loopKotaPadang = document.createElement('div');
  loopKotaPadang.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaSamarinda = document.createElement('div');
  loopKotaSamarinda.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaYogyakarta = document.createElement('div');
  loopKotaYogyakarta.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');
  const loopKotaDenpasar = document.createElement('div');
  loopKotaDenpasar.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-1');

  const templateItemKota = (univ, length, filterCity) => `
    <div class="card shadow-sm">
        <div class="card-header alert-info text-center mb-0 pb-0">
            <h4>${univ.city}</h4>
            <p class="text-muted">${length} Kampus Tersedia</p>
        </div>
        
        <a href="#" data-bs-toggle="modal" data-bs-target="#${univ.city}" style="cursor:pointer;">
        <img src="./favicon.png" alt="${univ.city}" class="full-img rounded-bottom">
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
                        <h4 class="ms-2" style="height:60px; overflow-y: auto;">${item.name}</h4>
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

  const kotaPadang = kampus.filter((univ) => univ.city.toLowerCase() === 'padang');

  kotaPadang.forEach((univ) => {
    loopKotaPadang.innerHTML = templateItemKota(univ, kotaPadang.length, kotaPadang);
  });

  const kotaSamarinda = kampus.filter((univ) => univ.city.toLowerCase() === 'samarinda');

  kotaSamarinda.forEach((univ) => {
    loopKotaSamarinda.innerHTML = templateItemKota(univ, kotaSamarinda.length, kotaSamarinda);
  });

  const kotaYogyakarta = kampus.filter((univ) => univ.city.toLowerCase() === 'yogyakarta');

  kotaYogyakarta.forEach((univ) => {
    loopKotaYogyakarta.innerHTML = templateItemKota(univ, kotaYogyakarta.length, kotaYogyakarta);
  });

  const kotaDenpasar = kampus.filter((univ) => univ.city.toLowerCase() === 'denpasar');

  kotaDenpasar.forEach((univ) => {
    loopKotaDenpasar.innerHTML = templateItemKota(univ, kotaDenpasar.length, kotaDenpasar);
  });

  const result = `${container} ${kotaBandung.length !== 0 ? loopKotaBandung.outerHTML : ''} ${kotaJakarta.length !== 0 ? loopKotaJakarta.outerHTML : ''} ${kotaSurabaya.length !== 0 ? loopKotaSurabaya.outerHTML : ''} ${kotaSamarinda.length !== 0 ? loopKotaSamarinda.outerHTML : ''} ${kotaMalang.length !== 0 ? loopKotaMalang.outerHTML : ''} ${kotaPadang.length !== 0 ? loopKotaPadang.outerHTML : ''} ${kotaYogyakarta.length !== 0 ? loopKotaYogyakarta.outerHTML : ''} ${kotaDenpasar.length !== 0 ? loopKotaDenpasar.outerHTML : ''}`;
  return result;
};

export {
  kampusRekomendasi,
  jurusanRekomendasi,
  kampusBerdasarkanLokasi,
};
