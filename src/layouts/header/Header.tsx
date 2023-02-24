import { useState } from 'react';
import {
  ShoppingOutlined,
  SearchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Button, AutoComplete, Input } from 'antd';
import './Header.scss';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import Logo from '../../assets/logo/Logo.svg';

// interface PropsType = {
//   textSearch : String;
//   handleSearch :
// }
interface Props {
  value: string;
  onSearch: (query: string) => void;
  onSeclect: (query: string) => void;
  onChange: (query: string) => void;
}
export default function Header(props: Props) {
  const { onSearch, onChange, onSeclect, value } = props;
  const isAuth = localStorage.getItem('token');
  const auth = useAppSelector((state: RootState) => state.AuthReducer);

  return (
    <div className="header-container">
      <div className="header-grid">
        <nav className="header_navbar--container">
          <div className="header-logo">
            <a href="/home" className="header-item-link">
              <img src={Logo} alt="Logo" className="header-logo-img" />
            </a>
          </div>

          <div className="header-navbar-search">
            <div className="autocomplete-container">
              <AutoComplete
                value={value}
                onSearch={onSearch}
                onSelect={onSeclect}
                onChange={onChange}
              >
                <Input className="search-input" placeholder="Searching" />
              </AutoComplete>
              <Button className="search-button" onClick={() => onSearch}>
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="header-navbar_list-wrapper">
            <ul className="header-navbar-list">
              <li className="header-navbar-item">
                <a href="/news" className="header-item-link">
                  News
                </a>
              </li>
              <li className="header-navbar-item">
                <a href="/" className="header-item-link">
                  About
                </a>
              </li>
              <li className="header-navbar-item">
                <a href="/" className="header-item-link">
                  Help
                </a>
              </li>
              <li className="header-navbar-item shoping-card">
                <a href="/" className="header-item-link">
                  <ShoppingOutlined style={{ fontSize: '1.3rem' }} />
                </a>
              </li>
              <li className="header-navbar-item-authen">
                {!isAuth ? (
                  <ul className="header-navbar--authen">
                    <li>
                      <a href="/auth/login" className="header-item-link">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="/" className="header-item-link">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                ) : (
                  <div className="user-wrapper">
                    <span className="header-navbar--user">Hi,{auth.data.name}!</span>
                    <Button
                      style={{ border: 'none' }}
                      onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload();
                      }}
                    >
                      <LogoutOutlined style={{ fontSize: '1.2rem' }} />
                    </Button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="header_bread-scrum">
        <div className="header-grid">
          <ul className="header_bread-scrum-list">
            <li className="header_bread-scrum-item">
              <a href="/products/shoes" className="header-item-link">
                Shoes
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/products/accessories" className="header-item-link">
                Accessories
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/products/clothes" className="header-item-link">
                Clothes
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/products/houseware" className="header-item-link">
                Houseware
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/products/decorations" className="header-item-link">
                Decorations
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/products/funiture" className="header-item-link">
                Furniture
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
