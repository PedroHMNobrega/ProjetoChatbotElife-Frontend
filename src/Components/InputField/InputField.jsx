import React from "react";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function InputField({type, placeholder, value, setValue, icon}) {
    return (
        <div className={'inputField-container'}>
            <FontAwesomeIcon icon={icon} className={'inputField-icon'} />
            <input
                className={'inputField'}
                type={type}
                placeholder={placeholder}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                value={value}
                required={true}
            />
        </div>
    );
}

export default InputField;
