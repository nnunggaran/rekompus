import swal from 'sweetalert';
import RekompusSource from '../../data/rekompus-source';

const Daftar = {
  async render() {
    return `
      <div class="container-fluid">
          <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-12 col-md-9">
                  <div class="card o-hidden border-0 my-5">
                      <div class="card-body p-0">
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="p-5">
                                      <div class="text-center">
                                          <h1 class="h4 text-gray-900 mb-2 title-login">Daftar Akun Rekompus</h1>
                                          <p>Daftar sekarang untuk mendapatkan<br>informasi kampus dan jurusan di Indonesia</p>
                                      </div>
                                      <form method="post" class="userLogin mt-4" id="userLogin">
                                          <div class="form-group">
                                              <label for="inputNama">Nama Lengkap</label><br>
                                              <input type="text" class="form-control form-control-user" id="name" placeholder="Nama Lengkap" name="fullName">
                                          </div>
                                          <div class="form-group mt-4">
                                              <label for="inputEmail">Email</label><br>
                                              <input type="email" class="form-control form-control-user" id="email" aria-describedby="emailHelp" placeholder="Alamat Email" name="username">
                                          </div>
                                          <div class="form-group mt-4">
                                              <label for="inputPassword">Password</label><br>
                                              <input type="password" class="form-control form-control-user" id="password" placeholder="Masukkan Password" name="password">
                                          </div>
                                          <button type="submit" class="btn btn-info form-control mt-4 text-white">Daftar</button>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="loading-container">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
        `;
  },

  async afterRender() {
    const userRegister = document.querySelector('#userLogin');
    const loadingContainer = document.getElementById('loading-container');
    const fieldName = document.getElementById('name');
    const fieldEmail = document.getElementById('email');
    const fieldPassword = document.getElementById('password');

    userRegister.addEventListener('submit', async (e) => {
      e.preventDefault();
      loadingContainer.classList.add('show');

      const formData = {
        email: fieldEmail.value,
        name: fieldName.value,
        password: fieldPassword.value,
      };

      const postRegister = await RekompusSource.registerUser(formData);

      if (postRegister.status === 1) {
        swal({
          icon: 'success',
          title: 'Pendaftaran Berhasil!',
          text: `Anda telah terdaftar di rekompus dengan nama ${formData.name} dan email ${formData.email}!. Harap login untuk mendapatkan akses yang lebih di rekompus`,
          timer: 2000,
        });
        localStorage.setItem('email', formData.email);
        window.location.href = '/#/login';
      } else {
        swal({
          icon: 'warning',
          title: 'Pendaftaran Gagal!',
          text: 'Pastikan koneksi internet kamu stabil. Bila masih bermasalah harap hubungi admin rekompus',
          timer: 2000,
        });
      }
      loadingContainer.classList.remove('show');
      fieldPassword.value = '';
    });

    scrollTo({ top: 0 });
  },
};

export default Daftar;
