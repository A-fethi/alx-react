import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    th: {
        borderBottom: 'solid 3px #ddd',
        paddingBottom: '5px',
    },
    tr: {
        ":nth-child(2)": {
            textAlign: 'left',
        },
    },
});


export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const rowStyle = {
        backgroundColor: '#f5f5f5ab',
    };

    const headerRowStyle = {
        backgroundColor: '#deb5b545',
    };

    if(isHeader) {
        if(textSecondCell === null) {
            return (
                <tr style={{rowStyle}} className={css(styles.tr)}>
                    <th colSpan="2" style={headerRowStyle} className={css(styles.th)}>
                        { textFirstCell }
                    </th>
                </tr>
            );
        } else {
            return (
                <tr style={rowStyle} className={css(styles.tr)}>
                    <th style={headerRowStyle} className={css(styles.th)}>{ textFirstCell }</th>
                    <th style={headerRowStyle} className={css(styles.th)}>{ textSecondCell }</th>
                </tr>
            );
        }
    } else {
        return (
            <tr style={rowStyle} className={css(styles.tr)}>
                <td>{ textFirstCell }</td>
                <td>{ textSecondCell }</td>
            </tr>
        );
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};