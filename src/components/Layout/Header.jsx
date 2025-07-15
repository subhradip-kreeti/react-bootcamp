import { Link } from 'react-router';
import { IoSettings, IoNotifications } from 'react-icons/io5';

const Header = () => {
  return (
    <div
      id="header"
      className="bg-white py-5 px-10 sticky top-0 z-50 flex justify-between items-center shadow-custom dark:bg-darkPrimary dark:text-white  dark:shadow-white"
    >
      <div className="flex gap-5 items-center">
        <div className="flex relative">
          <IoNotifications
            size="38"
            className="p-1 text-icon-main hover:bg-icon-hover cursor-pointer rounded-full dark:text-white exclude-from-notification-close"
          />
          <div className="w-6 h-6 bg-icon-notificationBg rounded-full flex justify-center items-center absolute right-6 top-[-4px]">
            <p className="text-white">4</p>
          </div>
        </div>
        <Link to="" title="Settings">
          <IoSettings
            size="38"
            className="p-1 text-icon-main hover:bg-icon-hover cursor-pointer rounded-full dark:text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
