import React, {useState} from "react";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {newsApi} from "../../../../api/newsApi.js";
import EditNews from "../EditNews";

function News({newsContent: news, setSuccess, setError, listNews}) {
    const [showEditNews, setShowEditNews] = useState(false);

    const id = news._id;

    async function handleEditNews() {
        setShowEditNews(true);
    }

    async function handleRemoveNews() {
        try {
            await newsApi.deleteNews(id);
            listNews();
            setSuccess('Notícia deletada com sucesso!');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            {showEditNews &&
            <EditNews
                news={news}
                setSuccess={setSuccess}
                setShowEditNews={setShowEditNews}
                listNews={listNews}
            />
            }
            <div className={'news-container'}>
                <h1>{news.title}</h1>
                <h1>{news.description}</h1>
                <h1>{news.category}</h1>
                <h1>{news.imgUrl}</h1>
                <h1>{news.url}</h1>
                <div>
                    <a onClick={handleEditNews} className={'news-pen'}>
                        <FontAwesomeIcon icon={faPen} />
                    </a>
                    <a onClick={handleRemoveNews} className={'news-trash'}>
                        <FontAwesomeIcon icon={faTrash} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default News;
