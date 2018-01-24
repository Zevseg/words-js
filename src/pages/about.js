
import React from 'react';

class About extends React.Component {

    constructor() {
        super();
        document.title = "Об игре";
    }    
    
  render() {
    return (
      <div className="content">
        <h3>Об игре</h3>
        
    <div style={{paddingTop: '10px'}}></div>   
<p>    
Игра <b>"Составь слова"</b> предлагает игрокам известную головоломку, в которой нужно 
составлять разные слова из одного длинного слова. 
</p>
<p>
Соревнуйтесь с друзьями в количестве сложенных слов и использованных букв, и узнайте кто более смышлёный.
    </p>

<hr/>    

<p>
Всего в базе игры: <strong>94526 слов</strong>
</p>

<br/>

<strong>Источники слов:</strong>
<ol>
    <li>Ожегов С. И. Словарь русского языка. Ок. 65 000 слов / 16-е изд., — М.: 1984.</li>
    <li>Ефремова Т. Ф. Толковый словарь. — М.: Рус. яз., 1996.</li>
</ol>
      
        
      </div>
    );
  }
}

export default About;

