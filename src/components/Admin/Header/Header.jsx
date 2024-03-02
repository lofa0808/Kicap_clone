import { IoMdArrowDropdown } from 'react-icons/io';
import { MdOutlineLogout } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import './Header.scss';

const Header = () => {
  const handleLogout = () => {
    alert('dang xuat');
  };

  return (
    <div className='header'>
      <h1 className='heading'>Kicap shop</h1>

      <div className='header-right'>
        <RiAdminFill style={{ marginRight: '5px' }} />
        <span className='name'>ADMIN</span>
        <IoMdArrowDropdown />
        <div className='dropdown-logout' onClick={handleLogout}>
          <span>Đăng xuất</span>
          <MdOutlineLogout />
        </div>
      </div>
    </div>
  );
};

export default Header;
