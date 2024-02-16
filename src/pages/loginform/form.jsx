import React from 'react';
import { FirstSectionComponent } from './components/login';

export const Formm = (props) => {
    return (
        <>
            <FirstSectionComponent onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser} profile={props.profile} setProfile={props.setProfile} />
        </>
    );
};
