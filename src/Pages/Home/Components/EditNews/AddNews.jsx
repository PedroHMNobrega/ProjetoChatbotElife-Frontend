import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Message from "../../../../Components/Message";
import InputFieldWithLabel from "../../../../Components/InputFieldWithLabel";
import {newsApi} from "../../../../api/newsApi.js";

function EditNews({news, setShowEditNews, listNews, setSuccess}) {
    const [imgUrl, setImageUrl] = useState(news.imgUrl);
    const [title, setTitle] = useState(news.title);
    const [description, setDescription] = useState(news.description);
    const [category, setCategory] = useState(news.category);
    const [url, setUrl] = useState(news.url);
    const [error, setError] = useState("");

    async function handleEditNews(event) {
        event.preventDefault();
        try {
            const newNews = {imgUrl, title, description, category, url}
            await newsApi.updateNews(news._id, newNews);

            newNews._id = news._id;
            listNews();
            setSuccess("Notícia editada com sucesso !");
            setShowEditNews(false);
        } catch (e) {
            setError("Erro ao editar notícia!");
        }
    }

    function handleClose() {
        setShowEditNews(false);
    }

    return (
        <div className={'addNewsMask'}>
            <Message message={error} setMessage={setError} type={'error'} />
            <div className={'addNews'}>
                <a onClick={handleClose} className={'addNews-close'}>
                    <FontAwesomeIcon icon={faTimes}/>
                </a>

                <h2 className={'addNews-title'}>Editar Notícia</h2>

                <form onSubmit={handleEditNews}>
                    <InputFieldWithLabel label={'Título:'} value={title} setValue={setTitle} />
                    <InputFieldWithLabel label={'Descrição:'} value={description} setValue={setDescription} type={'textarea'}/>
                    <InputFieldWithLabel label={'Categoria:'} value={category} setValue={setCategory} type={'select'}/>
                    <InputFieldWithLabel label={'Url da Imagem:'} value={imgUrl} setValue={setImageUrl} />
                    <InputFieldWithLabel label={'Url da Notícia:'} value={url} setValue={setUrl} />
                    <input type="submit" value={'Editar'} className={'addNews-button'} />
                </form>
            </div>
        </div>
    );
}

export default EditNews;
