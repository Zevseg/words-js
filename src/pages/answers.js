
import React from 'react';
import {API_HOST} from '../config'

class Answers extends React.Component {

    constructor(props) {
        //super();
        super(props);
        this.state = {
            data: null,
            word: "no value"
        };
        
   
   //this.state={word: "no value"};   
   this.handleClick = this.handleClick.bind(this);
   this.updateInputValue = this.updateInputValue.bind(this);        
    }
    
handleClick(){
   console.log("trying to add picture url");
   console.log("value of input field : "+this.state.word);

  }

  updateInputValue(evt){
    //console.log("input field updated with "+evt.target.value);
    this.state={word: evt.target.value};   

  }    

    loadData() {
        const url = API_HOST + "/api/words/программа";
        fetch(url)
                .then(res => res.json())
                .then(
                        json => {
                            this.setState({data: json});
                        });
    }
    
//    onBtnClickHandler(e) {
//        e.preventDefault();
//        //let text = this.word.text.value;
//        console.log(e);
//    }

    render() {
        if (!this.state.data) {
            this.loadData();
        }

        if (!this.state.data) {
            return (
                    <div>Loading ...</div>
                    );
        } else if (this.state.data.status == 'success') {
            let finded_words;
            const words = this.state.data.data;
            for (let key in words) {
                const word = words[key];
                for (let key_word in word) {
                    //console.log(word[key_word]['vocab']);
                    finded_words += word[key_word]['vocab'] + ' ';
                }
            }
            
            return (
                    <div className="content">            
                        {this.getSearchForm()}
                        <h3>Все слова, которые можно составить из "{this.state.data.word}"</h3>
                        {finded_words}                
                                        
                    </div>
                    );



        }
    }
    

    
    getSearchForm() {
        return (
                <div className="content">
                                
                    <h4>Составление слов из букв и других слов</h4>
                                
                    <div className="well well-small">
                        <p>
                            <span>Введите слово или последовательность букв, из которых нужно составить слова</span>
                        </p>
                        <form className="form-inline" method="get" action="/answers">
                            <div className="form-group">
                                <input type="text" className="form-control input-lg" placeholder="" name="word" maxLength="20" 
                                onChange={this.updateInputValue}
                                />
                            </div>
                            <button className="btn btn-primary btn-lg" _t_ype="submit" 
                            onClick={this.handleClick}>Искать варианты</button>
                        </form>
                    </div>        
                                
                </div>
                );    
    }
}

export default Answers;
