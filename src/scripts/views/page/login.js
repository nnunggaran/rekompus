import swal from 'sweetalert';
import RekompusSource from '../../data/rekompus-source';
import { setCookie } from '../../utils/cookie';

const Login = {
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
                                        <h1 class="h4 text-gray-900 mb-2 title-login">Masuk ke Rekompus</h1>
                                        <p>Masukkan email dan password<br>yang telah di daftarkan di rekompus</p>                                    
                                    </div>
                                    <form method="post" class="userLogin mt-4" id="userLogin">
                                        <div class="form-group">
                                            <label for="inputEmail">Email</label><br>
                                            <input type="email" class="form-control form-control-user" id="username" aria-describedby="emailHelp" placeholder="Alamat Email" name="username">
                                        </div>
                                        <div class="form-group mt-4">
                                            <label for="inputPassword">Password</label><br>
                                            <input type="password" class="form-control form-control-user" id="password" placeholder="Masukkan Password" name="password">
                                        </div>
                                        <button type="submit" class="btn btn-info form-control mt-4 text-white">Masuk</button>
                                    </form>
                                    <div class="text-center mt-3">
                                        <a class="small" href="#/daftar">Belum punya akun? Daftar!</a>
                                    </div>
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
    const userLogin = document.querySelector('#userLogin');
    const loadingContainer = document.getElementById('loading-container');
    const fieldUsername = document.getElementById('username');
    const fieldPassword = document.getElementById('password');

    userLogin.addEventListener('submit', async (event) => {
      event.preventDefault();
      loadingContainer.classList.add('show');

      const formData = {
        email: fieldUsername.value,
        password: fieldPassword.value,
      };

      const postLogin = await RekompusSource.loginUser(formData);
      console.log(postLogin);
      if (postLogin.status === 1) {
        swal({
          icon: 'success',
          title: 'Login Berhasil!',
          text: 'Username dan Password benar!',
          timer: 2000,
        });
        setCookie('jwt', postLogin.data, 6);
        setCookie('email', formData.email, 6);
        window.location = `/#/admin/${formData.email}`;
      } else {
        swal({
          icon: 'warning',
          title: 'Login Gagal!',
          text: 'Username atau Password salah!',
          timer: 2000,
        });
      }
      loadingContainer.classList.remove('show');
      fieldUsername.value = '';
      fieldPassword.value = '';
    });

    scrollTo({ top: 0 });
  },
};

export default Login;
