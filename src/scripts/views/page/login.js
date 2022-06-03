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
                                    <form method="post" class="userLogin mt-4">
                                        <div class="form-group">
                                            <label for="inputEmail">Email</label><br>
                                            <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Alamat Email" name="username">
                                        </div>
                                        <div class="form-group mt-4">
                                            <label for="inputPassword">Password</label><br>
                                            <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Masukkan Password" name="password">
                                        </div>
                                        <button type="submit" class="btn btn-primary form-control mt-4">Masuk</button>
                                    </form>
                                    <div class="text-center mt-3">
                                        <a class="small" href="#/register">Belum punya akun? Daftar!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const userLogin = document.querySelector('#userLogin');

    if (userLogin) {
      userLogin.addEventListener('submit', async (event) => {
        event.preventDefault();
      });
    }
  },
};

export default Login;
