import { Avatar, Button, IconButton } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarRateIcon from '@material-ui/icons/StarRate';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {
    const dispatch=useDispatch();
    return (
        <div className="sidebar">
            <Button className="sidebar__compose" startIcon={<Avatar  style={{ height: '30px', width: '30px' }} src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png'/>}onClick={()=>dispatch(openSendMessage())}>Compose</Button>

            <SidebarOption  Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarRateIcon} title="Starred" number={54}/>
            <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={54}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
            <SidebarOption Icon={SendIcon} title="Drafts" number={54}/>
            <SidebarOption Icon={InsertDriveFileIcon } title="Categories" number={54}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar
