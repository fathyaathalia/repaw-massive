import "../styles/stylecomponent/stylenavbar.css";
import { Link,useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export function Navbar() {
  const navigate = useNavigate();
  const isVerified = Boolean(localStorage.getItem('token'))
  const userData = JSON.parse(localStorage.getItem('user_data'))

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_data');
    navigate('/');
  };

  return (
    <header>
      <div className="header-wrap">
        <div className="header-logo">
          <Link to="/">
            <img className="header-logo-img" src="/img/logo1.png" />
          </Link>
        </div>
        <nav>
          <Link to={isVerified ? '/adopsi' : '/login'}>ADOPSI</Link>
          <Link to={isVerified ? '/donasi' : '/login'}>DONASI</Link>
          <Link to={isVerified ? '/event' : '/login'}>EVENT</Link>
          <Link to={isVerified ? '/shelter' : '/login'}>SHELTER</Link>
          <Link to={isVerified ? '/blog' : '/login'}>BLOG</Link>
        </nav>
        {isVerified ? (
          <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="border-0">
            <img src="/img/img6.png" alt="" className="header-user-img" />
            <span className="header-user-label">{userData.firstname}</span>
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/profil">Profil Saya</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Status Adopsi</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Event Terdaftar</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Favorit</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Keluar</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          
        ) : (
          <div className="header-action">
            <Link to="/login">
              <button className="btn btn-outline">MASUK</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-fill">DAFTAR</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

// <div className="header-user">
          //     <img src="/img/img6.png" alt="" className="header-user-img" />
          //     <span className="header-user-label">{userData.firstname}</span>

          //     <i className="fa fa-angle-down"></i>
          // </div>