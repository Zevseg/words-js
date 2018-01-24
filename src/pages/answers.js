

import React from 'react';
import {Link} from 'react-router-dom';
import {API_HOST} from '../config';

class Answers extends React.Component {

    constructor(props) {
        super(props);
        document.title = "Составление слов";
        this.state = {
            value: '',
            data: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let word = this.state.value;
        if (word.length >= 3 && word.length <= 10) {
            this.loadData(word);
        } else {
            this.setState({data: []});
        }
    }
 
    render() {
        let title = <h3>Поиск слов</h3>;
        let finded_words = [];
        let links = '';
        if (this.state.data != null) {
            title = <h3>Все слова, которые можно составить из "{this.state.data.word}"</h3>
            if (this.state.data.status === 'success') {
                finded_words = this.getFindedWords();
                if (finded_words.length) {
                    links = finded_words.map((item, index) => {
                        return this.WordsLinks({words: item, index: index});
                    });
                } else {
                    links = <div className="alert alert-danger">Комбинации слов не найдены</div>
                }
            } else {
                links = <div className="alert alert-danger">Ошибка в полученных данных или некорректно соcтавленный запрос к АПИ. <br/>Введите слово на кириллице длиной от 3-х до 10-ти символов/ </div>
            }
        }

        return (
                <div className="content">  
                    {title}
                    {this.getSearchForm()}
                    {links}                
                </div>
                );
    }

    WordsLinks(props) {
        const words_links = props.words.map((item, index) => {
            return this.OneLink({word: item.word, index: index});
        });
        return (
                <div key={props.index}>  
                    {words_links}
                </div>
                );
    }

    OneLink(props) {
        return <Link key={props.index} className="word" to={`/description/${props.word}`}>{props.word}</Link>;
    }

    getFindedWords() {
        let words = [];
        for (let key in this.state.data.data) {
            const word = this.state.data.data[key];
            let words_key = [];
            for (let key_word in word) {
                words_key.push({word: word[key_word].vocab});
            }
            words.push(words_key);
        }

        return words;
    }

    getSearchForm() {
        return (
                <div>
                    <input
                        type="text"
                        placeholder=""
                        onChange={this.handleChange}
                        />
                    <input type="button" value="Искать варианты" className="find" onClick={this.handleSubmit}/>                
                </div>
                );
    }

    loadData(word) {
        const url = API_HOST + "/api/words/" + word;
        fetch(url)
                .then(res => res.json())
                .then(
                        json => {
                            this.setState({data: json});
                        });
    }
}


export default Answers;
    