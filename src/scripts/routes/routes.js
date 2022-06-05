import Homepage from '../views/page/home';
import ListKampus from '../views/page/list-kampus';
import DetailKampus from '../views/page/detail-kampus';
import EditProfileUser from '../views/page/edit-profile-user';
import DashboardUser from '../views/page/dashboard-user';
import DashboardAdmin from '../views/page/dashboard-admin';
import AddKampus from '../views/page/add-kampus';
import EditKampus from '../views/page/edit-kampus';
import EditJurusan from '../views/page/edit-jurusan';
import EditProfileAdmin from '../views/page/edit-profil-admin';
import InfoKampus from '../views/page/info-kampus';
import InfoJurusan from '../views/page/info-jurusan';
import SettingJurusan from '../views/page/setting-jurusan';
import Login from '../views/page/login';
import Daftar from '../views/page/daftar';

const routes = {
  '/': Homepage,
  '/home': Homepage,
  '/list-kampus': ListKampus,
  '/kampus/:id': DetailKampus,
  '/dashboard/:id': DashboardUser,
  '/edit-profile/:id': EditProfileUser,
  '/dashboard-admin/:id': DashboardAdmin,
  '/edit-profile-admin/:id': EditProfileAdmin,
  '/add-kampus': AddKampus,
  '/edit-jurusan/:id': EditJurusan,
  '/info-kampus/:id': InfoKampus,
  '/info-jurusan/:id': InfoJurusan,
  '/edit-kampus/:id': EditKampus,
  '/setting-jurusan/:id': SettingJurusan,
  '/login': Login,
  '/daftar': Daftar,
};

export default routes;
