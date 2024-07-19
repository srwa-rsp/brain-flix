import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainLayout = () => {
  return (
    <div >
      <Header></Header>
      <main>
      <Outlet />
      </main>
      <ToastContainer
            position="top-center"
            autoClose={2000}
            closeOnClick
            theme="light"
            hideProgressBar={false}
            bodyClassName="toast"
          />
    </div>
  );
};
