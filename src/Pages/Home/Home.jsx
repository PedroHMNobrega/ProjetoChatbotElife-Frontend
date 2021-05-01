import React, {useState} from "react";
import PinPage from "./Components/PinPage";
import AdminPage from "./Components/AdminPage";

function Home(props) {
    const [showPinPage, setShowPinPage] = useState(true);

    function showHome() {
        if(showPinPage) {
            return <PinPage setShowPinPage={setShowPinPage}/>
        } else {
            return <AdminPage />
        }
    }

    return showHome();
}

export default Home;
