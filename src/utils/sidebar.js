import Generic from '../pages/Generic';

// components
import Buyurtmalar from '../pages/Buyurtmalar';
import Mahsulotlar from '../pages/Mahsulotlar';

// icons
import { ReactComponent as buyurtma } from '../assets/icons/buyurtmalar.svg';

export const sidebar = [
  {
    id: 1,
    title: 'Buyurtmalar',
    pathname: '/Buyurtmalar',
    component: Buyurtmalar,
    icon: buyurtma,
    child: [],
    hidden: false,
  },
  {
    id: 2,
    title: 'Mahsulotlar',
    pathname: '/Mahsulotlar',
    component: Mahsulotlar,
    icon: buyurtma,
    child: [],
    hidden: false,
  },
  {
    id: 3,
    title: 'Kategoriyalar',
    pathname: '/Kategoriyalar',
    component: Generic,
    icon: buyurtma,
    child: [],
    hidden: false,
  },
  {
    id: 4,
    title: 'Filiallar',
    pathname: '/Filiallar',
    component: Generic,
    icon: buyurtma,
    child: [],
    hidden: false,
  },
  {
    id: 5,
    title: 'Mijozlar',
    pathname: '/Mijozlar',
    component: Generic,
    icon: buyurtma,
    child: [],
    hidden: false,
  },
  {
    id: 6,
    title: 'Hisobot',
    pathname: '/Hisobot',
    component: Generic,
    icon: buyurtma,
    child: [],
    hidden: false,
  },
  {
    id: 7,
    title: 'Hodimlar',
    pathname: '/Hodimlar',
    component: Generic,
    icon: buyurtma,
    child: [],
    hidden: false,
  },
];
