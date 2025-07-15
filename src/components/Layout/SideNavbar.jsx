import { Link, useLocation } from 'react-router';
import { FaUserTie } from 'react-icons/fa6';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import ReactLogo from '../../assets/react.svg';
// import { sideNavbarTheme } from '../../constants/themeHelper';
import { MENU_ITEMS } from '../../constants/common';

import styles from './index.module.css';

import { Sidebar, Tooltip,  SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";

const SideNavbar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  const activeLinkClass = link => {
    const currentPathSegments = location.pathname.split('/').filter(Boolean);
    const linkModule = link.split('/').filter(Boolean);

    if (linkModule[0] === currentPathSegments[0]) {
      return 'bg-[#4b91a4]';
    }
    return '';
  };

  return (
    <div className={styles.sideNavbarWrapper} id="sidebar-menu">
      <Sidebar
        aria-label="Sidebar"
        // theme={sideNavbarTheme}
        collapsed={collapsed}
      >
        <Link to="/" className="pl-2 mb-3 pb-3">
          <img src={ReactLogo} alt="react logo" className="h-12" />
        </Link>
        <SidebarItems className={styles.navItems}>
          <SidebarItemGroup className="z-50">
            {MENU_ITEMS.map(item => (
              <SidebarItem
                key={item.to}
                as={Link}
                to={item.to}
                icon={item.icon}
                className={activeLinkClass(item.to)}
              >
                {item.label}
              </SidebarItem>
            ))}
          </SidebarItemGroup>
        </SidebarItems>
        <div className="border-t-2 border-[#4b91a4] w-[90%] mr-auto"></div>
        <SidebarItems className="flex flex-col py-2.5">
          <SidebarItemGroup>
            <SidebarItem
              as={Link}
              to={`${document.location.origin}/employee`}
              icon={FaUserTie}
            >
              Sign Out
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
        <div className={styles.toggleIcon}>
          {collapsed ? (
            <Tooltip key="expandOne" content="Expand" placement="right">
              <RiArrowRightSLine
                size={24}
                onClick={() => setCollapsed(!collapsed)}
                className="exclude-panel-close"
              />
            </Tooltip>
          ) : (
            <Tooltip key="collapseOne" content="Collapse" placement="right">
              <RiArrowLeftSLine
                size={24}
                onClick={() => setCollapsed(!collapsed)}
                className="exclude-panel-close"
              />
            </Tooltip>
          )}
        </div>
      </Sidebar>
    </div>
  );
};

export default SideNavbar;
