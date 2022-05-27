/* eslint-disable no-param-reassign */
const heroText = (text) => `
    <h1 class="text-center text-white">${text}</h1>
`;

const searchBar = () => `
<div class="search-bar container-fluid bg-info pt-2 pb-2">
    <label class="visually-hidden" for="autoSizingInputGroup">Search</label>
    <div class="input-group mb-2">
        <div class="input-group-text">
            <i class="fas fa-magnifying-glass"></i>
        </div>
        <input type="search" class="form-control search" id="autoSizingInputGroup" placeholder="Masukkan nama kampus">
    </div>
</div>
`;

const listKampusItem = (data, container) => {
  data.kampus.forEach((kamp) => {
    container.innerHTML += `
    <div class="col-md-12 mb-3">
        <div class="card border-orange">
            <div class="card-body d-flex">
                <div class="thumb-container row">
                    <div class="col-md-1">
                        <a href="#">
                        <img src="${kamp.pictureId}" alt="" class="thumb-img">
                        </a>
                    </div>
                    <div class="col-md-3">
                        <h4 class="fw-bold"><a href="#" class="text-dark">${kamp.name}</a></h4>
                        <p><i class="fas fa-location-dot" aria-hidden="true"></i> ${kamp.city}</p>
                        <span class="alert alert-info p-1">Akreditasi ${kamp.akreditasiKampus}</span>
                        <span class="alert alert-info p-1">PTS</span>
                    </div>
                    <div class="col-md-3">
                    ${kamp.kelasTersedia.reduce((show, value) => show.concat(`${value.namaKelas}<br>`), '<h4><u>Kelas Tersedia</u></h4>')}
                    </div>
                    <div class="col-md-3">
                    ${kamp.jurusan.reduce((show, value) => show.concat(`
                    ${value.namaJurusan}<br>`), '<h4><u>Jurusan</u></h4>')}
                        <a href="#"><button class="btn alert-info ">Selengkapnya</button></a>
                    </div>
                    <div class="col-md-2">
                        <h4><u>Status PMB</u></h4>
                        ${checkPmb(kamp.statusPmb)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  });
};

const checkPmb = (data) => {
  if (data === 'Dibuka') {
    return '<p><span class="alert alert-success text-white p-1">Dibuka</span></p>';
  }
  return '<p><span class="alert alert-warning text-white p-1">Ditutup</span></p>';
};

export {
  heroText,
  searchBar,
  listKampusItem,
};
