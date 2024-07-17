import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = ({ children }) => {
  return (
    <div >
      <Header></Header>
      <main>
      <Outlet />
      </main>
    </div>
  );
};
