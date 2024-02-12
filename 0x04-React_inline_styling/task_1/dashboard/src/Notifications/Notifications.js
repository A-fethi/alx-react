import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    Notifications: {
        border: '3px dotted #e01d3f',
        padding: '10px',
        position: 'absolute',
        width: '30%',
        right: '3px',
    },
})


export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    ButtonClick = () => {
        console.log('Close button has been clicked');
    };

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <>
                <div className='menuItem'>
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div style={{ position: 'relative' }}>
                        <div className={css(styles.Notifications)}>
                            {listNotifications && listNotifications.length !== 0 ? (
                                <>
                                    <p>Here is the list of notifications</p>
                                    <ul>
                                        {listNotifications.map(({ id, html, type, value }) => (
                                                <NotificationItem
                                                    key={id}
                                                    type={type}
                                                    value={value}
                                                    html={html}
                                                    markAsRead={() => this.markAsRead(id)}
                                                />
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p>No new notification for now</p>
                            )}
                        </div>
                        <button style={{
                            position: 'absolute',
                            top: '3px',
                            right: '3px',
                            backgroundColor: 'transparent',
                            border: 'none'
                        }}
                            aria-label='Close'
                            onClick={this.ButtonClick}>
                            <img src={closeIcon} alt='close'
                                style={{
                                    width: '15px',
                                    height: '15px'
                                }} />
                        </button>
                    </div>
                )}
            </>
        )
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};