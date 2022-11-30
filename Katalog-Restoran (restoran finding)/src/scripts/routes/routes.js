import DaftarRestaurant from '../views/pages/DaftarRestaurant';
import favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': DaftarRestaurant, // default Page
  '/restaurant': DaftarRestaurant,
  '/favorites': favorites,
  '/detail/:id': Detail,
};

export default routes;
