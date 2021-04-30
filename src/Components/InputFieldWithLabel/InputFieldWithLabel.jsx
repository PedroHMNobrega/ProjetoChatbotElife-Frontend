import React from "react";
import "./style.css";
import {newsCategories} from "../../config/constants.js";

function InputFieldWithLabel({label, value, setValue, type}) {
    function getInput() {
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        className={'inputFieldWithLabel-input'}
                        rows="5"
                        required={true}>
                    </textarea>
                );
            case 'select':
                return (
                    <select
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        className={'inputFieldWithLabel-input'}
                        required={true}>
                        {newsCategories.map((category, index) => {
                            return <option value={category.name} key={index}>{category.label}</option>
                        })}
                    </select>
                );
            default:
                return (
                    <input
                        type="text"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        className={'inputFieldWithLabel-input'}
                        required={true}
                    />
                );
        }
    }

    return (
        <div className={'inputFieldWithLabel-inputContainer'}>
            <label className={'inputFieldWithLabel-label'}>{label}</label>
            {getInput()}
        </div>
    );
}

export default InputFieldWithLabel;
