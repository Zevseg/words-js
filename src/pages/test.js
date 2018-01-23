

import React from 'react';
import {API_HOST} from '../config';

class Answers extends React.Component {

    constructor() {
        super();
        
        this.state = {
            data: null,
        };        
        
        this.handleClick = this.handleClick.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    handleClick() {
        console.log(this.state.inputfield);
        //this.state.search = 1;
        //console.log(this.state);
        //this.loadData();
    }

    updateInputValue(evt) {
        this.state = {inputfield: evt.target.value};
    }

    render() {
        let finded_words = '';
        
        console.log(this.state);
        if (!this.state.data) {
            this.loadData();
        } else if (this.state.data && this.state.data.status == 'success') {
            finded_words += '<h3>Все слова, которые можно составить из ' + this.state.data.word + '</h3>';
            const words = this.state.data.data;
            for (let key in words) {
                const word = words[key];
                for (let key_word in word) {
                    finded_words += word[key_word]['vocab'] + ' ';
                }
            }
        }
        
        return (
                    <div className="content">            
                        {this.getSearchForm()}
                        {finded_words}                
                    </div>
                    );        
    }
    
    getSearchForm() {
        return (
                <div>
            <input type="text" className="wordFind" onChange={this.updateInputValue} />
            <input type="button" value="Искать варианты" className="find" onClick={this.handleClick}/>                
                    </div>
        );
    }
    
    loadData() {
        console.log(this.state.search);
        if (this.state.search) {
        const url = API_HOST + "/api/words/программа";
        fetch(url)
                .then(res => res.json())
                .then(
                        json => {
                            this.setState({data: json});
                        });
                    }
    }
}

export default Answers;
    