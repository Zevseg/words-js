
import React from 'react';

class Rules extends React.Component {

    constructor() {
        super();
        document.title = "Правила игры";
    }     
    
  render() {
    return (
      <div className="content">
        <h3>Правила игры</h3>
        

    <div style={{paddingTop: '10px'}}></div>        
    <strong>Описание игры «Составь слова»:</strong>
    <div style={{paddingTop: '15px'}}></div>        
<ol>
    <li>Необходимо внимательно посмотреть на предложенное слово.</li>
    <li>Из имеющегося длинного слова требуется составить как можно большее количество новых слов.</li>
    <li>Используйте разные буквы для того чтобы получилось новые слова.</li>
    <li>Будьте внимательными и составляйте только те слова, которые имеются в русском языке.</li>
    <li>Необходимо составить как можно большее количество слов за отведенное время.</li>
    </ol>
      
        
      </div>
    );
  }
}

export default Rules;

