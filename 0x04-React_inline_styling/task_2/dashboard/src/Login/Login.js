import React from "react";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    "App-body": {
        margin: '25px',
    },

    button: {
        marginLeft: '10px',
    },
});

function Login() {
    return (
    <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" style={{ marginLeft: '10px' }} />
        <label htmlFor="password" style={{ marginLeft: '10px' }}>Password:</label>
        <input type="password" id="password" style={{ marginLeft: '10px' }} />
        <button className={css(styles.button)}>OK</button>
    </div>
    )
}

export default Login;