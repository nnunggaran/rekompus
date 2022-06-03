import Homepage from '../views/page/home';
import ListKampus from '../views/page/list-kampus';
import DetailKampus from '../views/page/detail-kampus';
import EditProfileUser from '../views/page/edit-profile-user';
import DashboardUser from '../views/page/dashboard-user';
import Login from '../views/page/login';

const routes = {
  '/': Homepage,
  '/home': Homepage,
  '/list-kampus': ListKampus,
  '/kampus/:id': DetailKampus,
  '/dashboard/:id': DashboardUser,
  '/edit-profile/:id': EditProfileUser,
  '/login': Login,
};

export default routes;
