import { heroText } from '../templates/template-creator';

const EditJurusan = {
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
              <h4 class="fw-bold text-muted">Program Studi</h4>
              <p class="fw-bold text-muted">Jenjang</p>
            </div>
            <div class="col-md-5 p-3 my-auto">
              <a href="/#/info-jurusan/:id"
                class="link text-dark text-decoration-none border-bottom border-info border-2 fw-bold fs-5 py-2">
                <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                  jurusan</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="form-jurusan my-3">
        <div class="card border-0">
        <div class="row m-2">
          <div class="col-md-12 mb-3">
            <form id="formJurusan">
              <div class="card border-0">
                <div class="card-body border-orange mb-3 alert-info">
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
                <div class="card-body border-orange mb-3 alert-info">
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

                <div class="card-body border-orange mb-3 alert-info">
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

                <div class="card-body border-orange mb-3 alert-info">
                  <div class="row p-2 align-items-center">
                    <div class="col-sm-12 col-md-3">
                      <label for="kelasTersedia">
                        <h5 class="fw-bold text-muted">Kelas Tersedia</h5>
                      </label>
                    </div>

                    <div class="col-sm-12 col-md-9 row">
                      <div class="col-sm-6 col-md-3">
                        <input type="checkbox" name="kelasTersedia" id="Reguler" value="Reguler"
                          class="form-check-input">
                        <label for="Reguler" class="form-check-label">Reguler</label>
                      </div>

                      <div class="col-sm-6 col-md-3">
                        <input type="checkbox" name="kelasTersedia" id="Karyawan" value="Karyawan"
                          class="form-check-input">
                        <label for="Karyawan" class="form-check-label">Karyawan</label>
                      </div>

                      <div class="col-sm-6 col-md-3">
                        <input type="checkbox" name="kelasTersedia" id="Online" value="Online"
                          class="form-check-input">
                        <label for="Online" class="form-check-label">Online</label>
                      </div>

                      <div class="col-sm-6 col-md-3">
                        <input type="checkbox" name="kelasTersedia" id="Umum" value="Umum"
                          class="form-check-input">
                        <label for="Umum" class="form-check-label">Umum</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body border-orange mb-3 alert-info">
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

                <div class="card-body border-orange mb-3 alert-info">
                  <div class="row p-2 align-items-center">
                    <div class="col-sm-12 col-md-3">
                      <label for="pelajaran">
                        <h5 class="fw-bold text-muted">Pelajaran yang didapat</h5>
                      </label>
                    </div>
                    <div class="col-sm-12 col-md-9">
                      <textarea id="pelajaran" class="form-control w-100 border-orange"
                        placeholder="Masukkan pelajaran yang akan dipelajari di jurusan ini. Jika lebih dari satu pisahkan dengan tanda koma (,)."></textarea>
                    </div>
                  </div>
                </div>

                <div class="card-body border-orange mb-3 alert-info">
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
            </form>
          </div>
        </div>
        </div>
      </section>
      </form>
    </section>`;
  },

  async afterRender() {
    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Edit Jurusan');
  },
};

export default EditJurusan;
