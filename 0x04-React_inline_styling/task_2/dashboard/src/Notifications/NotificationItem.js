import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
});

export default class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { type, value, html, markAsRead, id } = this.props;
        return (
            <li
                className={type === 'urgent' ? css(styles.urgent) : css(styles.default)}
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