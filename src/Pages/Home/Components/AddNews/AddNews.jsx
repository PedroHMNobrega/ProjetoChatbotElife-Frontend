import React, {useState} from "react";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Message from "../../../../Components/Message";
import InputFieldWithLabel from "../../../../Components/InputFieldWithLabel";
import {newsCategories} from "../../../../config/constants.js";
import {newsApi} from "../../../../api/newsApi.js";

function AddNews({setShowAddNews, setNewsList, newsList, setSuccess}) {
    const [imgUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(newsCategories[0].name);
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    async function handleAddNews(event) {
        event.preventDefault();
        try {
            const news = await newsApi.addNews({
                imgUrl,
                title,
                description,
                category,
                url
            });
            setNewsList([news, ...newsList]);
            setSuccess("Notícia adicionada com sucesso !");
            setShowAddNews(false);
        } catch (e) {
            setError("Erro ao adicionar notícia!");
        }
    }

    function handleClose() {
        setShowAddNews(false);
    }

    return (
        <div className={'addNewsMask'}>
            <Message message={error} setMessage={setError} type={'error'} />
            <div className={'addNews'}>
                <a onClick={handleClose} className={'addNews-close'}>
                    <FontAwesomeIcon icon={faTimes}/>
                </a>

                <h2 className={'addNews-title'}>Adicionar Notícia</h2>

                <form onSubmit={handleAddNews}>
                    <InputFieldWithLabel label={'Título:'} value={title} setValue={setTitle} />
                    <InputFieldWithLabel label={'Descrição:'} value={description} setValue={setDescription} type={'textarea'}/>
                    <InputFieldWithLabel label={'Categoria:'} value={category} setValue={setCategory} type={'select'}/>
                    <InputFieldWithLabel label={'Url da Imagem:'} value={imgUrl} setValue={setImageUrl} />
                    <InputFieldWithLabel label={'Url da Notícia:'} value={url} setValue={setUrl} />
                    <input type="submit" value={'Adicionar'} className={'addNews-button'} />
                </form>
            </div>
        </div>
    );
}

export default AddNews;
