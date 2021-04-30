import React, {useState} from "react";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPen} from "@fortawesome/free-solid-svg-icons";
import {newsApi} from "../../../../api/newsApi.js";
import EditNews from "../EditNews";

function News({newsContent, setSuccess, setError}) {
    const [show, setShow] = useState(true);
    const [news, setNews] = useState(newsContent);
    const [showEditNews, setShowEditNews] = useState(false);

    const id = news._id;

    async function handleEditNews() {
        setShowEditNews(true);
    }

    async function handleRemoveNews() {
        try {
            await newsApi.deleteNews(id);
            setShow(false);
            setSuccess('Notícia deletada com sucesso!');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            {show && <div className={'news-container'}>
                {showEditNews &&
                <EditNews
                    news={news}
                    setSuccess={setSuccess}
                    setShowEditNews={setShowEditNews}
                    setNews={setNews}
                />
                }
                <h1>{news.imgUrl}</h1>
                <h1>{news.title}</h1>
                <h1>{news.description}</h1>
                <h1>{news.category}</h1>
                <h1>{news.url}</h1>
                <div>
                    <a onClick={handleEditNews} className={'news-button'}>
                        <FontAwesomeIcon icon={faPen} />
                    </a>
                    <a onClick={handleRemoveNews} className={'news-button'}>
                        <FontAwesomeIcon icon={faTrash} />
                    </a>
                </div>
            </div>}
        </>
    );
}

export default News;
