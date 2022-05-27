import Homepage from '../views/page/home';
import ListKampus from '../views/page/list-kampus';
import DetailKampus from '../views/page/detail-kampus';

const routes = {
  '/': Homepage,
  '/home': Homepage,
  '/list-kampus': ListKampus,
  '/kampus/:id': DetailKampus,
};

export default routes;
