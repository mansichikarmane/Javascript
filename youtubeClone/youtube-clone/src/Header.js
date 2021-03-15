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
     
      <MenuIcon />
      <img className="header__logo" src="https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new.jpg" alt="" />
      

      <input type="text"/>
      <SearchIcon />


      <VideoCallSharpIcon/>
      <AppsSharpIcon/>
      <NotificationsIcon />
      <AccountCircleIcon />
    </div>
  );
}

export default Header;
