import React from 'react';
import './Notifications.css';

export default function NotificationItem({ type, value, html }) {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html && { __html: html }}>
            {value}
        </li>
    );
}