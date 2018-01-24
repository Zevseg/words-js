
import React from 'react';
import {API_HOST} from '../config';

class Description extends React.Component {
    
    constructor(props) {
        super(props);
        document.title = "Значения слова";
        this.state = {
            data: null,
        };
    }    
    
    render() {
        const word = this.props.match.params.word;
        let result = '';
        
        if (this.state.data == null && word.length) {
            this.loadData(word);
        }
        if (this.state.data != null) {
            if (this.state.data.status === 'success') {
                let data = this.state.data.data;
                if (data.length) {
                    result = data.map((item, index) => {
                        return this.getDescription({
                            word: word, 
                            item: item, 
                            index: index
                        });
                    });
                } else {
                    result = <div className="alert alert-danger">Значение слова не найдено</div>
                }
            } else {
                result = <div className="alert alert-danger">Ошибка в полученных данных или некорректно соcтавленный запрос к АПИ</div>
            }
        }

        return (
                <div className="content">
                    <h2>Значения слова "{word}"</h2>
                    {result}
                </div>
                );
    }
    
    getDescription(props) {
        let word = <span className="label label-default">{props.word}</span>;
        let def = <span> - {props.item.def}</span>;
        let baseform = '';
        let phongl = '';
        let grclassgl = '';
        let stylgl = '';
        let anti = '';
        let leglexam = '';
        
        if (props.item.baseform.length) {
            baseform = <span className="descr"><br/>{props.item.baseform}</span>;
        }
        if (props.item.phongl.length) {
            phongl = <span className="descr"><br/>{props.item.phongl}</span>;
        }
        if (props.item.grclassgl.length) {
            grclassgl = <span className="descr"><br/>{props.item.grclassgl}</span>;
        }
        if (props.item.stylgl.length) {
            stylgl = <span className="descr"><br/>{props.item.stylgl}</span>;
        }
        if (props.item.anti.length) {
            anti = <span className="descr"><br/>{props.item.anti}</span>;
        }
        if (props.item.leglexam.length) {
            leglexam = <i><br/>{props.item.leglexam}</i>;
        }

        return (
                <blockquote key={props.index}>
                <p>
                    {word}
                    {def}
                    {baseform}
                    {phongl}
                    {grclassgl}
                    {stylgl}
                    {anti}
                    {leglexam}
                </p>
                </blockquote>
                );
    }

    loadData(word) {
        const url = API_HOST + "/api/description/" + word;
        fetch(url)
                .then(res => res.json())
                .then(
                        json => {
                            this.setState({data: json});
                        });
    }
}

export default Description;

