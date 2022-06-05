import { heroText } from '../templates/template-creator';

const SettingJurusan = {
  async render() {
    return `
    <section class="hero-text container-fluid">
    </section>
    <section class="container-fluid bg-info">

      <section class="head-profile mt-2">
        <div class="card border-orange bg-light">
          <div class="row alert-info m-3">
            <div class="col-md-2 p-3">
              <img src="./favicon.png" alt="" class="thumb-img-detail">
            </div>
            <div class="col-md-5 p-3 my-auto ml-auto">
              <h4 class="fw-bold text-muted">Nama Kampus</h4>
              <p class="fw-bold text-muted">Kota</p>
            </div>
            <div class="col-md-5 p-3 my-auto">
              <a href="/#/edit-kampus/:id" class="link text-dark text-decoration-none fs-5 py-2 fw-bold">
                <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                  kampus</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="card my-3">
        <div class="card-header alert-info">
          <div class="d-flex justify-content-around alert-info py-2">
            <a class="text-decoration-none text-muted border-bottom border-info border-2 text-center" role="button"
              data-bs-toggle="collapse" href="#/dashboard/#jurusanList" data-bs-target="#jurusanList" aria-expanded="true"
              aria-controls="jurusanList" id="btnJurusanList">
              <h4>List Jurusan</h4>
            </a>

            <a class="text-decoration-none text-muted fw-bold text-center" role="button" data-bs-toggle="collapse"
              href="#/dashboard/#addJurusan" aria-expanded="true" data-bs-target="#addJurusan" aria-controls="addJurusan"
              id="btnAddJurusan">
              <h4>Tambah Jurusan</h4>
            </a>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="collapse show" id="jurusanList">
                <div class="card border-0">
                  <div class="row list-jurusan-container">
                    <div class="col-md-12 mb-3">
                      <div class="card border-orange">
                        <div class="card-body d-flex">
                          <div class="thumb-container row justify-content-center">
                            <div class="col-sm-6 col-md-4 my-auto">
                              <h4 class="fw-bold"><a href="#/jurusan/:id" class="text-dark">Nama Jurusan</a></h4>
                            </div>
                            <div class="col-sm-6 col-md-2 my-auto">
                              <a href="#/jurusan/:id">
                                <img src="./favicon.png" alt="" class="thumb-img-detail">
                              </a>
                            </div>
                            <div class="col-sm-6 col-md-2">
                              <h4><u>Akreditasi</u></h4>
                              <h2>A</h2>
                            </div>
                            <div class="col-sm-6 col-md-2">
                              <h4><u>Kelas Tersedia</u></h4>
                              Reguler<br>
                              Karyawan<br>
                              Online<br>
                            </div>
                            <div class="col-md-2 d-flex align-items-center justify-content-around">
                              <a href="#/info-jurusan/:id" class="text-info"><i class="fa fa-circle-info fa-4x"></i></a>
                              <a href="#/delete-jurusan-favorite/:id" class="text-danger"><i class="fa fa-trash fa-4x"
                                  aria-hidden="true"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

            <div class="col-md-12">
              <div class="collapse" id="addJurusan">
                <div class="card border-0">
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <form id="formJurusan">
                        <div class="card border-0">
                          <div class="card border-orange mb-3 alert-info">
                            <div class="row p-2 align-items-center">
                              <div class="col-sm-12 col-md-3">
                                <label for="namaJurusan">
                                  <h5 class="fw-bold text-muted">Nama Jurusan</h5>
                                </label>
                              </div>
                              <div class="col-sm-12 col-md-9">
                                <input type="text" class="form-control border-orange w-100" id="namaJurusan"
                                  placeholder="Masukkan Nama Jurusan">
                              </div>
                            </div>
                          </div>
                          <div class="card border-orange mb-3 alert-info">
                            <div class="row p-2 align-items-center">
                              <div class="col-sm-12 col-md-3">
                                <label for="jenjang">
                                  <h5 class="fw-bold text-muted">Jenjang</h5>
                                </label>
                              </div>

                              <div class="col-sm-12 col-md-9">
                                <select id="jenjang" class="form-control border-orange w-100">
                                  <option value="" selected disabled>Pilih Jenjang</option>
                                  <option value="S1">S1</option>
                                  <option value="S2">S2</option>
                                  <option value="S3">S3</option>
                                  <option value="D3">D3</option>
                                  <option value="D4">D4</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="card border-orange mb-3 alert-info">
                            <div class="row p-2 align-items-center">
                              <div class="col-sm-12 col-md-3">
                                <label for="deskripsiJurusan">
                                  <h5 class="fw-bold text-muted">Deskripsi Jurusan</h5>
                                </label>
                              </div>
                              <div class="col-sm-12 col-md-9">
                                <textarea id="deskripsiJurusan" class="form-control w-100 border-orange"
                                  placeholder="Deskripsi Jurusan"></textarea>
                              </div>
                            </div>
                          </div>                          

                          <div class="card border-orange mb-3 alert-info">
                            <div class="row p-2 align-items-center">
                              <div class="col-sm-12 col-md-3">
                                <label for="biayaSPP">
                                  <h5 class="fw-bold text-muted">Biaya SPP</h5>
                                </label>
                              </div>
                              <div class="col-sm-12 col-md-9">
                                <input type="number" class="form-control border-orange w-100" id="biayaSPP"
                                  placeholder="Masukkan biaya SPP">
                              </div>
                            </div>
                          </div>

                          <div class="card border-orange mb-3 alert-info">
                            <div class="row p-2 align-items-center">
                              <div class="col-sm-12 col-md-3">
                                <label for="pelajaran">
                                  <h5 class="fw-bold text-muted">Pelajaran yang didapat</h5>
                                </label>
                              </div>
                              <div class="col-sm-12 col-md-9">
                                <textarea id="pelajaran" class="form-control w-100 border-orange"
                                  placeholder="Masukkan pelajaran yang akan dipelajari di Jurusan ini. Jika lebih dari satu pisahkan dengan tanda koma (,)."></textarea>
                              </div>
                            </div>
                          </div>

                          <div class="card border-orange mb-3 alert-info">
                            <div class="row p-2 align-items-center">
                              <div class="col-sm-12 col-md-3">
                                <label for="prospekKarir">
                                  <h5 class="fw-bold text-muted">Prospek Karir</h5>
                                </label>
                              </div>
                              <div class="col-sm-12 col-md-9">
                                <textarea id="prospekKarir" class="form-control w-100 border-orange"
                                  placeholder="Masukkan prospek karir. Jika lebih dari satu pisahkan dengan tanda koma (,)."></textarea>
                              </div>
                            </div>
                          </div>

                          <div class="text-end">
                            <button type="submit" class="btn btn-dblue fs-4"><i class="fa fa-save fa-lg"
                                aria-hidden="true"></i>
                              Simpan</button>
                          </div>
                        </div>
                    </div>
                    </form>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>`;
  },

  async afterRender() {
    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Jurusan Setting');

    const btnAddJurusan = document.getElementById('btnAddJurusan');
    const btnJurusanList = document.getElementById('btnJurusanList');

    const addJurusan = document.getElementById('addJurusan');
    const jurusanList = document.getElementById('jurusanList');

    btnAddJurusan.addEventListener('click', (e) => {
      e.preventDefault();
      jurusanList.classList.remove('show');
      btnJurusanList.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnAddJurusan.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });
    btnJurusanList.addEventListener('click', (e) => {
      e.preventDefault();
      addJurusan.classList.remove('show');
      btnAddJurusan.classList.remove('border-bottom', 'border-info', 'border-2', 'fw-bold');
      btnJurusanList.classList.add('border-bottom', 'border-info', 'border-2', 'fw-bold');
    });
  },
};

export default SettingJurusan;
