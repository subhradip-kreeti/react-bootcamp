import { useState } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import SideNavbar from './SideNavbar';

import styles from './index.module.css';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <main className={`${styles.main} dark:bg-darkPrimary dark:text-white`}>
      <ToastContainer
        hideProgressBar
        pauseOnFocusLoss={false}
        position="bottom-left"
        autoClose={3000}
        limit={1}
      />
      <SideNavbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={collapsed ? 'w-16' : 'w-60'}></div>
      <div
        className={
          `${styles.content} min-h-dvh flex flex-col ` +
          (collapsed ? styles.collapsedContent : styles.nonCollapsedContent)
        }
      >
        <Header isAdminPortal={false} />
        <div className="bg-background-primary flex flex-col px-10 flex-1 dark:bg-darkPrimary dark:text-white">
          <Outlet className="flex-grow" />
        </div>
      </div>
    </main>
  );
};

export default Layout;
