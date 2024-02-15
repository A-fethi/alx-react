import React from "react";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    "App-body": {
        margin: '25px',
    },

    inputWrapper: {
        marginBottom: '10px',
    },

    button: {
        marginLeft: '10px',
    },
});

function Login() {
    return (
        <div className={css(styles["App-body"])}>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.inputWrapper)}>
                <label htmlFor="email" style={{ marginLeft: '10px' }}>Email:</label>
                <input type="email" id="email" style={{ marginLeft: '40px' }} hidden/>
            </div>
            <div className={css(styles.inputWrapper)}>
                <label htmlFor="password" style={{ marginLeft: '10px' }}>Password:</label>
                <input type="password" id="password" style={{ marginLeft: '10px' }} hidden />
            </div>
            <div>
                <button className={css(styles.button)}>OK</button>
            </div>
        </div>
    )
}

export default Login;