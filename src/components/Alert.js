import React from 'react'
import './css/Alert.css';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`${props.mode}`}>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show custom_alert`} role="alert">
                <p className="">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </p>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Alert
