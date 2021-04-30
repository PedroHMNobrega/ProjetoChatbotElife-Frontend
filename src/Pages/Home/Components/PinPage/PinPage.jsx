import React, {useState} from "react";
import "./style.css";
import Container from "../../../../Components/Container";
import InputField from "../../../../Components/InputField";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import validarPin from "../../../../Services/validarPin.js";
import Message from "../../../../Components/Message";

function PinPage({setShowPinPage}) {
    const [pin, setPin] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if(validarPin(pin)) {
            setShowPinPage(false);
        } else {
            setMessage('Pin Inválido. Tente Novamente!');
            setPin('');
        }
    }

    return (
        <Container className={'pin'}>
            <Message type={'error'} setMessage={setMessage} message={message} />
            <h1 className={'pin-title'}>Painel de Gerência</h1>
            <form action="" className={'pin-form'} onSubmit={handleSubmit}>
                <InputField type={'password'} value={pin} setValue={setPin} placeholder={'PIN'} icon={faLock}/>
                <input type="submit" className={'pin-button'} value={'Entrar'}/>
            </form>
        </Container>
    );
}

export default PinPage;
