import React, {useState} from "react";
import "./style.css";
import PinPage from "./Components/PinPage";

function Home(props) {
    const [showPinPage, setShowPinPage] = useState(true);

    function showHome() {
        if(showPinPage) {
            return <PinPage setShowPinPage={setShowPinPage}/>
        } else {
            return (
                <h2>Home</h2>
            );
        }
    }

    return showHome();
}

export default Home;
