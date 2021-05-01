import React, {useEffect, useState} from "react";
import "./style.css";
import Container from "../../../../Components/Container";
import {newsApi} from "../../../../api/newsApi.js";
import Message from "../../../../Components/Message";
import News from "../News";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faFrown} from "@fortawesome/free-solid-svg-icons";
import AddNews from "../AddNews";

function AdminPage(props) {
    const [newsList, setNewsList] = useState([]);
    const [showAddNews, setShowAddNews] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState("");
    const [showEmpty, setShowEmpty] = useState(false);

    useEffect(() => {
        async function getNewsList() {
            await listNews();
            setShowEmpty(true);
        }
        getNewsList();
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

    function getContent() {
        if(newsList.length > 0) {
            return (
                <div className={'admin-newsList'}>
                    <div className={'admin-tableHeader'}>
                        <h2>Título</h2>
                        <h2>Descrição</h2>
                        <h2>Categoria</h2>
                        <h2>Url da Imagem</h2>
                        <h2>Url da Notícia</h2>
                        <h2></h2>
                    </div>
                    {newsList.map((news, index) =>
                        <News
                            newsContent={news}
                            setError={setError}
                            setSuccess={setSuccess}
                            listNews={listNews}
                            key={index}
                        />)
                    }
                </div>
            );
        } else if(showEmpty) {
            return (
                <div className={'admin-newsList admin-noNews'}>
                    <FontAwesomeIcon icon={faFrown} className={'admin-noNewsIcon'}/>
                    <h2>Nenhuma notícia cadastrada!</h2>
                </div>
            );
        } else return null;
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
                <h1 className={'admin-title'}>Gerenciar Notícias</h1>
                {getContent()}
            </div>
            <button className={'admin-addNewsButton'} onClick={handleAddNews}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </Container>
    );
}

export default AdminPage;
