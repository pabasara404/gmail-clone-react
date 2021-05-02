import { Checkbox, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./EmailList.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import  ChevronRightIcon from '@material-ui/icons/ChevronRight';
import  ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SettingsIcon from "@material-ui/icons/Settings";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import Section from './Section';
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from './EmailRow';
import { db } from './firebase';



function EmailList() {

    const [emails,setEmails]=useState([]);

    useEffect(()=>{
        db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot=> setEmails(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data(),
        }))))
    },[])
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected/>
                <Section Icon={PeopleIcon} title='Social' color='#1a73e8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
                </div>
                <div className="emailList__list">
                    {emails.map(({id,data:{to,subject,message, timestamp}})=>(
                        <EmailRow
                         id={id}
                         key={id}
                         title={to}
                         subject={subject}
                         description={message}
                         time={new Date(timestamp?.seconds*1000).toUTCString()}
                        />
                    ))}
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test" time="10pm"/>
               
                <EmailRow
                title="Twitch"
                subject="Hey fellow streamer!!!"
                description="this is test this is test this is test this is test this is test this is test this is test this is test" time="10pm"/>

                </div>
        </div>
    )
}

export default EmailList
;