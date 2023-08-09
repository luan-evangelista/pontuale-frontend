// component
import { Divider } from '@mui/material';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('dashboard'),
  },
  {
    title: 'Perfil',
    path: '/dashboard/user',
    icon: icon('perfil'),
  },
  {
    title: 'Sair',
    path: '/login',
    icon: icon('corner-up-left'),
  },
];

export default navConfig;
