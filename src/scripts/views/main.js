import swal from 'sweetalert';
import '../components/app-bar';
import '../components/foot-bar';

const main = async () => {
  const headerEl = document.querySelector('header');
  const footerEl = document.querySelector('footer');
  headerEl.innerHTML = '<app-bar></app-bar>';
  footerEl.innerHTML = '<foot-bar></foot-bar>';
  const btnContainerAppBar = document.querySelector('#btnAppbar');
  const checkLocalStorage = await localStorage.getItem('jwt');
  if (checkLocalStorage) {
    btnContainerAppBar.innerHTML = `
    <button type="button" class="btn1 btn-outline-primary bg-danger me-3" id="logout">Keluar</button>
    <div class="user-profile btn2 alert-primary text-dark">        
      <a class="nav-link active" aria-current="page" href="/#/dashboard-admin/${localStorage.getItem('email')}" class="mt-0 mb-3">
          <span class="d-inline-block">
            <img src="./images/default-profile.png" alt="foto-user" class="rounded-pill" style="width:30px;">
          </span>
          <span class="d-inline-block">
            Akun
          </span>
      </a>
    </div>
    `;

    const btnLogout = document.getElementById('logout');
    btnLogout.addEventListener('click', (e) => {
      e.preventDefault();

      swal({
        title: 'Yakin ingin logout?',
        text: 'Anda akan logout bila menekan konfirmasi. Jika tidak klik batalkan.',
        icon: 'warning',
        buttons: [
          'Batalkan',
          'Konfirmasi',
        ],
        dangerMode: true,
      }).then((isConfirm) => {
        if (isConfirm) {
          swal({
            icon: 'success',
            title: 'Berhasil Logout!',
            text: 'Anda berhasil logout. Untuk mengakses halaman tertentu harap login ulang',
          }).then(
            headerEl.innerHTML = '<app-bar></app-bar>',
          );
          const removeDataLogin = async () => {
            localStorage.removeItem('jwt');
            await localStorage.removeItem('email');
          };
          removeDataLogin();
          window.location.href = '/#/';
        } else {
          swal({
            icon: 'success',
            title: 'Anda membatalkan logout',
            text: 'Berhasil membatalkan logout!',
          });
        }
      });
    });
  }
};

export default main;
