import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Avatar from '@material-ui/icons/Avatar';
function Header() {
  return (
    <div className="header">
     
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="" />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text"/>
        <SearchIcon className="header__inputButton"/>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon"/>
        <AppsSharpIcon className="header__icon"/>
        <NotificationsIcon className="header__icon" />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
