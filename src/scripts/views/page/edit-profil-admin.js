const EditProfileAdmin = {
  async render() {
    return `
    <section class="hero-text container-fluid">
      <h1 class="text-center text-white">Edit Profile Admin</h1>
    </section>
    <section class="container-fluid bg-info">
      <div class="head-profile mt-2">
        <div class="card border-orange bg-light">
          <div class="row alert-info m-3">
            <div class="col-md-2 p-3">
              <img src="./favicon.png" alt="" class="thumb-img-detail">
            </div>
            <div class="col-md-5 p-3 my-auto ml-auto">
              <h4 class="fw-bold text-muted">Nama Admin</h4>
              <p class="fw-bold text-muted">Alamat</p>
            </div>
            <div class="col-md-5 p-3 my-auto">
              <a href="/#/admin/:id" class="link text-dark text-decoration-none border-bottom border-info border-2 fw-bold fs-5 py-2">
                <i class="fa fa-edit fa-2x text-muted" aria-hidden="true"></i> <span class="text-muted ">Atur data
                  dirimu</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <form id="formAdmin">
      <input type="hidden" id="idAdmin" value="">
        <div class="card my-3">
          <div class="card-header alert-info">
            <h4 class="text-heading text-muted fw-bolder">Akun</h4>
          </div>
          <div class="card-body">
            <div class="card border-orange mb-3 alert-info">

              <div class="row p-2 align-items-center">
                <div class="col-sm-12 col-md-3">
                  <label for="email">
                    <h5 class="fw-bold text-muted">Email</h5>
                  </label>
                </div>
                <div class="col-sm-12 col-md-9">
                  <input type="text" class="form-control border-orange w-100" id="email"
                    placeholder="Email admin">
                </div>
              </div>
            </div>
            <div class="card border-orange mb-3 alert-info">

              <div class="row p-2 align-items-center">
                <div class="col-sm-12 col-md-3">
                  <label for="password">
                    <h5 class="fw-bold text-muted">Password</h5>
                  </label>
                </div>
                <div class="col-sm-12 col-md-9">
                  <input type="password" class="form-control border-orange w-100" id="password"
                    placeholder="Password admin">
                </div>
              </div>

            </div>        
          </div>
        </div>
      </div>
      <div class="card my-3">
        <div class="card-header alert-info">
          <h4 class="text-heading text-muted fw-bolder">Biodata</h4>
        </div>
        <div class="card-body">
          <div class="card border-orange mb-3 alert-info">
            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="namaLengkap">
                  <h5 class="fw-bold text-muted">Nama Lengkap</h5>
                </label>
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" class="form-control border-orange w-100" id="namaLengkap"
                  placeholder="Nama lengkap admin">
              </div>
            </div>
          </div>
          <div class="card border-orange mb-3 alert-info">

            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="alamat"><h5 class="fw-bold text-muted">Alamat</h5></label>                
              </div>
              <div class="col-sm-12 col-md-9">
                <input type="text" class="form-control border-orange w-100" id="asalSekolah" placeholder="Alamat admin">
              </div>
            </div>

          </div>

          <div class="card border-orange mb-3 alert-info">

            <div class="row p-2 align-items-center">
              <div class="col-sm-12 col-md-3">
                <label for="fotoProfil"><h5 class="fw-bold text-muted">Foto Profil</h5></label>               
              </div>
              <div class="col-sm-12 col-md-9">
              <input type="file" name="fotoProfil" class="form-control border-orange w-100" id="fotoProfil">
              </div>
            </div>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-dblue fs-4"><i class="fa fa-save fa-lg" aria-hidden="true"></i> Simpan</button>  
          </div>
        </div>
      </form>
    </section>
    `;
  },

  async afterRender() {
    const formUser = document.querySelector('#formUser');
    // const txtId = document.querySelector('#idUser');
    // const txtEmail = document.querySelector('#email');
    // const txtPassword = document.querySelector('#password');
    // const txtNamaLengkap = document.querySelector('#namaLengkap');
    // const txtAsalSekolah = document.querySelector('#asalSekolah');
    // const fileFotoProfil = document.querySelector('#fotoProfil');

    formUser.addEventListener('submit', async (e) => {
      e.preventDefault();
    });
  },
};

export default EditProfileAdmin;
