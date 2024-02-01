import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
    const ButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div style={{ position: 'relative'}}>
            <div className='Notifications'>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type='default' value='New course available' />
                    <NotificationItem type='urgent' value='New resume available' />
                    <NotificationItem type='urgent' html={getLatestNotification()} />
                </ul>
            </div>
            <button style={{
                position: 'absolute',
                top: '3px',
                right: '3px',
                backgroundColor: 'transparent',
                border: 'none'
            }}
                aria-label='Close'
                onClick={ButtonClick}>
                <img src={closeIcon} alt='close'
                    style={{
                        width: '15px',
                        height: '15px'
                    }} />
            </button>
        </div>
    )
}