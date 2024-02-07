import React, { Component } from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

export default class NotificationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { type, value, html, markAsRead, id } = this.props;
        return (
            <li
                data-notification-type={type}
                dangerouslySetInnerHTML={html && { __html: html }}
                onClick={() => markAsRead(id)}
            >
                {value}
            </li>
        );
    }
}

NotificationItem.proptypes = {
    __html: PropTypes.shape({
        html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
    type: "default",
};