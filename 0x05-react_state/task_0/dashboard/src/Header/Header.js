import logo from '../assets/Holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    "App-header": {
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        color: '#e01d3f',
        borderBottom: '3px solid #e01d3f',
    },

    img: {
        width: '200px',
    },
});

function Header() {
    return (
    <div className={css(styles['App-header'])}>
        <img src={logo} alt="logo" className={css(styles.img)}/>
        <h1>School dashboard</h1>
    </div>
    )
}

export default Header;