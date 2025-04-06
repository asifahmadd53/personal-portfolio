import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RiShakeHandsLine } from '@remixicon/react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { toggleDarkMode } from '../../store/darkModeSlice';
import lightLogo from '../../assets/images/lightlogo.png';
import darkLogo from '../../assets/images/darkLogo.png';
import { menuList } from '../../utlits/fackData/menuList';

const Header = () => {
  const pathName = useLocation().pathname;
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.mode);

  useEffect(() => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) navbarCollapse.classList.remove('show');
  }, [pathName]);

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
    return () => window.removeEventListener('scroll', stickyHeader);
  }, []);

  const stickyHeader = () => {
    setIsSticky(window.scrollY > 85);
  };

  useEffect(() => {
    // Apply or remove dark theme class to body
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const toggleButton = document.querySelector('.navbar-toggle');

      if (
        navbarCollapse &&
        !navbarCollapse.contains(event.target) &&
        !toggleButton.contains(event.target)
      ) {
        navbarCollapse.classList.remove('show');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={`main-header ${isSticky ? 'fixed-header' : ''}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link to="/"><img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" title="Logo" /></Link>
              </div>
            </div>
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link to="/">
                      <img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" title="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    {menuList.map(({ id, label, path }) => (
                      <li key={id}>
                        <Link to={path} className="nav-link-click">{label}</Link>
                      </li>
                    ))}
                    {/* Hire Me button for mobile */}
                    <li className="d-lg-none px-3 mt-3">
                      <Link to="/contact" className="theme-btn w-100">
                        Hire Me <RiShakeHandsLine size={15} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-btns d-flex align-items-center gap-3">
              <Link to="/contact" className="theme-btn d-none d-lg-block">
                Hire Me <RiShakeHandsLine size={15} />
              </Link>

              <DarkModeSwitch
                className="swtich"
                checked={isDarkMode}
                onChange={() => dispatch(toggleDarkMode())}
                size={25}
              />
              {/* ✅ Hamburger menu placed here for small screens only */}
              <button
                type="button"
                className="navbar-toggle d-block d-lg-none"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
