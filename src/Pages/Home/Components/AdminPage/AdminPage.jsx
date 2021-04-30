import React, {useEffect, useState} from "react";
import "./style.css";
import Container from "../../../../Components/Container";
import {newsApi} from "../../../../api/newsApi.js";
import Message from "../../../../Components/Message";
import News from "../News";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AddNews from "../AddNews";

function AdminPage(props) {
    const [newsList, setNewsList] = useState([]);
    const [showAddNews, setShowAddNews] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState("");

    useEffect(() => {
        listNews();
    }, []);

    async function listNews() {
        try {
            const apiNewsList = await newsApi.getNews();
            setNewsList(apiNewsList);
        } catch (e) {
            setError(e.message);
        }
    }

    function handleAddNews() {
        setShowAddNews(true);
    }

    return (
        <Container>
            <Message message={error} setMessage={setError} type={'error'} />
            <Message message={success} setMessage={setSuccess} type={'success'} />
            {showAddNews &&
                <AddNews
                    setShowAddNews={setShowAddNews}
                    setNewsList={setNewsList}
                    newsList={newsList}
                    setSuccess={setSuccess}
                />
            }
            <div className={'admin-newsListContainer'}>
                <h1 className={'admin-title'}>Notícias</h1>
                <div className={'admin-newsList'}>
                    {newsList.map((news, index) =>
                        <News
                            newsContent={news}
                            setError={setError}
                            setSuccess={setSuccess}
                            key={index}
                        />)
                    }
                </div>
            </div>
            <button className={'admin-addNewsButton'} onClick={handleAddNews}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </Container>
    );
}

export default AdminPage;
