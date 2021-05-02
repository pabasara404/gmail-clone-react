import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function Header() {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();

    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout());
        });
    };

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"/>
            </div>
            <div className="header__middle">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input placeholder="Search mail" type="text"/>
                <IconButton>
                    <ArrowDropDownIcon className="header__inputCaret"/>
                </IconButton>
            </div>
            <div className="header__right">
                <IconButton>
                    <HelpOutlineIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <AppsRoundedIcon/>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}  style={{ height: '35px', width: '35px' }}/>
            </div>
            
        </div>
    )
}

export default Header
