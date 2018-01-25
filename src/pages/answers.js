

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
            word: '',
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
            this.setState({
                word: word,
            });
        } else {
            this.setState({
                data: [],
                word: word,
            });
        }
    }
    
    render() {
        let title = <h3>Поиск слов</h3>;
        let finded_words = [];
        let links = '';
        let total_info = '';
        if (this.state.data != null) {
            title = <h3>Все слова, которые можно составить из "{this.state.word}"</h3>
            if (this.state.data.status === 'success') {
                finded_words = this.getFindedWords();
                if (finded_words.length) {
                    total_info = this.WordsInformation({words: finded_words});
                    links = finded_words.map((item, index) => {
                        return this.WordsLinks({words: item, index: index});
                    });
                } else {
                    links = <div className="alert alert-danger">Комбинации слов не найдены</div>
                }
            } else {
                links = <div className="alert alert-danger">Ошибка в полученных данных или некорректно соcтавленный запрос к АПИ. <br/>Введите слово на кириллице длиной от 3-х до 10-ти символов. </div>
            }
        }

        return (
                <div className="content">  
                    {title}
                    {this.getSearchForm()}
                    <div className="loading"></div>
                    {total_info}
                    {links}                
                </div>
                );
    }

    WordsInformation(props) {
        let total = 0;
        let letters = '';
        let word = '';
        for (let key in props.words) {
            for (let word_key in props.words[key]) {
                word = props.words[key][word_key]['word'];
                total++;
            }
            letters += word.length + ',';
        }
        letters = letters.substring(0, letters.length - 1);
        
        let name_words = this.getNameWords(total);

        return <p><i>Из "{this.state.word}" можно составить {total} {name_words} из {letters} букв</i>.</p>;
    }

    WordsLinks(props) {
        let count_words = 0;
        let curr_word = '';
        const words_links = props.words.map((item, index) => {
            count_words++;
            curr_word = item.word;
            
            return this.OneLink({word: item.word, index: index});
        });
        
        let name_words = this.getNameWords(count_words);
        
        return (
                <div key={props.index}>  
                    <p>Слова из {curr_word.length} букв, составленные из комбинации "{this.state.word}"
                    ({count_words} {name_words}):</p>
                    <ul className="list-inline">
                        {words_links}
                    </ul>        
                </div>
                );
    }

    OneLink(props) {
        return <li key={props.index}><Link target="_blank" to={`/description/${props.word}`}>{props.word}</Link></li>;
    }
    
    getNameWords(count_words = 0) {
        let name_words = 'слов';
        
        if ([1,21,31,41,51,61,71,81,91].indexOf(count_words) !== -1) { 
            name_words = 'слово';
        }
        if ([22,23,24,32,33,34,42,43,44,52,53,54,62,63,64,72,73,74,82,83,84,91,92,93,94].indexOf(count_words) !== -1) { 
            name_words = 'слова'; 
        }
        
        return name_words;
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
                <div className="well well-small">
                    <p>
                        <span>Введите слово или последовательность букв, из которых нужно составить слова</span>
                    </p>                
                    <div className="form-inline">
                        <div className="form-group form-input">
                            <input
                                type="text"
                                className="form-control input-lg word"
                                placeholder=""
                                onChange={this.handleChange}
                                />
                        </div> 
                        <input type="button" value="Искать варианты" className="btn btn-primary btn-lg" onClick={this.handleSubmit}/>                
                    </div>
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
