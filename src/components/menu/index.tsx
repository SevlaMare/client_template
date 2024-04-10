import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

const menuRoutes = [
  { path: '/', title: 'Home' },
  { path: '/products', title: 'Products' },
  { path: '/about', title: 'About' },
];

export function Menu() {
  const { darkMode, toggleDarkMode } = useTheme();

  const navigateTo = useNavigate();
  // const { logout } = useContext(AuthContext);
  const handleLogin = () => navigateTo('/login');

  return (
    <nav
      className={
        'flex justify-between px-2 py-1 bg-gray-light dark:bg-gray-dark hover:bg-opacity-90'
      }
    >
      <ul className={'flex p-0 m-0'}>
        {menuRoutes.map(route => (
          <li key={route.path} className={'mr-2'}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>

      <div>
        <button className='mr-4' onClick={handleLogin}>
          Login
        </button>

        {/* {login ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handle}>Logout</button>
        )} */}

        <button onClick={toggleDarkMode}>
          <img src={darkMode ? 'icon/moon.svg' : 'icon/sun.svg'} />
        </button>
      </div>
    </nav>
  );
}
