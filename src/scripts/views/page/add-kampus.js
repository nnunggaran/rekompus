import { heroText } from '../templates/template-creator';

const AddKampus = {
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
              <p class="fw-bold text-muted">Provinsi</p>
            </div>
            <div class="col-md-5 p-3 my-auto">
              <a href="/#/dashboard-admin/:id"
                class="link text-dark text-decoration-none border-bottom border-info border-2 fw-bold fs-5 py-2">
                <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                  kampus</span>
              </a>
            </div>
          </div>
        </div>

      </section>
      
      <section class="form-kampus my-3">
        <div class="card">
          <div class="card-header alert-info">
            <h4 class="text-heading text-muted fw-bolder">Form Kampus</h4>
          </div>
        <form id="formAddKampus">
          <div class="card-body">
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="namaKampus">
                  <h5 class="fw-bold text-muted">Nama Kampus</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" class="form-control border-orange w-100" id="namaKampus" placeholder="Nama Kampus">
              </div>
            </div>
          </div>
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="deskripsi">
                  <h5 class="fw-bold text-muted">Deskripsi</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <textarea id="deskripsi" class="form-control border-orange w-100" placeholder="Deskripsi kampus"></textarea>
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="jenisKampus">
                  <h5 class="fw-bold text-muted">Jenis Kampus</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
              <select id="jenisKampus" class="form-control border-orange w-100">
                <option value="" selected>Jenis Kampus</option>
                <option value="PTN">PTN</option>
                <option value="PTS">PTS</option>
              </select>
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="statusPMB">
                  <h5 class="fw-bold text-muted">Status PMB</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
              <select id="statusPMB" class="form-control border-orange w-100">
                <option value="" selected>Status PMB</option>
                <option value="Dibuka">Dibuka</option>
                <option value="Ditutup">Ditutup</option>
              </select>
              </div>
            </div>
          </div>
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="kota">
                  <h5 class="fw-bold text-muted">Kota</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="kota" class="form-control border-orange w-100" placeholder="Kota">
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="alamat">
                  <h5 class="fw-bold text-muted">Alamat</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <textarea id="alamat" class="form-control border-orange w-100" placeholder="Alamat kampus"></textarea>
              </div>
            </div>
          </div>            

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="logoKampus">
                  <h5 class="fw-bold text-muted">Logo Kampus</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="file" id="logoKampus" class="form-control border-orange w-100">
              </div>
            </div>              
          </div>         
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="kelasTersedia">
                  <h5 class="fw-bold text-muted">Kelas Tersedia</h5>
                </label>
              </div>

              <div class="col-sm-12 col-md-9 row">
                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Reguler" value="Reguler"
                    class="form-check-input">
                  <label for="Reguler" class="form-check-label">Reguler</label>
                </div>

                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Karyawan" value="Karyawan"
                    class="form-check-input">
                  <label for="Karyawan" class="form-check-label">Karyawan</label>
                </div>

                <div class="col-sm-6 col-md-4">
                  <input type="checkbox" name="kelasTersedia" id="Online" value="Online"
                    class="form-check-input">
                  <label for="Online" class="form-check-label">Online</label>
                </div>
              </div>
            </div>
          </div>      
          
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="tahunBerdiri">
                  <h5 class="fw-bold text-muted">Tahun berdiri</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="number" id="tahunBerdiri" class="form-control border-orange w-100" placeholder="Tahun berdiri">
              </div>
            </div>
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="noTelepon">
                  <h5 class="fw-bold text-muted">No Telepon</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="noTelepon" class="form-control border-orange w-100" placeholder="No Telepon">
              </div>
            </div>   
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="email">
                  <h5 class="fw-bold text-muted">Email</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="email" id="email" class="form-control border-orange w-100" placeholder="Email">
              </div>
            </div>                 
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="website">
                  <h5 class="fw-bold text-muted">Website kampus</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" id="website" class="form-control border-orange w-100" placeholder="Website kampus">
              </div>
            </div>               
          </div>

          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="mediaSosial">
                  <h5 class="fw-bold text-muted">Media Sosial</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <div class="input-group row" id="mediaSosial">
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="facebook" placeholder="Facebook" aria-label="facebook">
                  </div>
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="twitter" placeholder="Twitter" aria-label="twitter">
                  </div>
                  <div class="col-sm-12 col-md-4 my-1">
                    <input type="text" class="form-control border-orange w-100" id="instagram" placeholder="Instagram" aria-label="instagram">
                  </div>                    
                </div>
              </div>
            </div>                
          </div>

            <div class="text-end">
              <button type="submit" class="btn btn-dblue fs-4"><i class="fa fa-save fa-lg" aria-hidden="true"></i>
                Simpan</button>
            </div>
          </div>
        </div>
      </section>
      </form>
    </section>
    `;
  },

  async afterRender() {
    const heroTextEl = document.querySelector('.hero-text');
    heroTextEl.innerHTML = heroText('Tambah Kampus');
  },
};

export default AddKampus;
